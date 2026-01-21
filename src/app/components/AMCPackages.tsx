"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AMCPackage {
  name: string;
  price: string;
  duration: string;
  visits: string;
  features: string[];
  popular?: boolean;
  gradient: string;
  savings: string;
}

const AMCPackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("standard");

  const packages: AMCPackage[] = [
    {
      name: "Basic",
      price: "₹8,000",
      duration: "12 months",
      visits: "2 visits/year",
      savings: "Save 15%",
      gradient: "from-blue-500/10 to-cyan-500/10",
      features: [
        "Bi-annual system inspection",
        "Filter cleaning & replacement",
        "Basic performance check",
        "Refrigerant level monitoring",
        "Electrical connection inspection",
        "Service report documentation",
        "Phone support during business hours",
        "10% discount on repairs"
      ]
    },
    {
      name: "Standard",
      price: "₹15,000",
      duration: "12 months",
      visits: "4 visits/year",
      savings: "Save 25%",
      popular: true,
      gradient: "from-green-500/10 to-emerald-500/10",
      features: [
        "Quarterly system maintenance",
        "Premium filter replacement",
        "Comprehensive performance testing",
        "Refrigerant top-up included",
        "Electrical & mechanical checks",
        "Coil cleaning & sanitization",
        "Priority phone & email support",
        "20% discount on repairs",
        "Emergency call-out (2 per year)",
        "Energy efficiency optimization"
      ]
    },
    {
      name: "Premium",
      price: "₹25,000",
      duration: "12 months",
      visits: "6 visits/year",
      savings: "Save 35%",
      gradient: "from-orange-500/10 to-red-500/10",
      features: [
        "Bi-monthly preventive maintenance",
        "High-efficiency filter upgrades",
        "Advanced diagnostic testing",
        "Unlimited refrigerant top-ups",
        "Complete system overhaul",
        "Deep coil cleaning & disinfection",
        "24/7 priority support hotline",
        "30% discount on all repairs",
        "Unlimited emergency call-outs",
        "Performance guarantee & monitoring",
        "Annual energy audit report",
        "Spare parts warranty coverage"
      ]
    }
  ];

  const amcBenefits = [
    {
      title: "Cost Savings",
      description: "Up to 35% savings on maintenance and repair costs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Extended Lifespan",
      description: "Regular maintenance extends system life by 40-60%",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Energy Efficiency",
      description: "Maintain peak efficiency and reduce energy bills",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Priority Support",
      description: "Guaranteed response times and priority service",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12h-6m-6 0h6" />
        </svg>
      )
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
        <div className="tech-mono text-green-400 text-sm font-semibold tracking-wider mb-4">
          ANNUAL MAINTENANCE CONTRACTS
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          AMC <span className="gradient-text">Packages</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Comprehensive maintenance plans designed to keep your HVAC systems running at peak performance
        </p>
      </motion.div>

      {/* AMC Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative glass-morphic rounded-2xl p-8 border ${
              pkg.popular ? "border-green-400/40 scale-105" : "border-white/10"
            } bg-gradient-to-br ${pkg.gradient} hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedPackage(pkg.name.toLowerCase())}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white tech-mono text-xs px-4 py-2 rounded-full font-semibold">
                  MOST POPULAR
                </div>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
                <span className="tech-mono text-sm text-white/60">/{pkg.duration}</span>
              </div>
              <div className="tech-mono text-sm text-green-400 font-semibold">{pkg.savings}</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span className="text-white/80">Service Visits</span>
                <span className="text-white font-semibold">{pkg.visits}</span>
              </div>
              
              <div className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className={`w-full ${
                pkg.popular 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" 
                  : "bg-white/10 hover:bg-white/20 border border-white/20"
              } text-white font-semibold py-3`}
            >
              Choose {pkg.name}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* AMC Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose Our <span className="gradient-text">AMC Plans?</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amcBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-xl p-6 border border-white/10 text-center hover:border-green-400/30 transition-all duration-300"
            >
              <div className="text-green-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h4 className="text-white font-semibold mb-3">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AMC Process Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-morphic rounded-2xl p-8 border border-white/10"
      >
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          AMC Service <span className="gradient-text">Timeline</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Contract Signing", desc: "Choose package & sign agreement", time: "Day 1" },
            { step: "2", title: "Initial Inspection", desc: "Comprehensive system assessment", time: "Week 1" },
            { step: "3", title: "Regular Maintenance", desc: "Scheduled visits as per plan", time: "Ongoing" },
            { step: "4", title: "Annual Review", desc: "Performance review & renewal", time: "Year End" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="tech-mono text-white font-bold">{item.step}</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-white/70 text-sm mb-2">{item.desc}</p>
              <div className="tech-mono text-xs text-green-400">{item.time}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AMCPackages;