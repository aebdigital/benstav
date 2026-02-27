import type { Metadata } from "next";
import { Inter, Exo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "BenStav BS - Stavebné práce s dlhoročnými skúsenosťami",
  description:
    "Stavebné a výkopové práce, práce s pásovým nakladačom, práce s vibračným valcom. Kompletné riešenia pre stavebné práce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${inter.variable} ${exo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
