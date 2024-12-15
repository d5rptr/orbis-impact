"use client";

import React, { useRef } from "react";

const Contact: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const adjustHeightManually = () => {
    if (iframeRef.current) {
      // Manually set the height to a suitable value based on testing
      iframeRef.current.style.height = "1200px"; // Adjust to the desired height
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-azureBlue via-orbitBlue to-darkBlue text-white">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 text-light">Contact Us</h1>
        <p className="text-lg mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.
        </p>
      </div>
      <iframe
        ref={iframeRef}
        src="https://forms.monday.com/forms/embed/77dda2f952e838e550d483bdd765f241?r=use1"
        className="w-full max-w-3xl border-0 rounded-lg shadow-2xl bg-white"
        style={{
          height: "500px", // Initial height as fallback
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        }}
        title="Contact Form"
      />
      <button
        onClick={adjustHeightManually}
        className="mt-6 bg-orbitBlue text-white py-2 px-4 rounded hover:bg-darkBlue transition"
      >
        Adjust Height
      </button>
    </div>
  );
};

export default Contact;
