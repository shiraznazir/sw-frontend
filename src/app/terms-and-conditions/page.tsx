"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white animate-zoomIn text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Service Walah! By using our air conditioning installation, repair, maintenance, and AMC services, 
            you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Scope of Services</h2>
          <p>
            Service Walah provides air conditioning-related services, including but not limited to:
          </p>
          <ul className="list-disc ml-6 mt-4">
            <li>Installation of air conditioners.</li>
            <li>Repair and maintenance of air conditioning units.</li>
            <li>Annual Maintenance Contracts (AMC) for air conditioning systems.</li>
            <li>Consultation for selecting suitable air conditioning systems.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Booking and Payments</h2>
          <p>
            - Bookings can be made via our website, mobile application, or customer support channels.<br />
            - Payments for services must be completed as per the agreed terms before the completion of service.<br />
            - We accept various payment methods, including UPI, credit/debit cards, and net banking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cancellations and Refunds</h2>
          <p>
            - Cancellations can be made up to 24 hours before the scheduled service.<br />
            - Refunds, if applicable, will be processed within 7-10 business days.<br />
            - No refunds will be provided for cancellations made less than 24 hours before the scheduled service time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Service Warranties</h2>
          <p>
            - We provide a limited warranty for repair services for up to 30 days after the service date.<br />
            - The warranty does not cover damage caused by misuse, unauthorized repairs, or natural calamities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. User Responsibilities</h2>
          <p>
            - Ensure a safe and clean environment for our service professionals.<br />
            - Provide accurate information about your air conditioning system and any prior issues.<br />
            - Follow the instructions provided by our professionals to maintain your air conditioning system.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            - Service Walah will not be held responsible for any damages caused due to incorrect information provided by the customer.<br />
            - We are not liable for delays caused by factors beyond our control, such as weather conditions, traffic, or force majeure events.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            Service Walah reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these terms, please contact us at:<br />
            Email: support@servicewalah.com<br />
            Phone: +123-456-7890
          </p>
        </section>

        <footer className="text-center mt-12">
          <p>&copy; {new Date().getFullYear()} Service Walah. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
