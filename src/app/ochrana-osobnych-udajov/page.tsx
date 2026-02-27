import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov - BenStav BS",
  description: "Zásady ochrany osobných údajov spoločnosti BenStav BS",
};

export default function GdprPage() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header with hero photo */}
        <div className="relative text-white pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.jpg"
              alt=""
              fill
              className="object-cover object-bottom"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 w-[90vw] max-w-[90vw] mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-6 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Späť na hlavnú stránku
            </Link>
            <h1 className="font-[var(--font-exo)] text-3xl md:text-5xl font-bold">
              Ben<span className="text-primary">Stav</span> BS
            </h1>
            <h2 className="font-[var(--font-exo)] text-xl md:text-2xl text-white/80 mt-2">
              Ochrana osobných údajov
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="w-[90vw] max-w-[900px] mx-auto py-12 md:py-16">
          <div className="prose prose-lg max-w-none text-gray-light">
            {/* Company info */}
            <div className="bg-light rounded-xl p-6 md:p-8 mb-10 not-prose">
              <p className="font-semibold text-dark text-lg mb-2">Michal Beneš BenStav BS</p>
              <p className="text-gray-light text-sm leading-relaxed">
                Štiavnické Bane 225, 96981 Štiavnické Bane<br />
                IČO: 44074506, DIČ: 1077636725<br />
                E-mail:{" "}
                <a href="mailto:benesmichal123@gmail.com" className="text-primary hover:underline">
                  benesmichal123@gmail.com
                </a><br />
                Tel.:{" "}
                <a href="tel:+421911252695" className="text-primary hover:underline">
                  0911 252 695
                </a>
              </p>
            </div>

            <p>
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné
              údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných
              formulárov.
            </p>

            {/* Section I */}
            <h3 className="font-[var(--font-exo)] text-2xl font-bold text-dark mt-10 mb-4">
              I. Kontaktný formulár
            </h3>
            <p>
              Na stránke www.benstavbs.sk prevádzkujeme kontaktný formulár na dvoch samostatných
              stránkach, ktorého účelom je umožniť vám:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Položiť otázku k našim produktom a službám</li>
              <li>Požiadať o cenovú ponuku</li>
            </ul>

            <p className="font-semibold text-dark mt-6 mb-2">Rozsah spracúvaných údajov:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo</li>
            </ul>

            <p className="mt-6">
              <span className="font-semibold text-dark">Účel spracovania:</span><br />
              Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
            </p>

            <p className="mt-4">
              <span className="font-semibold text-dark">Právny základ:</span><br />
              Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť
              dotknutej osoby.
            </p>

            <p className="mt-4">
              <span className="font-semibold text-dark">Doba uchovávania:</span><br />
              Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ
              nevznikne ďalší zmluvný vzťah.
            </p>

            {/* Section II */}
            <h3 className="font-[var(--font-exo)] text-2xl font-bold text-dark mt-10 mb-4">
              II. Súbory cookies
            </h3>
            <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-semibold text-dark">Nevyhnutné cookies</span> –
                zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení
                prehliadača).
              </li>
              <li>
                <span className="font-semibold text-dark">Štatistické (analytické) cookies</span>{" "}
                – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len
                so súhlasom používateľa).
              </li>
            </ul>

            <p className="mt-4">
              <span className="font-semibold text-dark">Správa súhlasov:</span><br />
              Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies
              prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
            </p>

            {/* Section III */}
            <h3 className="font-[var(--font-exo)] text-2xl font-bold text-dark mt-10 mb-4">
              III. Práva dotknutej osoby
            </h3>
            <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prístup k osobným údajom, ktoré spracúvame</li>
              <li>Oprava nepresných alebo neúplných údajov</li>
              <li>
                Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ
              </li>
              <li>Obmedzenie spracovania</li>
              <li>Prenosnosť údajov</li>
              <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
              <li>
                Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07
                Bratislava,{" "}
                <a
                  href="https://www.dataprotection.gov.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.dataprotection.gov.sk
                </a>
                )
              </li>
            </ul>

            <p className="mt-6">
              V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na{" "}
              <a href="mailto:benesmichal123@gmail.com" className="text-primary hover:underline">
                benesmichal123@gmail.com
              </a>{" "}
              alebo telefónnom čísle{" "}
              <a href="tel:+421911252695" className="text-primary hover:underline">
                0911 252 695
              </a>
              .
            </p>

            <div className="border-t border-gray/10 mt-10 pt-6">
              <p className="text-sm text-gray-light/70">
                Tieto Zásady nadobúdajú účinnosť dňom 12. 6. 2025.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
