"use client";
import BreadCrumbComp from "@/app/components/BreadCrumbComp";
import AMC from "@/app/components/AMC";
import React from "react";
import Types from "@/app/components/Types";

const AMCPage = () => {
  return (
    <div className="container mx-auto">
      <BreadCrumbComp title="Home" subTitle="Services" subTitle1="AMC's" />
      <AMC />
      <Types />
    </div>
  );
};

export default AMCPage;
