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
      className="text-center max-w-2xl mx-auto space-y-8 px-6 py-12 rounded-3xl relative invitation-container"
    >
      <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm rounded-3xl -z-10" />

      {/* פסוק עליון */}
      <motion.h3
        variants={fadeInUp}
        className="text-xl md:text-2xl font-semibold tracking-wide text-accent mb-2"
      >
        אני לדודי ודודי לי
      </motion.h3>

      {/* Titre principal */}
      <motion.h2
        variants={fadeInUp}
        className="title-subtle text-xl md:text-2xl text-[var(--foreground)] tracking-wider uppercase"
      >
        Houppa et Soirée
      </motion.h2>

      {/* Familles */}
      <motion.div
        variants={fadeInUp}
        className="grid grid-cols-3 gap-4 w-full text-refined text-sm md:text-base tracking-wide font-light"
      >
        {/* Famille Uzan */}
        <div className="space-y-4 flex flex-col items-end">
          <div>
            <p className="italic">Mme Corine</p>
            <p className="italic">& Mr Olivier Uzan</p>
          </div>
          <p className="italic">Mme Mireille Uzan</p>
        </div>

        {/* Colonne centrale vide */}
        <div></div>

        {/* Famille Tayar */}
        <div className="space-y-4 flex flex-col items-start">
          <p className="italic">Mme Deborah & Mr Stéphane Tayar</p>
          <p className="italic">Mme Doly Zarka</p>
          <p className="italic">Mme Nicole & Mr Elie Tayar</p>
        </div>
      </motion.div>

      {/* Texte intermédiaire */}
      <motion.p
        variants={fadeInUp}
        className="text-refined text-sm md:text-base italic mt-4 text-[var(--foreground)]/80"
      >
        ont la joie de vous faire part<br />
        du mariage de leurs enfants
      </motion.p>

      {/* Noms des mariés */}
      <motion.h1
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-serif text-accent tracking-wide"
      >
        Lena & Leroy
      </motion.h1>

      {/* Pensée hommage */}
      <motion.p
        variants={fadeInUp}
        className="italic text-sm md:text-base text-muted leading-relaxed text-center mt-2"
      >
        Une pensée émue et remplie de tendresse pour la mémoire bénie<br />
        de <strong className="font-semibold italic text-white">
          Mamie Jeanne, Papy Jacques, Papy Charles et Papy Jules
        </strong>
      </motion.p>

      {/* Séparateur */}
      <motion.div
        variants={fadeInUp}
        className="my-10 h-px bg-[var(--accent)]/20"
      />

      {/* Infos lieu */}
      <motion.p
        variants={fadeInUp}
        className="text-refined text-base md:text-lg leading-relaxed text-[var(--foreground)]"
      >
        <strong className="text-accent">Jeudi 4 septembre 2025</strong> à <strong>17h00</strong><br />
        Salle Le White<br />
        10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne
      </motion.p>

      {/* Carte */}
      <div className="w-full h-40 md:h-64 border-2 border-[var(--accent)]/20 rounded-2xl overflow-hidden shadow-md mb-3 md:mb-6">
        <iframe
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne&z=15&output=embed"
        />
      </div>

      {/* Boutons de navigation */}
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <motion.a
          href="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] text-black px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-md hover:bg-[var(--accent)]/90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
           Google Maps
        </motion.a>
        <motion.a
          href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--button-bg)] text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-md hover:bg-[var(--button-bg)]/90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
           Waze
        </motion.a>
      </div>
    </motion.section>
  );
}
