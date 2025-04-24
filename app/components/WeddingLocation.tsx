export default function WeddingLocation() {
  return (
    <section className="mb-12 text-center max-w-6xl mx-auto bg-[var(--primary)] border border-[var(--button-bg)] p-8 rounded-3xl shadow-lg">
      <h3 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Lieux de cérémonie</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Lieu 1 – Salle Le White */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold text-[var(--foreground)]">Salle Le White</h4>
          <p className="italic text-sm">10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne</p>
          <div className="w-full h-64 border-2 border-[var(--button-bg)] rounded-2xl shadow overflow-hidden">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne&z=15&output=embed"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-bg)] text-white px-5 py-2 rounded-full hover:bg-[var(--button-hover)] transition"
            >
              📍 Google Maps
            </a>
            <a
              href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent-dark)] text-white px-5 py-2 rounded-full hover:bg-[var(--button-bg)] transition"
            >
              🚗 Waze
            </a>
          </div>
        </div>

        {/* Lieu 2 – Mairie du 19e */}
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold text-[var(--foreground)]">Mairie du 19ᵉ arrondissement</h4>
          <p className="italic text-sm">5-7 Place Armand Carrel, 75019 Paris</p>
          <div className="w-full h-64 border-2 border-[var(--button-bg)] rounded-2xl shadow overflow-hidden">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris&z=15&output=embed"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--button-bg)] text-white px-5 py-2 rounded-full hover:bg-[var(--button-hover)] transition"
            >
              📍 Google Maps
            </a>
            <a
              href="https://waze.com/ul?ll=48.8849,2.3812&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent-dark)] text-white px-5 py-2 rounded-full hover:bg-[var(--button-bg)] transition"
            >
              🚗 Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
