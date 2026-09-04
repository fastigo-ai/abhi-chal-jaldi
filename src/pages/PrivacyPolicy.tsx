import React from "react";
import { SEOHead } from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-20 pt-24 sm:pt-28">
      <SEOHead
        title="Privacy Policy | Door2fy"
        description="Read Door2fy's Privacy Policy to understand how we collect, protect, and handle your data and privacy when using our doorstep repair services."
        canonicalUrl="https://www.door2fy.in/privacy-policy"
      />
      <div className="max-w-4xl mx-auto rounded-lg p-4 sm:p-8">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 uppercase tracking-tight leading-snug">
          Privacy Policy
        </h1>
        <p className="text-slate-600 mb-8 font-medium italic">
          <span className="font-bold text-slate-900 not-italic">Effective Date:</span> 01-10-2025
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          At <span className="font-bold text-slate-900">Door2fy</span>, we value
          your privacy. This Privacy Policy explains how we collect, use, and
          protect your personal information when you use our website, mobile app,
          and related services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-4 mt-8">
          1. Information We Collect
        </h2>
        <p className="text-slate-600 mb-3 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
          <li>
            <strong>Location Data (Including Background Location):</strong> We
            collect your device’s precise location, including background
            location (when the app is closed or not in active use), to assign
            engineers and provide accurate doorstep services.
          </li>
          <li>
            <strong>Personal Information:</strong> Name, phone number, email
            address, and address/location when you create an account or book a
            service.
          </li>
          <li>
            <strong>Device Information:</strong> Device type, operating system,
            IP address, and browser or app details.
          </li>
          <li>
            <strong>Usage Data:</strong> App usage statistics, service
            preferences, and feedback.
          </li>
          <li>
            <strong>Payment Information:</strong> When you make payments, we
            collect necessary billing details through secure third-party
            gateways (we do not store your card or bank details).
          </li>
        </ul>

        {/* 1.1 Background Location Usage */}
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-slate-900 mb-4 mt-8">
          1.1 Location Data & Background Location Access
        </h2>
        <p className="text-slate-700 mb-3">
          Door2fy collects and uses your device’s location, including background
          location (location collected even when the app is closed or not in
          use), to ensure accurate and reliable service delivery between users
          and our field engineers.
        </p>
        <p className="text-slate-600 mb-3 leading-relaxed">
          Our app collects location data to provide and improve our services,
          even when the app is closed or not in use. Specifically:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
          <li>
            Fetching your real-time location so that our assigned engineer can
            navigate to your address.
          </li>
          <li>
            Providing accurate on-site service by helping engineers reach your
            location without delays.
          </li>
          <li>
            Improving the accuracy and reliability of location-based service
            scheduling and dispatch.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Door2fy does <strong>not</strong> use location data for advertising,
          marketing, or sharing with third-party advertisers.
        </p>

        {/* 1.2 Your Consent & Control (Location) */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          1.2 Your Consent & Control (Location Permissions)
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            Door2fy requests your explicit permission before collecting any
            background location.
          </li>
          <li>You may choose to grant or deny location access.</li>
          <li>
            You can change or revoke location permissions anytime in your device
            settings.
          </li>
          <li>
            The app will continue to function, but certain location-based
            features (like real-time engineer navigation) may not work without
            permission.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          1.3 Location Data Retention
        </h2>
        <p className="text-gray-700 mb-3">
          Door2fy retains your location data only for the duration necessary to
          complete your service request.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            Once the service is completed, location data is automatically
            discarded or anonymized.
          </li>
          <li>
            We do not store or retain any real-time tracking history after
            service completion.
          </li>
          <li>
            Retention may be extended only when legally required (court orders,
            fraud investigation, etc.).
          </li>
        </ul>

        {/* 2. How We Use Your Information */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Provide and manage our IT and doorstep support services.</li>
          <li>Process payments and bookings.</li>
          <li>
            Use your location to assign, schedule, and route engineers to your
            service address.
          </li>
          <li>Send updates, notifications, and service-related messages.</li>
          <li>
            Improve user experience, customer support, and app performance.
          </li>
          <li>Ensure security and prevent fraudulent activities.</li>
        </ul>

        {/* 3. Data Protection & Security */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          3. Data Protection & Security
        </h2>
        <p className="text-gray-700 mb-6">
          We secure your personal and location data using industry-standard
          encryption and security protocols. Access to your information is
          restricted to authorized Door2fy personnel responsible for service
          delivery and support.
        </p>
        <p className="text-gray-700 mb-6">
          Location data is retained only for the duration necessary to complete
          your service. Once the service is fulfilled, location information is
          discarded or anonymized, unless a longer retention period is required
          by applicable law.
        </p>

        {/* 4. Sharing of Information */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          4. Sharing of Information
        </h2>
        <p className="text-gray-700 mb-3">
          We do not sell or rent your personal data. Information may be shared
          only with:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>
            <strong>Door2fy Engineers:</strong> Your location is shared only
            with the engineer assigned to your service request to enable
            accurate navigation and timely service.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> Payment and
            analytics partners for secure transactions and app improvement.
          </li>
          <li>
            <strong>Government or Legal Authorities:</strong> If required by
            law, regulation, or legal process.
          </li>
        </ul>

        {/* 5. Cookies & Tracking Technologies */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          5. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-6">
          Our website and app may use cookies or similar technologies to enhance
          user experience and collect analytics for better performance.
        </p>

        {/* 6. Your Rights */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          6. Your Rights
        </h2>
        <p className="text-gray-700 mb-6">
          You have the right to access, update, or delete your personal
          information. You can also withdraw consent at any time by contacting
          us or by adjusting app and device settings, including location
          permissions. You may also request a copy of the data we hold about
          you, subject to applicable law.
        </p>

        {/* 7. Third-Party Links */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          7. Third-Party Links
        </h2>
        <p className="text-gray-700 mb-6">
          Our platform may contain links to third-party websites or apps. We are
          not responsible for their privacy practices or content. We encourage
          you to review the privacy policies of any third-party services you
          access.
        </p>

        {/* 8. Updates to This Policy */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          8. Updates to This Policy
        </h2>
        <p className="text-gray-700 mb-6">
          We may update this Privacy Policy periodically. Any changes will be
          posted on this page with an updated effective date. We encourage you
          to review this Policy regularly to stay informed about how we protect
          your information.
        </p>

        {/* 9. Contact Us */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          9. Contact Us
        </h2>
        <p className="text-gray-700 mb-2">
          If you have any questions or concerns about our Privacy Policy, our
          use of location data, or data handling practices, please contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:support@door2fy.in"
              className="text-blue-600 hover:underline"
            >
              support@door2fy.in
            </a>
          </li>
          <li>
            🌐 Website:{" "}
            <a
              href="https://www.door2fy.in"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.door2fy.in
            </a>
          </li>
          <li>🏢 Company: Fastigo Technology Pvt. Ltd.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
