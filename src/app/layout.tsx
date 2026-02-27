import type { Metadata } from "next";
import { Roboto, Exo } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.benstavbs.sk"),
  title: "BenStav BS | Stavebné a výkopové práce, práce s pásovým nakladačom a vibračným valcom",
  description:
    "Ponúkame kompletné stavebné a výkopové práce, práce s pásovým nakladačom, práce s vibračným valcom s hmotnosťou 2 tony.",
  keywords: [
    "stavebné práce",
    "výkopové práce",
    "pásový nakladač",
    "vibračný valec",
    "stavebné stroje",
    "Banská Štiavnica",
    "BenStav BS",
  ],
  authors: [{ name: "BenStav BS" }],
  openGraph: {
    title: "BenStav BS | Stavebné a výkopové práce, práce s pásovým nakladačom a vibračným valcom",
    description:
      "Ponúkame kompletné stavebné a výkopové práce, práce s pásovým nakladačom, práce s vibračným valcom s hmotnosťou 2 tony.",
    url: "https://www.benstavbs.sk/",
    siteName: "BenStav BS",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "BenStav BS - Stavebné práce",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/gallery/favicon.png",
    shortcut: "/images/gallery/favicon.png",
    apple: "/images/gallery/favicon.png",
  },
  alternates: {
    canonical: "https://www.benstavbs.sk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${roboto.variable} ${exo.variable} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
