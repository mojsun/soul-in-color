"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    try {
      setSubmitting(true);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json();
      if (json?.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] rounded-full bg-brand text-white shadow-lg px-4 py-3"
      >
        {open ? "Close" : "Let's Chat!"}
      </button>
      {open && (
        <div className="fixed bottom-20 right-5 z-[60] w-[320px] rounded-lg border border-brand/30 bg-white shadow-2xl overflow-hidden">
          <div className="bg-brand text-white px-3 py-2 font-semibold">Chat with us</div>
          <div className="p-3">
            {submitted ? (
              <div className="rounded-md border border-green-300 bg-green-50 text-green-800 px-3 py-2 text-sm">
                Form submitted correctly. We will be in touch with you soon.
              </div>
            ) : (
              <form className="space-y-2" onSubmit={handleSubmit}>
                <input className="w-full border border-gray-300 rounded-md px-2 py-2" name="name" placeholder="Your name" />
                <input className="w-full border border-gray-300 rounded-md px-2 py-2" name="email" type="email" placeholder="Email" required />
                <textarea className="w-full border border-gray-300 rounded-md px-2 py-2 min-h-24" name="message" placeholder="Message" required />
                <div className="flex items-center justify-end gap-2">
                  <button type="button" className="button-outline-brand px-3 py-1.5" onClick={() => setOpen(false)}>Close</button>
                  <button type="submit" disabled={submitting} className="button-brand px-3 py-1.5">{submitting ? "Sending..." : "Send"}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}


