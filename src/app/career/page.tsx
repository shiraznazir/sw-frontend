"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ThermalPageWrapper from "../components/ThermalPageWrapper";

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  position: string;
  message: string;
}

const CareerPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "HVAC Technician",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const positions = [
    {
      title: "Senior HVAC Engineer",
      department: "Engineering",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead complex VRV/VRF system installations and provide technical expertise for commercial projects.",
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "5+ years HVAC system design experience",
        "VRV/VRF system certification",
        "AutoCAD and system modeling proficiency",
        "Project management experience"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/20"
    },
    {
      title: "Thermal Efficiency Specialist",
      department: "Technical",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "3+ years",
      description: "Optimize system performance and conduct energy efficiency audits for commercial installations.",
      requirements: [
        "Mechanical/Electrical Engineering background",
        "Energy audit certification",
        "Thermal analysis software experience",
        "Building automation systems knowledge",
        "Data analysis and reporting skills"
      ],
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/20"
    },
    {
      title: "Emergency Response Technician",
      department: "Field Service",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "2+ years",
      description: "Provide 24/7 emergency repair services with guaranteed 2-hour response time.",
      requirements: [
        "HVAC technician certification",
        "Emergency response experience",
        "Diagnostic equipment proficiency",
        "Valid driving license",
        "Flexible schedule availability"
      ],
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-400/20"
    },
    {
      title: "AMC Service Coordinator",
      department: "Operations",
      location: "Delhi NCR",
      type: "Full-time",
      experience: "2+ years",
      description: "Manage annual maintenance contracts and coordinate preventive maintenance schedules.",
      requirements: [
        "Operations management experience",
        "Customer relationship skills",
        "Scheduling and logistics coordination",
        "Technical documentation abilities",
        "CRM software proficiency"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/20"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary packages with performance bonuses",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Professional Development",
      description: "Continuous training and certification programs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work opportunities",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Application submitted successfully!");
      setIsLoading(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        position: "HVAC Technician",
        message: "",
      });
    }, 2000);
  };

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Careers" }
  ];

  return (
    <ThermalPageWrapper
      title="Join Our Team"
      subtitle="CAREER OPPORTUNITIES"
      description="Build your career with thermal efficiency experts. Join our team of certified engineers and technicians delivering cutting-edge HVAC solutions."
      breadcrumb={breadcrumb}
    >
      {/* Company Culture */}
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
                Why Choose <span className="gradient-text">Service Walah?</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                At Service Walah, we're not just building HVAC systems – we're engineering 
                the future of thermal efficiency. Join a team of passionate professionals 
                who are committed to innovation, excellence, and sustainable solutions.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                We offer a collaborative environment where your expertise is valued, 
                your growth is supported, and your contributions make a real difference 
                in advancing energy-efficient climate control technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="text-blue-400 mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-xs">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Open <span className="gradient-text">Positions</span>
          </h2>
          <p className="text-xl text-white/70">
            Join our team of thermal efficiency experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass-morphic rounded-2xl p-8 border ${position.borderColor} bg-gradient-to-br ${position.gradient} hover:scale-105 transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{position.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-mono text-xs bg-white/10 text-white px-2 py-1 rounded">
                      {position.department}
                    </span>
                    <span className="tech-mono text-xs bg-white/10 text-white px-2 py-1 rounded">
                      {position.type}
                    </span>
                    <span className="tech-mono text-xs bg-white/10 text-white px-2 py-1 rounded">
                      {position.experience}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="tech-mono text-xs text-white/60">LOCATION</div>
                  <div className="text-white font-semibold">{position.location}</div>
                </div>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {position.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                <ul className="space-y-2">
                  {position.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/70 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-colors">
                Apply for this Position
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="glass-morphic rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Submit Your <span className="gradient-text">Application</span>
            </h2>
            <p className="text-white/70 text-lg">
              Ready to join our team? Send us your application and let's discuss your future with Service Walah.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder=" "
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label">Full Name</label>
                </div>
              </div>
              <div className="form-group">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder=" "
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label">Email Address</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder=" "
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label">Phone Number</label>
                </div>
              </div>
              <div className="form-group">
                <div className="relative">
                  <input
                    type="text"
                    name="experience"
                    className="form-input"
                    placeholder=" "
                    value={form.experience}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-label">Years of Experience</label>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="form-group">
                <div className="relative">
                  <select
                    name="position"
                    className="form-select"
                    value={form.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="HVAC Technician">HVAC Technician</option>
                    <option value="Senior HVAC Engineer">Senior HVAC Engineer</option>
                    <option value="Thermal Efficiency Specialist">Thermal Efficiency Specialist</option>
                    <option value="Emergency Response Technician">Emergency Response Technician</option>
                    <option value="AMC Service Coordinator">AMC Service Coordinator</option>
                    <option value="Other">Other</option>
                  </select>
                  <label className="form-label">Position of Interest</label>
                  <div className="select-arrow">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="form-group">
                <div className="relative">
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder=" "
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                  />
                  <label className="form-label">Cover Letter / Additional Information</label>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                disabled={isLoading}
                className="form-button px-12 py-4 text-lg rounded-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.section>
    </ThermalPageWrapper>
  );
};

export default CareerPage;
