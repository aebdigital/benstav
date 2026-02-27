import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="BenStav BS - stavebné práce"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="font-[var(--font-exo)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Ben<span className="text-primary">Stav</span> BS
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 max-w-3xl mx-auto">
          Všetky riešenia pre stavebné práce s dlhoročnými skúsenosťami
        </p>
        <p className="text-base md:text-lg text-white/60 mb-10 max-w-2xl mx-auto">
          Stavebné a výkopové práce, práce s pásovým nakladačom, práce s vibračným valcom
          s nosnosťou do 2 ton
        </p>
        <a
          href="#sluzby"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors uppercase tracking-wider"
        >
          Naše služby
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
