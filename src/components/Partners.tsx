import Image from "next/image";

const partners = [
  {
    name: "Staviva",
    url: "https://staviva.sk/",
    logo: "/images/staviva-logo.svg",
  },
  {
    name: "KM Beta",
    url: "https://www.kmbeta.sk/",
    logo: "/images/kmbeta-logo.svg",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="w-[90vw] max-w-[90vw] mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-[var(--font-exo)] text-primary font-semibold mb-1 uppercase tracking-wider text-sm">
            Partneri
          </h3>
          <h2 className="font-[var(--font-exo)] text-3xl md:text-3xl font-bold text-dark mb-2">
            Naši <span className="text-primary">partneri</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center bg-light rounded-xl px-12 py-8 hover:shadow-md transition-shadow"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={60}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
