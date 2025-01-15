"use client";
import BreadCrumbComp from "@/app/components/BreadCrumbComp";
import React from "react";
// import Types from "@/app/components/Types";
import Consultation from "@/app/components/Consultation";

const ConsultationPage = () => {
  return (
    <div className="container mx-auto">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="Consultation" />
      <Consultation />
      {/* <Types /> */}
    </div>
  );
};

export default ConsultationPage;
