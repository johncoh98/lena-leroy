import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';


const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '700'] });



export const metadata: Metadata = {
  title: "Lena & Leroy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${playfair.className} bg-[var(--background)] text-[var(--foreground)]`}>

        {children}
        
      </body>
    </html>
  );
}
