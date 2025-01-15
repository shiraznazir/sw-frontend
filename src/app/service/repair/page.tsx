"use client";
import BreadCrumbComp from "@/app/components/BreadCrumbComp";
import Repair from "@/app/components/Repair";
import Types from "@/app/components/Types";
import React from "react";

const RepairPage = () => {
  return (
    <div className="container mx-auto">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="Repair" />
      <Repair />
      <Types />
    </div>
  );
};

export default RepairPage;
