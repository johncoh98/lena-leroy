import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--primary)] text-[var(--foreground)] px-6 py-12 relative overflow-hidden font-playfair">

      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-6 w-72 h-72 md:w-80 md:h-80 drop-shadow-xl"
      >
        <img
          src="/logo.png"
          alt="Logo Lena & Leroy"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* BOUTON ENTRER */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        onClick={() => router.push('/invitation')}
        className="bg-[var(--button-bg)] hover:bg-[var(--button-hover)] text-white font-semibold px-10 py-4 rounded-full shadow-lg uppercase tracking-wide text-lg"
      >
        Entrer
      </motion.button>
    </main>
  );
}
