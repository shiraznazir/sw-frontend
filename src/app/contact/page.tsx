"use client";

import React from "react";
import BreadCrumbComp from "../components/BreadCrumbComp";
import { Separator } from "@/components/ui/separator";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="py-5">
      {/* Breadcrumb */}
      <BreadCrumbComp title="Home" subTitle="Contact Us" subTitle1="" />
      <hr className="h-px animate-zoomIn my-8 bg-gray-400 border-0 dark:bg-gray-700" />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* Main Heading Section */}
        <div className="lg:col-span-4">
          <h1 className="font-bold animate-zoomIn text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-gray-100">
            Contact Us
          </h1>
          <div className="animate-zoomIn">
            <ContactForm type="customer" />
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="lg:col-span-2 flex gap-6">
          <Separator
            orientation="vertical"
            className="hidden animate-zoomIn lg:block"
          />

          <div className="space-y-6 w-full">
            {/* Get in Touch Card */}
            <div className="border animate-zoomIn border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-6 rounded shadow-md">
              <h2 className="font-bold text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                Get in Touch with Service Walah
              </h2>
              <p className="text-sm animate-zoomIn sm:text-base text-gray-700 dark:text-gray-300 mt-2">
                We’re here to assist you with all your air conditioning needs.
                Whether it’s installation, repair, gas charging, or AMC
                services, our team of experts is ready to provide top-notch
                solutions for domestic, commercial, and industrial spaces.
              </p>
            </div>

            {/* Contact Information Card */}
            <div className="border animate-zoomIn border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-6 rounded shadow-md">
              <h2 className="font-bold text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                Contact Information
              </h2>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-bold">📞 Phone: </span>
                  <a
                    href="tel:+919837305499"
                    className="hover:text-blue-600 no-underline dark:hover:text-blue-400"
                  >
                    +91 9354063823
                  </a>
                </li>
                <li>
                  <span className="font-bold">📧 Email: </span>
                  <a
                    href="mailto:info@servicewalah.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    info@servicewalah.com
                  </a>
                </li>
                <li>
                  <span className="font-bold">📍 Address: </span>
                  N-148A, Narayan Nagar, Lalita Park, Laxmi Nagar, Delhi -
                  110092
                </li>
              </ul>
            </div>

            {/* Service Areas Card */}
            <div className="border animate-zoomIn border-gray-300 dark:border-gray-700 dark:bg-gray-800 p-6 rounded shadow-md">
              <h2 className="font-bold text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                Service Areas
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2">
                We proudly serve all areas, ensuring comfort and reliability for
                your home, business, or industrial setups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
