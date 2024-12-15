"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Previous Sections: Hero, About, Core Values, Products */}

      {/* Products Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-azureBlue">Our Products</h2>
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
                className="bg-white border border-azureBlue shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={product.src}
                  alt={`${product.title} Product`}
                  width={96}
                  height={96}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-azureBlue">{product.title}</h3>
                <p className="mt-2 text-azureBlue">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Research & Analysis",
                description:
                  "Deep insights into global trends and challenges to inform decision-making.",
                icon: "/icons/research.svg",
              },
              {
                title: "Training",
                description:
                  "Customized training programs to enhance skills and operational readiness.",
                icon: "/icons/training.svg",
              },
              {
                title: "OSINT Advisory",
                description:
                  "Expert guidance in leveraging open-source intelligence for actionable insights.",
                icon: "/icons/osint.svg",
              },
              {
                title: "Strategic Communications",
                description:
                  "Crafting narratives and communication strategies to achieve organizational goals.",
                icon: "/icons/communications.svg",
              },
              {
                title: "Consulting",
                description:
                  "Tailored consulting solutions to address your unique challenges and objectives.",
                icon: "/icons/consulting.svg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-200"
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-darkBlue">{service.title}</h3>
                <p className="mt-2 text-darkBlue">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
