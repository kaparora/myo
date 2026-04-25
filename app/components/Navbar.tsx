import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/myo.png"
              alt="MYO Logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-myo-blue transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-myo-blue transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-myo-blue transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-myo-blue transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-myo-blue transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-myo-blue text-white px-6 py-2 rounded-full hover:opacity-90 transition font-medium"
          >
            Inquire
          </Link>
        </div>
      </div>
    </nav>
  );
}
