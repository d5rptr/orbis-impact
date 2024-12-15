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
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Background video showcasing innovation."
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <p className="relative z-20 text-light">
            Your browser does not support the video tag.
          </p>
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

      {/* Slanted Divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 w-full"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            fill="#4168B1"
          ></path>
        </svg>
      </div>

      {/* About Section with Parallax */}
      <section
        className="bg-azureBlue text-darkBlue py-20 px-6 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/parallax-background.jpg')",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light">About Us</h2>
          <p className="mt-4 text-lg md:text-xl text-light">
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
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
        >
          <path
            d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* Core Values Section */}
      <section className="bg-light py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-darkBlue">
            Our Core Values
          </h2>
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
                description:
                  "We adapt to complex and evolving challenges.",
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
                className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-200"
              >
                <Image
                  src={value.src}
                  alt={`${value.title} Icon`}
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-darkBlue">
                  {value.title}
                </h3>
                <p className="mt-2 text-darkBlue">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slanted Divider */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 w-full"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            fill="#17345C"
          ></path>
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
                className="bg-light shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={product.src}
                  alt={`${product.title} Product`}
                  width={96}
                  height={96}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-darkBlue">
                  {product.title}
                </h3>
                <p className="mt-2">{product.description}</p>
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
            Explore how we can work together to achieve your mission-critical
            goals.
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
