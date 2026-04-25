import Link from "next/link";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Camp 2024",
      date: "June - July 2024",
      description: "Fun-filled summer camp with art, play, and creative activities",
      image: "🏕️",
    },
    {
      id: 2,
      title: "Art Workshop",
      date: "Every Saturday",
      description: "Creative art workshop for children of all ages",
      image: "🎨",
    },
    {
      id: 3,
      title: "Meditation Class",
      date: "Thursdays & Saturdays",
      description: "Mindfulness and meditation for children and adults",
      image: "🧘",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-4 text-center">
        Upcoming Events
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Join us for special programs and community events
      </p>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{event.image}</div>
            <h3 className="text-2xl font-bold text-myo-blue mb-2">
              {event.title}
            </h3>
            <p className="text-myo-coral font-semibold mb-3">{event.date}</p>
            <p className="text-gray-700 mb-6">{event.description}</p>
            <Link
              href={`/events/${event.id}`}
              className="text-myo-blue font-semibold hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

      {/* Registration CTA */}
      <section className="bg-myo-blue/5 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold text-myo-blue mb-6">
          Interested in Our Events?
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Register for any of our events or get in touch to learn about
          upcoming programs. We'd love to have you join our community!
        </p>
        <Link
          href="/contact"
          className="bg-myo-blue text-white px-8 py-3 rounded-full hover:opacity-90 transition font-bold inline-block"
        >
          Register Now
        </Link>
      </section>

      {/* Placeholder for future event details */}
      <div className="mt-16 text-center text-gray-500">
        <p>Detailed event pages and registration coming soon</p>
      </div>
    </div>
  );
}
