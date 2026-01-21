"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  responseTime: string;
  warranty: string;
  icon: React.ReactNode;
  gradient: string;
}

const ServicePortfolio: React.FC = () => {
  const [activeService, setActiveService] = useState<"amc" | "repair" | "service">("amc");

  const services: Record<string, ServiceDetail> = {
    amc: {
      title: "Annual Maintenance Contract",
      description: "Comprehensive preventive maintenance program ensuring optimal system performance year-round",
      features: [
        "Quarterly system inspections",
        "Filter cleaning & replacement",
        "Refrigerant level monitoring",
        "Electrical connection checks",
        "Performance optimization",
        "Priority emergency support",
        "Detailed maintenance reports",
        "Energy efficiency analysis"
      ],
      pricing: "₹8,000 - ₹25,000/year",
      responseTime: "4-6 hours",
      warranty: "12 months coverage",
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    repair: {
      title: "Emergency Repair Services",
      description: "24/7 emergency response for critical system failures with certified technicians and genuine parts",
      features: [
        "24/7 emergency hotline",
        "2-hour response guarantee",
        "Advanced diagnostic tools",
        "Genuine spare parts inventory",
        "On-site repair capabilities",
        "System performance testing",
        "Post-repair optimization",
        "90-day repair warranty"
      ],
      pricing: "₹1,500 - ₹15,000/visit",
      responseTime: "2 hours",
      warranty: "90 days on repairs",
      gradient: "from-red-500/20 to-orange-500/20",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    service: {
      title: "Professional Service Solutions",
      description: "Complete HVAC service solutions including installation, commissioning, and system upgrades",
      features: [
        "System installation & setup",
        "Performance commissioning",
        "Energy efficiency upgrades",
        "Duct cleaning & sealing",
        "Thermostat calibration",
        "Air quality improvements",
        "System modernization",
        "Compliance certifications"
      ],
      pricing: "₹5,000 - ₹50,000/project",
      responseTime: "Same day",
      warranty: "24 months service warranty",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  };

  const currentService = services[activeService];

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
          SERVICE EXCELLENCE
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Complete <span className="gradient-text">HVAC Solutions</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Professional maintenance, emergency repairs, and comprehensive service solutions
        </p>
      </motion.div>

      {/* Service Navigation */}
      <div className="flex justify-center mb-12">
        <div className="glass-morphic rounded-2xl p-3 border border-white/10">
          <div className="flex gap-3">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key as any)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeService === key
                    ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="w-6 h-6">
                  {service.icon}
                </div>
                <span className="tech-mono text-sm font-semibold">
                  {key.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details */}
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* Service Information */}
        <div className={`glass-morphic rounded-2xl p-8 border border-white/10 bg-gradient-to-br ${currentService.gradient}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-white">
              {currentService.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{currentService.title}</h3>
              <div className="tech-mono text-sm text-white/60 mt-1">
                PROFESSIONAL HVAC SERVICE
              </div>
            </div>
          </div>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            {currentService.description}
          </p>

          {/* Service Features */}
          <div className="space-y-3 mb-8">
            <h4 className="text-white font-semibold mb-4">Service Includes:</h4>
            {currentService.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Service Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="tech-mono text-xs text-white/60 mb-1">PRICING</div>
              <div className="text-white font-semibold">{currentService.pricing}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="tech-mono text-xs text-white/60 mb-1">RESPONSE</div>
              <div className="text-white font-semibold">{currentService.responseTime}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="tech-mono text-xs text-white/60 mb-1">WARRANTY</div>
              <div className="text-white font-semibold">{currentService.warranty}</div>
            </div>
          </div>
        </div>

        {/* Service Process Flow */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white mb-6">Service Process</h4>
          
          {getServiceSteps(activeService).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="tech-mono text-sm font-bold text-white">{index + 1}</span>
                </div>
              </div>
              <div className="flex-1">
                <h5 className="text-white font-semibold mb-2">{step.title}</h5>
                <p className="text-white/70 text-sm">{step.description}</p>
                <div className="tech-mono text-xs text-blue-400 mt-2">{step.duration}</div>
              </div>
            </motion.div>
          ))}

          {/* CTA Button */}
          <div className="pt-6">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-4 text-lg">
              Schedule {currentService.title}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// Helper function to get service-specific steps
const getServiceSteps = (serviceType: string) => {
  const steps = {
    amc: [
      { title: "Contract Setup", description: "Initial system assessment and contract customization", duration: "1-2 hours" },
      { title: "Scheduled Visits", description: "Quarterly maintenance visits as per contract", duration: "2-3 hours/visit" },
      { title: "Performance Monitoring", description: "Continuous system monitoring and optimization", duration: "Ongoing" },
      { title: "Priority Support", description: "Emergency support with guaranteed response times", duration: "24/7 availability" }
    ],
    repair: [
      { title: "Emergency Call", description: "24/7 hotline for immediate assistance", duration: "Immediate" },
      { title: "Rapid Response", description: "Certified technician dispatched to location", duration: "Within 2 hours" },
      { title: "Diagnosis & Repair", description: "Advanced diagnostics and on-site repair", duration: "2-4 hours" },
      { title: "Testing & Warranty", description: "System testing and 90-day repair warranty", duration: "30 minutes" }
    ],
    service: [
      { title: "Site Assessment", description: "Comprehensive system evaluation and planning", duration: "1-2 hours" },
      { title: "Service Execution", description: "Professional service implementation", duration: "4-8 hours" },
      { title: "Quality Testing", description: "Performance testing and optimization", duration: "1-2 hours" },
      { title: "Documentation", description: "Service reports and warranty activation", duration: "30 minutes" }
    ]
  };
  
  return steps[serviceType as keyof typeof steps] || steps.amc;
};

export default ServicePortfolio;