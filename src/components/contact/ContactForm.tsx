"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const firstName = String(fd.get("firstName") || "");
    const lastName = String(fd.get("lastName") || "");
    const phone = String(fd.get("phone") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");

    // Build payload
    const name = [firstName, lastName].filter(Boolean).join(" ");

    try {
      setSubmitting(true);
      setErrorMsg(null);

      // Always post directly to Formspree on this page for reliability
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xqakzqed";
      const url = `https://formspree.io/f/${formspreeId}`;
      const body = new URLSearchParams();
      body.append("name", name);
      body.append("phone", phone);
      body.append("email", email);
      body.append("message", message);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        cache: "no-store",
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        let detail: string | null = null;
        try {
          const j: unknown = await res.json();
          const maybe = j as { errors?: Array<{ message?: string }> };
          detail = maybe.errors?.[0]?.message || null;
        } catch {}
        setErrorMsg(detail || "Something went wrong. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {submitted ? (
        <div className="rounded-md border border-green-300 bg-green-50 text-green-800 px-3 py-2 text-sm">
          Thank you for your form submission. We will be in touch with you soon.
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="First Name" name="firstName" required />
            <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Last Name" name="lastName" required />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Phone" name="phone" />
            <input className="border border-gray-300 rounded-md px-3 py-2" placeholder="Email" type="email" name="email" required />
          </div>
          <textarea className="border border-gray-300 rounded-md px-3 py-2 w-full min-h-40" placeholder="Message" name="message" required />
          {errorMsg && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">{errorMsg}</div>
          )}
          <button className="button-brand" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}


