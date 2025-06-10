'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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

export default function WeddingCard() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={stagger}
      className="text-center max-w-xl mx-auto space-y-6 px-6 py-12 rounded-3xl invitation-container"
    >
      {/* פסוק */}
      <motion.h3
        variants={fadeInUp}
        className="text-lg md:text-xl font-semibold text-[var(--accent)] tracking-wide"
      >
        אני לדודי ודודי לי
      </motion.h3>

      {/* Titre */}
    <motion.h2
  variants={fadeInUp}
  style={{ fontSize: '1.4rem' }}
  className="text-xl md:text-2xl uppercase title-royal !text-[var(--accent)] tracking-wider"
>
  Houppa et Soirée
</motion.h2>




      {/* Familles */}
   <motion.div
  variants={fadeInUp}
  className="grid grid-cols-3 gap-x-6 w-full text-center"
>
  {/* Colonne gauche - Famille Uzan */}
  <div className="flex flex-col items-end space-y-1 text-right">
    <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic">Corine & Olivier Uzan </p>
        <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic invisible">invisible</p>

    <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic">Mireille Uzan</p>
    <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic invisible">invisible</p>
  </div>

  {/* Texte central */}
  <div className="flex flex-col justify-center items-center text-center">

  </div>

  {/* Colonne droite - Famille Tayar */}
  <div className="flex flex-col items-start space-y-1 text-left">
    <p style={{ fontSize: '0.55rem', lineHeight: '1.2' }} className="italic">Deborah & Stéphane Tayar</p>
    <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic">Doly Zarka</p>
    <p style={{ fontSize: '0.65rem', lineHeight: '1.2' }} className="italic">Nicole & Elie Tayar</p>
  </div>
</motion.div>

      <motion.p
        variants={fadeInUp}
        className="italic text-sm md:text-base text-[var(--foreground)]/80 leading-relaxed text-center mt-6"
      >
        Une pensée émue et remplie de tendresse pour la mémoire bénie<br />
        de <strong className="font-semibold italic text-white">
          Mamie Jeanne, Papy Jacques, Papy Charles et Papy Jules
        </strong>
      </motion.p>


      {/* Texte d'invitation */}
      <motion.p
        variants={fadeInUp}
        className="text-sm md:text-base italic text-[var(--foreground)]/80 leading-relaxed mt-4"
      >
       leurs enfants et petits-enfants<br />
        ont la joie de vous annoncer leur mariage      </motion.p>

      {/* Prénoms */}
      <motion.h1
        variants={fadeInUp}
          style={{ fontSize: '1.4rem' }}

        className="text-2xl md:text-3xl font-serif text-accent tracking-wide"
      >
        Lena & Leroy
      </motion.h1>

      {/* Texte complémentaire */}
      <motion.p
        variants={fadeInUp}
        className="text-sm md:text-base italic text-[var(--foreground)]/80"
      >
        et seraient honorés de votre présence<br />
        à la cérémonie religieuse qui sera célébrée le
      </motion.p>

      {/* Date et lieu */}
      <motion.div variants={fadeInUp} className="space-y-3 text-refined text-base md:text-lg">
        <p>
          <strong className="text-accent">Jeudi 4 septembre 2025</strong> à 17h00
        </p>
        <p>Salle Le White</p>
        <p>10 Rue de la Croix Rouge, 93330 Neuilly-sur-Marne</p>
      </motion.div>

      {/* Carte */}
      <motion.div
        variants={fadeInUp}
        className="w-full h-40 md:h-64 border-2 border-[var(--accent)]/20 rounded-2xl overflow-hidden shadow-md"
      >
        <iframe
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne&z=15&output=embed"
        />
      </motion.div>

      {/* Boutons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row justify-center gap-3"
      >
        <motion.a
          href="https://www.google.com/maps?q=10+Rue+de+la+Croix+Rouge+93330+Neuilly-sur-Marne"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--accent)] text-black px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[var(--accent)]/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Google Maps
        </motion.a>

        <motion.a
          href="https://waze.com/ul?ll=48.8498,2.5275&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--button-bg)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[var(--button-bg)]/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Waze
        </motion.a>
      </motion.div>

      {/* Grands-parents */}
      
    </motion.section>
  );
}
