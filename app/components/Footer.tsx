import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-myo-teal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lotus className="h-7 w-7" />
              <h3 className="text-xl font-serif font-light text-myo-yellow">MYO</h3>
            </div>
            <p className="text-myo-cream text-sm">
              A Waldorf daycare and healing centre focused on child growth and
              active development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-myo-yellow">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-myo-cream hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-myo-cream hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-myo-cream hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-myo-cream hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-myo-yellow">
              Contact
            </h4>
            <div className="text-myo-cream text-sm space-y-2">
              <p>21, Suraj Nagar East</p>
              <p>Civil Lines, Jaipur</p>
              <p>📞 +91 93118 97957</p>
              <p>
                <a
                  href="https://instagram.com/myo_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-myo-yellow hover:text-white"
                >
                  @myo_center
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-myo-teal-soft/30 pt-3 pb-0">
          <p className="text-center text-myo-cream text-sm m-0">
            © {currentYear} MYO Learning Centre and Daycare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="var(--color-myo-yellow)">
      <g>
        <path d="M16 8 C 14 14 14 18 16 22 C 18 18 18 14 16 8 Z" />
        <path d="M16 22 C 12 20 9 17 8 12 C 12 12 15 16 16 22 Z" opacity="0.92" />
        <path d="M16 22 C 20 20 23 17 24 12 C 20 12 17 16 16 22 Z" opacity="0.92" />
        <path d="M16 22 C 10 21 5 18 3 14 C 7 13 12 15 16 22 Z" opacity="0.78" />
        <path d="M16 22 C 22 21 27 18 29 14 C 25 13 20 15 16 22 Z" opacity="0.78" />
      </g>
    </svg>
  );
}
