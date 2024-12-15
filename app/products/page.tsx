"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// Type Definitions
interface Product {
  title: string;
  description: string;
  image: string;
  alt: string;
  problems: string[];
}

interface Service {
  title: string;
  description: string;
  details: string[];
}

// Reusable Card Component
const Card: React.FC<{
  title: string;
  description: string;
  children?: React.ReactNode;
  image?: string;
  alt?: string;
  delay?: number;
}> = ({ title, description, children, image, alt, delay = 0 }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {image && alt && (
      <div className="flex justify-center">
        <Image
          src={image}
          alt={alt}
          width={96}
          height={96}
          className="mb-4"
          loading="lazy"
        />
      </div>
    )}
    <h2 className="text-xl font-bold text-darkBlue">{title}</h2>
    <p className="mt-2 text-darkBlue">{description}</p>
    {children && <div className="mt-4">{children}</div>}
  </motion.div>
);

// Reusable List Component
const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 mt-2 text-darkBlue">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// Reusable Section Component
const Section: React.FC<{ bgColor: string; children: React.ReactNode }> = ({
  bgColor,
  children,
}) => (
  <section className={`relative ${bgColor} py-16 px-6`}>
    {children}
  </section>
);

export default function Products() {
  const products: Product[] = [
    {
      title: "Discovery",
      description:
        "An AI-powered platform for digital intelligence and counter-disinformation.",
      image: "/products/discovery.png",
      alt: "Discovery Product",
      problems: [
        "Identifying and combating disinformation in digital spaces.",
        "Providing real-time intelligence for decision-making.",
      ],
    },
    {
      title: "Landscape",
      description:
        "A dynamic tool for geospatial analytics and situational awareness.",
      image: "/products/landscape.png",
      alt: "Landscape Product",
      problems: [
        "Lack of situational awareness in geospatial contexts.",
        "Inability to visualize and analyze geospatial data in real time.",
      ],
    },
    {
      title: "Catalyst",
      description:
        "A secure platform for integrating complex systems and enabling real-time decision-making.",
      image: "/products/catalyst.png",
      alt: "Catalyst Product",
      problems: [
        "Difficulty integrating multiple systems for cohesive decision-making.",
        "Lack of secure data flows and real-time processing in complex environments.",
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "Research & Analysis",
      description:
        "Deep insights into global trends and challenges to inform decision-making.",
      details: [
        "Comprehensive analysis of global events and trends.",
        "Expert insights into political, economic, and social factors.",
        "Custom reports and briefings tailored to organizational needs.",
        "Use of advanced data analysis and modeling techniques to forecast trends.",
      ],
    },
    {
      title: "Training",
      description:
        "Customized training programs to enhance skills and operational readiness.",
      details: [
        "Tailored training modules for different levels of expertise.",
        "Interactive learning experiences focused on real-world scenarios.",
        "Comprehensive curricula on intelligence gathering, analysis, and decision-making.",
        "Workshops and hands-on training with real tools and systems.",
      ],
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-r from-gray-900 to-gray-800 text-light min-h-screen">
      <Section bgColor="bg-gradient-to-r from-gray-900 to-gray-800 text-light text-center">
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-azureBlue mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Products and Services
          </motion.h1>
        </div>
      </Section>

      {/* Products Section */}
      <Section bgColor="bg-darkBlue text-light">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-azureBlue text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Products
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                alt={product.alt}
                delay={index * 0.2}
              >
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-azureBlue">
                    Problems Solved:
                  </h3>
                  <List items={product.problems} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bgColor="bg-light text-darkBlue">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-azureBlue text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                delay={index * 0.2}
              >
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-azureBlue">
                    What This Service Includes:
                  </h3>
                  <List items={service.details} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
