'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

interface AudioPlayerProps {
  audioUrl: string;
}

export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <motion.button
        onClick={togglePlay}
        className="fixed bottom-8 right-8 z-50 bg-[rgba(42,26,58,0.95)] backdrop-blur-md border border-[var(--accent)]/20 rounded-full p-4 shadow-xl hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          scale: isPlaying ? 1.1 : 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          {isPlaying ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <FaPause className="w-6 h-6 text-[var(--accent)]" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <FaPlay className="w-6 h-6 text-[var(--accent)] ml-1" />
            </motion.div>
          )}
          <motion.div
            className="absolute inset-0 border-2 border-[var(--accent)]/30 rounded-full"
            animate={{
              scale: isPlaying ? [1, 1.2, 1] : 1,
              opacity: isPlaying ? [0.5, 0, 0.5] : 0.5
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </motion.button>
    </>
  );
} 