"use client";

import { useState } from "react";
import { MyoBackground } from "@/app/components/MyoBackground";

type Photo = { src: string; alt: string };

const sections: { title: string; photos: Photo[] }[] = [
  {
    title: "Our Space",
    photos: [
      { src: "/gallery/space/space-1.jpeg", alt: "MYO play space" },
      { src: "/gallery/space/space-2.jpeg", alt: "MYO play space" },
      { src: "/gallery/space/space-3.jpeg", alt: "MYO play space" },
      { src: "/gallery/space/space-4.jpeg", alt: "MYO play space" },
      { src: "/gallery/space/space-5.jpeg", alt: "MYO play space" },
      { src: "/gallery/space/space-6.jpeg", alt: "MYO play space" },
    ],
  },
  {
    title: "Creative Activities",
    photos: [
      { src: "/gallery/activities/activity-1.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-2.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-3.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-4.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-5.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-6.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-7.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-8.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-9.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-10.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-11.jpeg", alt: "Children doing art" },
      { src: "/gallery/activities/activity-12.jpeg", alt: "Children doing art" },
    ],
  },
  {
    title: "Happy Moments",
    photos: [
      { src: "/gallery/fun/fun-1.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-2.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-3.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-4.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-5.JPG", alt: "Children having fun" },
      { src: "/gallery/fun/fun-6.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-7.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-8.jpeg", alt: "Children having fun" },
      { src: "/gallery/fun/fun-9.jpeg", alt: "Children having fun" },
    ],
  },
  {
    title: "Garima & Children",
    photos: [
      { src: "/gallery/garima/garima-1.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-2.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-3.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-4.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-5.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-6.jpeg", alt: "Garima with children" },
      { src: "/gallery/garima/garima-7.JPG", alt: "Garima with children" },
    ],
  },
];

const allPhotos = sections.flatMap((s) => s.photos);

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + allPhotos.length) % allPhotos.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % allPhotos.length);

  let globalIndex = 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MyoBackground className="absolute inset-0 -z-10" drift />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif font-light text-myo-teal mb-4 text-center">Gallery</h1>
        <p className="text-lg text-myo-teal-soft text-center mb-16">
          A glimpse into life at MYO
        </p>

        {sections.map((section) => (
          <div key={section.title} className="mb-16">
            <h2 className="text-2xl font-serif font-light text-myo-teal mb-6">{section.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {section.photos.map((photo) => {
                const idx = globalIndex++;
                return (
                  <button
                    key={photo.src}
                    onClick={() => openLightbox(idx)}
                    className="overflow-hidden rounded-lg aspect-square focus:outline-none focus:ring-2 focus:ring-myo-teal"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-6 text-white text-4xl leading-none hover:opacity-70"
            onClick={closeLightbox}
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white text-4xl leading-none hover:opacity-70 px-4 py-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={allPhotos[lightboxIndex].src}
            alt={allPhotos[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white text-4xl leading-none hover:opacity-70 px-4 py-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {allPhotos.length}
          </p>
        </div>
      )}
    </div>
  );
}
