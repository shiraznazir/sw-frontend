"use client";

import React from "react";
import { motion } from "framer-motion";

const ThermalStats: React.FC = () => {
  const stats = [
    {
      value: "4.8",
      unit: "COP",
      label: "Average Efficiency Rating",
      description: "Coefficient of Performance across all installations"
    },
    {
      value: "2",
      unit: "HRS",
      label: "Emergency Response",
      description: "Average response time for critical failures"
    },
    {
      value: "500+",
      unit: "",
      label: "Systems Installed",
      description: "Commercial and residential installations"
    },
    {
      value: "99.2%",
      unit: "",
      label: "Uptime Guarantee",
      description: "System availability with maintenance contracts"
    }
  ];

  const features = [
    {
      title: "Smart Diagnostics",
      description: "IoT-enabled monitoring and predictive maintenance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Energy Recovery",
      description: "Heat recovery ventilation for maximum efficiency",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Zone Control",
      description: "Individual temperature control for each area",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl p-6 text-center border border-white/10"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-3xl lg:text-4xl font-black text-white">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="tech-mono text-sm text-blue-400 font-semibold">
                    {stat.unit}
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold mb-2">{stat.label}</h3>
              <p className="tech-mono text-xs text-white/60">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="tech-mono text-blue-400 text-sm font-semibold tracking-wider mb-4">
            ADVANCED TECHNOLOGIES
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Next-Gen <span className="gradient-text">Climate Control</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThermalStats;