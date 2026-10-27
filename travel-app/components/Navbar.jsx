"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({ dark = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const text = dark ? "text-[#6B5E51]" : "text-[#F7F4EF]";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${dark ? "relative" : "absolute top-0 left-0 right-0"} z-20 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8`}>
      <Link href="/" onClick={closeMenu} className={`${text} text-lg font-semibold`}>
        Tranquil
      </Link>

      <div className={`hidden items-center gap-6 text-sm md:flex ${text}`}>
        <Link href="/" className="transition-opacity hover:opacity-70">Home</Link>
        <Link href="/explore" className="transition-opacity hover:opacity-70">Explore</Link>
        <Link href="/journal" className="transition-opacity hover:opacity-70">Journal</Link>
      </div>

      <Link
        href="/login"
        className="hidden rounded-full bg-[#6B5E51] px-4 py-2 text-sm text-[#F7F4EF] transition-colors hover:bg-[#574b40] md:inline-flex"
      >
        Sign in
      </Link>

      <button
        type="button"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden ${dark ? "text-[#6B5E51]" : "text-[#F7F4EF]"}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-4 right-4 top-full flex flex-col gap-1 rounded-2xl bg-[#F7F4EF] p-3 text-[#6B5E51] shadow-xl md:hidden"
        >
          <Link href="/" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm hover:bg-black/5">Home</Link>
          <Link href="/explore" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm hover:bg-black/5">Explore</Link>
          <Link href="/journal" onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm hover:bg-black/5">Journal</Link>
          <Link href="/login" onClick={closeMenu} className="mt-1 rounded-xl bg-[#6B5E51] px-4 py-3 text-center text-sm text-[#F7F4EF]">Sign in</Link>
        </div>
      )}
    </nav>
  );
}