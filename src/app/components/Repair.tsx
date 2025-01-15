"use client";

import React from "react";
import SlideInFlash from "./SlideInFlash";

const Repair = () => {
  return (
    <section id="repair" className="text-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 animate-zoomIn flex justify-center items-center">
          <video
            className="w-full mx-auto"
            controls
            preload="metadata"
            aria-label="Repair video"
          >
            <source src={"/videos/Repair.mp4"} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-4 animate-zoomIn text-left">
          
            <h2 className="text-3xl font-bold mb-4 animate-slideIn">
              Air Conditioner Repair Services
            </h2>
            <ul className="space-y-2 list-disc list-inside animate-slideIn">
              <li>
                <span className="font-bold">Cooling Problems : </span> Resolving
                inadequate cooling, uneven temperature distribution, and
                refrigerant leaks.
              </li>
              <li>
                {" "}
                <span className="font-bold">Noisy Units : </span> Fixing unusual
                noises caused by fan, compressor, or duct issues.
              </li>
              <li>
                {" "}
                <span className="font-bold">Electrical Failures : </span>{" "}
                Troubleshooting and repairing wiring, thermostat, and circuit
                problems.
              </li>
              <li>
                {" "}
                <span className="font-bold">Airflow Issues : </span> Cleaning
                and repairing blocked filters, ducts, or coils for better air
                circulation.
              </li>
              <li>
                {" "}
                <span className="font-bold">Water Leakage : </span> Addressing
                drainage and condensation problems to prevent damage and
                discomfort.
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Repair;
