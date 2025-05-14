import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MainAudioPlayerProps {
  audioUrl: string;
}

export default function MainAudioPlayer({ audioUrl }: MainAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const { currentTime, duration } = audioRef.current;
        const progressPercent = (currentTime / duration) * 100;
        setProgress(progressPercent);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'url(/toile-de-jouy-violet.png)' }}>
      {/* Content Container with Background */}
      <div className="relative z-10 flex flex-col items-center justify-center p-16 rounded-3xl bg-white/40 backdrop-blur-sm">
        {/* Logo (non-clickable) */}
        <div className="relative mb-12">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="drop-shadow-lg"
          />
        </div>

        {/* Audio Controls */}
        <div className="flex flex-col items-center space-y-6">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="relative cursor-pointer w-12 h-12 flex items-center justify-center bg-white/80 rounded-full shadow-lg hover:bg-white transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isPlaying ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            </motion.div>
          </motion.button>

          {/* Progress Bar */}
          <div className="w-full max-w-[200px]">
            <div className="relative py-2">
              <motion.div
                className="w-full"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: 0.4,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-[3px] bg-[var(--accent)] rounded-full shadow-sm" />
              </motion.div>

              <motion.div
                className="absolute bottom-2 w-full overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="h-[3px] bg-[var(--accent)] rounded-full shadow-md" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
} 