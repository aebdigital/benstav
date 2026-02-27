"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#referencie", label: "Referencie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark text-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-dark-light border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-6 text-sm text-white/70">
          <a
            href="mailto:benesmichal123@gmail.com"
            className="hover:text-primary transition-colors"
          >
            benesmichal123@gmail.com
          </a>
          <a
            href="tel:+421911252695"
            className="hover:text-primary transition-colors"
          >
            +421 911 252 695
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="BenStav BS logo"
            width={50}
            height={35}
            className="object-contain"
          />
          <span className="font-[var(--font-exo)] text-2xl font-bold tracking-tight">
            Ben<span className="text-primary">Stav</span> BS
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-light border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 text-sm text-white/70 space-y-2">
            <a href="mailto:benesmichal123@gmail.com" className="block hover:text-primary">
              benesmichal123@gmail.com
            </a>
            <a href="tel:+421911252695" className="block hover:text-primary">
              +421 911 252 695
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
