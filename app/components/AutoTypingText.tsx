'use client';

import { TypeAnimation } from 'react-type-animation';

export default function AutoTypingText() {
  return (
    <TypeAnimation
      sequence={[
        'Lena & Leroy',
        1000,
        'Jeudi 4 septembre 2025',
        1000,
        'Paris, France',
      ]}
      wrapper="h1"
      speed={50}
      className="text-4xl md:text-6xl font-bold text-center text-[var(--foreground)]"
      repeat={Infinity}
    />
  );
}
