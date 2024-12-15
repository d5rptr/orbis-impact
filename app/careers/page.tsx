"use client";

import { useEffect } from "react";

export default function Careers() {
  useEffect(() => {
    // Dynamically load the ClearCompany script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://careers-content.clearcompany.com/js/v1/career-site.js?siteId=246a2adf-896b-41b9-8cef-8e9c09fae489";
    script.async = true;

    // Append script only if container exists
    const clearCompanyDiv = document.getElementById("clearcompany-careers");
    if (clearCompanyDiv) {
      document.body.appendChild(script);
    }

    // Cleanup: Remove script on component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="bg-darkBlue text-light py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">
            Explore opportunities and be a part of our mission. Below, you&apos;ll find all our current openings.
          </p>
        </section>

        {/* Embedded ClearCompany Careers Section */}
        <section className="py-16">
          <div
            id="clearcompany-careers"
            className="bg-light p-6 rounded-lg shadow-lg"
            aria-label="ClearCompany Careers Section"
          >
            {/* The embedded content will load here */}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-darkBlue text-light py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">Don&apos;t See Your Role?</h2>
          <p className="mt-4">
            We&apos;re always on the lookout for exceptional talent. Send us your resume, and we&apos;ll be in touch if
            a suitable opportunity arises.
          </p>
          <a
            href="mailto:careers@orbisops.com"
            className="mt-6 inline-block bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition"
            aria-label="Contact us about career opportunities"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
