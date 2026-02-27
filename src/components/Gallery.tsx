"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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

const slides = projects.map((p) => ({ src: p.src, alt: p.alt }));

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="referencie" className="py-20 md:py-28 bg-light">
      <div className="w-[90vw] max-w-[90vw] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-exo)] text-4xl md:text-4xl font-bold text-dark mb-2">
            Naše <span className="text-primary">referencie</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-light max-w-2xl mx-auto">
            Ukážky z našich realizovaných projektov
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setLightboxIndex(index)}
              className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ fade: 300, swipe: 400, zoom: 500 }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
        }}
      />
    </section>
  );
}
