"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Careers() {
  useEffect(() => {
    const scriptId = "clearcompany-script";
    const containerId = "clearcompany-careers";

    const injectScript = () => {
      // Ensure the target container exists
      const careersContainer = document.getElementById(containerId);
      if (!careersContainer) {
        console.error("Target container not found");
        return;
      }

      // Check if the script is already injected
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = scriptId;
        script.src =
          "https://careers-content.clearcompany.com/js/v1/career-site.js?siteId=246a2adf-896b-41b9-8cef-8e9c09fae489";
        script.async = true;

        // Append script directly to the container
        careersContainer.appendChild(script);
      }
    };

    injectScript();

    return () => {
      // Cleanup: Remove the script and its content
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();

      const careersContainer = document.getElementById(containerId);
      if (careersContainer) careersContainer.innerHTML = "";
    };
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <motion.section
          className="bg-darkBlue text-light py-16 px-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">
            Explore opportunities and be a part of our mission. Below, you&apos;ll find all our current openings.
          </p>
        </motion.section>

        {/* Careers Section */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div id="clearcompany-careers" className="bg-light p-6 rounded-lg shadow-lg"></div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="bg-darkBlue text-light py-16 px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold">Don&apos;t See Your Role?</h2>
          <p className="mt-4">
            We&apos;re always on the lookout for exceptional talent. Send us your resume, and we&apos;ll be in touch if
            a suitable opportunity arises.
          </p>
          <a
            href="mailto:careers@orbisops.com"
            className="mt-6 inline-block bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition"
          >
            Contact Us
          </a>
        </motion.section>
      </div>
    </div>
  );
}
