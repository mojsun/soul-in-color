"use client";

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="w-full border-b border-brand/40 bg-brand text-white sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="block"
            style={{
              width: 240,
              height: 80,
              backgroundColor: "var(--color-accent)",
              WebkitMaskImage: "url(/images/soulin_color2.png)",
              maskImage: "url(/images/soulin_color2.png)",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
            }}
          />
          <span className="sr-only">{siteConfig.companyName}</span>
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