import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-myo-peach via-myo-pink to-white min-h-[600px] flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Image
              src="/myo.jpg"
              alt="MYO Logo"
              width={150}
              height={150}
              className="rounded-full mx-auto"
              priority
            />
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
            A Waldorf Daycare and Healing Centre
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A nurturing space for child growth and active development through
            art-based learning and holistic care.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/services"
              className="bg-myo-blue text-white px-8 py-3 rounded-full hover:opacity-90 transition font-medium"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="bg-white text-myo-blue border-2 border-myo-blue px-8 py-3 rounded-full hover:bg-blue-50 transition font-medium"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-myo-blue mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Nest */}
            <div className="bg-myo-peach/20 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-myo-blue mb-4">The Nest</h3>
              <p className="text-gray-700 mb-6">
                A safe, nurturing space for toddlers with open-ended play,
                Waldorf-based learning, and a co-working area for parents.
              </p>
              <Link
                href="/services#the-nest"
                className="text-myo-blue font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* The Healing Space */}
            <div className="bg-myo-pink/20 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-myo-blue mb-4">
                The Healing Space
              </h3>
              <p className="text-gray-700 mb-6">
                Art-based therapy for children with behavioral and learning
                challenges. Meditation and wellness support for adults.
              </p>
              <Link
                href="/services#healing-space"
                className="text-myo-blue font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Events & Programs */}
            <div className="bg-myo-coral/20 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-myo-blue mb-4">
                Events & Programs
              </h3>
              <p className="text-gray-700 mb-6">
                Summer camps, art workshops, birthday celebrations, and play
                dates for community building and creative expression.
              </p>
              <Link
                href="/events"
                className="text-myo-blue font-semibold hover:underline"
              >
                View Events →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-myo-blue text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Get in touch to learn more about our programs and how we can support
            your child's growth journey.
          </p>
          <Link
            href="/contact"
            className="bg-white text-myo-blue px-8 py-3 rounded-full hover:bg-gray-100 transition font-bold inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
