import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-myo-peach">MYO</h3>
            <p className="text-gray-300 text-sm">
              A Waldorf daycare and healing centre focused on child growth and
              active development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-myo-peach">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-myo-peach">
              Contact
            </h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>21, Suraj Nagar East</p>
              <p>Civil Lines, Jaipur</p>
              <p>📞 +91 93118 97957</p>
              <p>
                <a
                  href="https://instagram.com/myo_center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-myo-coral hover:text-myo-pink"
                >
                  @myo_center
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} MYO Learning Centre and Daycare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
