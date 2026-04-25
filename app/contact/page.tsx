"use client";

import { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { MyoBackground } from "@/app/components/MyoBackground";

function ContactFormComponent() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "inquiry",
    honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let token = "";

      // Get reCAPTCHA token if available
      if (executeRecaptcha) {
        try {
          token = await executeRecaptcha("submit_contact_form");
        } catch (recaptchaErr) {
          console.warn("reCAPTCHA error:", recaptchaErr);
          // Continue without token if reCAPTCHA fails
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "inquiry",
          honeypot: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || "Failed to send message");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MyoBackground className="absolute inset-0 -z-10" drift />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-serif font-light text-myo-teal mb-4 text-center">
          Get In Touch
        </h1>
      <p className="text-lg text-myo-teal-soft text-center mb-12">
        Have questions? We'd love to hear from you. Reach out anytime!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-serif font-light text-myo-teal mb-4">Address</h3>
          <a
            href="https://maps.app.goo.gl/ANRuGnoKSBzEAcDY6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-myo-rose hover:underline"
          >
            <p className="text-myo-teal-soft">
              21, Suraj Nagar East<br />
              Civil Lines, Jaipur<br />
              India
            </p>
          </a>
        </div>

        <div>
          <h3 className="text-xl font-serif font-light text-myo-teal mb-4">Phone</h3>
          <p className="text-myo-teal-soft">
            <a
              href="tel:+919311897957"
              className="hover:text-myo-teal transition"
            >
              +91 93118 97957
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif font-light text-myo-teal mb-4">Follow Us</h3>
          <p>
            <a
              href="https://instagram.com/myo_center"
              target="_blank"
              rel="noopener noreferrer"
              className="text-myo-rose hover:underline"
            >
              Instagram: @myo_center
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white/60 border border-myo-peach/30 rounded-lg p-8 max-w-2xl w-full">
          <h2 className="text-2xl font-serif font-light text-myo-teal mb-6">Send a Message</h2>

        {submitted && (
          <div className="bg-myo-peach/20 border border-myo-peach text-myo-rose p-4 rounded-lg mb-6">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="bg-myo-rose/10 border border-myo-rose text-myo-rose p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-myo-teal mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-myo-peach/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-teal"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-myo-teal mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-myo-peach/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-teal"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-myo-teal mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-myo-peach/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-teal"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-myo-teal mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-myo-peach/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-teal"
            >
              <option value="inquiry">General Inquiry</option>
              <option value="daycare">The Nest Daycare</option>
              <option value="healing">The Healing Space</option>
              <option value="event">Event Registration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-myo-teal mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-myo-peach/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-teal"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-myo-teal text-white px-8 py-3 rounded-full hover:opacity-90 transition font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        <p className="text-xs text-myo-teal-soft mt-4 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="hover:underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
        </div>
      </div>

      <div className="mt-12 text-center text-myo-teal-soft">
        <p>Hours: 9:00 AM to 6:30 PM</p>
        <p>Special services available Thursdays & Saturdays until late</p>
      </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-red-600">
          reCAPTCHA is not configured. Please set up environment variables.
        </p>
      </div>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactFormComponent />
    </GoogleReCaptchaProvider>
  );
}
