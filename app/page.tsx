import Image from 'next/image';
import Link from 'next/link';

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
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Text */}
        <div className="relative z-10 bg-darkBlue bg-opacity-60 py-16 px-6">
          <div className="container mx-auto">
            <h1 data-aos="fade-down" className="text-4xl md:text-5xl font-bold">
              Innovative Solutions for National Security and Business
            </h1>
            <p data-aos="fade-down" className="mt-4 text-lg md:text-xl">
              Orbis provides technology, consulting, and training to national security and business clients worldwide.
            </p>
          </div>
        </div>

        {/* Optional Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-darkBlue bg-opacity-40 z-0"></div>
      </section>

      {/* About Section */}
      <section data-aos="fade-up" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-azureBlue">About Us</h2>
          <p className="mt-4 text-lg md:text-xl">
            Based in Washington, D.C., Orbis is a firm comprising subject matter experts and leaders from government,
            defense, and the private sector. With deep knowledge of our clients and their challenges, we deliver bespoke
            and innovative solutions.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-light py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-darkBlue">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {/* Commitment */}
            <div data-aos="fade-up" className="bg-white shadow p-6 rounded-lg">
              <Image
                src="/icons/commitment.svg"
                alt="Commitment Icon"
                width={64}
                height={64}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Commitment</h3>
              <p className="mt-2 text-darkBlue">We are dedicated to our clients&apos; missions and objectives.</p>
            </div>
            {/* Innovation */}
            <div data-aos="fade-up" className="bg-white shadow p-6 rounded-lg">
              <Image
                src="/icons/innovation.svg"
                alt="Innovation Icon"
                width={64}
                height={64}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Innovation</h3>
              <p className="mt-2 text-darkBlue">We craft creative and forward-leaning solutions.</p>
            </div>
            {/* Agility */}
            <div data-aos="fade-up" className="bg-white shadow p-6 rounded-lg">
              <Image
                src="/icons/agility.svg"
                alt="Agility Icon"
                width={64}
                height={64}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Agility</h3>
              <p className="mt-2 text-darkBlue">We adapt to complex and evolving challenges.</p>
            </div>
            {/* Integrity */}
            <div data-aos="fade-up" className="bg-white shadow p-6 rounded-lg">
              <Image
                src="/icons/integrity.svg"
                alt="Integrity Icon"
                width={64}
                height={64}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Integrity</h3>
              <p className="mt-2 text-darkBlue">We uphold the highest standards in all we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-azureBlue">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Discovery */}
            <div data-aos="fade-up" className="bg-light shadow-lg p-6 rounded-lg">
              <Image
                src="/products/discovery.png"
                alt="Discovery Product"
                width={96}
                height={96}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Discovery</h3>
              <p className="mt-2">
                An AI-powered platform for digital intelligence and counter-disinformation.
              </p>
            </div>
            {/* Landscape */}
            <div data-aos="fade-up" className="bg-light shadow-lg p-6 rounded-lg">
              <Image
                src="/products/landscape.png"
                alt="Landscape Product"
                width={96}
                height={96}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Landscape</h3>
              <p className="mt-2">
                A dynamic tool for geospatial analytics and situational awareness.
              </p>
            </div>
            {/* Catalyst */}
            <div data-aos="fade-up" className="bg-light shadow-lg p-6 rounded-lg">
              <Image
                src="/products/catalyst.png"
                alt="Catalyst Product"
                width={96}
                height={96}
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-bold text-darkBlue">Catalyst</h3>
              <p className="mt-2">
                A secure platform for integrating complex systems and enabling real-time decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section data-aos="fade-up" className="bg-darkBlue text-light py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Partner With Us</h2>
          <p className="mt-4 text-lg md:text-xl">
            Explore how we can work together to achieve your mission-critical goals.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-azureBlue py-3 px-6 rounded text-light hover:bg-orbitBlue transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
