"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FocusAreas() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);

  const areas = [
    {
      title: "Digital Intelligence",
      description: `
        Digital Intelligence involves using advanced tools like AI-driven platforms to monitor, analyze, and interpret 
        the vast digital landscape. By leveraging capabilities such as Discovery, we address challenges like 
        counter-disinformation, social media sentiment analysis, and the identification of emerging threats in real time. 
        This focus area aims to empower organizations to make informed decisions and safeguard their operations 
        in an increasingly digital-first world.
      `,
      problemsSolved: [
        "Countering disinformation campaigns.",
        "Analyzing digital behavior trends.",
        "Identifying emerging digital threats and risks.",
        "Enhancing decision-making with actionable insights."
      ],
    },
    {
      title: "Operational Analytics",
      description: `
        Operational Analytics transforms raw, real-time data into clear, actionable insights for decision-makers. 
        This focus area is crucial for organizations looking to evaluate dynamic environments and implement timely 
        strategies. Through innovative tools, we enable real-time monitoring, scenario forecasting, and data-driven 
        planning to support mission-critical operations.
      `,
      problemsSolved: [
        "Providing real-time data visualizations and reports.",
        "Facilitating operational decision-making during critical events.",
        "Streamlining situational awareness across teams.",
        "Enhancing predictive modeling for future scenarios."
      ],
    },
    {
      title: "Data Integration",
      description: `
        Data Integration ensures seamless and secure communication between complex systems and applications. 
        Using tools like Catalyst, we help clients overcome interoperability challenges, integrate legacy systems 
        with modern platforms, and enhance data flow across organizational boundaries. This focus area emphasizes 
        creating scalable and resilient systems that empower operational excellence.
      `,
      problemsSolved: [
        "Integrating siloed data systems for seamless workflows.",
        "Ensuring secure data exchange across networks.",
        "Improving compatibility between legacy and modern systems.",
        "Reducing costs associated with system downtime and data fragmentation."
      ],
    },
    {
      title: "Strategic Consulting",
      description: `
        Strategic Consulting leverages Orbis' unmatched expertise in national security and global operations 
        to guide organizations through complex challenges. From capacity building to policy formulation, this focus area 
        provides tailored solutions for achieving strategic objectives in a rapidly changing global landscape.
      `,
      problemsSolved: [
        "Enhancing organizational capacity for complex operations.",
        "Providing guidance on policy development and strategic planning.",
        "Facilitating cross-border collaboration and partnerships.",
        "Helping clients navigate geopolitical challenges and risks."
      ],
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <section aria-label="Focus Areas">
          <h1 className="text-4xl font-bold text-azureBlue">Focus Areas</h1>
          <p className="mt-4 text-lg text-gray-700">
            Our focus areas represent the core domains in which Orbis delivers value to clients. Each area tackles 
            specific challenges faced by governments and businesses, ensuring our solutions are tailored to meet 
            real-world needs effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {areas.map((area, index) => (
              <article
                key={index}
                className="bg-light p-6 rounded shadow-lg"
                data-aos="fade-up"
                aria-labelledby={`focus-area-title-${index}`}
              >
                <h2
                  id={`focus-area-title-${index}`}
                  className="text-2xl font-bold text-darkBlue"
                >
                  {area.title}
                </h2>
                <p className="mt-4 text-lg">{area.description}</p>
                <ul className="mt-4 text-left list-disc list-inside text-gray-700">
                  {area.problemsSolved.map((problem, idx) => (
                    <li key={idx}>{problem}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
