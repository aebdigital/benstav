"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Ďakujeme za vašu správu! Budeme vás kontaktovať čo najskôr.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white">
      <div className="w-[90vw] max-w-[90vw] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-exo)] text-4xl md:text-4xl font-bold text-dark mb-2">
            <span className="text-primary">Kontakt</span>ujte nás
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-gray-light max-w-2xl mx-auto">
            Máte otázky alebo potrebujete cenovú ponuku? Neváhajte nás kontaktovať.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">
                Meno
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Vaše meno"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="vas@email.sk"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">
                Správa
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border border-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                placeholder="Vaša správa..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors uppercase tracking-wider"
            >
              Odoslať správu
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-[var(--font-exo)] font-bold text-dark mb-1">Adresa</h3>
                <p className="text-gray-light">
                  Štiavnické Bane 225
                  <br />
                  969 81 Štiavnické Bane
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-[var(--font-exo)] font-bold text-dark mb-1">E-mail</h3>
                <a
                  href="mailto:benesmichal123@gmail.com"
                  className="text-gray-light hover:text-primary transition-colors"
                >
                  benesmichal123@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-[var(--font-exo)] font-bold text-dark mb-1">Telefón</h3>
                <a
                  href="tel:+421911252695"
                  className="text-gray-light hover:text-primary transition-colors"
                >
                  +421 911 252 695
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2636.5!2d18.87!3d48.45!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476acdf296ffce59%3A0xe2893b068061c49e!2z!5e0!3m2!1ssk!2ssk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BenStav BS - mapa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
