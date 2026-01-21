"use client";

import React from "react";
import { motion } from "framer-motion";
import ThermalPageWrapper from "../components/ThermalPageWrapper";
import CTASection from "../components/CTASection";

const About = () => {
  const services = [
    {
      title: "VRV/VRF Systems",
      description: "Advanced variable refrigerant flow systems for maximum efficiency and zone control.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Emergency Repair Services",
      description: "24/7 emergency response with 2-hour guaranteed response time for critical failures.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: "Thermal Efficiency Optimization",
      description: "Advanced diagnostics and performance tuning for maximum energy efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Annual Maintenance Contracts",
      description: "Comprehensive preventive maintenance programs with guaranteed uptime and efficiency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: "500+", label: "Systems Installed", description: "Across domestic and commercial sectors" },
    { value: "99.2%", label: "Uptime Guarantee", description: "With our maintenance contracts" },
    { value: "4.8", label: "Average COP Rating", description: "Coefficient of performance across installations" },
    { value: "24/7", label: "Emergency Support", description: "Round-the-clock technical assistance" }
  ];

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "About Us" }
  ];

  return (
    <ThermalPageWrapper
      title="About Service Walah"
      subtitle="THERMAL EFFICIENCY EXPERTS"
      description="Professional HVAC solutions engineered for optimal performance, energy efficiency, and uncompromising comfort across domestic, commercial, and industrial applications."
      breadcrumb={breadcrumb}
    >
      {/* Company Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="glass-morphic rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Engineering <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                At Service Walah, we specialize in delivering cutting-edge thermal efficiency solutions 
                that redefine comfort and sustainability. Our team of certified engineers and technicians 
                brings decades of combined experience in HVAC system design, installation, and optimization.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                From residential split systems to large-scale commercial VRV installations, we ensure 
                every project meets the highest standards of performance, reliability, and energy efficiency.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">ISO 9001:2015 Certified</div>
                  <div className="text-white/60 text-sm">Quality management systems</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Energy Star Partner</div>
                  <div className="text-white/60 text-sm">Committed to energy efficiency</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Licensed Technicians</div>
                  <div className="text-white/60 text-sm">Certified HVAC professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Performance Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Performance <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-xl text-white/70">
            Measurable results that demonstrate our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl p-6 text-center border border-white/10"
            >
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="tech-mono text-xs text-white/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Core Services */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-white/70">
            Comprehensive HVAC solutions engineered for optimal performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-morphic rounded-2xl p-8 border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              To be the leading provider of thermal efficiency solutions, setting new standards 
              for energy performance and environmental sustainability in the HVAC industry while 
              ensuring optimal comfort for every client.
            </p>
          </div>

          <div className="glass-morphic rounded-2xl p-8 border border-orange-400/20 bg-gradient-to-br from-orange-500/10 to-red-500/5">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">
              To deliver exceptional HVAC solutions through innovative technology, expert craftsmanship, 
              and unwavering commitment to customer satisfaction, while promoting energy efficiency 
              and environmental responsibility.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <CTASection
        title="Ready to Experience Thermal Efficiency?"
        subtitle="PROFESSIONAL HVAC CONSULTATION"
        description="Partner with Service Walah for professional HVAC solutions that deliver optimal performance, energy efficiency, and long-term reliability. Our certified engineers are ready to assess your requirements and provide customized solutions."
        primaryCTA={{
          text: "Schedule Free Consultation",
          action: () => console.log("Schedule consultation")
        }}
        secondaryCTA={{
          text: "View Our Projects",
          action: () => window.location.href = "/service"
        }}
        variant="success"
      />
    </ThermalPageWrapper>
  );
};

export default About;