import Link from "next/link";
import eventsData from "@/data/events.json";
import { MyoBackground } from "@/app/components/MyoBackground";

export default function Events() {
  const upcomingEvents = eventsData;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MyoBackground className="absolute inset-0 -z-10" drift />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif font-light text-myo-teal mb-4 text-center">
          Upcoming Events
        </h1>
        <p className="text-lg text-myo-teal-soft text-center mb-12">
          Join us for special programs and community events
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 border border-myo-peach/30 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{event.image}</div>
              <h3 className="text-2xl font-serif font-light text-myo-teal mb-2">
                {event.title}
              </h3>
              <p className="text-myo-rose font-semibold mb-3">{event.date}</p>
              <p className="text-myo-teal-soft mb-6">{event.description}</p>
              <Link
                href={`/events/${event.id}`}
                className="text-myo-rose font-semibold hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

        {/* Registration CTA */}
        <section className="bg-white/60 border border-myo-peach/30 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-light text-myo-teal mb-6">
            Interested in Our Events?
          </h2>
          <p className="text-myo-teal-soft mb-8 max-w-2xl mx-auto">
            Register for any of our events or get in touch to learn about
            upcoming programs. We'd love to have you join our community!
          </p>
          <Link
            href="/contact"
            className="bg-myo-teal text-white px-8 py-3 rounded-full hover:opacity-90 transition font-bold inline-block"
          >
            Register Now
          </Link>
        </section>

        {/* Placeholder for future event details */}
        <div className="mt-16 text-center text-myo-teal-soft">
          <p>Detailed event pages and registration coming soon</p>
        </div>
      </div>
    </div>
  );
}
