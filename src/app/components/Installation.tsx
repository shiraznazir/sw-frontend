"use client";

import React from "react";

const Installation = () => {
  return (
    <section id="Installation" className="text-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 flex justify-center animate-zoomIn items-center">
          <video
            className="w-full mx-auto"
            controls
            preload="metadata"
            aria-label="Installation process video"
          >
            <source src={"/videos/Installation.mp4"} type="video/mp4" />
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
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Installation Process
              </h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  <span className="font-bold">
                    Consultation and Assessment :
                  </span>
                  Our experts will visit your location to understand your needs
                  and assess the space for optimal cooling solutions.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">System Selection : </span> Based
                  on your requirements and budget, we guide you in selecting the
                  most suitable air conditioning system.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">
                    Professional Installation :{" "}
                  </span>{" "}
                  Our certified technicians ensure a precise and efficient
                  installation, adhering to industry standards and safety
                  protocols.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">System Testing : </span> After
                  installation, we rigorously test the system to ensure it
                  operates at peak performance.
                </li>
                <li>
                  {" "}
                  <span className="font-bold">
                    Post-Installation Support :{" "}
                  </span>{" "}
                  We provide ongoing support and maintenance to ensure your air
                  conditioning system remains in excellent condition.
                </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Installation;
