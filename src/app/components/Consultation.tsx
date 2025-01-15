"use client";

import React from "react";

const data = [
  {
    title: "Initial Discussion",
    description:
      "Share your requirements, concerns, and expectations with our friendly team.",
  },
  {
    title: "On-Site Assessment",
    description:
      "Our experts visit your location to measure, inspect, and analyze the space for optimal cooling.",
  },
  {
    title: "System Selection",
    description:
      "We present you with a customized report detailing the best options for your needs and budget.",
  },
  {
    title: "Detailed Proposal",
    description:
      "Receive a clear, itemized quote along with timelines for installation or upgrades.",
  },
  {
    title: "Follow-Up Support",
    description:
      "Even after installation, our team is here to provide ongoing guidance and support for your air conditioning system.",
  },
];

const services = [
    {
      title: "Personalized Assessment",
      description:
        "Every space is unique. Our experts visit your home, office, or commercial establishment to evaluate your specific cooling needs, ensuring the perfect solution for optimal comfort and efficiency.",
    },
    {
      title: "Energy Efficiency Advice",
      description:
        "We guide you in selecting systems that not only deliver top performance but also help you save on energy bills. Our recommendations prioritize sustainability and eco-friendliness.",
    },
    {
      title: "System Recommendations",
      description:
        "Based on your preferences, space requirements, and budget, we suggest the best air conditioning system from our wide range of options, including split ACs, window units, cassette ACs, and central air systems.",
    },
    {
      title: "Budget-Friendly Solutions",
      description:
        "At Service Walah, we understand the importance of value for money. Our consultation includes transparent pricing with no hidden costs, helping you make informed decisions.",
    },
    {
      title: "Expert Insights",
      description:
        "Leverage the knowledge of our certified professionals who stay updated with the latest industry trends and technological advancements in air conditioning. We provide expert advice to help you make the right choices.",
    },
  ];

const Consultation = () => {
  return (
    <section id="consultation" className="py-10 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="my-4 animate-bounceText bg-gray-100 dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="text-center animate-slideIn font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
          Consultation Services for Air Conditioners
        </h2>
        <p className="my-4 animate-slideIn text-base sm:text-lg text-gray-700 dark:text-gray-300">
          At Service Walah, we take pride in offering professional consultation
          services to help you make the best decisions for your air conditioning
          needs. Whether you're setting up a new system or optimizing your
          existing one, our expert team ensures a seamless experience tailored
          to your space and requirements.
        </p>
      </div>

        {/* Consultation Process */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Consultation Process */}
        <div className="my-4 animate-zoomIn max-w-4xl mx-auto">
          <h2 className="my-4 font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
            Our Consultation Process
          </h2>
          <ul className="space-y-2 list-disc list-inside animate-zoomIn text-gray-700 dark:text-gray-300">
            {data.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.title}:&nbsp;</span>
                {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Video Section */}
        <div className="p-4 animate-zoomIn flex justify-center items-center">
          <video
            className="w-full h-auto rounded shadow"
            controls
            preload="metadata"
            aria-label="AMC video"
          >
            <source src="/videos/amc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="my-4 animate-zoomIn bg-gray-100 dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="my-4 font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-100">
        Why Choose Our Consultation Services?
        </h2>
        <ul className="list-disc pl-4 sm:pl-8 space-y-4 text-gray-700 dark:text-gray-300">
          {services.map((item, index) => (
            <li key={index}>
              <span className="font-bold">{item.title}:</span> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Consultation;
