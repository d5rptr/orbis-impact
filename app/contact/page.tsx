"use client";

import React, { useEffect, useState } from "react";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

const Contact: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this component only runs on the client
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-azureBlue via-orbitBlue to-darkBlue text-white">
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light">Contact Us</h1>
        <p className="text-base md:text-lg mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.
        </p>
      </div>
      <div className="w-full max-w-4xl px-4">
        {isClient && (
          <iframe
            src="https://forms.monday.com/forms/embed/77dda2f952e838e550d483bdd765f241?r=use1"
            className="w-full h-[1000px] md:h-[1400px] border-0 rounded-lg shadow-2xl"
            style={{
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
            }}
            title="Contact Form"
            aria-label="Contact Us Form"
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
