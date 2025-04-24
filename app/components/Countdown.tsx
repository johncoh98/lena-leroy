'use client';

import { useEffect, useState } from 'react';

const weddingDate = new Date('2025-09-04T16:00:00+02:00'); // 4 sept à 16h à Paris

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();

    const totalSeconds = Math.max(0, Math.floor(diff / 1000));
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center text-[var(--foreground)] bg-[var(--primary)] p-6 rounded-2xl shadow-lg border border-[var(--button-bg)] max-w-xl mx-auto">
      <h2 className="text-3xl font-bold tracking-wide mb-2">Le mariage aura lieu dans :</h2>
      <div className="flex gap-6 text-3xl font-bold">
        <TimeBox label="Jours" value={timeLeft.days} />
        <TimeBox label="Heures" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Secondes" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 bg-[var(--button-bg)] rounded-xl shadow-md w-20 transition-all duration-200 hover:scale-105">
      <span className="text-4xl text-white">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm text-[var(--background)] mt-1">{label}</span>
    </div>
  );
}
