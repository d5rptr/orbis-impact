"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
const Card: React.FC<{ title: string; description: string; children?: React.ReactNode; image?: string; alt?: string }> = ({ title, description, children, image, alt }) => (
  <div
    className="bg-light p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    data-aos="fade-up"
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
  </div>
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
const Section: React.FC<{ bgColor: string; children: React.ReactNode }> = ({ bgColor, children }) => (
  <section className={`relative ${bgColor} py-16 px-6`}>
    {children}
  </section>
);

export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products: Product[] = [
    {
      title: "Discovery",
      description: "An AI-powered platform for digital intelligence and counter-disinformation.",
      image: "/products/discovery.png",
      alt: "Discovery Product",
      problems: [
        "Identifying and combating disinformation in digital spaces.",
        "Providing real-time intelligence for decision-making."
      ],
    },
    {
      title: "Landscape",
      description: "A dynamic tool for geospatial analytics and situational awareness.",
      image: "/products/landscape.png",
      alt: "Landscape Product",
      problems: [
        "Lack of situational awareness in geospatial contexts.",
        "Inability to visualize and analyze geospatial data in real time."
      ],
    },
    {
      title: "Catalyst",
      description: "A secure platform for integrating complex systems and enabling real-time decision-making.",
      image: "/products/catalyst.png",
      alt: "Catalyst Product",
      problems: [
        "Difficulty integrating multiple systems for cohesive decision-making.",
        "Lack of secure data flows and real-time processing in complex environments."
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "Research & Analysis",
      description: "Deep insights into global trends and challenges to inform decision-making.",
      details: [
        "Comprehensive analysis of global events and trends.",
        "Expert insights into political, economic, and social factors.",
        "Custom reports and briefings tailored to organizational needs.",
        "Use of advanced data analysis and modeling techniques to forecast trends."
      ]
    },
    {
      title: "Training",
      description: "Customized training programs to enhance skills and operational readiness.",
      details: [
        "Tailored training modules for different levels of expertise.",
        "Interactive learning experiences focused on real-world scenarios.",
        "Comprehensive curricula on intelligence gathering, analysis, and decision-making.",
        "Workshops and hands-on training with real tools and systems."
      ]
    },
    {
      title: "OSINT Advisory",
      description: "Expert guidance in leveraging open-source intelligence for actionable insights.",
      details: [
        "Guidance on how to collect, analyze, and use open-source data.",
        "Support in implementing OSINT frameworks and tools.",
        "Best practices for data validation and cross-referencing.",
        "Tailored strategies to use OSINT for specific operational goals."
      ]
    },
    {
      title: "Strategic Communications",
      description: "Crafting narratives and communication strategies to achieve organizational goals.",
      details: [
        "Development of tailored communication strategies aligned with goals.",
        "Support in crafting key messages and narratives for different audiences.",
        "Crisis communication management and media training.",
        "Guidance on using digital platforms and social media for effective outreach."
      ]
    },
    {
      title: "Consulting",
      description: "Tailored consulting solutions to address your unique challenges and objectives.",
      details: [
        "In-depth consultation sessions to understand client needs.",
        "Strategy development and roadmap creation for operational goals.",
        "Expert advice on organizational and technical challenges.",
        "Execution support to implement strategies and ensure alignment with business goals."
      ]
    },
    {
      title: "Data as a Service",
      description: "Secure and scalable solutions for real-time data access and analytics.",
      details: [
        "Access to real-time data streams for critical operational needs.",
        "Scalable data infrastructure to handle large data volumes.",
        "Integration of disparate data sources into a cohesive platform.",
        "Advanced data analytics tools and dashboards for decision-making."
      ]
    },
  ];

  return (
    <div className="font-sans bg-gradient-to-r from-gray-900 to-gray-800 text-light min-h-screen">
      <Section bgColor="bg-gradient-to-r from-gray-900 to-gray-800 text-light text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-azureBlue mb-8" data-aos="fade-down">
            Our Products and Services
          </h1>
        </div>
      </Section>

      {/* Products Section */}
      <Section bgColor="bg-darkBlue text-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-azureBlue text-center mb-12" data-aos="fade-up">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} title={product.title} description={product.description} image={product.image} alt={product.alt}>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-azureBlue">Problems Solved:</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-azureBlue text-center mb-12" data-aos="fade-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} title={service.title} description={service.description}>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-azureBlue">What This Service Includes:</h3>
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
