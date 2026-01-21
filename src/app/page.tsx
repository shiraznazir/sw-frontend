"use client";

import React, { useEffect, useState } from "react";
import ThermalHero from "@/app/components/ThermalHero";
import BentoServices from "@/app/components/BentoServices";
import SystemComparison from "@/app/components/SystemComparison";
import ServicePortfolio from "@/app/components/ServicePortfolio";
import AMCPackages from "@/app/components/AMCPackages";
import RepairServices from "@/app/components/RepairServices";
import TechnicalSpecs from "@/app/components/TechnicalSpecs";
import ThermalStats from "@/app/components/ThermalStats";
import TechnicalOverlay from "@/app/components/TechnicalOverlay";
import CTASection from "@/app/components/CTASection";
import Clients from "./components/Home/Clients";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="thermal-bg min-h-screen relative">
      <TechnicalOverlay />
      <ThermalHero />
      <BentoServices />
      <SystemComparison />
      
      {/* Mid-page CTA */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <CTASection
          title="Transform Your Space with Professional HVAC Solutions"
          subtitle="THERMAL EFFICIENCY EXPERTS"
          description="Experience the difference of professionally engineered climate control systems. Our certified technicians deliver optimal performance, energy efficiency, and long-term reliability for your comfort needs."
          primaryCTA={{
            text: "Get Free Assessment",
            action: () => console.log("Free assessment")
          }}
          secondaryCTA={{
            text: "View Service Plans",
            action: () => window.location.href = "/service"
          }}
          variant="info"
        />
      </div>

      <ServicePortfolio />
      <AMCPackages />
      <RepairServices />
      <TechnicalSpecs />
      <ThermalStats />
      
      <div className="max-w-7xl mx-auto px-4">
        <Clients />
        
        {/* Final CTA */}
        <div className="py-10">
          <CTASection
            title="Ready to Optimize Your HVAC Performance?"
            subtitle="START YOUR THERMAL EFFICIENCY JOURNEY"
            description="Join hundreds of satisfied customers who trust Service Walah for their HVAC needs. From emergency repairs to comprehensive maintenance contracts, we're your thermal efficiency partners."
            primaryCTA={{
              text: "Schedule Consultation Now",
              action: () => console.log("Schedule consultation")
            }}
            secondaryCTA={{
              text: "Call Emergency Line",
              action: () => window.open("tel:+919876543210")
            }}
            emergencyCTA={true}
            variant="success"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
