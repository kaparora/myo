import Link from "next/link";
import { MyoBackground } from "@/app/components/MyoBackground";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <MyoBackground className="absolute inset-0 -z-10" drift />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex min-h-screen flex-col pt-0">
          {/* Hero Content */}
          <section className="flex flex-1 max-w-2xl flex-col justify-center pt-[4%]">
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-myo-rose">
              Daycare · Art Therapy · Jaipur
            </div>
            <h1 className="m-0 mb-6 font-serif text-5xl font-light leading-[0.98] tracking-[-0.015em] md:text-7xl lg:text-[88px]">
              A gentle place to{" "}
              <em className="font-normal italic text-myo-rose">grow, create, heal.</em>
            </h1>
            <p className="m-0 mb-9 max-w-lg text-base leading-relaxed text-myo-teal-soft md:text-lg">
              MYO is a Waldorf-inspired daycare and art therapy centre in Jaipur—where children develop through creative play, mindful practices, and the healing power of making things with their hands. We nurture not just learning, but emotional wellbeing and confidence.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/services"
                className="inline-flex items-center gap-3.5 rounded-full bg-myo-teal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:opacity-90"
              >
                <span>Explore Services</span>
                <Arrow />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3.5 rounded-full border-2 border-myo-teal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-myo-teal transition hover:bg-myo-cream"
              >
                <span>Inquire Now</span>
                <Arrow />
              </Link>
            </div>
          </section>

          {/* Footer meta */}
          <footer className="flex items-end justify-between text-[11px] uppercase tracking-[0.18em] text-myo-teal-soft max-w-2xl">
            <div>Civil Lines · Jaipur</div>
            <div className="text-right leading-7">
              Ages 2 – 8
              <br />
              Mon – Sat · 8:30 – 18:00
            </div>
          </footer>
        </div>
      </section>

    </>
  );
}

function Arrow() {
  return (
    <span className="relative block h-px w-[18px] bg-current">
      <span
        aria-hidden
        className="absolute -right-px -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-current"
      />
    </span>
  );
}
