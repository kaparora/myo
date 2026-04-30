import content from "@/data/content.json";
import { MyoBackground } from "@/app/components/MyoBackground";

export default function About() {
  const aboutData = content.about;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MyoBackground className="absolute inset-0 -z-10" drift />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif font-light text-myo-teal mb-12">{aboutData.title}</h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-12">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-light text-myo-teal mb-6">
                {aboutData.garimaroleTitle}
              </h2>
              <p className="text-myo-teal-soft mb-4 leading-relaxed">
                {aboutData.garimaBio}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-light text-myo-teal mb-6">
                {aboutData.philosophy.title}
              </h2>
              <p className="text-myo-teal-soft mb-4 leading-relaxed">
                {aboutData.philosophy.text}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-light text-myo-teal mb-6">
                {aboutData.waldorfExplanation.title}
              </h2>
              <p className="text-myo-teal-soft mb-4 leading-relaxed">
                {aboutData.waldorfExplanation.text}
              </p>
            </section>
          </div>

          {/* Garima's Photos */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="sticky top-20 space-y-6">
              <img
                src="/GarimaArora.jpeg"
                alt={aboutData.photoCaption}
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src="/gallery/garima/garima-1.jpeg"
                alt="Garima with children at MYO"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
