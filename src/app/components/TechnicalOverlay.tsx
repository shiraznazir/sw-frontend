"use client";

import React from "react";

const TechnicalOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Technical Elements */}
      <div className="absolute top-1/4 left-10 opacity-5 thermal-pulse">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-blue-400">
          <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="60" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M10 60 L110 60 M60 10 L60 110" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-10 opacity-5 thermal-pulse" style={{ animationDelay: '1s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-orange-400">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M20 50 L80 50 M50 20 L50 80" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>
      </div>

      {/* Temperature Flow Lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent temperature-flow"></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent temperature-flow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent temperature-flow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default TechnicalOverlay;