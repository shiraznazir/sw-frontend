"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import LiveDashboard from "./LiveDashboard";

interface SystemSpec {
  feature: string;
  domestic: string;
  commercial: string;
}

interface TechSpec {
  label: string;
  value: string;
  unit?: string;
}

const SystemComparison: React.FC = () => {
  const [activeView, setActiveView] = useState<"comparison" | "domestic" | "commercial">("comparison");
  const [showSchematic, setShowSchematic] = useState<"none" | "domestic" | "commercial">("none");

  const comparisonData: SystemSpec[] = [
    {
      feature: "Typical Scale",
      domestic: "0.75 Ton – 3.0 Ton per unit",
      commercial: "5.0 Ton – 100+ Ton Systems"
    },
    {
      feature: "Ideal For",
      domestic: "Bedrooms, Living Rooms, Small Offices",
      commercial: "Malls, Large Offices, Hospitals, Factories"
    },
    {
      feature: "Installation",
      domestic: "Quick (4–6 hours), minimal ducting",
      commercial: "Complex, involves piping, AHUs, and BMS"
    },
    {
      feature: "Efficiency",
      domestic: "High (5-Star BEE Ratings)",
      commercial: "Ultra-High (Variable Refrigerant Flow)"
    },
    {
      feature: "Control",
      domestic: "Standard Remote / Wi-Fi App",
      commercial: "Integrated Building Management System (BMS)"
    },
    {
      feature: "Maintenance",
      domestic: "Seasonal filter cleaning",
      commercial: "Quarterly technical audits & pressure testing"
    }
  ];

  const domesticSpecs: TechSpec[] = [
    { label: "SEER", value: "18-22", unit: "BTU/Wh" },
    { label: "Noise Level", value: "19-35", unit: "dB" },
    { label: "Refrigerant", value: "R-32" },
    { label: "Power Range", value: "0.8-3.5", unit: "kW" }
  ];

  const commercialSpecs: TechSpec[] = [
    { label: "SEER", value: "14-20", unit: "BTU/Wh" },
    { label: "Noise Level", value: "45-65", unit: "dB" },
    { label: "Refrigerant", value: "R-410A" },
    { label: "Power Range", value: "15-500", unit: "kW" }
  ];

  const liveStatusData = [
    { zone: "Zone A - Lobby", temp: "22°C", status: "optimal", efficiency: "94%" },
    { zone: "Zone B - Office Floor 1", temp: "23°C", status: "cooling", efficiency: "91%" },
    { zone: "Zone C - Conference", temp: "21°C", status: "optimal", efficiency: "96%" },
    { zone: "Zone D - Server Room", temp: "18°C", status: "active", efficiency: "89%" }
  ];

  const DomesticSchematic = () => (
    <svg className="w-full h-32" viewBox="0 0 300 120" fill="none">
      <motion.path
        d="M50 60 L100 60 L100 40 L150 40 L150 60 L200 60"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: showSchematic === "domestic" ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="60"
        r="8"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "domestic" ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.rect
        x="140"
        y="30"
        width="20"
        height="20"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "domestic" ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <motion.circle
        cx="200"
        cy="60"
        r="8"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "domestic" ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </svg>
  );

  const CommercialSchematic = () => (
    <svg className="w-full h-32" viewBox="0 0 300 120" fill="none">
      <motion.path
        d="M30 60 L80 60 L80 30 L120 30 L120 60 L160 60 L160 90 L200 90 L200 60 L250 60"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: showSchematic === "commercial" ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.rect
        x="25"
        y="55"
        width="10"
        height="10"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "commercial" ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
      <motion.rect
        x="115"
        y="25"
        width="10"
        height="10"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "commercial" ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <motion.rect
        x="195"
        y="85"
        width="10"
        height="10"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "commercial" ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
      <motion.circle
        cx="250"
        cy="60"
        r="8"
        stroke="#f97316"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: showSchematic === "commercial" ? 1 : 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      />
    </svg>
  );

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="tech-mono text-blue-400 text-sm font-semibold tracking-wider mb-4">
          SYSTEM SPECIFICATIONS
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Domestic vs <span className="gradient-text">Commercial</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Engineered solutions tailored for residential comfort and commercial-grade performance
        </p>
      </motion.div>

      {/* Desktop Comparison View */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Domestic Solutions Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-morphic rounded-2xl p-8 border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Domestic Solutions</h3>
                <div className="tech-mono text-xs text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  SPLIT/MULTI-SPLIT
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {comparisonData.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-3">
                    <div className="tech-mono text-xs text-white/60 mb-1">{item.feature}</div>
                    <div className="text-white text-sm">{item.domestic}</div>
                  </div>
                ))}
              </div>

              <Button
                onMouseEnter={() => setShowSchematic("domestic")}
                onMouseLeave={() => setShowSchematic("none")}
                className="w-full mb-6 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-400"
              >
                Schematic View
              </Button>

              {showSchematic === "domestic" && (
                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-blue-400/20">
                  <DomesticSchematic />
                </div>
              )}

              {/* Tech Specs Footer */}
              <div className="tech-mono text-xs bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-blue-400 mb-3 font-semibold">TECHNICAL SPECIFICATIONS</div>
                <div className="grid grid-cols-2 gap-3">
                  {domesticSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-white/60">{spec.label}:</span>
                      <span className="text-white font-semibold">
                        {spec.value} {spec.unit && <span className="text-white/60">{spec.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Commercial Solutions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-morphic rounded-2xl p-8 border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-red-500/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Commercial Solutions</h3>
                <div className="tech-mono text-xs text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">
                  VRV/VRF/CHILLED
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {comparisonData.map((item, index) => (
                  <div key={index} className="border-b border-white/10 pb-3">
                    <div className="tech-mono text-xs text-white/60 mb-1">{item.feature}</div>
                    <div className="text-white text-sm">{item.commercial}</div>
                  </div>
                ))}
              </div>

              <Button
                onMouseEnter={() => setShowSchematic("commercial")}
                onMouseLeave={() => setShowSchematic("none")}
                className="w-full mb-6 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/30 text-orange-400"
              >
                Schematic View
              </Button>

              {showSchematic === "commercial" && (
                <div className="mb-6 p-4 bg-white/5 rounded-lg border border-orange-400/20">
                  <CommercialSchematic />
                </div>
              )}

              {/* Tech Specs Footer */}
              <div className="tech-mono text-xs bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-orange-400 mb-3 font-semibold">TECHNICAL SPECIFICATIONS</div>
                <div className="grid grid-cols-2 gap-3">
                  {commercialSpecs.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-white/60">{spec.label}:</span>
                      <span className="text-white font-semibold">
                        {spec.value} {spec.unit && <span className="text-white/60">{spec.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Live Dashboard for Commercial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LiveDashboard />
        </motion.div>
      </div>

      {/* Mobile Accordion View */}
      <div className="lg:hidden space-y-4">
        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => setActiveView("domestic")}
            className={`flex-1 ${activeView === "domestic" ? "bg-blue-500/30 text-blue-400" : "bg-white/5 text-white/60"}`}
          >
            Domestic
          </Button>
          <Button
            onClick={() => setActiveView("commercial")}
            className={`flex-1 ${activeView === "commercial" ? "bg-orange-500/30 text-orange-400" : "bg-white/5 text-white/60"}`}
          >
            Commercial
          </Button>
        </div>

        {activeView === "domestic" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-morphic rounded-2xl p-6 border border-blue-400/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">Domestic Solutions</h3>
            <div className="space-y-3">
              {comparisonData.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-2">
                  <div className="tech-mono text-xs text-white/60">{item.feature}</div>
                  <div className="text-white text-sm">{item.domestic}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
              <div className="text-blue-400 font-semibold text-sm mb-2">Key Benefits</div>
              <div className="text-white/80 text-sm">High reliability and energy savings for residential spaces</div>
            </div>
          </motion.div>
        )}

        {activeView === "commercial" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-morphic rounded-2xl p-6 border border-orange-400/20"
          >
            <h3 className="text-xl font-bold text-white mb-4">Commercial Solutions</h3>
            <div className="space-y-3">
              {comparisonData.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-2">
                  <div className="tech-mono text-xs text-white/60">{item.feature}</div>
                  <div className="text-white text-sm">{item.commercial}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-orange-500/10 rounded-lg">
              <div className="text-orange-400 font-semibold text-sm mb-2">Key Benefits</div>
              <div className="text-white/80 text-sm">Maximum reliability and energy savings for large-scale operations</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SystemComparison;