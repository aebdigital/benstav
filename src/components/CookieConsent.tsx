"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_KEY = "benstav_cookie_consent";

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = getStoredPreferences();
    if (!stored) {
      setShowBanner(true);
    } else {
      setAnalytics(stored.analytics);
    }

    const handleOpenSettings = () => {
      setShowSettings(true);
      setShowBanner(false);
      const stored = getStoredPreferences();
      if (stored) setAnalytics(stored.analytics);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({ necessary: true, analytics: true });
    setAnalytics(true);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const acceptNecessary = useCallback(() => {
    savePreferences({ necessary: true, analytics: false });
    setAnalytics(false);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const saveSettingsHandler = useCallback(() => {
    savePreferences({ necessary: true, analytics });
    setShowBanner(false);
    setShowSettings(false);
  }, [analytics]);

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-dark border-t border-white/10 shadow-2xl">
          <div className="w-[90vw] max-w-[90vw] mx-auto py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white text-sm leading-relaxed">
                Táto stránka používa cookies na zabezpečenie správneho fungovania a na
                analytické účely.{" "}
                <Link
                  href="/ochrana-osobnych-udajov"
                  className="text-primary hover:underline"
                >
                  Viac informácií
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setShowSettings(true);
                  setShowBanner(false);
                }}
                className="text-white/60 hover:text-white text-sm transition-colors px-4 py-2 border border-white/20 rounded-md hover:border-white/40"
              >
                Nastavenia
              </button>
              <button
                onClick={acceptNecessary}
                className="text-white text-sm px-4 py-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
              >
                Len nevyhnutné
              </button>
              <button
                onClick={acceptAll}
                className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors"
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray/10">
              <h2 className="font-[var(--font-exo)] text-xl font-bold text-dark">
                Nastavenia cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-light hover:text-dark transition-colors p-1"
                aria-label="Zavrieť"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <p className="text-gray-light text-sm leading-relaxed">
                Tu si môžete prispôsobiť, aké typy cookies chcete povoliť. Nevyhnutné cookies
                sú vždy aktívne, pretože sú potrebné na správne fungovanie stránky.
              </p>

              {/* Necessary cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-light rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-dark text-sm mb-1">Nevyhnutné cookies</h3>
                  <p className="text-gray-light text-xs leading-relaxed">
                    Zabezpečujú základnú funkčnosť stránky. Bez nich stránka nebude správne
                    fungovať.
                  </p>
                </div>
                <div className="flex-shrink-0 pt-0.5">
                  <div className="w-11 h-6 bg-primary/30 rounded-full relative cursor-not-allowed">
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="flex items-start justify-between gap-4 p-4 bg-light rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold text-dark text-sm mb-1">
                    Štatistické (analytické) cookies
                  </h3>
                  <p className="text-gray-light text-xs leading-relaxed">
                    Pomáhajú nám pochopiť, ako návštevníci stránku používajú, a zlepšovať
                    používateľský zážitok.
                  </p>
                </div>
                <div className="flex-shrink-0 pt-0.5">
                  <button
                    onClick={() => setAnalytics(!analytics)}
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      analytics ? "bg-primary/30" : "bg-gray/20"
                    }`}
                    aria-label="Prepnúť analytické cookies"
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 rounded-full transition-all ${
                        analytics ? "right-0.5 bg-primary" : "left-0.5 bg-gray-light"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-light/60">
                Viac informácií nájdete v našich{" "}
                <Link
                  href="/ochrana-osobnych-udajov"
                  className="text-primary hover:underline"
                >
                  Zásadách ochrany osobných údajov
                </Link>
                .
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray/10">
              <button
                onClick={acceptNecessary}
                className="text-gray text-sm px-4 py-2 border border-gray/20 rounded-md hover:bg-light transition-colors"
              >
                Len nevyhnutné
              </button>
              <button
                onClick={saveSettingsHandler}
                className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors"
              >
                Uložiť nastavenia
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
