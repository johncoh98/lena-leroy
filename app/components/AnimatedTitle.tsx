'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle({ text }: { text: string }) {
  const letters = text.split('');

  return (
    <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--foreground)]">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}
