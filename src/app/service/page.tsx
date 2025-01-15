"use client";
import React from "react";
import Installation from "../components/Installation";
import BreadCrumbComp from "../components/BreadCrumbComp";
import Maintenance from "../components/Maintenance";
import Repair from "../components/Repair";
import AMC from "../components/AMC";
import Types from "../components/Types";
import Consultation from "../components/Consultation";

const Services = () => {
  return (
    <div className="py-5">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="" />
      <Installation />
      <Maintenance />
      <Repair />
      <AMC />
      <Consultation />
      <Types />
    </div>
  );
};

export default Services;
