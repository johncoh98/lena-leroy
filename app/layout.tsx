import type { Metadata } from "next";
import "./globals.css";





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
      <body className="bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--button-hover)]">

        {children}
        
      </body>
    </html>
  );
}
