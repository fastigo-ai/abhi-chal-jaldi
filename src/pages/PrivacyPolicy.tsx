// src/components/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Effective Date:</span> 01-10-2025
        </p>

        <p className="text-gray-700 mb-6">
          Door2fy (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website, mobile app, and related services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li><strong>Personal Information:</strong> Name, phone number, email address, and location when you create an account or book a service.</li>
          <li><strong>Device Information:</strong> Device type, operating system, IP address, and browser details.</li>
          <li><strong>Usage Data:</strong> App usage statistics, service preferences, and feedback.</li>
          <li><strong>Payment Information:</strong> When you make payments, we collect necessary billing details through secure third-party gateways (we do not store your card or bank details).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Provide and manage our IT and doorstep support services.</li>
          <li>Process payments and bookings.</li>
          <li>Send updates, notifications, and service-related messages.</li>
          <li>Improve user experience, customer support, and app performance.</li>
          <li>Ensure security and prevent fraudulent activities.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Protection & Security</h2>
        <p className="text-gray-700 mb-6">
          We use industry-standard encryption and security protocols to protect your data. Access to your personal information is restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Sharing of Information</h2>
        <p className="text-gray-700 mb-3">We do not sell or rent your personal data. Information may be shared only with:</p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Verified service professionals (for service fulfillment).</li>
          <li>Third-party payment and analytics providers (for secure transactions and app improvement).</li>
          <li>Government or legal authorities if required by law.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Cookies & Tracking Technologies</h2>
        <p className="text-gray-700 mb-6">
          Our website and app may use cookies or similar technologies to enhance user experience and collect analytics for better performance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
        <p className="text-gray-700 mb-6">
          You have the right to access, update, or delete your personal information. You can also withdraw consent at any time by contacting us or request a copy of the data we hold about you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Third-Party Links</h2>
        <p className="text-gray-700 mb-6">
          Our platform may contain links to third-party websites or apps. We are not responsible for their privacy practices or content.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Updates to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
        <p className="text-gray-700 mb-2">If you have any questions or concerns about our Privacy Policy or data handling, please contact us:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>📧 Email: <a href="mailto:support@door2fy.in" className="text-blue-600 hover:underline">support@door2fy.in</a></li>
          <li>🌐 Website: <a href="https://www.door2fy.in" className="text-blue-600 hover:underline">www.door2fy.in</a></li>
          <li>🏢 Company: Fastigo Technology Pvt. Ltd.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
