import type { Metadata, Viewport } from "next";
import { Anton, Archivo, UnifrakturMaguntia } from "next/font/google";

import { brand } from "@/data/birria";

import "./globals.css";

// Blackletter like the "Birria Barrio" wordmark on their posts and flyers.
const unifraktur = UnifrakturMaguntia({
  variable: "--font-unifraktur",
  subsets: ["latin"],
  weight: "400",
});

// Chunky condensed caps, like the type on their own flyers.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const title = `${brand.name} | Birria tacos, quesabirria and consomé in San Antonio`;

export const metadata: Metadata = {
  title,
  description: brand.description,
  // Demo build, shared only with Birria Barrio: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: brand.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${unifraktur.variable} ${anton.variable} ${archivo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
