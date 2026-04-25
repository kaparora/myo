import Link from "next/link";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-12 text-center">
        Our Services
      </h1>

      {/* The Nest */}
      <section id="the-nest" className="mb-16 bg-myo-peach/10 rounded-lg p-8">
        <h2 className="text-4xl font-bold text-myo-blue mb-6">The Nest</h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          [Description of The Nest program to be added]
        </p>

        <h3 className="text-2xl font-semibold text-myo-blue mb-4">
          What We Offer
        </h3>
        <ul className="space-y-3 text-gray-700 mb-6 list-disc list-inside">
          <li>Open-ended play area</li>
          <li>Playhouse for toddlers</li>
          <li>Daycare and aftercare services</li>
          <li>Parents co-working space</li>
          <li>Birthday parties & play dates</li>
          <li>Extra-curricular classes</li>
        </ul>

        <Link
          href="/contact"
          className="bg-myo-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
        >
          Inquire About The Nest
        </Link>
      </section>

      {/* The Healing Space */}
      <section
        id="healing-space"
        className="mb-16 bg-myo-pink/10 rounded-lg p-8"
      >
        <h2 className="text-4xl font-bold text-myo-blue mb-6">
          The Healing Space
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          [Description of The Healing Space to be added]
        </p>

        <h3 className="text-2xl font-semibold text-myo-blue mb-4">
          What We Offer
        </h3>
        <ul className="space-y-3 text-gray-700 mb-6 list-disc list-inside">
          <li>Meditation classes</li>
          <li>Arts-based therapy for children with behavioral/learning challenges</li>
          <li>Mental health support for adults</li>
          <li>Special late-hour services (Thursdays & Saturdays)</li>
        </ul>

        <Link
          href="/contact"
          className="bg-myo-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
        >
          Inquire About Healing Services
        </Link>
      </section>

      {/* Special Needs Program */}
      <section
        id="special-needs"
        className="mb-16 bg-myo-coral/10 rounded-lg p-8"
      >
        <h2 className="text-4xl font-bold text-myo-blue mb-6">
          Special Needs Support
        </h2>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          [Description of special needs support to be added]
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          We provide specialized support for children with behavioral and
          learning challenges through art-based therapy and personalized care.
        </p>

        <Link
          href="/contact"
          className="bg-myo-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
        >
          Discuss Your Child's Needs
        </Link>
      </section>

      {/* Hours */}
      <section className="bg-gray-100 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-myo-blue mb-4">Hours</h3>
        <p className="text-lg text-gray-700 mb-4">9:00 AM to 6:30 PM</p>
        <p className="text-gray-600">
          Special late-hour services available on Thursdays & Saturdays
        </p>
      </section>
    </div>
  );
}
