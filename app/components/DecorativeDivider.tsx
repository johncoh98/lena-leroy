'use client';

import { motion } from 'framer-motion';

const RoyalOrnament = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    className="text-[var(--secondary)]"
  >
    <path
      d="M60 0C62 0 64 1 64 4C64 7 62 8 60 8C58 8 56 7 56 4C56 1 58 0 60 0ZM60 12L70 20L60 28L50 20L60 12ZM30 16C32 16 34 17 34 20C34 23 32 24 30 24C28 24 26 23 26 20C26 17 28 16 30 16ZM90 16C92 16 94 17 94 20C94 23 92 24 90 24C88 24 86 23 86 20C86 17 88 16 90 16ZM0 20L40 20L45 20L50 20L60 20L70 20L75 20L80 20L120 20L80 20L75 20L70 20L60 20L50 20L45 20L40 20L0 20Z"
      fill="currentColor"
    />
  </svg>
);

export default function DecorativeDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 flex flex-col items-center gap-4"
    >
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent" />
        <RoyalOrnament />
        <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[var(--secondary)] text-2xl">✦</span>
        <span className="text-[var(--secondary)] text-2xl">✦</span>
        <span className="text-[var(--secondary)] text-2xl">✦</span>
      </div>
    </motion.div>
  );
} 