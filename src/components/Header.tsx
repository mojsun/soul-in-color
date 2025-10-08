"use client";

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="w-full bg-transparent text-black fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#8F79A1]">
            {siteConfig.companyName}
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="hover:underline underline-offset-4 hover:opacity-90 text-black text-xs sm:text-sm">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 hover:opacity-90 text-black text-xs sm:text-sm">About</Link>
          <Link href="/events" className="hover:underline underline-offset-4 hover:opacity-90 text-black text-xs sm:text-sm">Events</Link>
          <a
            href={siteConfig.eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-brand px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
          >
            Tickets
          </a>
        </nav>
      </div>
    </header>
  );
} 