import Image from "next/image";

export default function About() {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-white">
      <div className="w-[90vw] max-w-[90vw] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2 relative rounded-xl overflow-hidden min-h-[400px]">
              <Image
                src="/images/about-1.jpeg"
                alt="BenStav BS - stavebné práce"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden min-h-[190px]">
              <Image
                src="/images/about-2.jpeg"
                alt="BenStav BS - realizácia projektu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden min-h-[190px]">
              <Image
                src="/images/about-3.jpg"
                alt="BenStav BS - stavebné stroje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="font-[var(--font-exo)] text-primary font-semibold mb-1 uppercase tracking-wider text-sm">
              BenStav BS
            </h3>
            <h2 className="font-[var(--font-exo)] text-4xl md:text-4xl font-bold text-dark mb-2">
              O <span className="text-primary">nás</span>
            </h2>
            <div className="w-16 h-1 bg-primary mb-8" />
            <p className="text-gray-light leading-relaxed mb-6">
              Naša firma počas celej svojej histórie vždy stavala na kvalitných a zodpovedných
              zamestnancoch ochotných urobiť maximum pre spokojnosť našich zákazníkov.
              Zabezpečujeme kompletnú stavebnú činnosť od poradenstva cez projektovú činnosť
              až po realizáciu stavebných prác a inžiniering stavieb.
            </p>
            <p className="text-gray-light leading-relaxed mb-8">
              Stavby realizujeme podľa najnovších technologických postupov s dôrazom na
              využitie zelených technológií a alternatívnych zdrojov energií. Stavby realizujeme
              kompletne v pozícii generálneho dodávateľa alebo sa na nich podieľame čiastkovo
              ako subdodávateľ.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div>
                <div className="font-[var(--font-exo)] text-4xl md:text-5xl font-bold text-primary">
                  15
                </div>
                <div className="text-gray-light font-medium text-sm">rokov skúseností</div>
              </div>
              <div>
                <div className="font-[var(--font-exo)] text-4xl md:text-5xl font-bold text-primary">
                  300+
                </div>
                <div className="text-gray-light font-medium text-sm">spokojných klientov</div>
              </div>
            </div>

            <a
              href="#kontakt"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
