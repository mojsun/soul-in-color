import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type ChatPayload = {
  name?: string;
  email: string;
  message: string;
  createdAt?: string;
};

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<ChatPayload>;
    if (!data || !data.email || !data.message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const payload: ChatPayload = {
      name: (data.name || "").toString().slice(0, 200),
      email: data.email.toString().slice(0, 320),
      message: data.message.toString().slice(0, 5000),
      createdAt: new Date().toISOString(),
    };

    // Save locally only during development (avoid serverless write in production)
    if (process.env.NODE_ENV !== "production") {
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "chat-submissions.json");
      try {
        fs.mkdirSync(dataDir, { recursive: true });
        let existing: ChatPayload[] = [];
        try {
          const raw = fs.readFileSync(filePath, "utf8");
          existing = JSON.parse(raw);
          if (!Array.isArray(existing)) existing = [];
        } catch {}
        existing.push(payload);
        fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf8");
      } catch {}
    }

    // Forward to Formspree so production deployments succeed
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mgvnnwvr";
    const url = `https://formspree.io/f/${formId}`;
    const body = new URLSearchParams();
    body.append("name", payload.name || "");
    body.append("email", payload.email);
    body.append("message", payload.message);

    const rsp = await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
      // no-cache avoids 403s due to cached preflight anomalies
      cache: "no-store",
    });

    if (!rsp.ok) {
      let err: unknown;
      try {
        err = await rsp.json();
      } catch {}
      return NextResponse.json({ ok: false, error: err || "Form submit failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (_e) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}


