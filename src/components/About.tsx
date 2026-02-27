export default function About() {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="font-[var(--font-exo)] text-3xl md:text-4xl font-bold text-dark mb-2">
              O <span className="text-primary">nás</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-gray-light leading-relaxed mb-6">
              Sme zavedená firma kladúca dôraz na kvalitných pracovníkov, pre ktorých je
              spokojnosť zákazníka na prvom mieste. Ponúkame kompletné stavebné činnosti od
              konzultácie cez riadenie projektov až po samotnú realizáciu.
            </p>
            <p className="text-gray-light leading-relaxed mb-8">
              Využívame modernú technológiu so zameraním na ekologické riešenia a alternatívne
              zdroje energie. Pracujeme ako hlavný dodávateľ alebo subdodávateľ.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-light rounded-xl p-8 text-center">
              <div className="font-[var(--font-exo)] text-5xl md:text-6xl font-bold text-primary mb-2">
                15
              </div>
              <div className="text-gray-light font-medium">rokov skúseností</div>
            </div>
            <div className="bg-light rounded-xl p-8 text-center">
              <div className="font-[var(--font-exo)] text-5xl md:text-6xl font-bold text-primary mb-2">
                300+
              </div>
              <div className="text-gray-light font-medium">spokojných klientov</div>
            </div>
            <div className="col-span-2 bg-dark rounded-xl p-8 text-center text-white">
              <div className="font-[var(--font-exo)] text-2xl font-bold mb-2">
                Kompletné stavebné riešenia
              </div>
              <div className="text-white/60">
                Od konzultácie cez projekt až po realizáciu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
