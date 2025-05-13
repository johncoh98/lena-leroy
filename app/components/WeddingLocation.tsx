'use client';

export default function WeddingLocation() {
  return (
    <section className="mb-24 px-6 md:px-12 max-w-6xl mx-auto text-center bg-white/80 text-[var(--foreground)] border border-[var(--button-bg)] p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Lieux de cérémonie</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Salle Le White */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl md:text-2xl font-semibold">Salle Le White</h3>
          <p className="italic text-sm md:text-base">10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne</p>

          <div className="w-full h-64 border-2 border-[var(--button-bg)] rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne&z=15&output=embed"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <a
              href="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white px-6 py-2 rounded-full font-medium shadow"
            >
              📍 Google Maps
            </a>
            <a
              href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] hover:bg-[var(--button-bg)] text-white px-6 py-2 rounded-full font-medium shadow"
            >
              🚗 Waze
            </a>
          </div>
        </div>

        {/* Mairie du 19e */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl md:text-2xl font-semibold">Mairie du 19ᵉ arrondissement</h3>
          <p className="italic text-sm md:text-base">5-7 Place Armand Carrel, 75019 Paris</p>

          <div className="w-full h-64 border-2 border-[var(--button-bg)] rounded-2xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris&z=15&output=embed"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <a
              href="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white px-6 py-2 rounded-full font-medium shadow"
            >
              📍 Google Maps
            </a>
            <a
              href="https://waze.com/ul?ll=48.8849,2.3812&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] hover:bg-[var(--button-bg)] text-white px-6 py-2 rounded-full font-medium shadow"
            >
              🚗 Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
