// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2025-09-04T15:00:00+02:00");

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
    return {
      days: Math.floor(totalSeconds / (3600 * 24)),
      hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }

  return (
    <div className="invitation-container p-6 md:p-12 rounded-lg text-center max-w-3xl mx-auto">
      <h2 className="title-royal text-xl md:text-3xl mb-8 md:mb-12">
        <span className="text-accent">L</span>e grand jour approche
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
    <div className="flex flex-col items-center space-y-2">
      <div className="bg-[rgba(212,175,55,0.1)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2 md:p-4 w-full aspect-square flex items-center justify-center">
        <div className="text-2xl md:text-4xl lg:text-5xl text-accent font-light">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-refined text-sm md:text-base">{label}</div>
    </div>
  );
}
