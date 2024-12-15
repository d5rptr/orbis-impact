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
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#4168B1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* About Section */}
      <section className="bg-azureBlue text-light py-20 px-6 text-center">
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
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#FFFFFF"
            d="M0,320L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

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
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#17345C"
            d="M0,96L60,90.7C120,85,240,75,360,64C480,53,600,43,720,58.7C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

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
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#FFFFFF"
            d="M0,320L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>

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
      <div className="relative">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#4168B1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Call to Action */}
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
    </div>
  );
}
