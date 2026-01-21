"use client";

import React from "react";
import { motion } from "framer-motion";
import ThermalPageWrapper from "../components/ThermalPageWrapper";
import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Thermal Efficiency Optimization in Modern HVAC Systems",
      excerpt: "Explore advanced techniques for maximizing energy efficiency and performance in contemporary air conditioning systems through thermal optimization strategies.",
      image: "/images/blog1.jpeg",
      link: "/service/maintenance",
      category: "Technical",
      readTime: "8 min read",
      date: "Jan 15, 2025",
      featured: true
    },
    {
      id: 2,
      title: "Diagnostic Protocols for VRV/VRF System Failures",
      excerpt: "Comprehensive guide to identifying and troubleshooting common issues in Variable Refrigerant Flow systems using advanced diagnostic tools.",
      image: "/images/blog2.jpeg",
      link: "/service/repair",
      category: "Repair",
      readTime: "12 min read",
      date: "Jan 12, 2025",
      featured: false
    },
    {
      id: 3,
      title: "ROI Analysis: Commercial AMC vs. Reactive Maintenance",
      excerpt: "Data-driven comparison of Annual Maintenance Contract benefits versus reactive repair strategies for commercial HVAC installations.",
      image: "/images/blog3.jpeg",
      link: "/service/amc",
      category: "Business",
      readTime: "10 min read",
      date: "Jan 10, 2025",
      featured: true
    },
    {
      id: 4,
      title: "Next-Gen Installation Techniques for Energy Star Compliance",
      excerpt: "Professional installation methodologies ensuring optimal performance and Energy Star certification for residential and commercial systems.",
      image: "/images/blog4.jpeg",
      link: "/service/installation",
      category: "Installation",
      readTime: "15 min read",
      date: "Jan 8, 2025",
      featured: false
    },
    {
      id: 5,
      title: "System Design Consultation: Matching Load to Capacity",
      excerpt: "Engineering principles for accurate load calculations and system sizing to achieve optimal thermal efficiency and operational cost reduction.",
      image: "/images/engineer.jpeg",
      link: "/service/consultation",
      category: "Engineering",
      readTime: "18 min read",
      date: "Jan 5, 2025",
      featured: false
    },
    {
      id: 6,
      title: "IoT Integration in Commercial HVAC Monitoring",
      excerpt: "Implementation strategies for smart monitoring systems that provide real-time performance data and predictive maintenance capabilities.",
      image: "/images/consultation.jpeg",
      link: "/service/consultation",
      category: "Technology",
      readTime: "14 min read",
      date: "Jan 3, 2025",
      featured: true
    }
  ];

  const categories = ["All", "Technical", "Repair", "Business", "Installation", "Engineering", "Technology"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const featuredBlogs = blogs.filter(blog => blog.featured);

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Technical Blog" }
  ];

  return (
    <ThermalPageWrapper
      title="Technical Blog"
      subtitle="HVAC ENGINEERING INSIGHTS"
      description="Professional insights, technical guides, and industry best practices for thermal efficiency optimization and HVAC system performance."
      breadcrumb={breadcrumb}
    >
      {/* Featured Articles */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-white/70">
            In-depth technical analysis and professional insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredBlogs.slice(0, 2).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="tech-mono text-xs bg-blue-500/80 text-white px-3 py-1 rounded-full">
                    {blog.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white/80 tech-mono text-xs">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-white font-bold text-xl mb-4 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors tech-mono text-sm font-semibold"
                >
                  READ ARTICLE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex justify-center">
          <div className="glass-morphic rounded-2xl p-3 border border-white/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`tech-mono text-sm px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* All Articles */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Technical <span className="gradient-text">Library</span>
          </h2>
          <p className="text-xl text-white/70">
            Comprehensive collection of HVAC engineering resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-morphic rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`tech-mono text-xs px-3 py-1 rounded-full ${
                    blog.featured 
                      ? "bg-orange-500/80 text-white" 
                      : "bg-white/20 text-white"
                  }`}>
                    {blog.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-white/60 tech-mono text-xs mb-4">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>
                <Link
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors tech-mono text-xs font-semibold"
                >
                  READ MORE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <div className="glass-morphic rounded-2xl p-12 border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with <span className="gradient-text">Technical Insights</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our technical newsletter for the latest HVAC engineering insights, 
            industry trends, and professional best practices delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 tech-mono text-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </motion.section>
    </ThermalPageWrapper>
  );
};

export default BlogPage;
