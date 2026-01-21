"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SpecRow {
  feature: string;
  domestic: string;
  commercial: string;
  highlight?: boolean;
}

const TechnicalSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"performance" | "installation" | "maintenance">("performance");

  const performanceSpecs: SpecRow[] = [
    { feature: "Cooling Capacity", domestic: "0.75 - 3.0 Ton", commercial: "5.0 - 100+ Ton", highlight: true },
    { feature: "SEER Rating", domestic: "18 - 22 BTU/Wh", commercial: "14 - 20 BTU/Wh" },
    { feature: "COP (Coefficient of Performance)", domestic: "4.2 - 5.1", commercial: "3.8 - 4.8", highlight: true },
    { feature: "Noise Level", domestic: "19 - 35 dB", commercial: "45 - 65 dB" },
    { feature: "Operating Temperature Range", domestic: "-10°C to 50°C", commercial: "-15°C to 55°C" },
    { feature: "Refrigerant Type", domestic: "R-32 / R-410A", commercial: "R-410A / R-134a", highlight: true },
    { feature: "Power Supply", domestic: "230V, 1-Phase", commercial: "415V, 3-Phase" },
    { feature: "Energy Star Rating", domestic: "4-5 Star BEE", commercial: "3-4 Star BEE" }
  ];

  const installationSpecs: SpecRow[] = [
    { feature: "Installation Time", domestic: "4 - 6 hours", commercial: "2 - 4 weeks", highlight: true },
    { feature: "Piping Requirements", domestic: "Copper, 15-20 feet", commercial: "Copper/Steel, 100+ feet" },
    { feature: "Electrical Work", domestic: "Basic wiring", commercial: "Panel upgrades, BMS integration", highlight: true },
    { feature: "Structural Requirements", domestic: "Wall mounting", commercial: "Roof/Plant room setup" },
    { feature: "Permits Required", domestic: "None typically", commercial: "Municipal approvals", highlight: true },
    { feature: "Site Preparation", domestic: "Minimal", commercial: "Extensive civil work" },
    { feature: "Testing & Commissioning", domestic: "Basic functional test", commercial: "Comprehensive TAB testing" },
    { feature: "Documentation", domestic: "User manual", commercial: "O&M manuals, As-built drawings" }
  ];

  const maintenanceSpecs: SpecRow[] = [
    { feature: "Service Frequency", domestic: "Bi-annual", commercial: "Quarterly", highlight: true },
    { feature: "Filter Replacement", domestic: "Every 3-6 months", commercial: "Monthly inspection" },
    { feature: "Refrigerant Check", domestic: "Annual", commercial: "Quarterly", highlight: true },
    { feature: "Coil Cleaning", domestic: "Annual", commercial: "Bi-annual" },
    { feature: "Electrical Inspection", domestic: "Annual", commercial: "Quarterly", highlight: true },
    { feature: "Performance Testing", domestic: "Basic checks", commercial: "Comprehensive diagnostics" },
    { feature: "Preventive Maintenance Cost", domestic: "₹2,000 - ₹5,000/year", commercial: "₹50,000 - ₹2,00,000/year" },
    { feature: "Emergency Response", domestic: "Next day", commercial: "2-4 hours", highlight: true }
  ];

  const getSpecData = () => {
    switch (activeTab) {
      case "performance": return performanceSpecs;
      case "installation": return installationSpecs;
      case "maintenance": return maintenanceSpecs;
      default: return performanceSpecs;
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="tech-mono text-blue-400 text-sm font-semibold tracking-wider mb-4">
          DETAILED SPECIFICATIONS
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Technical <span className="gradient-text">Comparison</span>
        </h2>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="glass-morphic rounded-xl p-2 border border-white/10">
          <div className="flex gap-2">
            {["performance", "installation", "maintenance"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`tech-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-morphic rounded-2xl border border-white/10 overflow-hidden"
      >
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10">
          <div className="p-6 tech-mono text-sm font-semibold text-blue-400">
            FEATURE
          </div>
          <div className="p-6 tech-mono text-sm font-semibold text-blue-400 border-l border-white/10">
            DOMESTIC SOLUTIONS
          </div>
          <div className="p-6 tech-mono text-sm font-semibold text-orange-400 border-l border-white/10">
            COMMERCIAL SOLUTIONS
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/10">
          {getSpecData().map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`grid grid-cols-3 hover:bg-white/5 transition-colors ${
                spec.highlight ? "bg-gradient-to-r from-blue-500/5 to-orange-500/5" : ""
              }`}
            >
              <div className="p-6">
                <div className="text-white font-medium">{spec.feature}</div>
                {spec.highlight && (
                  <div className="tech-mono text-xs text-blue-400 mt-1">KEY METRIC</div>
                )}
              </div>
              <div className="p-6 border-l border-white/10">
                <div className="text-white/80">{spec.domestic}</div>
              </div>
              <div className="p-6 border-l border-white/10">
                <div className="text-white/80">{spec.commercial}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Performance Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-morphic rounded-xl p-6 border border-green-400/20 text-center">
          <div className="text-3xl font-black text-green-400 mb-2">99.2%</div>
          <div className="tech-mono text-sm text-white/80">System Reliability</div>
          <div className="text-xs text-white/60 mt-1">Based on 5000+ installations</div>
        </div>
        
        <div className="glass-morphic rounded-xl p-6 border border-blue-400/20 text-center">
          <div className="text-3xl font-black text-blue-400 mb-2">30%</div>
          <div className="tech-mono text-sm text-white/80">Energy Savings</div>
          <div className="text-xs text-white/60 mt-1">Compared to conventional systems</div>
        </div>
        
        <div className="glass-morphic rounded-xl p-6 border border-orange-400/20 text-center">
          <div className="text-3xl font-black text-orange-400 mb-2">24/7</div>
          <div className="tech-mono text-sm text-white/80">Support Available</div>
          <div className="text-xs text-white/60 mt-1">Emergency response guaranteed</div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalSpecs;