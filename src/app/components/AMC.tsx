"use client";

import React from "react";

const data = [
  {
    title: "Routine Maintenance Visits",
    description:
      "Scheduled check-ups to ensure your AC is performing at its best.",
  },
  {
    title: "Preventive Care",
    description:
      "Early detection and resolution of potential issues to avoid costly repairs.",
  },
  {
    title: "Emergency Repairs",
    description:
      "Quick and efficient troubleshooting of unexpected breakdowns.",
  },
  {
    title: "Spare Parts Replacement",
    description:
      "Genuine parts replacement for long-lasting performance (as per AMC terms).",
  },
  {
    title: "Energy Efficiency Checks",
    description:
      "Optimization of your AC systems to reduce energy consumption and utility bills.",
  },
];

const BenefitsData = [
  { desc: "Prolongs the lifespan of your air conditioning systems." },
  { desc: "Maintains consistent cooling performance throughout the year." },
  { desc: "Minimizes downtime and disruptions." },
  {
    desc: "Ensures a healthier indoor environment with clean and well-maintained AC systems.",
  },
];

const AMC = () => {
  return (
    <section id="repair" className="py-10 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="my-4 bg-gray-100 animate-bounceText dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="my-4 text-center font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
          Air Conditioner AMC Services by Service Walah
        </h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Keep your air conditioning systems running efficiently year-round with
          Service Walah’s AMC (Annual Maintenance Contract) services. We
          specialize in providing top-notch maintenance solutions for
          residential, commercial, and industrial air conditioning systems,
          ensuring uninterrupted comfort and optimal performance.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-4 animate-zoomIn">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose Our AMC Services?
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-bold">Comprehensive Coverage:</span> Regular
              inspections, cleaning, and servicing of all components, including
              filters, coils, and refrigerants.
            </li>
            <li>
              <span className="font-bold">Expert Technicians:</span> Our
              certified professionals are equipped to handle all major AC brands
              and models.
            </li>
            <li>
              <span className="font-bold">Cost Savings:</span> Preventive
              maintenance reduces the risk of breakdowns.
            </li>
            <li>
              <span className="font-bold">Priority Support:</span> Faster
              response times during peak seasons.
            </li>
            <li>
              <span className="font-bold">Customizable Plans:</span> Flexible
              AMC packages to suit your needs and budget.
            </li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="p-4">
          <video
            className="w-full h-auto animate-zoomIn rounded shadow"
            controls
            preload="metadata"
            aria-label="AMC video"
          >
            <source src="/videos/amc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* AMC Plans Section */}
      <div className="my-4 animate-zoomIn bg-gray-100 dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="my-4 font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
          What’s Included in Our AMC Plans?
        </h2>
        <ul className="list-disc pl-4 sm:pl-8 space-y-4 text-gray-700 dark:text-gray-300">
          {data.map((item, index) => (
            <li key={index}>
              <span className="font-bold">{item.title}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="my-4 animate-zoomIn bg-gray-100 dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="my-4 font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
          Benefits of Our AMC Services
        </h2>
        <ul className="list-disc pl-4 sm:pl-8 space-y-4 text-gray-700 dark:text-gray-300">
          {BenefitsData.map((item, index) => (
            <li key={index}>{item.desc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AMC;
