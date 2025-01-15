"use client";
import BreadCrumbComp from "@/app/components/BreadCrumbComp";
import Installation from "@/app/components/Installation";
import Types from "@/app/components/Types";
import React from "react";

const InstallationPage = () => {
  return (
    <div className="mx-auto">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="Installation" />
      <Installation />
      <Types />
    </div>
  );
};

export default InstallationPage;
