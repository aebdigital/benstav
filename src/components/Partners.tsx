const partners = [
  {
    name: "Staviva",
    url: "https://www.staviva.sk",
  },
  {
    name: "KM Beta",
    url: "https://www.kmbeta.sk",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-exo)] text-2xl md:text-3xl font-bold text-dark mb-2">
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
              <span className="text-xl font-bold text-gray group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
