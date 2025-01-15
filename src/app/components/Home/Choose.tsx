"use client";

import React from "react";
import CustomCard from "@/app/components/CustomCard";

const data = [

  {
    title: "Energy-Efficient Installation",
    img: "/images/c1.png",
    description:
      "Proper installation is key to reducing energy consumption. Our experts ensure your system is set up for optimal performance, saving you money on electricity bills.",
  },
  {
    title: "Quick and Hassle-Free Service",
    img: "/images/c2.png",
    description:
      "From consultation to installation, we handle every step with precision and care, ensuring minimal disruption to your daily routine.",
  },
  {
    title: "Customer-Centric Approach",
    img: "/images/c3.png",
    description:
      "We prioritize your needs and are committed to delivering personalized solutions and exceptional service.",
  },
  {
    title: "Experienced Engineers",
    img: "/images/c4.png",
    description:
      "Our certified professionals have years of experience installing all types of air conditioning systems, including split, window, and central AC units.",
  },
  {
    title: "Customized Solutions",
    img: "/images/c5.png",
    description:
      "We understand that every space is unique. Our team assesses your space to recommend and install the perfect air conditioning solution tailored to your needs.",
  },
  {
    title: "Affordable Pricing",
    img: "/images/c6.png",
    description:
      "We offer competitive rates without compromising on quality. Transparency in pricing ensures you get value for every rupee spent.",
  },
];

const Choose = () => {
  return (
    <section id="Choose" className="">
      <div className="py-5 text-center">
        <h1 className="pt-4 pb-2 text-3xl font-bold animate-zoomIn md:text-4xl lg:text-5xl">
          Why Choose Service Walah?
        </h1>
        <p className="py-2 pb-8 text-sm md:text-base animate-zoomIn">
          At <span className="font-bold">Service Walah</span>, we specialize in
          providing seamless and efficient air conditioning installation
          services for homes, offices, and commercial spaces.
          <br /> Our expert team ensures every installation meets the highest
          standards of <span className="font-bold">
            quality, reliability,
          </span>{" "}
          and <span className="font-bold">energy efficiency.</span>
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {data?.map((element, index) => (
            <CustomCard
              key={index}
              title={element.title}
              description={element.description}
              img={element.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
