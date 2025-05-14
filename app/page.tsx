'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleNavigation = () => {
    try {
      router.push('/invitation');
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback en cas d'erreur
      window.location.href = '/invitation';
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary)] text-[var(--foreground)] relative overflow-hidden">
      {/* Arrière-plan */}
      <div
        className="absolute inset-0 bg-[url('/toile-de-jouy-violet.png')] bg-repeat opacity-[0.03]"
        style={{ backgroundSize: '500px' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-16 w-64 h-64 md:w-80 md:h-80 relative"
        >
          <Image
            src="/logo.png"
            alt="Logo Lena & Leroy"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-contain contrast-[1.2] brightness-[0.85]"
            priority
          />
        </motion.div>

        {/* Bouton d'entrée */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          onClick={handleNavigation}
          className="bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-[var(--foreground)] font-playfair px-12 py-4 rounded-full shadow-lg uppercase tracking-wider text-lg transition-all duration-300"
        >
          Découvrir
        </motion.button>
      </div>
    </main>
  );
}