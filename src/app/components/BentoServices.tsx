"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ServiceCard {
  title: string;
  description: string;
  specs: string[];
  size: "large" | "medium" | "small";
  gradient: string;
  icon: React.ReactNode;
  route: string;
}

const BentoServices: React.FC = () => {
  const router = useRouter();

  const services: ServiceCard[] = [
    {
      title: "VRV/VRF Systems",
      description: "Variable refrigerant flow systems for maximum efficiency and zone control",
      specs: ["Multi-zone control", "Energy recovery", "Inverter technology"],
      size: "large",
      gradient: "from-blue-500/20 to-cyan-500/20",
      route: "/service/installation",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Preventative Maintenance",
      description: "Scheduled maintenance programs to ensure peak performance",
      specs: ["Quarterly inspections", "Filter replacement", "Performance optimization"],
      size: "medium",
      gradient: "from-green-500/20 to-emerald-500/20",
      route: "/service/maintenance",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Emergency Repair",
      description: "24/7 emergency response for critical system failures",
      specs: ["2-hour response", "Diagnostic tools", "Parts inventory"],
      size: "medium",
      gradient: "from-red-500/20 to-orange-500/20",
      route: "/service/repair",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Air Quality Audits",
      description: "Comprehensive indoor air quality assessment and solutions",
      specs: ["IAQ testing", "Filtration analysis", "Compliance reports"],
      size: "small",
      gradient: "from-purple-500/20 to-pink-500/20",
      route: "/service/consultation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const getGridClass = (size: string, index: number) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "medium":
        return "col-span-1 row-span-2";
      case "small":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

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
          HVAC SERVICES PORTFOLIO
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
          Engineered <span className="gradient-text">Solutions</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Comprehensive climate control services designed for commercial and residential applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[180px] sm:auto-rows-[200px]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => router.push(service.route)}
            className={`
              ${getGridClass(service.size, index)}
              glass-morphic rounded-xl lg:rounded-2xl p-4 lg:p-6 cursor-pointer
              hover:scale-[1.02] transition-all duration-300
              bg-gradient-to-br ${service.gradient}
              border border-white/10 hover:border-white/20
              group relative overflow-hidden
            `}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="ac-schematic h-full w-full"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-3 lg:mb-4">
                <div className="text-white/80 group-hover:text-white transition-colors">
                  <div className="w-8 h-8 lg:w-12 lg:h-12">
                    {service.icon}
                  </div>
                </div>
                <div className="tech-mono text-xs text-white/60">
                  {service.size.toUpperCase()}
                </div>
              </div>

              <h3 className="text-white font-bold text-base lg:text-xl mb-2 lg:mb-3 leading-tight">
                {service.title}
              </h3>

              <p className="text-white/70 text-xs lg:text-sm mb-3 lg:mb-4 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-1">
                {service.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="tech-mono text-xs text-white/60 leading-tight">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-3 sm:hidden">
                <button className="w-full bg-white/10 hover:bg-white/20 text-white text-xs py-2 rounded-lg transition-colors tech-mono font-semibold">
                  LEARN MORE
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoServices;