"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable Card Component
interface CardProps {
  title: string;
  src: string;
  description: string;
  alt: string;
}

const Card: React.FC<CardProps> = ({ title, src, description, alt }) => (
  <div
    className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    data-aos="fade-up"
  >
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="mx-auto mb-4"
      loading="lazy"
    />
    <h3 className="text-xl font-bold text-darkBlue">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

// Reusable Section Component
interface SectionProps {
  id?: string;
  bgColor: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ bgColor, children, id }) => (
  <section id={id} className={`relative ${bgColor} py-16 px-6`}>
    {children}
  </section>
);

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const coreValues = [
    {
      title: "Commitment",
      src: "/icons/commitment.svg",
      description:
        "We are dedicated to our clients' missions and objectives.",
      alt: "Commitment Icon",
    },
    {
      title: "Innovation",
      src: "/icons/innovation.svg",
      description: "We craft creative and forward-leaning solutions.",
      alt: "Innovation Icon",
    },
    {
      title: "Agility",
      src: "/icons/agility.svg",
      description: "We adapt to complex and evolving challenges.",
      alt: "Agility Icon",
    },
    {
      title: "Integrity",
      src: "/icons/integrity.svg",
      description:
        "We uphold the highest standards in all we do.",
      alt: "Integrity Icon",
    },
  ];

  const products = [
    {
      title: "Discovery",
      src: "/products/discovery.png",
      description:
        "An AI-powered platform for digital intelligence and counter-disinformation.",
      alt: "Discovery Product",
    },
    {
      title: "Landscape",
      src: "/products/landscape.png",
      description:
        "A dynamic tool for geospatial analytics and situational awareness.",
      alt: "Landscape Product",
    },
    {
      title: "Catalyst",
      src: "/products/catalyst.png",
      description:
        "A secure platform for integrating complex systems and enabling real-time decision-making.",
      alt: "Catalyst Product",
    },
  ];

  const services = [
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
  ];

  return (
    <div className="font-sans bg-gradient-to-r from-gray-900 to-gray-800 text-light min-h-screen">
      {/* Hero Section */}
      <Section bgColor="relative bg-gradient-to-r from-blue-800 to-blue-700 text-light text-center">
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
        <div className="relative z-10 bg-black bg-opacity-50 py-20 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              Innovative Solutions for National Security and Business
            </h1>
            <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto">
              Orbis provides technology, consulting, and training to national
              security and business clients worldwide.
            </p>
            <a
              href="#services"
              className="mt-10 inline-block bg-orbitBlue py-3 px-6 rounded-full text-white font-semibold hover:bg-azureBlue transition transform hover:scale-105"
              aria-label="Explore our services"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section bgColor="bg-azureBlue text-light text-center">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Based in Washington, D.C., Orbis is a firm comprising subject
            matter experts and leaders from government, defense, and the
            private sector. With deep knowledge of our clients and their
            challenges, we deliver bespoke and innovative solutions.
          </p>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section bgColor="bg-light text-darkBlue">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                src={value.src}
                description={value.description}
                alt={value.alt}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section bgColor="bg-darkBlue text-light">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                src={product.src}
                description={product.description}
                alt={product.alt}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-light text-darkBlue">
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-3xl hover:shadow-2xl transition-shadow duration-300"
                data-aos="zoom-in"
              >
                <h3 className="text-xl font-bold text-darkBlue">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section bgColor="bg-gradient-to-r from-blue-700 to-blue-600 text-darkBlue text-center">
        <div className="container mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore how we can work together to achieve your mission-critical goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orbitBlue py-3 px-6 rounded-full text-white font-semibold hover:bg-darkBlue transition transform hover:scale-105"
            aria-label="Contact us"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </div>
  );
}
