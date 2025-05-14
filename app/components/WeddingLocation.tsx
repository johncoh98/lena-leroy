'use client';

import { motion } from 'framer-motion';

export default function WeddingLocation() {
  return (
    <section className="mb-20 px-3 md:px-12 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-[rgba(42,26,58,0.95)] backdrop-blur-sm text-[var(--foreground)] border border-[var(--accent)]/20 p-4 md:p-8 rounded-3xl shadow-2xl"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="title-royal text-xl md:text-3xl mb-6 md:mb-8 shine-effect"
        >
          <span className="text-accent">L</span>ieux de cérémonie
        </motion.h2>

        <div className="grid gap-6 md:gap-12">
          {/* Mairie */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 md:p-6 bg-[rgba(42,26,58,0.98)] backdrop-blur-sm rounded-2xl shadow-lg border border-[var(--accent)]/10"
            >
              <h3 className="text-base md:text-xl font-semibold mb-2 text-[var(--accent)]">
                Mairie du 19<sup>e</sup>
              </h3>
              <p className="italic text-xs md:text-sm mb-3 md:mb-6 text-[var(--foreground)]/80">5-7 Place Armand Carrel, 75019 Paris</p>

              <div className="w-full h-40 md:h-64 border-2 border-[var(--accent)]/20 rounded-2xl overflow-hidden shadow-md mb-3 md:mb-6">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris&z=15&output=embed"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <motion.a
                  href="https://www.google.com/maps?q=5+Place+Armand+Carrel+75019+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--accent)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--accent)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📍 Google Maps
                </motion.a>
                <motion.a
                  href="https://waze.com/ul?ll=48.8849,2.3812&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--button-bg)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--button-bg)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚗 Waze
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Salle Le White */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full p-3 md:p-6 bg-[rgba(42,26,58,0.98)] backdrop-blur-sm rounded-2xl shadow-lg border border-[var(--accent)]/10"
            >
              <h3 className="text-base md:text-xl font-semibold mb-2 text-[var(--accent)]">Salle Le White</h3>
              <p className="italic text-xs md:text-sm mb-3 md:mb-6 text-[var(--foreground)]/80">10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne</p>

              <div className="w-full h-40 md:h-64 border-2 border-[var(--accent)]/20 rounded-2xl overflow-hidden shadow-md mb-3 md:mb-6">
                <iframe
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne&z=15&output=embed"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <motion.a
                  href="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--accent)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--accent)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📍 Google Maps
                </motion.a>
                <motion.a
                  href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--button-bg)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--button-bg)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚗 Waze
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}