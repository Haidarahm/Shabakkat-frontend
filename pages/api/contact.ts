import type { NextApiRequest, NextApiResponse } from "next";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string; // honeypot — real users never see or fill this field
}

type ContactResponse = { ok: true } | { ok: false; error: string };

const FIELD_LIMITS = {
  name: 100,
  company: 150,
  email: 254,
  phone: 30,
  service: 100,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
// In-memory limiter — resets on redeploy/restart and isn't shared across serverless
// instances. Good enough as a first line of defense; swap for a shared store (e.g.
// Redis/Upstash) if this gets deployed to a multi-instance or serverless platform.
const requestLog = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = requestLog.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    requestLog.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Strip control characters (incl. newlines used for header/log injection) and cap length.
  return value.replace(/[\x00-\x1F\x7F]/g, " ").trim().slice(0, maxLength);
}

function isTrustedOrigin(req: NextApiRequest): boolean {
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  const host = req.headers.host;
  if (!host) return true; // can't verify — don't block on missing host info
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }
  if (referer) {
    try {
      return new URL(referer).host === host;
    } catch {
      return false;
    }
  }
  // Neither header present — only enforce in production, where a browser
  // form submission always sends at least one of these.
  return process.env.NODE_ENV !== "production";
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!isTrustedOrigin(req)) {
    return res.status(403).json({ ok: false, error: "Request rejected" });
  }

  const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests — please try again later" });
  }

  const body = req.body as Partial<ContactPayload>;

  // Honeypot: bots tend to fill every field. Pretend success without processing.
  if (sanitize(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = sanitize(body.name, FIELD_LIMITS.name);
  const company = sanitize(body.company, FIELD_LIMITS.company);
  const email = sanitize(body.email, FIELD_LIMITS.email);
  const phone = sanitize(body.phone, FIELD_LIMITS.phone);
  const service = sanitize(body.service, FIELD_LIMITS.service);
  const message = sanitize(body.message, FIELD_LIMITS.message);

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Name, email, and message are required" });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address" });
  }

  // TODO: wire up to a real email/CRM provider once one is chosen — for now, log the inquiry.
  console.log("Contact inquiry received:", { name, company, email, phone, service, message });

  return res.status(200).json({ ok: true });
}
