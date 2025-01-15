"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ServicesCardProps {
  title: string;
  img: string | StaticImageData;
  onClick: () => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, img, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border cursor-pointer animate-zoomIn border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 p-4 rounded-lg transition-colors duration-200"
    >
      <h1 className="py-3 font-bold animate-zoomIn text-lg text-gray-800 dark:text-gray-200">
        {title}
      </h1>
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-lg animate-zoomIn"
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
