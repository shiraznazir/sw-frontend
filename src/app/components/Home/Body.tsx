"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookACall from "@/app/components/BookACall";
import ActionButtons from "../ActionsButton";

const Body: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="pt-10 md:h-screen flex justify-center items-center">
        <div className="flex flex-col font-bold text-xl text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="font-extrabold text-4xl md:text-6xl block">
              Stay cool,
              <br />
              Stay comfortable
            </span>
            <div className="mt-8">
              <span className="text-lg md:text-3xl">
                Professional air conditioning
              </span>
              <br />
              <span className="text-base md:text-2xl">
                services at your doorstep
              </span>
            </div>
          </motion.h1>
          <Button
            className="animate-slideIn my-6 w-3/4 md:w-2/5 font-bold mx-auto md:mx-0"
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            Book A Call
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:grid grid-rows-6 grid-cols-6 gap-3 h-screen pt-10">
        {/* Main Image */}
        <div className="relative animate-zoomIn row-span-6 col-span-3">
          <Image
            className="rounded-l-xl"
            layout="fill"
            src="/images/a1.jpeg"
            priority
            alt="Main air conditioning service image"
          />
        </div>
        {/* Top Right Image */}
        <div className="relative animate-slideIn row-span-3 col-span-3">
          <Image
            className="rounded-tr-xl"
            layout="fill"
            src="/images/a2.jpeg"
            alt="Air conditioning installation image"
          />
        </div>
        {/* Bottom Right Image */}
        <div className="relative animate-zoomIn row-span-3 col-span-3">
          <Image
            className="rounded-br-xl"
            layout="fill"
            src="/images/a3.jpeg"
            alt="Air conditioning maintenance image"
          />
        </div>
      </div>

      {/* Mobile Images Section */}
      <div className="px-10 grid md:hidden grid-cols-2 gap-4">
        <div className="relative w-full h-40">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/images/a1.jpeg"
            alt="Mobile air conditioning service image 1"
          />
        </div>
        <div className="relative w-full h-40">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/images/a2.jpeg"
            alt="Mobile air conditioning service image 2"
          />
        </div>
        <div className="relative w-full h-48 col-span-2">
          <Image
            className="rounded-xl"
            layout="fill"
            src="/images/a3.jpeg"
            alt="Mobile air conditioning service image 3"
          />
        </div>
      </div>
      <BookACall label="Book a call" isOpen={isOpen} onClose={onClose} />
      <ActionButtons />
    </div>
  );
};

export default Body;
