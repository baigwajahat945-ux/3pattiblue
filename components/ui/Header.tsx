"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const TOPICAL_LINKS = [
  { label: "APK Download", href: "/3-patti-blue-apk-download" },
  { label: "Download for PC", href: "/3-patti-blue-for-pc" },
  { label: "3 Patti Blue for iOS", href: "/3-patti-blue-for-ios" },
  { label: "Login", href: "/3-patti-blue-login" },
  { label: "Sign Up", href: "/3-patti-blue-signup" },
  { label: "Bonus", href: "/3-patti-blue-bonus" },
  { label: "Deposit", href: "/3-patti-blue-deposit" },
  { label: "Withdraw", href: "/3-patti-blue-withdraw" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="container-content flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-extrabold text-xl text-brand-700 shrink-0">
          <Image
            src="/3-patti-blue-logo.webp"
            alt="3 Patti Blue Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-md"
            priority
          />
          <span>3 Patti Blue</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">

          {/* Pages dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-brand-700 transition-colors px-3 py-2 rounded-lg hover:bg-brand-50"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setDropdownOpen((o) => !o); }
                if (e.key === "Escape") setDropdownOpen(false);
              }}
            >
              3 Patti Blue Tutorials
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-blue-100 rounded-xl shadow-xl py-2 z-50">
                {TOPICAL_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 font-medium transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className="text-sm font-semibold text-gray-600 hover:text-brand-700 transition-colors px-3 py-2 rounded-lg hover:bg-brand-50">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-brand-700 transition-colors px-3 py-2 rounded-lg hover:bg-brand-50">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-600 hover:text-brand-700 transition-colors px-3 py-2 rounded-lg hover:bg-brand-50">
            Contact
          </Link>

          <a
            href="https://3pattibluevip.com?from_gameid=9577560&channelCode=7852455"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5 ml-2"
          >
            ⬇ Download APK
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-blue-100 bg-white px-4 py-4">
          {/* Topical pages section */}
          <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">3 Patti Blue Tutorials</p>
          <div className="space-y-1 mb-4">
            {TOPICAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-gray-700 hover:text-brand-700 py-1.5 pl-2 border-l-2 border-brand-100 hover:border-brand-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="space-y-1 mb-4 border-t border-gray-100 pt-3">
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-gray-700 hover:text-brand-700 py-1">Blog</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-gray-700 hover:text-brand-700 py-1">About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-gray-700 hover:text-brand-700 py-1">Contact</Link>
          </div>

          <a
            href="https://3pattibluevip.com?from_gameid=9577560&channelCode=7852455"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5 inline-block"
          >
            ⬇ Download APK
          </a>
        </div>
      )}
    </header>
  );
}
