"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookACall from "./BookACall";

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [currentCTA, setCurrentCTA] = useState(0);

  const ctaOptions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "Call Now",
      action: () => window.open("tel:+919876543210"),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      text: "WhatsApp",
      action: () => window.open("https://wa.me/919876543210?text=Hi, I need HVAC service assistance"),
      color: "from-green-600 to-green-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: "Book Service",
      action: () => setIsBookCallOpen(true),
      color: "from-blue-500 to-orange-500"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = 300;
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCTA((prev) => (prev + 1) % ctaOptions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentOption = ctaOptions[currentCTA];

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            {/* Main CTA Button */}
            <motion.button
              onClick={currentOption.action}
              className={`cta-floating bg-gradient-to-r ${currentOption.color} shadow-lg hover:shadow-xl transition-all duration-300 group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                key={currentCTA}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentOption.icon}
              </motion.div>
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-2 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap tech-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {currentOption.text}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
            </motion.div>

            {/* Emergency Pulse Ring */}
            {currentCTA === 0 && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-green-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-orange-500 p-4 z-40 md:hidden"
          >
            <div className="flex items-center justify-between max-w-sm mx-auto">
              <div className="text-white">
                <div className="font-bold text-sm">Need HVAC Service?</div>
                <div className="text-xs opacity-90">24/7 Emergency Support</div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => window.open("tel:+919876543210")}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Call
                </button>
                <button
                  onClick={() => setIsBookCallOpen(true)}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookACall 
        label="Schedule Professional Service" 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default FloatingCTA;