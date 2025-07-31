"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your API or third-party form handler (e.g., Formspree, EmailJS)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // setTimeout to remove success message after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-blue-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex flex-col items-center justify-start px-6 py-12 w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-6">
          📬 Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
          We'd love to hear from you! Whether you have feedback, questions, or suggestions — drop us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full border border-gray-100"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </main>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Recipe AI. All rights reserved.
      </footer>
    </div>
  );
}
