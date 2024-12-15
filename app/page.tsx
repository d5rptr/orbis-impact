"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-darkBlue text-light py-16 px-6 text-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          aria-label="Background video showcasing innovation."
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>

        {/* Overlay for Text */}
        <div className="relative z-10 bg-darkBlue bg-opacity-60 py-16 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              Innovative Solutions for National Security and Business
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Orbis provides technology, consulting, and training to national
              security and business clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4168B1"
          d="M0,256L120,240C240,224,480,192,720,202.7C960,213,1200,267,1320,293.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>

      {/* About Section */}
      <section className="bg-azureBlue text-light py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="mt-4 text-lg md:text-xl">
            Based in Washington, D.C., Orbis is a firm comprising subject
            matter experts and leaders from government, defense, and the
            private sector. With deep knowledge of our clients and their
            challenges, we deliver bespoke and innovative solutions.
          </p>
        </div>
      </section>

      {/* Slanted Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFFFFF"
          d="M0,320L1440,160L1440,320L0,320Z"
        />
      </svg>

      {/* Core Values Section */}
      <section className="bg-light text-darkBlue py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                title: "Commitment",
                src: "/icons/commitment.svg",
                description:
                  "We are dedicated to our clients' missions and objectives.",
              },
              {
                title: "Innovation",
                src: "/icons/innovation.svg",
                description: "We craft creative and forward-leaning solutions.",
              },
              {
                title: "Agility",
                src: "/icons/agility.svg",
                description: "We adapt to complex and evolving challenges.",
              },
              {
                title: "Integrity",
                src: "/icons/integrity.svg",
                description:
                  "We uphold the highest standards in all we do.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-2xl transition-shadow duration-200"
              >
                <Image
                  src={value.src}
                  alt={`${value.title} Icon`}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#17345C"
          d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,160C840,149,960,171,1080,176C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Products Section */}
      <section className="bg-darkBlue text-light py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Discovery",
                src: "/products/discovery.png",
                description:
                  "An AI-powered platform for digital intelligence and counter-disinformation.",
              },
              {
                title: "Landscape",
                src: "/products/landscape.png",
                description:
                  "A dynamic tool for geospatial analytics and situational awareness.",
              },
              {
                title: "Catalyst",
                src: "/products/catalyst.png",
                description:
                  "A secure platform for integrating complex systems and enabling real-time decision-making.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white text-darkBlue shadow-md p-6 rounded-3xl hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={product.src}
                  alt={`${product.title} Product`}
                  width={96}
                  height={96}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slanted Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFFFFF"
          d="M0,320L1440,160L1440,320L0,320Z"
        />
      </svg>

      {/* Services Section */}
      <section className="bg-light text-darkBlue py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Research & Analysis",
                description:
                  "Deep insights into global trends and challenges to inform decision-making.",
              },
              {
                title: "Training",
                description:
                  "Customized training programs to enhance skills and operational readiness.",
              },
              {
                title: "OSINT Advisory",
                description:
                  "Expert guidance in leveraging open-source intelligence for actionable insights.",
              },
              {
                title: "Strategic Communications",
                description:
                  "Crafting narratives and communication strategies to achieve organizational goals.",
              },
              {
                title: "Consulting",
                description:
                  "Tailored consulting solutions to address your unique challenges and objectives.",
              },
              {
                title: "Data as a Service",
                description:
                  "Secure and scalable solutions for real-time data access and analytics.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4168B1"
          d="M0,192L120,176C240,160,480,128,720,122.7C960,117,1200,139,1320,149.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>

      {/* Call to Action Section */}
      <section className="bg-azureBlue text-darkBlue py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Partner With Us</h2>
          <p className="mt-4 text-lg md:text-xl">
            Explore how we can work together to achieve your mission-critical goals.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-orbitBlue py-3 px-6 rounded text-light hover:bg-darkBlue transition transform hover:scale-105"
            aria-label="Contact us"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Wavy Divider */}
      <svg
        className="w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#17345C"
          d="M0,128L120,160C240,192,480,256,720,266.7C960,277,1200,235,1320,213.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>

      {/* Footer Section */}
      <footer className="bg-darkBlue text-light py-16 px-6">
        <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-azureBlue mb-2">Contact Us</h3>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:17036390911"
                className="text-orbitBlue hover:text-azureBlue transition"
              >
                1-703-639-0911
              </a>
            </p>
            <p>
              6862 Elm St. Ste 300 <br />
              McLean, VA 22101-3886
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-azureBlue mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/company/orbisoperations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orbitBlue hover:text-azureBlue transition"
                aria-label="Follow us on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Legal Information */}
          <div>
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Orbis Operations LLC. All rights reserved.
            </p>
            <p>
              Contact us:{" "}
              <a
                href="mailto:impact@orbisops.com"
                className="text-orbitBlue hover:text-azureBlue transition"
              >
                impact@orbisops.com
              </a>
            </p>
            <p>
              <a href="/privacy" className="text-orbitBlue hover:text-azureBlue transition">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/terms" className="text-orbitBlue hover:text-azureBlue transition">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
