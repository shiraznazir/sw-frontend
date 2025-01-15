"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface CustomCardProps {
  title: string;
  description: string;
  img?: string | StaticImageData;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, img }) => {
  return (
    <Card className="transition-transform animate-zoomIn hover:scale-105 shadow-lg hover:shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {img && (
          <div className="overflow-hidden rounded-t-lg">
            <Image
              src={img}
              alt={title || "Card image"}
              width={500}
              height={300}
              className="w-full h-auto object-cover animate-zoomIn"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="text-center">
        <CardDescription className="animate-slideIn text-sm sm:text-base md:text-sm lg:text-lg">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
