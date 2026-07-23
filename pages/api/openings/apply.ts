import type { NextApiRequest, NextApiResponse } from "next";

type ApplyResponse = { ok: true; id?: number } | { ok: false; error: string };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, { count: number; windowStart: number }>();

const MAX_BODY_BYTES = 6 * 1024 * 1024; // slightly above Laravel's 5 MB CV limit

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

function isTrustedOrigin(req: NextApiRequest): boolean {
  const origin = req.headers.origin;
  const referer = req.headers.referer;
  const host = req.headers.host;
  if (!host) return true;
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
  return process.env.NODE_ENV !== "production";
}

async function readRawBody(req: NextApiRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  let total = 0;
  for await (const chunk of req) {
    const buf = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
    total += buf.length;
    if (total > MAX_BODY_BYTES) {
      throw new Error("PAYLOAD_TOO_LARGE");
    }
    chunks.push(buf);
  }
  return Buffer.concat(chunks);
}

const BACKEND_API_URL = process.env.BACKEND_API_URL ?? "http://127.0.0.1:8000/api";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApplyResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!isTrustedOrigin(req)) {
    return res.status(403).json({ ok: false, error: "Request rejected" });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests — please try again later" });
  }

  const contentType = req.headers["content-type"];
  if (!contentType?.includes("multipart/form-data")) {
    return res.status(400).json({ ok: false, error: "Expected multipart form data" });
  }

  let body: Buffer;
  try {
    body = await readRawBody(req);
  } catch (err) {
    if (err instanceof Error && err.message === "PAYLOAD_TOO_LARGE") {
      return res.status(413).json({ ok: false, error: "File is too large — maximum CV size is 5 MB" });
    }
    return res.status(400).json({ ok: false, error: "Unable to read upload" });
  }

  try {
    const backendRes = await fetch(`${BACKEND_API_URL}/openings/apply`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": contentType,
      },
      body: new Uint8Array(body),
      signal: AbortSignal.timeout(30000),
    });

    const data = (await backendRes.json().catch(() => null)) as ApplyResponse | null;

    if (!backendRes.ok) {
      return res.status(backendRes.status >= 400 && backendRes.status < 600 ? backendRes.status : 502).json({
        ok: false,
        error: data && "error" in data && data.error ? data.error : "Unable to submit your application right now",
      });
    }

    return res.status(200).json({ ok: true, ...(data && "id" in data && data.id ? { id: data.id } : {}) });
  } catch {
    return res.status(502).json({ ok: false, error: "Unable to reach the server — please try again later" });
  }
}
