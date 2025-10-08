"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
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
          <form className="p-3 space-y-2" action="https://formspree.io/f/xqakzqed" method="POST">
            <input className="w-full border border-gray-300 rounded-md px-2 py-2" name="name" placeholder="Your name" />
            <input className="w-full border border-gray-300 rounded-md px-2 py-2" name="email" type="email" placeholder="Email" required />
            <textarea className="w-full border border-gray-300 rounded-md px-2 py-2 min-h-24" name="message" placeholder="Message" required />
            <div className="flex items-center justify-end gap-2">
              <button type="button" className="button-outline-brand px-3 py-1.5" onClick={() => setOpen(false)}>Close</button>
              <button type="submit" className="button-brand px-3 py-1.5">Send</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}


