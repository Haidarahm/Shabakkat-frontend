import type { NextApiRequest, NextApiResponse } from "next";

interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type ContactResponse = { ok: true } | { ok: false; error: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ContactResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body as Partial<ContactPayload>;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Name, email, and message are required" });
  }

  // TODO: wire up to email/CRM provider once one is chosen — for now, log the inquiry.
  console.log("Contact inquiry received:", req.body);

  return res.status(200).json({ ok: true });
}
