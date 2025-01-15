"use client";

import React from "react";

const Spinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-4",
  };

  return (
    <div
      className={`inline-block rounded-full border-t-transparent animate-spin ${
        sizeClasses[size]
      } dark:border-white border-gray-800`}
    ></div>
  );
};

export default Spinner;
