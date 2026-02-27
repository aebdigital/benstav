import Image from "next/image";

const projects = [
  { id: 1, src: "/images/gallery/1.jpg", alt: "Stavebný projekt - výkopové práce" },
  { id: 2, src: "/images/gallery/2.jpg", alt: "Stavebný projekt - základy" },
  { id: 3, src: "/images/gallery/3.jpg", alt: "Stavebný projekt - terénne úpravy" },
  { id: 4, src: "/images/gallery/4.jpg", alt: "Stavebný projekt - nakladač" },
  { id: 5, src: "/images/gallery/5.jpg", alt: "Stavebný projekt - zhutňovanie" },
  { id: 6, src: "/images/gallery/6.jpg", alt: "Stavebný projekt - cesty" },
  { id: 7, src: "/images/gallery/7.jpg", alt: "Stavebný projekt - chodníky" },
  { id: 8, src: "/images/gallery/8.jpg", alt: "Stavebný projekt - realizácia" },
];

export default function Gallery() {
  return (
    <section id="referencie" className="py-20 md:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-exo)] text-3xl md:text-4xl font-bold text-dark mb-2">
            Naše <span className="text-primary">referencie</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-light max-w-2xl mx-auto">
            Ukážky z našich realizovaných projektov
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="aspect-square rounded-xl overflow-hidden group relative"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium px-4 text-center">
                  {project.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
