import Link from "next/link";
import content from "@/data/content.json";

export default function Services() {
  const { services, businessInfo } = content;
  const servicesList = [services.theNest, services.healingSpace, services.specialNeeds];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-12 text-center">
        Our Services
      </h1>

      {servicesList.map((service, index) => {
        const bgColors = [
          "bg-myo-peach/10",
          "bg-myo-pink/10",
          "bg-myo-coral/10",
        ];

        return (
          <section
            key={service.id}
            id={service.id}
            className={`mb-16 ${bgColors[index]} rounded-lg p-8`}
          >
            <h2 className="text-4xl font-bold text-myo-blue mb-6">
              {service.name}
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {service.fullDescription}
            </p>

            <h3 className="text-2xl font-semibold text-myo-blue mb-4">
              What We Offer
            </h3>
            <ul className="space-y-3 text-gray-700 mb-6 list-disc list-inside">
              {service.offerings.map((offering, idx) => (
                <li key={idx}>{offering}</li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-myo-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
            >
              {service.ctaText}
            </Link>
          </section>
        );
      })}

      {/* Hours */}
      <section className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-myo-blue mb-4">Hours</h3>
        <p className="text-lg text-gray-700 mb-4">{businessInfo.hours}</p>
        <p className="text-gray-600">{businessInfo.specialHours}</p>
      </section>
    </div>
  );
}
