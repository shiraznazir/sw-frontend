"use client";

import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

interface ServicesCardProps {
  img: string | StaticImageData;
}

const ClientsCard: React.FC<ServicesCardProps> = ({ img }) => {
  return (
    <div
      className="p-4 scale-90 hover:scale-100 rounded-lg transition-colors duration-200"
    >
  
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-lg animate-zoomIn"
          src={img}
          fill
          sizes="100%"
          alt={"Client"}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ClientsCard;
