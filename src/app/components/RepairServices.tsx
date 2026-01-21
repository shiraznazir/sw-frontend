"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface RepairCategory {
  name: string;
  issues: string[];
  avgCost: string;
  timeRequired: string;
  urgency: "low" | "medium" | "high" | "critical";
  icon: React.ReactNode;
}

const RepairServices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("cooling");

  const repairCategories: Record<string, RepairCategory> = {
    cooling: {
      name: "Cooling Issues",
      avgCost: "₹2,500 - ₹8,000",
      timeRequired: "2-4 hours",
      urgency: "high",
      issues: [
        "AC not cooling properly",
        "Insufficient airflow",
        "Ice formation on coils",
        "Refrigerant leakage",
        "Compressor malfunction",
        "Thermostat calibration issues",
        "Blocked air filters",
        "Condenser coil problems"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    electrical: {
      name: "Electrical Problems",
      avgCost: "₹1,500 - ₹5,000",
      timeRequired: "1-3 hours",
      urgency: "critical",
      issues: [
        "AC not turning on",
        "Frequent tripping of circuit breaker",
        "Electrical short circuits",
        "Faulty wiring connections",
        "Control panel malfunctions",
        "Motor bearing failures",
        "Capacitor replacements",
        "Power supply irregularities"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    mechanical: {
      name: "Mechanical Repairs",
      avgCost: "₹3,000 - ₹12,000",
      timeRequired: "3-6 hours",
      urgency: "medium",
      issues: [
        "Strange noises from unit",
        "Vibration and rattling sounds",
        "Fan motor replacements",
        "Belt and pulley adjustments",
        "Bearing lubrication",
        "Compressor overhaul",
        "Expansion valve issues",
        "Ductwork repairs and sealing"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    },
    performance: {
      name: "Performance Issues",
      avgCost: "₹2,000 - ₹6,000",
      timeRequired: "2-4 hours",
      urgency: "low",
      issues: [
        "High energy consumption",
        "Uneven temperature distribution",
        "Poor air quality",
        "System efficiency degradation",
        "Humidity control problems",
        "Airflow optimization",
        "Energy audit and optimization",
        "System performance tuning"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "critical": return "text-red-400 bg-red-400/10 border-red-400/20";
      case "high": return "text-orange-400 bg-orange-400/10 border-orange-400/20";
      case "medium": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "low": return "text-green-400 bg-green-400/10 border-green-400/20";
      default: return "text-white/60 bg-white/5 border-white/10";
    }
  };

  const currentCategory = repairCategories[selectedCategory];

  const emergencySteps = [
    {
      step: "Call",
      title: "Emergency Hotline",
      description: "Call our 24/7 emergency number",
      time: "Immediate",
      phone: "+91-9876543210"
    },
    {
      step: "Assess",
      title: "Remote Diagnosis",
      description: "Initial troubleshooting over phone",
      time: "5-10 minutes",
      phone: null
    },
    {
      step: "Dispatch",
      title: "Technician Dispatch",
      description: "Certified technician sent to location",
      time: "Within 2 hours",
      phone: null
    },
    {
      step: "Repair",
      title: "On-Site Repair",
      description: "Professional diagnosis and repair",
      time: "1-4 hours",
      phone: null
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="tech-mono text-red-400 text-sm font-semibold tracking-wider mb-4">
          24/7 EMERGENCY REPAIRS
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Repair <span className="gradient-text">Services</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Expert diagnosis and repair services for all HVAC system issues with guaranteed response times
        </p>
      </motion.div>

      {/* Emergency Contact Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-morphic rounded-2xl p-6 border border-red-400/20 bg-gradient-to-r from-red-500/10 to-orange-500/10 mb-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Emergency Repair Hotline</h3>
              <p className="text-white/70">Available 24/7 for critical HVAC failures</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-center">
              <div className="tech-mono text-2xl font-bold text-red-400">+91-9876543210</div>
              <div className="text-xs text-white/60">Emergency Line</div>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8">
              Call Now
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Repair Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {Object.entries(repairCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`glass-morphic rounded-xl p-6 border transition-all duration-300 text-left ${
              selectedCategory === key
                ? "border-red-400/40 bg-red-500/10"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="text-red-400 mb-3">
              {category.icon}
            </div>
            <h3 className="text-white font-semibold mb-2">{category.name}</h3>
            <div className={`tech-mono text-xs px-2 py-1 rounded-full border ${getUrgencyColor(category.urgency)}`}>
              {category.urgency.toUpperCase()}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Category Details */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
      >
        {/* Category Information */}
        <div className="glass-morphic rounded-2xl p-8 border border-white/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-red-400">
              {currentCategory.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{currentCategory.name}</h3>
              <div className={`tech-mono text-sm px-3 py-1 rounded-full border mt-2 ${getUrgencyColor(currentCategory.urgency)}`}>
                {currentCategory.urgency.toUpperCase()} PRIORITY
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="tech-mono text-xs text-white/60 mb-1">AVERAGE COST</div>
              <div className="text-white font-semibold">{currentCategory.avgCost}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="tech-mono text-xs text-white/60 mb-1">TIME REQUIRED</div>
              <div className="text-white font-semibold">{currentCategory.timeRequired}</div>
            </div>
          </div>

          <h4 className="text-white font-semibold mb-4">Common Issues We Fix:</h4>
          <div className="space-y-3">
            {currentCategory.issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-white/80">{issue}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emergency Process */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">Emergency Response Process</h4>
          
          {emergencySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="tech-mono text-sm font-bold text-white">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-white font-semibold mb-2">{step.title}</h5>
                <p className="text-white/70 text-sm mb-2">{step.description}</p>
                <div className="flex items-center gap-4">
                  <div className="tech-mono text-xs text-red-400">{step.time}</div>
                  {step.phone && (
                    <div className="tech-mono text-xs text-white/60">{step.phone}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Repair Guarantee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-morphic rounded-2xl p-8 border border-white/10 text-center"
      >
        <h3 className="text-3xl font-bold text-white mb-6">
          Our <span className="gradient-text">Repair Guarantee</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold">90-Day Warranty</h4>
            <p className="text-white/70 text-sm">All repairs covered for 90 days</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold">2-Hour Response</h4>
            <p className="text-white/70 text-sm">Guaranteed emergency response time</p>
          </div>
          
          <div className="space-y-3">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold">Genuine Parts</h4>
            <p className="text-white/70 text-sm">Only authentic manufacturer parts used</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RepairServices;