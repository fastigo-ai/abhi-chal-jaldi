import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { services as allServices } from "@/data/services";
import toast from "react-hot-toast";

// Assets
import heroTechnician from "@/assets/hero-section.png";
import partnerHandshake from "@/assets/partner_handshake.png";
import macbookSupportImg from "@/assets/macbook-support.jpeg";
import phone1 from "@/assets/phone1.png";

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  return (
    <section className="w-full bg-[#F0FBFF] overflow-hidden relative min-h-[80dvh] lg:min-h-[800px] flex flex-col">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50 transform-gpu"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30 transform-gpu"></div>

      {/* Focus Lights - Bottom Corners */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#4FB7D4]/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
      
      {/* Top Header Row - Full Width Border */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col flex-grow pt-10 lg:pt-24">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 flex-grow pb-16 lg:pb-12">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-center lg:text-left z-10 order-2 lg:order-1 pt-4 lg:pt-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm mx-auto lg:mx-0 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] lg:text-[12px] font-medium text-gray-600 tracking-wide">
                Trusted by{" "}
                <span className="font-bold text-gray-900">5000+</span> homes{" "}
                <span className="mx-1 text-gray-300">·</span> 10 cities live
              </span>
            </div>

            <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-[1.15] text-gray-900 tracking-tight">
              Expert Laptop Repair & Tech Support 
            </h1>
            <p className="text-gray-500 text-base lg:text-lg -mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              <span className="text-[#45afcb] font-bold">Door2fy</span> delivers fast IT support & device care services across India.
            </p>

            {/* Buttons */}
            <div className="space-y-6">
              <div className="flex flex-row gap-3 justify-center lg:justify-start items-center mt-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-[44px] md:h-[48px] lg:h-[56px] w-auto"
                  />
                </a>

                <a
                  href="#"
                  className="transition-all hover:scale-105 active:scale-95 block rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-[44px] md:h-[48px] lg:h-[56px] w-auto"
                  />
                </a>
              </div>
              {/* Ratings */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex gap-0.5 text-[#45afcb]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="font-bold text-gray-900">4.8</span>
                  <span className="text-gray-500">from 42,700+ ratings</span>
                </div>
              </div>
            </div>

            {/* Live In Cities */}
            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-gray-400 uppercase text-center lg:text-left">
                  Live In
                </span>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    "Bengaluru",
                    "Delhi",
                    "Noida",
                    "Gurgaon",
                    "Mumbai",
                    "Pune",
                    "Hyderabad",
                  ].map((city) => (
                    <span
                      key={city}
                      className="px-5 py-2 bg-white border border-gray-100 rounded-full text-[13px] font-semibold text-gray-700 shadow-sm hover:border-[#45afcb]/30 transition-colors cursor-default"
                    >
                      {city}
                    </span>
                  ))}
                  <span
                    onClick={() => {
                      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-5 py-2 text-[#45afcb] font-bold text-[13px] cursor-pointer hover:underline underline-offset-4"
                  >
                    + 8 more cities →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:justify-end order-1 lg:order-2 mt-12 lg:mt-0">
            {/* Background Shape */}
            <div className="absolute w-[100%] lg:w-[110%] h-[100%] lg:h-[110%] bg-blue-50/50 rounded-[30px] lg:rounded-[40px] rotate-3 -z-10 -right-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-[450px] lg:max-w-[500px]">
              <img
                src={heroTechnician}
                alt="IT Support"
                className="relative z-10 w-full h-[630px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] object-contain select-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />

              {/* Floating Card 1 */}
              <div className="absolute top-[35%] lg:-left-12 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4 animate-bounce-slow">
                <div className="w-8 h-8 lg:w-10 lg:h-14 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-sm lg:text-base">
                  🕒
                </div>
                <div>
                  <p className="text-[7px] lg:text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
                    On-Time
                  </p>
                  <h3 className="font-semibold text-md lg:text-lg text-gray-900">
                    99%
                  </h3>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-16 -right-1 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-50 rounded-lg lg:rounded-xl flex items-center justify-center text-blue-500 text-xs lg:text-lg">
                  24
                </div>
                <div>
                  <p className="text-[7px] lg:text-[8px] text-gray-400 font-semibold uppercase tracking-widest">
                    Support
                  </p>
                  <h3 className="font-semibold text-sm lg:text-lg text-gray-900">
                    24/7
                  </h3>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-[5%] -right-2 bg-white shadow-2xl rounded-2xl lg:rounded-3xl p-2 lg:p-3 z-20 border border-gray-50 flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-yellow-50 rounded-lg lg:rounded-xl flex items-center justify-center text-yellow-500 text-lg lg:text-xl">
                  ⭐
                </div>
                <div>
                  <p className="text-[8px] lg:text-[9px] text-gray-400 font-semibold uppercase tracking-widest">
                    Success
                  </p>
                  <h3 className="font-semibold text-lg lg:text-2xl text-gray-900">
                    4.8/5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= SERVICES SECTION ================= */
const ServicesSection = () => {
  const services = allServices.slice(0, 6);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-20 text-left">
          <span className="text-[#4FB7D4] font-bold text-[14px] md:text-[15px] mb-3 md:mb-4 pl-1 block">Skip the tech stress.</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold mb-4 text-gray-900 tracking-tight leading-[1.2]">
            Expert tech support <br /> delivered fast
          </h2>
          <p className="text-gray-500 text-[15px] md:text-sm font-medium leading-relaxed">Our team of verified Door2fy Professionals are always on time</p>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/service/${service.slug}`}
              className="reveal group p-4 sm:p-6 bg-[#F8FDFF] rounded-3xl sm:rounded-[2.5rem] border border-[#E1F7F9] hover:border-[#4FB7D4] hover:bg-white transition-all duration-300 text-left flex flex-col justify-between space-y-4 sm:space-y-6 shadow-sm hover:shadow-[0_25px_50px_rgba(79,183,212,0.1)] hover:-translate-y-1.5"
            >
              {/* Service Image Container */}
              <div className="w-full h-32 sm:h-48 rounded-2xl sm:rounded-[1.8rem] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col flex-grow w-full justify-between">
                <h3 className="text-[13px] sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-900 tracking-tight group-hover:text-[#4FB7D4] transition-colors duration-300 leading-snug">{service.title}</h3>
                <div className="flex items-center justify-between pt-2 border-t border-gray-50 group-hover:border-[#E1F7F9] transition-colors duration-300">
                  <span className="text-[10px] sm:text-sm font-bold text-gray-500 group-hover:text-gray-900 transition-colors duration-300 hidden sm:block">Click here</span>
                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-[#E1F7F9] text-[#4FB7D4] flex items-center justify-center transition-all duration-300 group-hover:bg-[#4FB7D4] group-hover:text-white transform group-hover:translate-x-1 ml-auto">
                    <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= WHY CHOOSE US SECTION ================= */
const WhyChooseUsSection = () => {
  const stats = [
    {
      num: "500+",
      label: "Expert Technicians",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      num: "2k+",
      label: "Success Stories",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "100+",
      label: "Service Locations",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      num: "4.9/5",
      label: "Customer Rating",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-8 md:py-10 overflow-hidden relative">
      {/* Dynamic Floating Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4FB7D4]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Header Section */}
        <div className="mb-16 md:mb-20 text-left">
          <span className="text-[#4FB7D4] font-bold text-[14px] md:text-[15px] mb-3 md:mb-4 pl-1 block">Why Choose Door2fy?</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold mb-4 text-gray-900 tracking-tight leading-[1.2]">
            Trusted Technology <br /> Solutions for Every Need
          </h2>
          <p className="text-gray-500 text-base lg:text-lg max-w-full lg:max-w-[60%] mt-4 leading-relaxed font-normal">
            <span className="text-[#45afcb] font-bold">Door2fy</span> provides laptop repair with tech support to restore performance and maximize productivity.
          </p>
        </div>

        {/* 3D Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-12 lg:mb-14">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 text-center transition-all duration-500 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(79,183,212,0.12)] flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#E1F7F9] text-[#4FB7D4] flex items-center justify-center mb-3 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <div className="scale-75 sm:scale-100">{item.icon}</div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2 tracking-tight">
                {item.num}
              </h3>

              <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom App Banner */}
        <div className="relative group max-w-6xl mx-auto">
          <div className="absolute inset-4 bg-[#4FB7D4]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>
          
          <div className="relative bg-[#F8FDFF] rounded-[3rem] md:rounded-[4rem] px-8 lg:px-20 py-0 flex flex-col lg:flex-row items-center justify-between border border-[#E1F7F9] shadow-[0_20px_50px_rgba(79,183,212,0.05)] overflow-hidden">
            {/* Phones Image - Left Side */}
            <div className="relative w-full lg:w-[60%] flex justify-center lg:justify-start transform transition-transform duration-700 group-hover:scale-105 pt-10 lg:pt-0">
              <img
                src={phone1}
                alt="mobile app"
                className="w-full max-w-[300px] lg:max-w-[540px] drop-shadow-[0_30px_70px_rgba(79,183,212,0.15)] select-none pointer-events-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[42%] text-center lg:text-left py-12 lg:py-20">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Manage Services <br />
                on the Go
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md mx-auto lg:mx-0 font-medium">
                Download our mobile app to book services, track your requests and get instant updates.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer" className="transform transition-all hover:scale-105 active:scale-95 shadow-xl rounded-2xl overflow-hidden block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-12 md:h-14 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= TESTIMONIALS SECTION ================= */
const TestimonialsSection = () => {
  const reviews = [
    { 
      name: "Aarav Sharma", 
      location: "Noida Sector 62",
      rating: 5, 
      review: "Door2Fy fixed my laptop quickly. Professional engineer and smooth service.", 
      id: 1 
    },
    { 
      name: "Sneha Verma", 
      location: "Indirapuram",
      rating: 5, 
      review: "Quick response and efficient networking support by Door2Fy.", 
      id: 2 
    },
    { 
      name: "Karan Mehta", 
      location: "Greater Noida",
      rating: 5, 
      review: "Excellent hardware repair service. My MacBook was repaired faster than expected and is working perfectly now.", 
      id: 3 
    },
    { 
      name: "Ritika Singh", 
      location: "Delhi NCR",
      rating: 5, 
      review: "Highly professional team with genuine support. The technician arrived on time and handled the system setup perfectly.", 
      id: 4 
    },
    { 
      name: "Aditya Rao", 
      location: "Sector 18 Noida",
      rating: 5, 
      review: "Door2Fy provides reliable IT services at affordable pricing. Their remote support saved a lot of time for our office.", 
      id: 5 
    },
    { 
      name: "Pooja Malhotra", 
      location: "Gurgaon",
      rating: 5, 
      review: "Great experience with their networking and AMC services. The support team was polite, responsive, and technically strong.", 
      id: 6 
    }
  ];

  interface Review {
    name: string;
    location: string;
    rating: number;
    review: string;
    id: number;
  }

  const ReviewCard = ({ r }: { r: Review }) => (
    <div
      className="w-[280px] sm:w-[320px] md:w-[400px] h-[190px] sm:h-[220px] md:h-[240px] p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white border border-gray-100 relative overflow-hidden flex-shrink-0 mx-3 sm:mx-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-between"
    >
      {/* Radial Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #4FB7D4 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }} />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Stars at Top */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#4FB7D4] fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Text in Middle */}
        <p className="text-gray-800 leading-relaxed font-medium text-sm md:text-base mb-4 flex-grow line-clamp-3">
          “{r.review}”
        </p>
        
        {/* Bottom Section: Avatar, Name, Location */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Circular Avatar */}
          <div className="w-10 h-10 rounded-full bg-[#E1F7F9] flex items-center justify-center font-bold text-[#4FB7D4] text-base">
            {r.name.charAt(0)}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900 text-sm md:text-[15px] leading-tight">{r.name}</h4>
            <p className="text-gray-500 text-[11px] md:text-[12px] font-medium">{r.location}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-4 lg:py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-18 text-left">
        <span className="text-[#4FB7D4] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-4 block pl-4">Testimonials</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:text-[4.5rem] font-bold text-gray-900 tracking-tight leading-tight pl-4">Trusted by Door2fy  <br />Tech Experts.</h2>
        <p className="text-gray-500 mt-4 font-medium text-base md:text-sm pl-4">Professional tech assistance, delivered when you need it.</p>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full flex flex-col gap-8 md:gap-12">
        {/* Row 1: Right to Left */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r1-${idx}`} r={r} />
          ))}
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-max py-2">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r2-${idx}`} r={r} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
        .animate-marquee-reverse:hover {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 35s; }
          .animate-marquee-reverse { animation-duration: 35s; }
        }
      `}} />
    </section>
  );
};

/* ================= PARTNER SECTION ================= */
const PartnerSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "54f10e46-15c3-4574-aac3-09f539865286");
    formDataToSend.append("subject", "New Partner Registration");
    formDataToSend.append("from_name", "Partner Register Form");
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Partnership request sent successfully! ✅");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          category: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form-section" className="bg-white overflow-hidden relative py-6 lg:py-8">
      {/* Decorative background element for section contrast */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#F8FDFF] to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col items-start text-left pl-4 lg:pl-0">
            <span className="uppercase tracking-[0.4em] text-[#4FB7D4] text-[10px] md:text-[11px] font-bold block mb-6">
              Partner With Us
            </span>
            <h2 className="text-4xl lg:text-6xl leading-[1.2] font-extrabold text-gray-900 mb-8 tracking-tight">
              Become a <br />
              <span className="text-[#4FB7D4]">Door2fy</span> Partner
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 font-medium max-w-lg">
              Join our network of elite experts and grow your business with the most trusted IT brand in the region.
            </p>
            {/* Bullet Points */}
            <div className="space-y-8 w-full pr-4 lg:pr-0">
              {[
                "Get more high-quality leads and grow your business",
                "Flexible work schedules and higher earnings",
                "Be part of a trusted and premium partner brand",
                "24/7 dedicated partner support and training"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 mt-1 rounded-full bg-[#4FB7D4] flex items-center justify-center text-white shadow-lg shadow-[#4FB7D4]/20 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 md:w-4 h-3.5 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-bold tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High Contrast Form */}
          <div className="relative">
            {/* Subtle glow behind the form */}
            <div className="absolute -inset-6 bg-[#4FB7D4]/10 rounded-[3rem] blur-3xl -z-10"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-7 bg-white p-8 md:p-10 lg:p-14 rounded-[3rem] border border-[#E1F7F9] shadow-[0_30px_70px_rgba(79,183,212,0.12)]">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-3 tracking-tight">Registration Form</h3>
                <p className="text-gray-500 text-sm md:text-base text-center font-medium">Join 100+ partners across the country.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Service Interest</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none appearance-none cursor-pointer shadow-sm font-bold"
                    >
                      <option value="">Select Category</option>
                      <option value="macbook">MacBook Support</option>
                      <option value="windows">Windows / Desktop</option>
                      <option value="networking">IT Networking</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-left">
                <label className="text-[10px] font-extrabold text-[#4FB7D4] uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your background..."
                  className="w-full px-6 md:px-7 py-5 md:py-6 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#4FB7D4] focus:bg-white text-gray-900 text-[15px] outline-none resize-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-16 md:h-20 rounded-2xl bg-[#3EA2BE] hover:bg-[#3EA2BE] text-white text-sm md:text-base font-extrabold uppercase tracking-widest shadow-[0_15px_40px_rgba(79,183,212,0.35)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {loading ? "Sending..." : "Send Partnership Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= MAIN HOME COMPONENT ================= */
export default function Home() {
  useEffect(() => {
    // Scroll Reveal Logic
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      <Helmet>
        <title>Door2fy - Reliable IT Solutions at Your Doorstep</title>
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <div className="reveal">
        <ServicesSection />
      </div>

      {/* Why Choose Us Section */}
      <div className="reveal">
        <WhyChooseUsSection />
      </div>

      {/* Testimonials Section */}
      <div className="reveal">
        <TestimonialsSection />
      </div>

      {/* Partner Section */}
      <div className="reveal">
        <PartnerSection />
      </div>
    </div>
  );
}
