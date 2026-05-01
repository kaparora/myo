import type { Metadata } from "next";
import Link from "next/link";
import content from "@/data/content.json";
import { MyoBackground } from "@/app/components/MyoBackground";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore MYO's services in Jaipur — The Nest Waldorf daycare for toddlers, The Healing Space for arts-based therapy, and special needs support for children and families.",
};

const servicePhotos: Record<string, { src: string; alt: string }[]> = {
  "the-nest": [
    { src: "/gallery/space/space-1.jpeg", alt: "The Nest play space" },
    { src: "/gallery/activities/activity-6.jpeg", alt: "Children doing art activities" },
    { src: "/gallery/fun/fun-5.JPG", alt: "Children having fun" },
  ],
  "healing-space": [
    { src: "/gallery/garima/garima-7.JPG", alt: "Garima working with children" },
    { src: "/gallery/activities/activity-1.jpeg", alt: "Art therapy activity" },
    { src: "/gallery/space/space-4.jpeg", alt: "The Healing Space" },
  ],
};

export default function Services() {
  const { services, businessInfo } = content;
  const servicesList = [services.theNest, services.healingSpace, services.specialNeeds];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MyoBackground className="absolute inset-0 -z-10" drift />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif font-light text-myo-teal mb-12 text-center">
          Our Services
        </h1>

        {servicesList.map((service) => {
          const photos = servicePhotos[service.id] ?? [];
          return (
            <section
              key={service.id}
              id={service.id}
              className="mb-16 bg-white/70 border border-myo-peach/30 rounded-lg p-8 hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-serif font-light text-myo-teal mb-6">
                {service.name}
              </h2>
              <p className="text-myo-teal-soft text-lg mb-6 leading-relaxed">
                {service.fullDescription}
              </p>

              {photos.length > 0 && (
                <div className={`grid gap-4 mb-8 ${photos.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                  {photos.map((photo) => (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full aspect-square object-cover rounded-full"
                    />
                  ))}
                </div>
              )}

              <h3 className="text-2xl font-semibold text-myo-teal mb-4">
                What We Offer
              </h3>
              <ul className="space-y-3 text-myo-teal-soft mb-6 list-disc list-inside">
                {service.offerings.map((offering, idx) => (
                  <li key={idx}>{offering}</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="bg-myo-teal text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
              >
                {service.ctaText}
              </Link>
            </section>
          );
        })}

        {/* Hours */}
        <section className="bg-white/60 border border-myo-peach/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-light text-myo-teal mb-4">Hours</h3>
          <p className="text-lg text-myo-teal-soft mb-4">{businessInfo.hours}</p>
          <p className="text-myo-teal-soft">{businessInfo.specialHours}</p>
        </section>
      </div>
    </div>
  );
}
