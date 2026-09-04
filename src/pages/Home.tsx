import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { TypingEffect } from "@/components/ui/typing-effect";
import { services as allServices } from "@/data/services";
import toast from "react-hot-toast";
import { ArrowRight, Zap, ShieldCheck, Sparkles, CheckCircle2, Award, Clock, Star, Quote, MapPin } from "lucide-react";
import { useReviews, ReviewItem } from "@/utils/reviews";

// Assets
import heroTechnician from "@/assets/hero-section.png";
import partnerHandshake from "@/assets/partner_handshake.png";
import macbookSupportImg from "@/assets/macbook-support.jpeg";
import phone1 from "@/assets/phone1.png";
import door2fyTechLabEngineers from "@/assets/door2fy-tech-lab-engineers.png";

/* ================= HERO SECTION ================= */
const HeroSection = () => {
  return (
    <section className="w-full bg-[#F0FBFF] overflow-hidden relative min-h-[70dvh] lg:min-h-[680px] flex flex-col">
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50 transform-gpu"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30 transform-gpu"></div>

      {/* Focus Lights - Bottom Corners */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#028dcd]/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>

      {/* Top Header Row - Full Width Border */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col pt-20 lg:pt-20">
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 pb-10 lg:pb-6">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5 text-center lg:text-left z-10 order-2 lg:order-1 pt-0">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm mx-auto lg:mx-0 w-fit mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] lg:text-[12px] font-medium text-gray-600 tracking-wide">
                Trusted by{" "}
                <span className="font-bold text-gray-900">1000+</span> homes{" "}
                <span className="mx-1 text-gray-300">·</span> 10 cities live
              </span>
            </div>

            <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-[1.15] text-gray-900 tracking-tight">
              <GradualSpacing text="Expert Laptop Repair & Tech Support" />
            </h1>
            <p className="text-gray-500 text-base lg:text-lg -mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              <TypingEffect text="Door2fy delivers fast IT support & device care services across India." />
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
                <div className="flex gap-0.5 text-[#028dcd]">
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
                  <span className="text-gray-500">from 1000+ ratings</span>
                </div>
              </div>
            </div>


          </div>

          {/* Right Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:justify-end order-1 lg:order-2 mt-12 lg:mt-0">
            {/* Background Shape */}
            <div className="absolute w-[100%] lg:w-[110%] h-[100%] lg:h-[110%] bg-blue-50/50 rounded-[30px] lg:rounded-[40px] rotate-3 -z-10 -right-10"></div>

            {/* Main Image */}
            <div className="relative w-full max-w-[480px] lg:max-w-[560px]">
              <img
                src={heroTechnician}
                alt="IT Support"
                className="relative z-10 w-full h-[660px] lg:h-[720px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] object-contain select-none"
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
  const services = allServices;
  // Duplicate array 3 times to create a seamless infinite marquee scroll
  const marqueeServices = [...services, ...services, ...services];

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden relative">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#028dcd]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 md:mb-12">
        {/* Section Header matching Reference Image Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left max-w-2xl">
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] text-[11px] font-extrabold uppercase tracking-widest mb-3 border border-[#028dcd]/20 shadow-xs">
              <Sparkles className="w-3 h-3 text-[#028dcd] animate-pulse" />
              <span>Our Services</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Expert tech support <br className="hidden sm:inline" />
              <span className="text-[#028dcd]">delivered fast.</span>
            </h2>

            {/* Description Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-3 font-normal">
              Our verified Door2fy Engineers diagnose and resolve your device issues in <span className="text-[#028dcd] font-bold">5–10 minutes</span>. On-demand doorstep care with 100% genuine parts & transparent flat pricing.
            </p>
          </div>

          {/* Action Link */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#028dcd] hover:bg-[#039ecc] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#028dcd]/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Side-by-Side Cards (Continuous Infinite Marquee) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Side Gradient Fade Masks for smooth infinity aesthetic */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="animate-marquee-auto flex items-center">
          {marqueeServices.map((service, idx) => (
            <Link
              key={`${service.id}-${idx}`}
              to={`/service/${service.slug}`}
              className="group w-[210px] sm:w-[245px] md:w-[260px] flex-shrink-0 bg-white rounded-3xl sm:rounded-[2rem] border border-gray-100 hover:border-[#028dcd]/60 p-4 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(2, 141, 205,0.14)] hover:-translate-y-1.5 flex flex-col justify-between mx-2.5 sm:mx-3 text-left"
            >
              {/* Inner Soft Box holding the Service Image (Matching Reference Card) */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#F8FDFF] border border-[#E1F7F9] p-3.5 flex items-center justify-center overflow-hidden mb-3.5 group-hover:bg-white transition-colors">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain transform transition-transform duration-500 ease-out group-hover:scale-105 select-none pointer-events-none"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Bottom Row: Service Title + Clean Arrow */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-transparent group-hover:border-[#E1F7F9] transition-colors">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#028dcd] transition-colors leading-snug line-clamp-1">
                  {service.title}
                </h3>
                <div className="w-6 h-6 rounded-full bg-[#E1F7F9] text-[#028dcd] group-hover:bg-[#028dcd] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#028dcd]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Top Header Section - Premium Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          {/* Left Column (5/12) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#028dcd] animate-pulse" />
                <span>Why Choose Door2fy?</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Trusted Technology <br />
                <span className="text-[#028dcd]">
                  Solutions for Every Need
                </span>
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-normal mt-4">
                <span className="text-[#028dcd] font-bold">Door2fy</span> provides certified doorstep laptop repair & on-demand tech support across India. We restore device performance, protect your data, and maximize your productivity with guaranteed peace of mind.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#028dcd] text-white font-bold text-xs md:text-sm hover:bg-[#039ecc] transition-all duration-300 shadow-lg shadow-[#028dcd]/25 hover:scale-105"
              >
                <span>Book a Technician</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-gray-50 text-gray-700 font-bold text-xs md:text-sm hover:bg-gray-100 transition-all border border-gray-200"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column (7/12) - Door2fy Certified Hardware Engineers (Clean Full Showcase) */}
          <div className="lg:col-span-7 relative flex justify-center items-center lg:justify-end">
            <div className="relative w-full flex justify-center items-center group">
              <img
                src={door2fyTechLabEngineers}
                alt="Door2fy Certified Hardware Engineers"
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_50px_rgba(2, 141, 205,0.2)] transform transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid - 4 Full Width Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 lg:mb-14">
          <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] shadow-xs hover:border-[#028dcd]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E1F7F9] flex items-center justify-center text-[#028dcd] shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">100% Genuine Parts</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Certified OEM replacements</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] shadow-xs hover:border-[#028dcd]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E1F7F9] flex items-center justify-center text-[#028dcd] shrink-0 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">Doorstep in 30 Mins</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Live technician GPS tracking</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] shadow-xs hover:border-[#028dcd]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E1F7F9] flex items-center justify-center text-[#028dcd] shrink-0 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">Up to 90 Days Warranty</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Hassle-free service protection</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] shadow-xs hover:border-[#028dcd]/40 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-[#E1F7F9] flex items-center justify-center text-[#028dcd] shrink-0 font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 leading-snug">5-10 Min Diagnosis</h4>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Instant hardware & OS testing</p>
            </div>
          </div>
        </div>

        {/* 3D Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-12 lg:mb-14">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-10 text-center transition-all duration-500 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(2, 141, 205,0.12)] flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-3 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
          <div className="absolute inset-4 bg-[#028dcd]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>

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
  const { reviews } = useReviews();

  const ReviewCard = ({ r }: { r: ReviewItem }) => (
    <div
      className="w-[300px] sm:w-[360px] md:w-[400px] h-[220px] sm:h-[240px] p-6 sm:p-7 rounded-3xl sm:rounded-[2.2rem] bg-[#F8FDFF] border border-[#E1F7F9] hover:border-[#028dcd]/60 hover:bg-white transition-all duration-400 shadow-sm hover:shadow-[0_20px_45px_rgba(2, 141, 205,0.12)] hover:-translate-y-1.5 flex flex-col justify-between flex-shrink-0 mx-3 sm:mx-4 overflow-hidden relative group text-left"
    >
      {/* Background Subtle Watermark Quote */}
      <Quote className="absolute right-4 top-4 w-12 h-12 text-[#028dcd]/10 group-hover:text-[#028dcd]/20 transition-colors pointer-events-none rotate-180" />

      {/* Top Bar: Stars + Verified Badge */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex gap-1 text-amber-400">
          {[...Array(Number(r.rating) || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>Verified</span>
        </span>
      </div>

      {/* Review Text */}
      <p className="text-slate-700 font-normal text-xs sm:text-sm leading-relaxed line-clamp-3 my-2 flex-grow relative z-10">
        “{r.review}”
      </p>

      {/* Bottom Profile Row */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100/90 mt-auto relative z-10">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            r.name || "Customer"
          )}&background=E1F7F9&color=028dcd&bold=true`}
          alt={r.name}
          className="w-10 h-10 rounded-full object-cover shadow-xs border border-white"
        />
        <div className="text-left">
          <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-[#028dcd] transition-colors">
            {r.name}
          </h4>
          <div className="flex items-center gap-1 text-slate-400 text-[11px] font-medium mt-0.5">
            <MapPin className="w-3 h-3 text-[#028dcd]" />
            <span>{r.city || r.location || "Doorstep Client"}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-14 lg:py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] font-extrabold text-xs mb-3 border border-[#028dcd]/20 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 fill-[#028dcd]" />
          <span>Verified Doorstep Reviews</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#028dcd] to-[#0284c7]">Door2fy Customers</span> <br />
              & Tech Experts.
            </h2>
            <p className="text-slate-600 mt-3 font-normal text-sm sm:text-base max-w-xl leading-relaxed">
              Real experiences and verified ratings from home users, professionals, and engineers who rely on Door2fy doorstep tech repair.
            </p>
          </div>

          <Link
            to="/leave-a-review"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#028dcd] hover:bg-[#039ecc] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#028dcd]/25 hover:scale-105 w-fit shrink-0"
          >
            <Star className="w-4 h-4 fill-white" />
            <span>Leave a Review</span>
          </Link>
        </div>
      </div>

      {/* Marquee Container with Gradient Side Masks */}
      <div className="relative w-full flex flex-col">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Single Row: Right to Left */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
          {[...reviews, ...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={`r-${idx}`} r={r} />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 38s; }
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
            <span className="uppercase tracking-[0.4em] text-[#028dcd] text-[10px] md:text-[11px] font-bold block mb-6">
              Partner With Us
            </span>
            <h2 className="text-4xl lg:text-6xl leading-[1.2] font-extrabold text-gray-900 mb-8 tracking-tight">
              Become a <br />
              <span className="text-[#028dcd]">Door2fy</span> Partner
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
                  <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 mt-1 rounded-full bg-[#028dcd] flex items-center justify-center text-white shadow-lg shadow-[#028dcd]/20 group-hover:scale-110 transition-transform">
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
            <div className="absolute -inset-6 bg-[#028dcd]/10 rounded-[3rem] blur-3xl -z-10"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-7 bg-white p-8 md:p-10 lg:p-14 rounded-[3rem] border border-[#E1F7F9] shadow-[0_30px_70px_rgba(2, 141, 205,0.12)]">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-3 tracking-tight">Registration Form</h3>
                <p className="text-gray-500 text-sm md:text-base text-center font-medium">Join 100+ partners across the country.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#028dcd] uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#028dcd] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#028dcd] uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#028dcd] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#028dcd] uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 00000 00000"
                    className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#028dcd] focus:bg-white text-gray-900 text-[15px] outline-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                  />
                </div>
                <div className="space-y-2.5 text-left">
                  <label className="text-[10px] font-extrabold text-[#028dcd] uppercase tracking-widest ml-1">Service Interest</label>
                  <div className="relative">
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-14 md:h-16 px-6 md:px-7 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#028dcd] focus:bg-white text-gray-900 text-[15px] outline-none appearance-none cursor-pointer shadow-sm font-bold"
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
                <label className="text-[10px] font-extrabold text-[#028dcd] uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your background..."
                  className="w-full px-6 md:px-7 py-5 md:py-6 rounded-2xl bg-[#F8FDFF] border-2 border-transparent focus:border-[#028dcd] focus:bg-white text-gray-900 text-[15px] outline-none resize-none transition-all placeholder:text-gray-400 shadow-sm font-bold"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full h-16 md:h-20 rounded-2xl bg-[#028dcd] hover:bg-[#028dcd] text-white text-sm md:text-base font-extrabold uppercase tracking-widest shadow-[0_15px_40px_rgba(79,183,212,0.35)] transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
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

  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.door2fy.in/#business",
      "name": "Door2fy - Doorstep Laptop Repair & IT Support Network",
      "url": "https://www.door2fy.in/",
      "logo": "https://www.door2fy.in/door2fy-icon.jpg",
      "image": "https://www.door2fy.in/og-image.jpg",
      "description": "India's #1 Doorstep Laptop Repair & IT Support Network. 5-10 minute diagnostic, genuine spare parts, background-verified engineers across Delhi NCR & 30+ cities.",
      "telephone": "+91-9217759006",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "22:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://play.google.com/store/apps/details?id=com.Door2fy&pli=1",
        "https://partner.door2fy.in"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.door2fy.in/#organization",
      "name": "Door2fy",
      "url": "https://www.door2fy.in/",
      "logo": "https://www.door2fy.in/door2fy-icon.jpg",
      "sameAs": [
        "https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      <SEOHead
        title="Doorstep Laptop Repair in Delhi NCR & Across India | Door2fy"
        description="Door2fy provides 10-minute doorstep laptop repair, MacBook servicing, PC troubleshooting & IT support by verified engineers in Delhi NCR and 30+ cities."
        canonicalUrl="https://www.door2fy.in/"
        keywords="doorstep laptop repair Delhi, laptop repair Delhi, MacBook repair Delhi, computer service near me, laptop screen repair, IT support India, Door2fy"
        schema={homeSchema}
      />

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
