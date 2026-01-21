"use client";

import React, { useState } from "react";
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
            className="w-6 h-6 cursor-pointer text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glass-morphic border border-white/20 bg-black/50 backdrop-blur-xl">
        <DropdownMenuItem asChild>
          <Link href="/" className="text-white hover:text-blue-400">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/service" className="text-white hover:text-blue-400">Services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about" className="text-white hover:text-blue-400">About Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact" className="text-white hover:text-blue-400">Contact Us</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/blog" className="text-white hover:text-blue-400">Blog</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/career" className="text-white hover:text-blue-400">Career</Link>
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
    <div className="hidden md:flex gap-8 items-center">
      <Link
        href="/"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        HOME
      </Link>
      <Link
        href="/service"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        SERVICES
      </Link>
      <Link
        href="/about"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        ABOUT
      </Link>
      <Link
        href="/contact"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        CONTACT
      </Link>
      <Link
        href="/blog"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        BLOG
      </Link>
      <Link
        href="/career"
        className="text-white font-semibold transition-all duration-300 hover:text-blue-400 tech-mono text-sm"
      >
        CAREER
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 tech-mono text-sm"
      >
        ENQUIRY
      </div>
      <BookACall label="Enquiry Form" isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="glass-morphic h-20 w-full fixed px-5 md:px-10 flex justify-between items-center z-50 border-b border-white/10">
      {/* Logo Section */}
      <Logo />
      <MenubarDesktop />

      {/* Mobile Menu */}
      <div className="flex items-center gap-5">
        <DropdownList />
      </div>
    </div>
  );
};

export default Navbar;
