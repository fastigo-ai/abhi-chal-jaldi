import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { services } from "@/data/services";
import {
  ShieldCheck,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

// Assets
import phone1 from "@/assets/phone1.png";
import servicesHeroEngineer from "@/assets/services-hero-engineer.png";

export default function Services() {
  const metaTitle = "Doorstep Laptop Repair Services | 10–30 Min Arrival | Door2fy";
  const metaDescription =
    "Explore Door2fy's certified laptop repair services. Same-day motherboard diagnostics, MacBook repairs, battery & screen replacements at your home or office.";
  const metaKeywords =
    "laptop repair, MacBook repair, slow laptop fix, laptop screen replacement, SSD upgrade, Door2fy services";

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonicalUrl="https://www.door2fy.in/services"
        keywords={metaKeywords}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#F0FBFF] overflow-hidden relative flex flex-col justify-end">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50 transform-gpu"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30 transform-gpu"></div>
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#04B6EA]/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 lg:pt-24 pb-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            {/* Left Column: Text & Badges (6/12) */}
            <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1 pb-10 lg:pb-16 pt-2 lg:pt-6">
              {/* Status Pill with Motion */}
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-100 shadow-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-700 tracking-wide">
                  10-30 Minute Doorstep Arrival <span className="text-gray-300">·</span> 50+ Cities Live
                </span>
              </motion.div>

              {/* Headline with Motion */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
              >
                Professional <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04B6EA] to-[#0284c7]">
                  Engineering Services
                </span>
              </motion.h1>

              {/* Subtitle with Motion */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl"
              >
                Fast, on-demand laptop repair, chip-level diagnostics, and system optimizations delivered at your doorstep by certified engineers.
              </motion.p>

              {/* Quick Badges with Motion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-2.5 pt-1"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#04B6EA]" /> 5–10 Min Diagnosis
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Up to 90 Days Warranty
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-xs">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 4.9/5 Rating
                </span>
              </motion.div>
            </div>

            {/* Right Column: Engineer Motherboard Repair Image (6/12) Sitting Flush to Bottom */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex justify-center lg:justify-end items-end relative order-1 lg:order-2 self-end"
            >
              <div className="relative w-full max-w-[440px] sm:max-w-[560px] lg:max-w-[660px] xl:max-w-[740px] flex items-end justify-center lg:justify-end">
                {/* Ambient floor glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[380px] sm:w-[540px] h-[180px] bg-[#04B6EA]/25 rounded-full blur-3xl pointer-events-none -z-10" />
                <img
                  src={servicesHeroEngineer}
                  alt="Door2fy Certified Laptop Engineer Repairing Motherboard"
                  className="w-full h-auto max-h-[520px] sm:max-h-[600px] lg:max-h-[680px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(4,182,234,0.18)] block transform transition-transform duration-700 hover:scale-[1.02]"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="pt-10 sm:pt-12 pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.slug}`}
                className="group relative rounded-3xl bg-white hover:bg-[#F8FDFF] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container with pure white matching background and proper dimension */}
                <div className="relative w-full aspect-[4/3] bg-white overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-106"
                    loading="lazy"
                  />

                  {/* Speed Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-xs">
                    <Zap className="w-3 h-3 text-[#04B6EA] fill-[#04B6EA]" />
                    <span className="text-[10px] font-extrabold tracking-wider text-slate-800 uppercase">
                      5–10 Min
                    </span>
                  </div>

                  {/* Star Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-xs text-slate-800">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-[10px] font-bold">4.9</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left space-y-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#04B6EA] transition-colors mb-1.5 line-clamp-1">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm font-normal line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Verified Tech</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#04B6EA] group-hover:translate-x-1 transition-transform">
                      <span>Get Support</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APP DOWNLOAD & CTA BANNER ================= */}
      <section className="py-14 lg:py-20 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute inset-4 bg-[#04B6EA]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>

            <div className="relative bg-[#F8FDFF] rounded-[2.5rem] md:rounded-[3.5rem] px-8 lg:px-16 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between border border-[#E1F7F9] shadow-[0_20px_50px_rgba(79,183,212,0.06)] overflow-hidden">
              {/* Phones Image */}
              <div className="relative w-full lg:w-[50%] flex justify-center lg:justify-start transform transition-transform duration-700 group-hover:scale-105 pb-8 lg:pb-0">
                <img
                  src={phone1}
                  alt="Door2fy Mobile App"
                  className="w-full max-w-[260px] lg:max-w-[420px] drop-shadow-[0_25px_50px_rgba(79,183,212,0.18)] select-none pointer-events-none"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[48%] text-center lg:text-left space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Doorstep Booking</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                  Need an Engineer <br />
                  <span className="text-[#04B6EA]">Right Now?</span>
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Book certified laptop engineers in seconds. Fast diagnosis, doorstep hardware replacement, and transparent pricing.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <Link
                    to="/contact-us"
                    className="px-6 py-3 rounded-full bg-[#04B6EA] text-white font-bold text-xs sm:text-sm hover:bg-[#039ecc] transition-all shadow-md shadow-[#04B6EA]/25 hover:scale-105"
                  >
                    Contact Support
                  </Link>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-all hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-10 md:h-11 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
