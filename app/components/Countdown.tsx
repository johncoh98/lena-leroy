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
    <div className="invitation-container p-4 md:p-8 rounded-lg text-center max-w-3xl mx-auto">
      <h2 className="title-royal text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
        <span className="text-accent">L</span>e grand jour approche
      </h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
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
    <div className="flex flex-col items-center space-y-1.5">
      <div className="bg-[rgba(212,175,55,0.1)] backdrop-blur-sm border border-[var(--accent)]/20 rounded-lg p-2 md:p-3 w-16 md:w-20 flex items-center justify-center">
        <div className="text-xl md:text-2xl lg:text-3xl text-accent font-light">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-refined text-xs md:text-sm">{label}</div>
    </div>
  );
}
