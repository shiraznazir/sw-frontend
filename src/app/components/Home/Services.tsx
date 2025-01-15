"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ServicesCard from "@/app/components/ServicesCard";

interface Service {
  title: string;
  img: string; 
}

const services: Service[] = [
  { title: "Installation", img: "/images/installation.webp" },
  { title: "Maintenance", img: "/images/maintenance.webp" },
  { title: "Repair", img: "/images/repair.jpeg" },
  { title: "Consultation", img: "/images/consultation.jpeg" },
  { title: "AMC", img: "/images/amc.webp" },
];

const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Scroll Handlers
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Navigation Handler
  const handleNavigation = (title: string) => {
    router.push(`/service/${title.toLowerCase()}`);
  };

  return (
    <section className="my-20 text-center relative">
      {/* Heading */}
      <h1 className="py-8 text-5xl font-bold animate-zoomIn">Our Services</h1>

      {/* Scroll Buttons */}
      <div className="absolute left-[-20px] bottom-20 transform -translate-y-1/2 z-10">
        <div
          onClick={handleScrollLeft}
          className="rounded-full p-2 cursor-pointer"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <div className="absolute right-[-10px] bottom-20 transform -translate-y-1/2 z-10">
        <div
          onClick={handleScrollRight}
          className="cursor-pointer rounded-full p-2"
          aria-label="Scroll Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* Scrollable Services */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide gap-6 px-4"
        style={{ cursor: isDragging ? "grabbing" : "grab", scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {services.map((service, index) => (
          <div key={index} className="flex-shrink-0 w-64 transition-transform scale-95 hover:scale-100 shadow-lg hover:shadow-2xl">
            <ServicesCard
              onClick={() => handleNavigation(service.title)}
              title={service.title}
              img={service.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
