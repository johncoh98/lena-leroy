import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

export default function TypewriterEffect({ text, delay = 0, className = '' }: TypewriterEffectProps) {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay / 1000 },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap justify-center gap-x-2 ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={child}
          className="inline-block"
          style={{
            transform: `rotate(${Math.random() * 1 - 0.5}deg)`,
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.span>
  );
} 