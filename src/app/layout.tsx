import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORI.CULT — The Oracular Content Engine",
  description: "An AI-powered temple where Orisha-inspired agents and Jyotish transits argue about what you should post next.",
  keywords: ["AI", "content", "Orisha", "Ifa", "Jyotish", "astrology", "multi-agent"],
  authors: [{ name: "ORI.CULT" }],
  openGraph: {
    title: "ORI.CULT — The Oracular Content Engine",
    description: "An AI-powered temple where Orisha-inspired agents and Jyotish transits argue about what you should post next.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
