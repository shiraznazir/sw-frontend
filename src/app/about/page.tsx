"use client";

import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";

const data = [
  {
    title: "Air Conditioner Installation",
    description: "Precise and reliable installations tailored to your space.",
  },
  {
    title: "Repair Services",
    description:
      "Quick and efficient solutions to keep your AC running smoothly.",
  },
  {
    title: "Gas Charging",
    description:
      "Ensuring optimal cooling performance with professional gas refilling.",
  },
  {
    title: "AMC",
    description:
      "Comprehensive maintenance packages for long-lasting AC performance.",
  },
];

const About = () => {
  return (
    <div className="py-5 animate-zoomIn">
      {/* Breadcrumb */}
      <BreadCrumbComp title="Home" subTitle="About Us" subTitle1="" />

      {/* Main Heading */}
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded">
        <h1 className="font-bold text-2xl sm:text-4xl text-center text-gray-800 dark:text-gray-100">
          About Us
        </h1>
      </div>

      {/* Introduction Section */}
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded">
        <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300">
          Welcome to <span className="font-bold">Service Walah</span>, your
          trusted partner for all your air conditioning needs. With a commitment
          to quality and customer satisfaction, we specialize in delivering
          top-notch air conditioning solutions across{" "}
          <span className="font-bold">
            domestic, commercial, and industrial&nbsp;
          </span>
          sectors.
        </p>
      </div>

      {/* Services Section */}
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded">
        <h2 className="font-bold text-xl sm:text-2xl text-center text-gray-800 dark:text-gray-100">
          Our expertise includes:
        </h2>
        <ul className="list-disc pl-4 sm:pl-8 space-y-4 my-4 text-gray-700 dark:text-gray-300">
          {data.map((item, index) => (
            <li key={index} className="text-base sm:text-lg">
              <span className="font-bold text-gray-800 dark:text-gray-100">
                {item.title}:&nbsp;
              </span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Sections */}
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded">
        <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300">
          At <span className="font-bold">Service Walah</span>, we pride
          ourselves on our skilled technicians, prompt service, and attention to
          detail. Whether you're upgrading your home cooling system, managing a
          commercial space, or maintaining industrial-grade AC units, we’re here
          to ensure your comfort and efficiency.
        </p>
      </div>
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded">
        <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300">
          Choose <span className="font-bold">Service Walah</span> for reliable
          air conditioning services you can count on—because your comfort is our
          priority.
        </p>
      </div>
    </div>
  );
};

export default About;
