'use client';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import RSVPForm from '../components/RSVPForm';
import ScrollingMotifs from '../components/ScrollingMotifs';
import DecorativeDivider from '../components/DecorativeDivider';
import MainAudioPlayer from '../components/MainAudioPlayer';
import WeddingLocation from '../components/WeddingLocation';
import { useEffect } from 'react';
import Hero from '../components/Hero';



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
        
                  <Hero />


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