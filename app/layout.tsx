import type { Metadata, Viewport } from "next";
import { Archivo, DM_Serif_Display, Geist_Mono, Inter } from "next/font/google";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaffy Studios — Creative Studio",
  description:
    "Gaffy Studios Ltd — the creative studio behind SHOTBYGAFAR and Gafar Aleshe. Video production, photography, web development, and digital products. Based in Portsmouth, UK.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Gaffy Studios — Creative Studio",
    description:
      "The creative studio behind SHOTBYGAFAR and Gafar Aleshe. Video production, photography, web development, and digital products.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${archivo.variable} ${dmSerif.variable} ${geistMono.variable}`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
