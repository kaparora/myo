import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MYO - A Waldorf Daycare and Healing Centre",
  description: "MYO is a Waldorf daycare and healing centre in Jaipur focusing on child development through art-based therapy and holistic growth.",
  keywords: "daycare, Jaipur, Waldorf, art therapy, child development, healing space",
  icons: {
    icon: "/favicon.svg",
  },
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
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-myo-teal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
