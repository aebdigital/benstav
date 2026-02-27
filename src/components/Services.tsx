const services = [
  {
    title: "Kompletné stavebné a výkopové práce",
    description:
      "Efektívne výkopy základov, úprava terénu, príprava inžinierskych sietí s dôrazom na kvalitu a bezpečnosť. Realizujeme kompletné stavebné práce od základov až po finálne úpravy.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Práce s pásovým nakladačom",
    description:
      "Disponujeme pásovým nakladačom Takeuchi TL8. Taktiež prevádzkujeme pásové rýpadlo Takeuchi TB240 a nákladné vozidlo Scania s hydraulickým dosahom 12 m pre komplexné stavebné operácie.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
  {
    title: "Práce s vibračným valcom",
    description:
      "Profesionálne zhutňovanie povrchov pre cesty, chodníky a spevnené plochy. Disponujeme vibračným valcom s nosnosťou do 2 ton pre kvalitné a efektívne zhutňovanie.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-exo)] text-3xl md:text-4xl font-bold text-dark mb-2">
            Naše <span className="text-primary">služby</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-light max-w-2xl mx-auto">
            Ponúkame široký rozsah stavebných služieb s profesionálnym prístupom a modernými
            technológiami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-[var(--font-exo)] text-xl font-bold text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-gray-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
