"use client";

import React from "react";
import { motion } from "framer-motion";

// Mark the page for dynamic rendering
export const dynamic = "force-dynamic";

const FocusAreas: React.FC = () => {
  const areas = [
    {
      title: "Digital Intelligence",
      description: `
        Digital Intelligence involves using advanced tools like AI-driven platforms to monitor, analyze, and interpret 
        the vast digital landscape. By leveraging capabilities such as Discovery, we address challenges like 
        counter-disinformation, social media sentiment analysis, and the identification of emerging threats in real time. 
        This focus area empowers organizations to make informed decisions and safeguard their operations 
        in an increasingly digital-first world.
      `,
      problemsSolved: [
        "Countering disinformation campaigns.",
        "Analyzing digital behavior trends.",
        "Identifying emerging digital threats and risks.",
        "Enhancing decision-making with actionable insights.",
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
        "Enhancing predictive modeling for future scenarios.",
      ],
    },
    // Add more areas as needed
  ];

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto text-center">
        <motion.section
          aria-label="Focus Areas"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-azureBlue">Focus Areas</h1>
          <p className="mt-4 text-lg text-gray-700">
            Our focus areas represent the core domains in which Orbis delivers value to clients. Each area tackles 
            specific challenges faced by governments and businesses, ensuring our solutions are tailored to meet 
            real-world needs effectively.
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {areas.map((area, index) => (
              <motion.article
                key={index}
                className="bg-light p-6 rounded-lg shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                aria-labelledby={`focus-area-title-${index}`}
              >
                <h2
                  id={`focus-area-title-${index}`}
                  className="text-2xl font-bold text-darkBlue"
                >
                  {area.title}
                </h2>
                <p className="mt-4 text-lg text-gray-700">{area.description}</p>
                <ul className="mt-4 text-left list-disc list-inside text-gray-700">
                  {area.problemsSolved.map((problem, idx) => (
                    <li key={idx}>{problem}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default FocusAreas;
