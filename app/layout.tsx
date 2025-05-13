import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Lena & Leroy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="`${inter.className} bg-[var(--background)] text-[var(--foreground)]`">
        {children}
      </body>
    </html>
  );
}