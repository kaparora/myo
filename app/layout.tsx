import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConstructionBanner from "./components/ConstructionBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MYO - A Waldorf Daycare and Healing Centre",
  description: "MYO is a Waldorf daycare and healing centre in Jaipur focusing on child development through art-based therapy and holistic growth.",
  keywords: "daycare, Jaipur, Waldorf, art therapy, child development, healing space",
  openGraph: {
    title: "MYO - A Waldorf Daycare and Healing Centre",
    description: "A place for child growth and active development in Jaipur",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <ConstructionBanner />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
