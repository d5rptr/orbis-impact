export default function Products() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Our Products</h1>
        <p className="mt-4 text-lg">
          Explore our cutting-edge solutions designed to empower national security and business operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Discovery */}
          <div className="bg-light shadow-lg p-6 rounded-lg">
            <img
              src="/products/discovery.png"
              alt="Discovery Product Icon"
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-darkBlue">Discovery</h2>
            <p className="mt-4">
              An AI-powered platform for digital intelligence and counter-disinformation.
            </p>
          </div>

          {/* Landscape */}
          <div className="bg-light shadow-lg p-6 rounded-lg">
            <img
              src="/products/landscape.png"
              alt="Landscape Product Icon"
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-darkBlue">Landscape</h2>
            <p className="mt-4">
              A dynamic tool for geospatial analytics and situational awareness.
            </p>
          </div>

          {/* Catalyst */}
          <div className="bg-light shadow-lg p-6 rounded-lg">
            <img
              src="/products/catalyst.png"
              alt="Catalyst Product Icon"
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
            <h2 className="text-2xl font-bold text-darkBlue">Catalyst</h2>
            <p className="mt-4">
              A secure platform for integrating complex systems and enabling real-time decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}