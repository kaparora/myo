"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-myo-cream shadow-sm border-b border-myo-peach/20 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Lotus Icon */}
          <Link href="/">
            <div className="flex items-center gap-3 font-serif text-2xl font-light tracking-[0.18em]">
              <Lotus className="h-7 w-7" />
              <span className="text-myo-teal">MYO</span>
            </div>
          </Link>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <span className={`block w-6 h-0.5 bg-myo-teal transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-myo-teal transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-myo-teal transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:flex gap-9 text-xs font-medium uppercase tracking-[0.14em] opacity-85">
            <Link
              href="/"
              className="text-myo-teal hover:opacity-100 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-myo-teal hover:opacity-100 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-myo-teal hover:opacity-100 transition-opacity"
            >
              Services
            </Link>
            <Link
              href="/events"
              className="text-myo-teal hover:opacity-100 transition-opacity"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-myo-teal hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.14em] opacity-85">
            <Link
              href="/"
              className="text-myo-teal hover:opacity-100 transition-opacity block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-myo-teal hover:opacity-100 transition-opacity block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-myo-teal hover:opacity-100 transition-opacity block"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/events"
              className="text-myo-teal hover:opacity-100 transition-opacity block"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-myo-teal hover:opacity-100 transition-opacity block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="var(--color-myo-yellow)">
      <g>
        <path d="M16 8 C 14 14 14 18 16 22 C 18 18 18 14 16 8 Z" />
        <path d="M16 22 C 12 20 9 17 8 12 C 12 12 15 16 16 22 Z" opacity="0.92" />
        <path d="M16 22 C 20 20 23 17 24 12 C 20 12 17 16 16 22 Z" opacity="0.92" />
        <path d="M16 22 C 10 21 5 18 3 14 C 7 13 12 15 16 22 Z" opacity="0.78" />
        <path d="M16 22 C 22 21 27 18 29 14 C 25 13 20 15 16 22 Z" opacity="0.78" />
      </g>
    </svg>
  );
}
