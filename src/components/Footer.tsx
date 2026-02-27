"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/#sluzby", label: "Služby" },
  { href: "/#referencie", label: "Referencie" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <footer className="relative text-white">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
          aria-hidden="true"
        />
      </div>

      {/* Gradient: photo visible at top, fades to solid black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-black/50 via-30% to-black to-60%" />

      {/* Content */}
      <div className="relative z-10">
        {/* Spacer where photo + gradient is visible */}
        <div className="h-40 md:h-56" />

        <div>
          <div className="w-[90vw] max-w-[90vw] mx-auto py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Logo & description */}
              <div>
                <h3 className="font-[var(--font-exo)] text-2xl font-bold mb-4">
                  Ben<span className="text-primary">Stav</span> BS
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Kompletné stavebné riešenia s dlhoročnými skúsenosťami. Kvalita a spokojnosť
                  zákazníka na prvom mieste.
                </p>
              </div>

              {/* Nav links */}
              <div>
                <h4 className="font-semibold mb-4 text-white/80">Navigácia</h4>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4 text-white/80">Kontakt</h4>
                <ul className="space-y-2 text-sm text-white/50">
                  <li>Štiavnické Bane 225, 969 81</li>
                  <li>
                    <a href="mailto:benesmichal123@gmail.com" className="hover:text-primary transition-colors">
                      benesmichal123@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+421911252695" className="hover:text-primary transition-colors">
                      +421 911 252 695
                    </a>
                  </li>
                </ul>

                {/* Social */}
                <div className="mt-4">
                  <a
                    href="https://www.facebook.com/BenstavBS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10">
            <div className="w-[90vw] max-w-[90vw] mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
              <p>2025 &copy; BenStav BS všetky práva vyhradené</p>
              <div className="flex gap-4">
                <Link
                  href="/ochrana-osobnych-udajov"
                  className="hover:text-primary transition-colors"
                >
                  Ochrana osobných údajov
                </Link>
                <button
                  onClick={openCookieSettings}
                  className="hover:text-primary transition-colors"
                >
                  Nastavenia cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
