"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "inquiry",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "inquiry",
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-myo-blue mb-4 text-center">
        Get In Touch
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Have questions? We'd love to hear from you. Reach out anytime!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-myo-blue mb-4">Address</h3>
          <p className="text-gray-700">
            21, Suraj Nagar East<br />
            Civil Lines, Jaipur<br />
            India
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-myo-blue mb-4">Phone</h3>
          <p className="text-gray-700">
            <a
              href="tel:+919311897957"
              className="hover:text-myo-blue transition"
            >
              +91 93118 97957
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-myo-blue mb-4">Follow Us</h3>
          <p>
            <a
              href="https://instagram.com/myo_center"
              target="_blank"
              rel="noopener noreferrer"
              className="text-myo-blue hover:underline"
            >
              Instagram: @myo_center
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-myo-blue mb-6">Send a Message</h2>

        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-blue"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-blue"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-blue"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-blue"
            >
              <option value="inquiry">General Inquiry</option>
              <option value="daycare">The Nest Daycare</option>
              <option value="healing">The Healing Space</option>
              <option value="event">Event Registration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-myo-blue"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-myo-blue text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>Hours: 9:00 AM to 6:30 PM</p>
        <p>Special services available Thursdays & Saturdays until late</p>
      </div>
    </div>
  );
}
