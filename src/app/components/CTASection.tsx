"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BookACall from "./BookACall";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA?: {
    text: string;
    action: () => void;
  };
  emergencyCTA?: boolean;
  variant?: "default" | "emergency" | "success" | "info";
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  emergencyCTA = false,
  variant = "default",
  className = ""
}) => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case "emergency":
        return "border-red-400/20 bg-gradient-to-br from-red-500/10 to-orange-500/5";
      case "success":
        return "border-green-400/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5";
      case "info":
        return "border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5";
      default:
        return "border-white/10";
    }
  };

  const handlePrimaryCTA = () => {
    if (primaryCTA.text.toLowerCase().includes("call") || primaryCTA.text.toLowerCase().includes("consultation")) {
      setIsBookCallOpen(true);
    } else {
      primaryCTA.action();
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`glass-morphic rounded-2xl p-6 md:p-12 border ${getVariantStyles()} text-center ${className}`}
      >
        {emergencyCTA && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <span className="tech-mono text-red-400 text-sm font-semibold">EMERGENCY RESPONSE AVAILABLE</span>
          </div>
        )}

        {subtitle && (
          <div className="tech-mono text-blue-400 text-sm font-semibold tracking-wider mb-4">
            {subtitle}
          </div>
        )}

        <h2 className="responsive-title font-black text-white mb-4 md:mb-6">
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {word.toLowerCase().includes('thermal') || 
               word.toLowerCase().includes('efficiency') || 
               word.toLowerCase().includes('professional') ||
               word.toLowerCase().includes('expert') ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
              {index < title.split(' ').length - 1 && ' '}
            </span>
          ))}
        </h2>

        <p className="responsive-text text-white/70 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handlePrimaryCTA}
            className={`cta-primary tech-mono text-sm md:text-base px-6 md:px-8 py-3 md:py-4 ${
              emergencyCTA ? "cta-emergency" : ""
            }`}
          >
            {emergencyCTA && (
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            )}
            {primaryCTA.text}
          </Button>

          {secondaryCTA && (
            <Button
              onClick={secondaryCTA.action}
              className="cta-secondary tech-mono text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
            >
              {secondaryCTA.text}
            </Button>
          )}
        </div>

        {emergencyCTA && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-400/20 rounded-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="tech-mono text-red-400 text-sm font-semibold">24/7 EMERGENCY HOTLINE</span>
            </div>
            <a href="tel:+919876543210" className="tech-mono text-white text-lg font-bold hover:text-red-400 transition-colors">
              +91-9876543210
            </a>
          </div>
        )}
      </motion.section>

      <BookACall 
        label="Schedule Professional Consultation" 
        isOpen={isBookCallOpen} 
        onClose={() => setIsBookCallOpen(false)} 
      />
    </>
  );
};

export default CTASection;