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
  title: {
    default: "MYO — Waldorf Daycare & Healing Centre, Jaipur",
    template: "%s | MYO Jaipur",
  },
  description: "MYO is a Waldorf-inspired daycare and art therapy centre in Civil Lines, Jaipur. Nurturing child development through creative play, mindfulness, and holistic care.",
  keywords: "daycare Jaipur, Waldorf daycare Jaipur, art therapy Jaipur, child development Jaipur, Civil Lines daycare, toddler care Jaipur, healing centre Jaipur",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "MYO — Waldorf Daycare & Healing Centre, Jaipur",
    description: "A nurturing space for child growth through creative play, Waldorf education, and arts-based therapy in Civil Lines, Jaipur.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "MYO — Waldorf Daycare & Healing Centre",
              description: "A Waldorf-inspired daycare and art therapy centre in Jaipur nurturing child development through creative play, mindfulness, and holistic care.",
              url: "https://myo.center",
              telephone: "+919311897957",
              address: {
                "@type": "PostalAddress",
                streetAddress: "21, Suraj Nagar East",
                addressLocality: "Civil Lines, Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302006",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.9124,
                longitude: 75.7873,
              },
              openingHours: "Mo-Sa 09:00-18:30",
              sameAs: [
                "https://instagram.com/myo_center",
                "https://maps.app.goo.gl/ki4F6zffwzvuj7wp8",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
