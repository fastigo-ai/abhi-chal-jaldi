import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "../assets/WhatsApp Image 2025-10-16 at 3.58.29 PM.jpeg";
import support from '../assets/support-removebg-preview.png'
import MACBOOK from '../assets/mac-removebg-preview.png'
import install from '../assets/install-removebg-preview.png'
import { Link } from "lucide-react";
// Capitalize first letter of each word in city
const formatCityName = (city: string | undefined): string => {
  if (!city) return "Unknown City";

  return decodeURIComponent(city)
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default function CityService() {
  const { city } = useParams<{ city: string }>();

  const formattedCity = formatCityName(city);

  if (!city) {
    return (
      <div className="font-sans bg-[#e9f6f8] min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          City not specified in URL
        </h2>
      </div>
    );
  }

  return (
    <div className="font-sans  min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col bg-[#EFF6FF] md:flex-row justify-between items-center px-8 md:px-20 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get expert IT support and device repair at your doorstep in {formattedCity}
          </h1>
          <p className="text-gray-700 mb-6 text-xl md:text-2xl max-w-3xl mx-auto">
            Quick support for MacBooks, desktops, hardware installation & more.
          </p>
        </div>
        <img
          src={Banner}
          alt="Engineer with Laptop"
          className="h-64 md:h-80 mt-8 md:mt-0 object-contain"
          loading="lazy"
        />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 py-10"
      >
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={MACBOOK}
            alt="MacBook Support"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">MacBook Support</h3>
          <p className="text-gray-600">
            On-site or remote support for macOS issues & repairs
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={install}
            alt="Hardware Installation"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Hardware Installation</h3>
          <p className="text-gray-600">
            RAM, SSD upgrades, screen replacements, peripherals
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={support}
            alt="Quick Support"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Quick Support</h3>
          <p className="text-gray-600">
            Instant Quick Support within 10 minutes
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center py-10 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Book slot"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Book your slot</p>
          </div>
         
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="Engineer assigned"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Engineer gets assigned</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Service at doorstep"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Service at your doorstep</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="Issue resolved"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Issue resolved</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-10 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <ul className="space-y-3 text-gray-700 mb-8 list-inside list-disc">
          <li>Fast & convenient DoorStep Service</li>
          <li>Verified engineers</li>
          <li>Trusted by local customers</li>
          <li>Available 24/7</li>
        </ul>
        {/* <blockquote className="bg-[#e6f7f9] p-6 rounded-xl text-gray-800 italic">
          “Great service in {formattedCity}! They upgraded my MacBook’s RAM
          within an hour.”
          <span className="block mt-3 text-right font-semibold">
            – Shweta M.
          </span>
        </blockquote> */}
      </section>
    </div>
  );
}
