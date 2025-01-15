"use client";

import React from "react";

const Types = () => {
  return (
    <section className="py-4 animate-zoomIn sm:px-6 lg:px-8">
      <div className="my-4 bg-gray-100 dark:bg-gray-800 p-6 rounded max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Types of Air Conditioners
        </h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Split Air Conditioners</li>
          <li>Window Air Conditioners</li>
          <li>Central Air Conditioning Systems</li>
          <li>Cassette Air Conditioners</li>
          <li>Ductable Air Conditioners</li>
        </ul>
      </div>
    </section>
  );
};

export default Types;
