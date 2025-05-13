// components/Countdown.tsx
"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2025-09-04T16:00:00+02:00");

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
    <div className="bg-white/80 border border-[var(--button-bg)] p-6 rounded-3xl shadow-xl text-center max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Le mariage aura lieu dans :</h2>
      <div className="flex justify-center gap-4 text-[var(--foreground)]">
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
    <div className="bg-[var(--secondary)] text-white px-4 py-2 rounded-xl w-20 shadow-md">
      <div className="text-3xl font-bold">{value.toString().padStart(2, "0")}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}
