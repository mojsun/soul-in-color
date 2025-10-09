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

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "chat-submissions.json");
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch {}

    let existing: ChatPayload[] = [];
    try {
      const raw = fs.readFileSync(filePath, "utf8");
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {}

    existing.push(payload);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
}


