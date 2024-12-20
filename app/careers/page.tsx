"use client";

import React, { useEffect } from "react";

// Mark the page for dynamic rendering
export const dynamic = "force-dynamic";

const Careers: React.FC = () => {
  useEffect(() => {
    const scriptId = "clearcompany-script";
    const containerId = "clearcompany-careers";

    // Ensure the target container is ready
    const careersContainer = document.getElementById(containerId);
    if (!careersContainer) {
      console.error("Target container not found");
      return;
    }

    // Check if the script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = scriptId;
      script.src =
        "https://careers-content.clearcompany.com/js/v1/career-site.js?siteId=246a2adf-896b-41b9-8cef-8e9c09fae489";
      script.async = true;

      // Attach script to the container, not the global body
      careersContainer.appendChild(script);
    }

    return () => {
      // Cleanup: Remove the script and container content
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      if (careersContainer) {
        careersContainer.innerHTML = ""; // Clear dynamically injected content
      }
    };
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <section className="bg-darkBlue text-light py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">
            Explore opportunities and be a part of our mission. Below, you&apos;ll find all our current openings.
          </p>
        </section>

        {/* Careers Section */}
        <section className="py-16">
          <div id="clearcompany-careers" className="bg-light p-6 rounded-lg shadow-lg"></div>
        </section>

        {/* Contact Section */}
        <section className="bg-darkBlue text-light py-16 px-6 text-center">
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
        </section>
      </div>
    </div>
  );
};

export default Careers;
