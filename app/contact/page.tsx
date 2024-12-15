"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // You can add further logic for submission (e.g., API calls).
  };

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-screen-md text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Contact Us</h1>
        <p className="mt-4 text-lg">Let’s collaborate to achieve your mission-critical goals.</p>

        {!submitted ? (
          <form className="mt-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded w-full mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded w-full mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded w-full mb-4"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-darkBlue">Thank You!</h2>
            <p className="mt-4">We have received your message and will get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
