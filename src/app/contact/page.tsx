"use client";

import React from "react";
import { motion } from "framer-motion";
import ThermalPageWrapper from "../components/ThermalPageWrapper";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

const Contact = () => {
  const contactMethods = [
    {
      title: "Emergency Hotline",
      description: "24/7 emergency repair services",
      value: "+91-9876543210",
      type: "phone",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/20"
    },
    {
      title: "Technical Support",
      description: "Expert consultation and support",
      value: "support@servicewalah.com",
      type: "email",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/20"
    },
    {
      title: "Service Center",
      description: "Visit our technical facility",
      value: "N-148A, Narayan Nagar, Lalita Park, Laxmi Nagar, Delhi - 110092",
      type: "address",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/20"
    }
  ];

  const serviceHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM", type: "Regular" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM", type: "Weekend" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM", type: "Weekend" },
    { day: "Emergency", hours: "24/7 Available", type: "Emergency" }
  ];

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Contact Us" }
  ];

  return (
    <ThermalPageWrapper
      title="Contact Service Walah"
      subtitle="TECHNICAL SUPPORT CENTER"
      description="Get in touch with our thermal efficiency experts for professional HVAC consultation, emergency repairs, and comprehensive system solutions."
      breadcrumb={breadcrumb}
    >
      {/* Contact Methods */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass-morphic rounded-2xl p-8 border ${method.borderColor} bg-gradient-to-br ${method.gradient} hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-white">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">{method.title}</h3>
                  <p className="text-white/60 text-sm">{method.description}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                {method.type === "phone" && (
                  <a href={`tel:${method.value}`} className="text-white hover:text-blue-400 transition-colors">
                    <div className="tech-mono text-lg font-semibold">{method.value}</div>
                  </a>
                )}
                {method.type === "email" && (
                  <a href={`mailto:${method.value}`} className="text-white hover:text-blue-400 transition-colors">
                    <div className="tech-mono text-lg font-semibold break-all">{method.value}</div>
                  </a>
                )}
                {method.type === "address" && (
                  <div className="text-white text-sm leading-relaxed">{method.value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="glass-morphic rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Technical <span className="gradient-text">Consultation</span>
              </h2>
              <p className="text-white/70 text-lg">
                Submit your HVAC requirements and our certified engineers will provide 
                professional consultation and customized solutions.
              </p>
            </div>
            <ContactForm type="customer" />
          </div>
        </motion.div>

        {/* Sidebar Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Service Hours */}
          <div className="glass-morphic rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Service Hours
            </h3>
            <div className="space-y-4">
              {serviceHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <div className="text-white font-semibold">{schedule.day}</div>
                    <div className={`tech-mono text-xs ${
                      schedule.type === "Emergency" ? "text-red-400" : "text-white/60"
                    }`}>
                      {schedule.type.toUpperCase()}
                    </div>
                  </div>
                  <div className="text-white/80 text-sm font-semibold">{schedule.hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Response */}
          <div className="glass-morphic rounded-2xl p-6 border border-red-400/20 bg-gradient-to-br from-red-500/10 to-orange-500/5">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              Emergency Response
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Critical HVAC failures? Our emergency response team is available 24/7 
              with guaranteed 2-hour response time.
            </p>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-colors tech-mono text-sm">
              CALL EMERGENCY LINE
            </button>
          </div>

          {/* Service Areas */}
          <div className="glass-morphic rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Service Coverage
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Delhi NCR - Complete Coverage</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Gurgaon - Commercial & Residential</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Noida - Industrial Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-white/80 text-sm">Faridabad - Emergency Services</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency CTA Section */}
      <CTASection
        title="Need Immediate HVAC Assistance?"
        subtitle="24/7 EMERGENCY RESPONSE"
        description="Critical system failure? Our emergency response team is standing by with guaranteed 2-hour response time. Don't let HVAC issues disrupt your comfort or business operations."
        primaryCTA={{
          text: "Call Emergency Hotline",
          action: () => window.open("tel:+919876543210")
        }}
        secondaryCTA={{
          text: "Schedule Regular Service",
          action: () => console.log("Schedule service")
        }}
        emergencyCTA={true}
        variant="emergency"
        className="mt-20"
      />
    </ThermalPageWrapper>
  );
};

export default Contact;