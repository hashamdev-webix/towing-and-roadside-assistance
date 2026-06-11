import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import { SITE } from "@/lib/site";
import { EmergencyBar } from "@/components/layout/EmergencyBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "towing",
    "24 hour towing",
    "emergency towing",
    "roadside assistance",
    "tow truck",
    "battery boost",
    "tire change",
    "lockout service",
    "fuel delivery",
    "flatbed towing",
    "heavy duty towing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen bg-surface-white text-ink-800 antialiased flex flex-col">
        <EmergencyBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
