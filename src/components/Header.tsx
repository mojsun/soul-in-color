"use client";

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="w-full border-b border-accent/60 bg-accent text-foreground sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          {siteConfig.companyName}
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:underline underline-offset-4 hover:opacity-90">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 hover:opacity-90">About</Link>
          <a
            href={siteConfig.eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-brand text-sm px-4 py-2"
          >
            {siteConfig.event.ctaText}
          </a>
        </nav>
      </div>
    </header>
  );
} 