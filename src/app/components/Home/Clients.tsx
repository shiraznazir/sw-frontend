"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ClientsCard from "@/app/components/ClientsCard";

interface Service {
  img: string;
}

const clientData: Service[] = [
  { img: "/images/anantraj.png" },
    { img: "/images/FCI.svg" },
    { img: "/images/AIF.png" },
    { img: "/images/NHPC.png" },
    { img: "/images/monica.png" },
    { img: "/images/NTPC.png" },
    { img: "/images/pnb.png" },
    { img: "/images/indianoil.gif" },
    { img: "/images/HolidaysNexus.png" },
];

const Clients: React.FC = () => {
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
    router.push("/service");

    setTimeout(() => {
      const destinationDiv = document.getElementById(title);
      if (destinationDiv) {
        destinationDiv.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="my-20 text-center relative">
      {/* Heading */}
      <div className="tech-mono text-blue-400 text-sm font-semibold tracking-wider mb-4">
        TRUSTED PARTNERSHIPS
      </div>
      <h1 className="py-8 text-4xl lg:text-5xl font-black text-white">
        Industry <span className="gradient-text">Leaders</span>
      </h1>

      {/* Scroll Buttons */}
      <div className="absolute left-[-20px] bottom-20 transform -translate-y-1/2 z-10">
        <div
          onClick={handleScrollLeft}
          className="glass-morphic rounded-full p-3 cursor-pointer border border-white/20 hover:border-white/40 transition-all duration-300"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
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
          className="glass-morphic rounded-full p-3 cursor-pointer border border-white/20 hover:border-white/40 transition-all duration-300"
          aria-label="Scroll Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
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
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          scrollBehavior: "smooth",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {clientData.map((client, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <div className="glass-morphic rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
              <ClientsCard img={client.img} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
