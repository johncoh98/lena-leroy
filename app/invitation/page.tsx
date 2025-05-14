'use client';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import RSVPForm from '../components/RSVPForm';
import ScrollingMotifs from '../components/ScrollingMotifs';
import DecorativeDivider from '../components/DecorativeDivider';
import MainAudioPlayer from '../components/MainAudioPlayer';
import WeddingLocation from '../components/WeddingLocation';
import TypewriterEffect from '../components/TypewriterEffect';
import { useEffect } from 'react';

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

const defaultTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
};

export default function InvitationPage() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-[var(--foreground)]">
      {/* Audio Player Section */}
      <section className="h-screen relative">
        <MainAudioPlayer audioUrl="/wedding-music.mp3" />
      </section>

      {/* Rest of the content */}
      <div className="py-12 px-4 md:px-10 space-y-20">
        <ScrollingMotifs />
        
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={stagger}
          className="text-center max-w-3xl mx-auto space-y-8 invitation-container p-12 rounded-lg relative"
        >
          <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm rounded-lg -z-10"></div>

          <motion.h1 
            variants={fadeInUp}
            className="title-royal text-2xl md:text-3xl lg:text-4xl mb-6"
          >
            <span className="text-accent">L</span>ena <span className="text-accent">&</span> <span className="text-accent">L</span>eroy
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            className="space-y-4"
          >
            <p className="text-refined text-xl md:text-2xl">
              <span className="text-accent">Jeudi</span> 4 septembre <span className="text-accent">2025</span>
            </p>
            <p className="text-refined text-lg italic">Paris, France</p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="my-10 h-px bg-[var(--accent)]/20"
          />

          <motion.blockquote 
            variants={fadeInUp}
            className="text-refined text-xl"
          >
            <TypewriterEffect 
              text="Nous avons l'honneur de vous convier à célébrer notre union"
              delay={800}
              className="italic"
            />
          </motion.blockquote>
        </motion.section>



        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
          className="w-full flex justify-center"
        >
          <DecorativeDivider />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
        >
          <Countdown />
        </motion.div>
                <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
          className="w-full flex justify-center"
        >
          <DecorativeDivider />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
        >
          <WeddingLocation />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
          className="w-full flex justify-center"
        >
          <DecorativeDivider />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={defaultTransition}
        >
          <RSVPForm />
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="relative text-center space-y-6 py-16 mt-24 border-t border-[var(--accent)]/10"
        >
          <div className="absolute inset-0 bg-[rgba(42,26,58,0.3)] backdrop-blur-sm -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={defaultTransition}
          >
            <h2 className="title-royal text-2xl mb-2">
              <span className="text-[var(--accent)]">L</span>ena 
              <span className="text-[var(--accent)] mx-2">&</span> 
              <span className="text-[var(--accent)]">L</span>eroy
            </h2>
            <p className="text-refined text-lg">4 septembre 2025 • Paris</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={defaultTransition}
            className="flex flex-col items-center space-y-3"
          >
            <p className="text-refined text-sm opacity-80">
              Merci de célébrer avec nous
            </p>
            <div className="flex items-center gap-2 text-[var(--accent)]">
              <span>✦</span>
              <span className="w-16 h-px bg-[var(--accent)]/30"></span>
              <span>✦</span>
            </div>
            <p className="text-refined text-sm opacity-60">© 2025</p>
          </motion.div>
        </motion.footer>
      </div>
    </main>
  );
}