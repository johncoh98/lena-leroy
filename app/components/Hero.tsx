'use client';

import { motion } from 'framer-motion';
import TypewriterEffect from './TypewriterEffect';

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
      className="text-center max-w-3xl mx-auto space-y-8 invitation-container p-12 rounded-lg relative"
    >
      <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm rounded-lg -z-10" />

      <motion.h1
        variants={fadeInUp}
        className="title-royal text-2xl md:text-3xl lg:text-4xl mb-6"
      >
        <span className="text-accent">L</span>ena <span className="text-accent">&</span> <span className="text-accent">L</span>eroy
      </motion.h1>

      <motion.div variants={fadeInUp} className="space-y-4">
        <p className="text-refined text-xl md:text-2xl">
          <span className="text-accent">Jeudi</span> 4 septembre <span className="text-accent">2025</span>
        </p>
        <p className="text-refined text-lg italic">Paris, France</p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="my-10 h-px bg-[var(--accent)]/20"
      />

      <motion.blockquote variants={fadeInUp} className="text-refined text-xl">
        <TypewriterEffect
          text="Nous avons l'honneur de vous convier à célébrer notre union"
          delay={800}
          className="italic"
        />
      </motion.blockquote>

      <motion.div variants={fadeInUp} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-refined text-base md:text-lg tracking-wide font-light">
        <div className="space-y-2">
          <p className="italic">Mme Corine & Mr Olivier Uzan</p>
          <p className="italic">Mme Mireille Uzan</p>
        </div>
        <div className="space-y-2">
          <p className="italic">Mme Deborah & Mr Stéphane Tayar</p>
          <p className="italic">Mme Doly Zarka</p>
          <p className="italic">Mme Nicole & Mr Elie Tayar</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="italic text-sm md:text-base text-muted mt-6 leading-relaxed"
      >
        Une pensée émue et remplie de tendresse pour la mémoire bénie<br />
        de nos êtres partis trop tôt : <span className="font-semibold">Mamie Jeanne, Papy Jacques et Papy Jules</span>
      </motion.div>
    </motion.section>
  );
}
