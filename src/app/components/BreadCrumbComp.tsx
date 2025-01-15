"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  title: string;
  subTitle: string;
  subTitle1: string;
}

const BreadCrumbComp: React.FC<BreadcrumbProps> = ({
  title,
  subTitle,
  subTitle1,
}) => {
  return (
    <Breadcrumb className="my-5 animate-zoomIn">
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink className="font-bold" href="/">
            {title}
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Current Page */}
        <BreadcrumbItem  >
          <BreadcrumbLink href="/service" className="font-bold">{subTitle}</BreadcrumbLink>
        </BreadcrumbItem>

       {subTitle1 && <BreadcrumbSeparator />}

        {/* Current Page */}
        <BreadcrumbItem>
          <BreadcrumbPage className="font-bold">{subTitle1}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
