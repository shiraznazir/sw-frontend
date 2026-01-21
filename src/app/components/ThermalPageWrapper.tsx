"use client";

import React from "react";
import { motion } from "framer-motion";

interface ThermalPageWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb?: Array<{ label: string; href?: string }>;
}

const ThermalPageWrapper: React.FC<ThermalPageWrapperProps> = ({
  children,
  title,
  subtitle,
  description,
  breadcrumb
}) => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto pt-8 sm:pt-12 pb-6 sm:pb-8"
      >
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 tech-mono text-xs sm:text-sm text-white/60">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {item.href ? (
                    <a href={item.href} className="hover:text-blue-400 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-white/80">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>
        )}

        {/* Page Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          {subtitle && (
            <div className="tech-mono text-blue-400 text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-4">
              {subtitle}
            </div>
          )}
          <h1 className="responsive-title font-black text-white mb-4 sm:mb-6">
            {title.split(' ').map((word, index) => (
              <span key={index}>
                {index === Math.floor(title.split(' ').length / 2) ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
                {index < title.split(' ').length - 1 && ' '}
              </span>
            ))}
          </h1>
          {description && (
            <p className="responsive-text text-white/70 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </motion.div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default ThermalPageWrapper;