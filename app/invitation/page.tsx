'use client';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';
import RSVPForm from '../components/RSVPForm';
import WeddingLocation from '../components/WeddingLocation';
import OurStory from '../components/OurStory';
import ScrollingMotifs from '../components/ScrollingMotifs';
import DecorativeDivider from '../components/DecorativeDivider';
import AudioPlayer from '../components/AudioPlayer';
import { useEffect } from 'react';

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
    <main className="min-h-screen text-[var(--foreground)] py-12 px-4 md:px-10 space-y-20 bg-sides">
      <ScrollingMotifs />
      <AudioPlayer audioUrl="/wedding-music.mp3" />
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto space-y-8 ornamental-border elegant-shadow bg-white/90 p-12 rounded-lg"
      >
        <h1 className="title-royal text-5xl md:text-6xl text-[var(--accent)] mb-6">
          <span className="gold-accent">L</span>ena <span className="gold-shine">&</span> <span className="gold-accent">L</span>eroy
        </h1>
        <div className="space-y-4">
          <p className="title-elegant text-2xl md:text-3xl text-[var(--secondary)]">
            <span className="gold-accent">Jeudi</span> 4 septembre <span className="gold-accent">2025</span>
          </p>
          <p className="text-refined text-xl italic shine-effect">Paris, France</p>
        </div>
        <div className="fancy-divider my-10"></div>
        <blockquote className="text-accent animate-fadeInUp gold-shine">
          Nous avons l&apos;honneur de vous convier à célébrer notre union
        </blockquote>
      </motion.section>

      <section className="scroll-reveal">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 elegant-shadow bg-white/90 p-12 rounded-lg">
          <div className="text-center space-y-4">
            <h3 className="title-royal text-2xl">
              <span className="gold-accent">La</span> Cérémonie
            </h3>
            <p className="text-accent text-xl">15h00</p>
            <p className="text-refined text-lg">Mairie du 16ème arrondissement</p>
          </div>
          <div className="text-center space-y-4">
            <h3 className="title-royal text-2xl">
              <span className="gold-accent">La</span> Réception
            </h3>
            <p className="text-accent text-xl">18h00</p>
            <p className="text-refined text-lg">Pavillon Royal</p>
          </div>
        </div>
      </section>

      <DecorativeDivider />

      <div className="scroll-reveal">
        <Countdown />
      </div>

      <DecorativeDivider />

      <div className="scroll-reveal">
        <OurStory />
      </div>

      <DecorativeDivider />

      <div className="scroll-reveal">
        <RSVPForm />
      </div>

      <DecorativeDivider />

      <div className="scroll-reveal">
        <WeddingLocation />
      </div>

      <footer className="text-center space-y-4 py-12">
        <p className="title-royal text-2xl">
          <span className="gold-accent">L</span>ena <span className="gold-shine">&</span> <span className="gold-accent">L</span>eroy
        </p>
        <p className="text-classic text-sm opacity-70">© 2025 • Merci de célébrer avec nous ✦</p>
      </footer>
    </main>
  );
}