"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white animate-zoomIn text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-5 py-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
          <p className="text-lg text-center mb-8">
            Last Updated: January 7, 2025
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            At <strong>Service Walah</strong>, we are committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our services or visit our
            website. By accessing our website or using our services, you agree
            to the terms outlined in this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Personal Information:</strong> Your name, contact details
              (phone number, email address), and address when you book our
              services.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit/debit card details
              or other payment information for processing payments.
            </li>
            <li>
              <strong>Service Data:</strong> Details of the services you have
              requested, such as installation, repair, or maintenance.
            </li>
            <li>
              <strong>Technical Data:</strong> Information like your IP address,
              browser type, device type, and website usage statistics.
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p>
            We use the collected information to:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Provide and manage our air conditioning services.</li>
            <li>Process your bookings and payments.</li>
            <li>Improve our services and website user experience.</li>
            <li>
              Send service-related notifications, updates, or promotional
              offers (you can opt out at any time).
            </li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share your
            data with:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Service Providers:</strong> Third-party partners who help
              us deliver our services (e.g., payment processors, technicians).
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to
              protect our rights and property.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, or destruction. However, no method
            of transmission over the Internet or electronic storage is
            completely secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your data, subject to legal obligations.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You
            can manage your cookie preferences through your browser settings.
          </p>
        </section>

        {/* Changes to the Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We encourage
            you to review it periodically for any changes.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <p>Email: <a href="mailto:info@servicewalah.com" className="text-blue-500 hover:underline dark:text-blue-400">info@servicewalah.com</a></p>
          <p>Phone: <a href="tel:+919354063823" className="text-blue-500 hover:underline dark:text-blue-400">+1234567890</a></p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
