"use client";

import Image from "next/image";

export default function Products() {
  const products = [
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

  const services = [
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
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Our Products and Services</h1>
        
        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
              <Image
                src={product.image}
                alt={product.alt}
                width={96}
                height={96}
                className="mx-auto mb-4"
                priority
              />
              <h2 className="text-xl font-bold text-darkBlue">{product.title}</h2>
              <p className="mt-2 text-darkBlue">{product.description}</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-azureBlue">Problems Solved:</h3>
                <ul className="list-disc pl-5 mt-2 text-darkBlue">
                  {product.problems.map((problem, index) => (
                    <li key={index}>{problem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-azureBlue">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-darkBlue">{service.title}</h3>
                <p className="mt-2 text-darkBlue">{service.description}</p>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-azureBlue">What This Service Includes:</h4>
                  <ul className="list-disc pl-5 mt-2 text-darkBlue">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
