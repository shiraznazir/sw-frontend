"use client";

import React from "react";

const Maintenance = () => {
  return (
    <section id="Maintenance" className="text-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 text-left">
          <div className="animate-zoomIn">
            <h2 className="text-3xl font-bold mb-4 animate-slideIn">
              Our Maintenance Services
            </h2>
            <ul className="space-y-2 list-disc list-inside animate-slideIn">
              <li>
                <span className="font-bold">Routine Inspection : </span> Regular
                checks to assess the performance and condition of your AC units.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Filter Cleaning and Replacement :{" "}
                </span>{" "}
                Cleaning or replacing air filters to improve air quality and
                ensure smooth airflow.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Condenser and Evaporator Coil Maintenance :{" "}
                </span>{" "}
                Removing dirt and debris from coils to enhance cooling
                efficiency.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Refrigerant Check and Recharge :{" "}
                </span>{" "}
                Ensuring the refrigerant levels are optimal and addressing any
                leaks.
              </li>
              <li>
                {" "}
                <span className="font-bold">
                  Electrical Component Check :{" "}
                </span>{" "}
                Inspecting wiring, connections, and controls to prevent
                malfunctions.
              </li>
              <li>
                {" "}
                <span className="font-bold">Drain Line Cleaning : </span>{" "}
                Clearing clogged drain lines to prevent water leakage and mold
                growth.
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 flex justify-center animate-zoomIn items-center">
          <video
            className="w-full mx-auto"
            controls
            preload="metadata"
            aria-label="Maintainence process video"
          >
            <source src={"/videos/maintenance.mp4"} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
