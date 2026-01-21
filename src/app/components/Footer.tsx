"use client";
import React, { useState } from "react";
import Link from "next/link";
import VenderEquiry from "./VenderEquiry";
import Logo from "./Logo";

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRegisterClick = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  return (
    <footer className="relative z-10 mt-20">
      <div className="glass-morphic border-t border-white/10 px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <Logo />
              <p className="text-white/70 mt-4 max-w-md">
                Professional thermal efficiency solutions for domestic and commercial HVAC systems. 
                Expert installation, maintenance, and emergency repair services.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="tech-mono text-sm text-green-400">24/7 EMERGENCY SUPPORT</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
              {/* Company Section */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 tech-mono">COMPANY</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-white/70 hover:text-blue-400 transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="text-white/70 hover:text-blue-400 transition-colors text-sm">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-white/70 hover:text-blue-400 transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="text-white/70 hover:text-blue-400 transition-colors text-sm">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services Section */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 tech-mono">SERVICES</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/service/installation" className="text-white/70 hover:text-orange-400 transition-colors text-sm">
                      Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/maintenance" className="text-white/70 hover:text-orange-400 transition-colors text-sm">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/repair" className="text-white/70 hover:text-orange-400 transition-colors text-sm">
                      Emergency Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/service/amc" className="text-white/70 hover:text-orange-400 transition-colors text-sm">
                      AMC Plans
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 tech-mono">SUPPORT</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/contact" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                      Technical Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/review" className="text-white/70 hover:text-green-400 transition-colors text-sm">
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={handleRegisterClick}
                      className="text-white/70 hover:text-green-400 transition-colors text-sm cursor-pointer"
                    >
                      Partner Registration
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-white font-bold text-lg mb-4 tech-mono">CONTACT</h3>
                <div className="space-y-3">
                  <div className="text-white/70 text-sm">
                    <div className="tech-mono text-xs text-blue-400 mb-1">EMERGENCY HOTLINE</div>
                    <div className="text-white font-semibold">+91-9876543210</div>
                  </div>
                  <div className="text-white/70 text-sm">
                    <div className="tech-mono text-xs text-orange-400 mb-1">EMAIL SUPPORT</div>
                    <div className="text-white">support@servicewalah.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <span className="tech-mono text-sm text-white/60">FOLLOW US</span>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61571662593094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-morphic rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400/40 transition-all duration-300 text-white hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/servicewalah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-morphic rounded-full flex items-center justify-center border border-white/20 hover:border-pink-400/40 transition-all duration-300 text-white hover:text-pink-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/service-walah/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-morphic rounded-full flex items-center justify-center border border-white/20 hover:border-blue-400/40 transition-all duration-300 text-white hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ServiceWalah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-morphic rounded-full flex items-center justify-center border border-white/20 hover:border-red-400/40 transition-all duration-300 text-white hover:text-red-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.8 8.001a2.746 2.746 0 00-1.938-1.949C18.14 6 12 6 12 6s-6.14 0-7.862.052A2.746 2.746 0 002.2 8.001a29.27 29.27 0 00-.052 7.997c.199.876.89 1.567 1.767 1.766C5.86 18 12 18 12 18s6.14 0 7.862-.052a2.746 2.746 0 001.938-1.949c.197-.878.3-2.633.3-3.996s-.103-3.118-.3-3.996zM9.75 15.207v-6.414L15 12l-5.25 3.207z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="tech-mono text-sm text-white/60">
                © 2025 Service Walah. All rights reserved.
              </p>
              <p className="tech-mono text-xs text-white/40 mt-1">
                Professional HVAC Solutions | Thermal Efficiency Experts
              </p>
            </div>
          </div>
        </div>
      </div>
      <VenderEquiry isOpen={isOpen} onClose={onClose} />
    </footer>
  );
};

export default Footer;
