'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Motif = ({ className = '', rotate = 0, scale = 1 }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    className={className}
    style={{ transform: `rotate(${rotate}deg) scale(${scale})` }}
  >
    <path
      d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
  </svg>
);

export default function ScrollingMotifs() {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.5]);
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3]);
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.7]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Motifs de gauche */}
      <div className="absolute left-8 top-0 h-full">
        <motion.div
          className="relative"
          style={{ y: y1 }}
        >
          <Motif className="text-[var(--secondary)] absolute -left-4" rotate={45} />
          <Motif className="text-[var(--accent)] absolute left-8 top-20" rotate={30} scale={0.8} />
          <Motif className="text-[var(--secondary)] absolute -left-2 top-40" rotate={60} scale={1.2} />
        </motion.div>
      </div>

      {/* Motifs de droite */}
      <div className="absolute right-8 top-0 h-full">
        <motion.div
          className="relative"
          style={{ y: y2 }}
        >
          <Motif className="text-[var(--secondary)] absolute -right-4" rotate={-45} />
          <Motif className="text-[var(--accent)] absolute right-8 top-32" rotate={-30} scale={0.8} />
          <Motif className="text-[var(--secondary)] absolute -right-2 top-60" rotate={-60} scale={1.2} />
        </motion.div>
      </div>

      {/* Motifs centraux */}
      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
        <motion.div
          className="relative"
          style={{ y: y3 }}
        >
          <Motif className="text-[var(--accent)] absolute -translate-x-1/2 top-40" rotate={0} scale={0.6} />
          <Motif className="text-[var(--secondary)] absolute -translate-x-1/2 top-80" rotate={45} scale={0.5} />
        </motion.div>
      </div>
    </div>
  );
} 