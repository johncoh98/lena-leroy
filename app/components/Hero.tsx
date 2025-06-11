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

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={stagger}
      className="text-center max-w-3xl mx-auto space-y-8 invitation-container p-12 rounded-3xl relative"
    >
      <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm rounded-3xl -z-10" />

      <motion.h2
        variants={fadeInUp}
        className="title-royal text-3xl md:text-5xl text-[var(--accent)] mb-4"
      >
        Mairie
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-refined text-xl md:text-2xl text-[var(--foreground)]"
      >
        Lena & Leroy
      </motion.p>

      <motion.p
        variants={fadeInUp}
        className="italic text-[var(--foreground)]"
      >
        se diront <span className="text-accent font-semibold">« oui »</span>
      </motion.p>

      <motion.p
        variants={fadeInUp}
        className="text-refined text-sm md:text-base leading-relaxed text-[var(--foreground)]/80"
      >
        Le <strong className="text-[var(--accent)]">mercredi 2 juillet à 14h30</strong><br />
        À la mairie du 19<sup>e</sup> arrondissement<br />
        5-7 Place Armand Carrel, 75019 Paris
      </motion.p>

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
                  className="bg-[var(--accent)] text-black px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--accent)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Google Maps
                </motion.a>
                <motion.a
                  href="https://waze.com/ul?ll=48.882951902002894,2.3819851847504236&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--button-bg)] text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-md flex items-center justify-center gap-2 hover:bg-[var(--button-bg)]/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Waze
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
    </motion.section>
  );
}
