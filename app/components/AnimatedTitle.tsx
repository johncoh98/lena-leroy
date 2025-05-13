'use client';

import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export default function AnimatedTitle({ text, className = "text-4xl md:text-6xl font-bold text-center text-[var(--foreground)]" }: AnimatedTitleProps) {
  const letters = text.split('');

  return (
    <h1 className={className}>
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
