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
        Le <strong className="text-[var(--accent)]">mardi 2 juillet à 15h00</strong><br />
        À la mairie du 19<sup>e</sup> arrondissement<br />
        5-7 Place Armand Carrel, 75019 Paris
      </motion.p>

      <motion.a
        variants={fadeInUp}
        href="https://waze.com/ul?ll=48.8849,2.3812&navigate=yes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-[var(--accent)] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[var(--accent)]/90 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Lien Waze
      </motion.a>
    </motion.section>
  );
}
