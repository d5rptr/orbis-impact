"use client";

import React, { useRef } from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-azureBlue via-orbitBlue to-darkBlue text-white">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-light">Contact Us</h1>
        <p className="text-lg mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.
        </p>
      </div>
      <iframe
        src="https://forms.monday.com/forms/embed/77dda2f952e838e550d483bdd765f241?r=use1"
        className="w-full max-w-3xl border-0 rounded-lg shadow-2xl bg-white"
        style={{
          height: "1400px", // Increased height for larger content
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        }}
        title="Contact Form"
      />
    </div>
  );
};

export default Contact;
