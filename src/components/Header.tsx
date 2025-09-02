"use client";

import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="w-full border-b border-brand/40 bg-brand text-white sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Mobile logo (smaller) */}
          <span
            aria-hidden
            className="block sm:hidden"
            style={{
              width: 140,
              height: 46,
              backgroundColor: "#ffffff",
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
          {/* Desktop/tablet logo (larger) */}
          <span
            aria-hidden
            className="hidden sm:block"
            style={{
              width: 240,
              height: 80,
              backgroundColor: "#ffffff",
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
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="hover:underline underline-offset-4 hover:opacity-90 text-[#8F79A1] text-xs sm:text-sm">Home</Link>
          <Link href="/about" className="hover:underline underline-offset-4 hover:opacity-90 text-[#8F79A1] text-xs sm:text-sm">About</Link>
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