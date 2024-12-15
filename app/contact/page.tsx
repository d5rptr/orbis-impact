"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

const Contact: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this component only runs on the client
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-br from-azureBlue via-orbitBlue to-darkBlue text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-8 px-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-light">Contact Us</h1>
        <p className="text-base md:text-lg mb-6">
          We’d love to hear from you! Fill out the form below, and we’ll get back to you shortly.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.div
        className="w-full max-w-4xl px-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Contact;
