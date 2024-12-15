"use client";

import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Discovery",
      description: "An AI-powered platform for digital intelligence and counter-disinformation.",
      image: "/products/discovery.png",
      alt: "Discovery Product",
    },
    {
      title: "Landscape",
      description: "A dynamic tool for geospatial analytics and situational awareness.",
      image: "/products/landscape.png",
      alt: "Landscape Product",
    },
    {
      title: "Catalyst",
      description: "A secure platform for integrating complex systems and enabling real-time decision-making.",
      image: "/products/catalyst.png",
      alt: "Catalyst Product",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Our Products</h1>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
