"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#referencie", label: "Referencie" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark text-white shadow-lg">
        {/* Top bar with contact info */}
        <div className="hidden md:block bg-dark-light border-b border-white/10">
          <div className="w-[90vw] max-w-[90vw] mx-auto py-2 flex justify-end items-center gap-6 text-sm text-white/70">
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
        <div className="w-[90vw] max-w-[90vw] mx-auto py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
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
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-[70]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-dark/95 backdrop-blur-md flex items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-8 transition-all duration-500 delay-100 ${
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl font-[var(--font-exo)] font-bold uppercase tracking-wider text-white hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="w-16 h-px bg-white/20 my-2" />

          <div className="flex flex-col items-center gap-3 text-white/60 text-sm">
            <a href="mailto:benesmichal123@gmail.com" className="hover:text-primary transition-colors">
              benesmichal123@gmail.com
            </a>
            <a href="tel:+421911252695" className="hover:text-primary transition-colors">
              +421 911 252 695
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
