'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function WeddingLocation() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={stagger}
      className="text-center max-w-4xl mx-auto space-y-8 p-12 rounded-3xl relative invitation-container"
    >
      <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm rounded-3xl -z-10" />

      {/* Texte d'invitation */}
      <motion.h2
        variants={fadeInUp}
        className="title-subtle text-xl md:text-3xl mb-6 md:mb-8 shine-effect"
      >
        <span className="text-accent">N</span>ous avons la joie de vous faire part du mariage de leurs enfants
      </motion.h2>

      {/* Deux colonnes familles */}
    <motion.div
  variants={fadeInUp}
  className="flex flex-wrap justify-center gap-6 text-refined text-base md:text-lg tracking-wide font-light text-left"
>
  <div className="flex-1 min-w-[40%] max-w-[45%] space-y-2">
    <p className="italic">Mme Corine & Mr Olivier Uzan</p>
    <p className="italic">Mme Mireille Uzan</p>
  </div>
  <div className="flex-1 min-w-[40%] max-w-[45%] space-y-2">
    <p className="italic">Mme Deborah & Mr Stéphane Tayar</p>
    <p className="italic">Mme Doly Zarka</p>
    <p className="italic">Mme Nicole & Mr Elie Tayar</p>
  </div>
</motion.div>


      {/* Pensée hommage */}
      <motion.p
        variants={fadeInUp}
        className="italic text-sm md:text-base text-muted mt-6 leading-relaxed"
      >
        Une pensée émue et remplie de tendresse pour la mémoire bénie<br />
        de <strong>Mamie Jeanne, Papi Jacques, Papi Charles et Papi Jules</strong>
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="my-10 h-px bg-[var(--accent)]/20"
      />

      {/* Infos soirée */}
      <motion.div
        variants={fadeInUp}
        className="text-refined text-base md:text-lg leading-relaxed text-[var(--foreground)]"
      >
        <p>
          <strong className="text-accent">Jeudi 4 septembre 2025</strong> à <strong>17h30</strong><br />
          Salle Le White<br />
          10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne
        </p>
      </motion.div>

      {/* Boutons */}
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
                  className="bg-[var(--accent)] text-black px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--accent)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Google Maps
                </motion.a>
                <motion.a
                  href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--button-bg)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--button-bg)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Waze
                </motion.a>
              </div>
    </motion.section>
  );
}
