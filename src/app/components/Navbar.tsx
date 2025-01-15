"use client";

import React, { useState } from "react";
import ModeToggle from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import BookACall from "./BookACall";
import Logo from "./Logo";

const DropdownList = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 animate-zoomIn">
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/service">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about">About Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact">Contact Us</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


const MenubarDesktop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="hidden animate-zoomIn md:flex gap-10 p-2">
      <Link
        href="/"
        className="font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Home
      </Link>
      <Link
        href="/service"
        className="font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Services
      </Link>
      <Link
        href="/about"
        className="font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Contact Us
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400"
      >
        Enquiry
      </div>
      <BookACall label="Enquiry Form" isOpen={isOpen} onClose={onClose} />
    </div>
  );
};


const Navbar = () => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 dark:text-white h-20 w-full fixed px-5 md:px-10 flex justify-between items-center shadow z-50`}
    >
      {/* Logo Section */}
      <Logo />
      <MenubarDesktop />

      {/* Mobile Menu and Additional Controls */}
      <div className="flex items-center gap-5">
        <DropdownList />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
