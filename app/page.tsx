'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary)] text-[var(--foreground)] px-6 py-20 font-playfair">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-10 w-64 h-64 md:w-80 md:h-80 drop-shadow-xl"
      >
        <img src="/logo.png" alt="Logo Lena & Leroy" className="w-full h-full object-contain" />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/invitation')}
        className="bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white font-semibold px-10 py-4 rounded-full shadow-lg uppercase tracking-wider text-lg"
      >
        Entrer
      </motion.button>
    </main>
  );
}