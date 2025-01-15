"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Spinner from "../components/Spinner";

interface FormData {
  name: string;
  email: string;
  message: string;
  position: string;
}

const CareerPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    position: "AC Technician",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted!");
    setIsLoading(true);
    // Here you would send the form data to your server or a service
  };

  return (
    <div className="bg-white animate-zoomIn text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-5 py-10">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Careers at Service Walah</h1>
          <p className="text-lg">Join our team in providing expert air conditioning services.</p>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Why Work with Us?</h2>
          <p className="text-lg leading-relaxed">
            At Service Walah, we specialize in air conditioner installation, repair, and maintenance services. We are dedicated to delivering top-tier services to our customers, ensuring their comfort and satisfaction. We believe in building a team of skilled professionals who are passionate about customer service and expert workmanship. Join us to grow your career while making a difference in people's lives.
          </p>
        </section>

        {/* Open Positions Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Position 1 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AC Technician</h3>
              <p className="mb-4">Join our team to install, maintain, and repair air conditioning systems for residential and commercial clients.</p>
              <Button type="submit">Apply Now</Button>
            </div>
            {/* Job Position 2 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AC Maintenance Specialist</h3>
              <p className="mb-4">Ensure that our clients' air conditioners are running efficiently with regular maintenance and servicing.</p>
              <Button type="submit" >Apply Now</Button>
            </div>
            {/* Job Position 3 */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customer Support Representative</h3>
              <p className="mb-4">Provide exceptional customer service by scheduling appointments and handling customer inquiries related to AC services.</p>
              <Button type="submit" >Apply Now</Button>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Send Us Your Application</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-lg mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
                rows={4}
                required
              />
            </div>

            <div className="mt-6">
              <label className="block text-lg mb-2">Position Applying For</label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                className="w-full p-3 bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-md border-2 border-gray-300 dark:border-gray-600"
              >
                <option value="AC Technician">AC Technician</option>
                <option value="AC Maintenance Specialist">AC Maintenance Specialist</option>
                <option value="Customer Support Representative">Customer Support Representative</option>
              </select>
            </div>

            <div className="mt-6 text-center">
            <Button type="submit" className="mt-4"       disabled={isLoading}>
          {isLoading ? <Spinner size="sm" /> : "Submit Application"}
          </Button>
             
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;
