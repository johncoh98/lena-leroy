'use client';

import { motion } from 'framer-motion';

const events = [
  { time: '16h00', label: 'Buffet d’accueil', icon: '🥂' },
  { time: '17h00', label: 'Houppa', icon: '💍' },
  { time: '18h00', label: 'Danses & ambiance', icon: '🕺' },
  { time: '20h00', label: 'Repas festif', icon: '🍽️' },
];

export default function WeddingProgram() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 text-center">
      <h3 className="text-4xl md:text-5xl font-bold tracking-wide uppercase text-[var(--foreground)] mb-10">
        Programme de la journée
      </h3>
      <div className="flex flex-col space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-60 border border-[var(--button-bg)] rounded-2xl py-4 px-6 shadow-md"
          >
            <div className="flex items-center space-x-4 text-xl font-semibold">
              <span className="text-2xl">{event.icon}</span>
              <span className="text-[var(--foreground)]">{event.time}</span>
            </div>
            <p className="mt-2 md:mt-0 text-[var(--foreground)] italic text-lg">
              {event.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}