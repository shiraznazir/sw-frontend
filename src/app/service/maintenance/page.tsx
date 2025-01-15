"use client";
import BreadCrumbComp from "@/app/components/BreadCrumbComp";
import Maintenance from "@/app/components/Maintenance";
import Types from "@/app/components/Types";
import React from "react";

const MaintenancePage = () => {
  return (
    <div className="container mx-auto">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="Maintenance" />
      <Maintenance />
      <Types />
    </div>
  );
};

export default MaintenancePage;
