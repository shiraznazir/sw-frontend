"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookACall from "@/app/components/BookACall";
import CoolingCalculator from "./CoolingCalculator";

const ThermalHero: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="thermal-bg min-h-screen relative overflow-hidden">
      {/* Technical Line Art Overlay */}
      <div className="absolute inset-0 ac-schematic opacity-30"></div>
      
      {/* AC Compressor SVG Overlay - Hidden on mobile */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
          <rect x="40" y="60" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M75 100 L125 100 M100 75 L100 125" stroke="currentColor" strokeWidth="1"/>
          <rect x="20" y="90" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="160" y="90" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M40 100 L60 100 M140 100 L160 100" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Section - Hero Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-6"
            >
              <div className="tech-mono text-blue-400 text-xs sm:text-sm font-semibold tracking-wider">
                PREMIUM HVAC SOLUTIONS
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
                Thermal
                <br />
                <span className="gradient-text">Efficiency</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-5xl font-normal text-white/80">
                  Redefined
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Advanced climate control systems engineered for optimal performance, 
                energy efficiency, and uncompromising comfort.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 tech-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white/80">COP 4.5+ Efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80">24/7 Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-white/80">ISO Certified</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="cta-primary tech-mono text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-6 order-1"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                SCHEDULE CONSULTATION
              </Button>
              <Button
                onClick={() => window.open("tel:+919876543210")}
                className="cta-emergency tech-mono text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-6 order-2 sm:order-3"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                EMERGENCY CALL
              </Button>
              <Button
                onClick={() => window.location.href = "/service"}
                className="cta-secondary tech-mono text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-6 order-3 sm:order-2"
              >
                VIEW SERVICES
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="tech-mono text-xs text-white/80">500+ Installations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="tech-mono text-xs text-white/80">99.2% Uptime</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="tech-mono text-xs text-white/80">2hr Response</span>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Cooling Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="w-full max-w-sm">
              <CoolingCalculator />
            </div>
          </motion.div>
        </div>
      </div>

      <BookACall label="Schedule Professional Consultation" isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ThermalHero;