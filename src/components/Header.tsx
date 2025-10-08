"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      const headerApproxHeight = 80; // px, approximate header height
      const threshold = Math.max(0, window.innerHeight * 0.7 - headerApproxHeight);
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const headerClassName = `w-full fixed top-0 left-0 right-0 z-50 ${
    isHome
      ? scrolled
        ? "bg-brand text-white border-b border-brand/40"
        : "bg-transparent text-black"
      : "bg-brand text-white border-b border-brand/40"
  }`;
  const brandTextClass = isHome && !scrolled ? "text-white" : "text-[#8F79A1]";
  return (
    <header className={headerClassName}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className={`text-xl sm:text-2xl font-bold tracking-tight ${brandTextClass}`}>
            {siteConfig.companyName}
          </span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2 sm:gap-4">
          <Link href="/" className={`hover:underline underline-offset-4 hover:opacity-90 hover:text-white hover:font-bold text-xs sm:text-sm ${isHome && !scrolled ? "text-black" : "text-white"}`}>Home</Link>
          <Link href="/about" className={`hover:underline underline-offset-4 hover:opacity-90 hover:text-white hover:font-bold text-xs sm:text-sm ${isHome && !scrolled ? "text-black" : "text-white"}`}>About</Link>
          <Link href="/events" className={`hover:underline underline-offset-4 hover:opacity-90 hover:text-white hover:font-bold text-xs sm:text-sm ${isHome && !scrolled ? "text-black" : "text-white"}`}>Events</Link>
          <Link href="/gallery" className={`hover:underline underline-offset-4 hover:opacity-90 hover:text-white hover:font-bold text-xs sm:text-sm ${isHome && !scrolled ? "text-black" : "text-white"}`}>Gallery</Link>
          <Link href="/contact" className={`hover:underline underline-offset-4 hover:opacity-90 hover:text-white hover:font-bold text-xs sm:text-sm ${isHome && !scrolled ? "text-black" : "text-white"}`}>Contact</Link>
          <a
            href={siteConfig.eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-brand px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
          >
            Tickets
          </a>
        </nav>
        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/30 bg-transparent text-current"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {/* Mobile menu panel */}
      {menuOpen && (
        <div className={`sm:hidden ${isHome && !scrolled ? "bg-black/70 text-white" : "bg-brand text-white"} border-t border-white/20`}> 
          <div className="px-4 py-3 space-y-3">
            <Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/events" className="block" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link href="/gallery" className="block" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
            <a href={siteConfig.eventbriteUrl} target="_blank" rel="noopener noreferrer" className="block">Tickets</a>
          </div>
        </div>
      )}
    </header>
  );
} 