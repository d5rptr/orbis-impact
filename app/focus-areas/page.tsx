export default function FocusAreas() {
  const areas = [
    {
      title: "Digital Intelligence",
      description: "Leverage AI tools like Discovery for digital landscape analysis and counter-disinformation.",
    },
    {
      title: "Operational Analytics",
      description: "Transform real-time data into decisive insights with our evaluation and briefing tools.",
    },
    {
      title: "Data Integration",
      description: "Ensure secure integration of complex systems with Catalyst and tailored engineering solutions.",
    },
    {
      title: "Strategic Consulting",
      description: "Tap into unmatched national security expertise for capacity enhancement and global operations.",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-azureBlue">Focus Areas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {areas.map((area, index) => (
            <div key={index} className="bg-light p-6 rounded shadow-lg">
              <h2 className="text-2xl font-bold text-darkBlue">{area.title}</h2>
              <p className="mt-4 text-lg">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}