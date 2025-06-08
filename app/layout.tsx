import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { Petit_Formal_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const petitFormal = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-petit-formal",
});

export const metadata: Metadata = {
  title: "Lena & Leroy - Invitation au Mariage",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} ${cormorant.variable} ${petitFormal.variable} bg-[var(--background)] text-[var(--foreground)]`}>
        {children}
      </body>
    </html>
  );
}