import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Wallet,
  MapPin,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function PartnerBenefits() {
  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Partner Benefits | Grow Your Earnings with Door2fy"
        description="Partner with Door2fy and earn ₹40,000 to ₹90,000+ per month. Enjoy daily payouts, free professional toolkits, nearby job orders, and free Apple training."
        canonicalUrl="https://www.door2fy.in/partner-benefits"
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#F0FAFD] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#028dcd]/20 shadow-xs mb-6">
            <Zap className="w-4 h-4 text-[#028dcd]" />
            <span className="text-xs font-bold text-[#028dcd] tracking-wide uppercase">
              India's Highest Earning Partner Network
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Earn More, Grow Faster with <br className="hidden sm:inline" />
            <span className="text-[#028dcd]">Door2fy Partnership</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mt-5 leading-relaxed">
            Turn your laptop repair skills into a thriving, independent business. Get guaranteed daily jobs within your local radius, daily bank payouts, and free OEM spare parts supply.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://partner.door2fy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#028dcd] text-white font-extrabold text-sm sm:text-base hover:bg-[#039ecc] shadow-lg shadow-[#028dcd]/25 transition-all hover:scale-105"
            >
              Join as a Certified Partner Now
            </a>
            <Link
              to="/partner-guidelines"
              className="px-7 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-[#028dcd] hover:text-[#028dcd] transition-all shadow-xs"
            >
              View Partner Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. EARNING CALCULATOR / HIGHLIGHTS ================= */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#028dcd] to-[#0170a3] text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase opacity-80">Earning Potential</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2">₹50,000 – ₹90,000+</h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-2">
                Top technician partners earn up to ₹1,00,000+ per month with guaranteed doorstep volume and high incentive bonuses.
              </p>
            </div>
            <div className="pt-6 border-t border-white/20 mt-6 flex items-center justify-between text-xs font-bold">
              <span>Daily Bank Payouts</span>
              <span>⚡ Instant UPI</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Jobs in Your Preferred Area</h2>
              <p className="text-slate-600 text-sm mt-2">
                Choose your service radius (5–15 km). No long travel across city borders—all bookings are matched to your micro-locality.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-[#028dcd] flex items-center gap-1">
              <span>Smart GPS Dispatch</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Free Professional Toolkits</h2>
              <p className="text-slate-600 text-sm mt-2">
                Get precision iFixit screwdriver sets, digital multimeters, thermal cameras, and anti-static ESD safety mats.
              </p>
            </div>
            <div className="pt-4 text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span>100% Provided by Door2fy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. 6 PILLARS OF PARTNER BENEFITS ================= */}
      <section className="py-14 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#028dcd]">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
            Everything You Need to Succeed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Wallet,
              title: "Transparent Daily Earnings",
              desc: "Get paid instantly for every completed job. Transparent commission split with zero hidden deductions.",
            },
            {
              icon: GraduationCap,
              title: "Free Apple & Chip-Level Training",
              desc: "Master MacBook M1/M2/M3 logic boards, BGA soldering, and power IC diagnostics with master trainers.",
            },
            {
              icon: ShieldCheck,
              title: "Accident & Medical Insurance",
              desc: "Complete personal accident insurance and family healthcare cover for all active full-time partners.",
            },
            {
              icon: TrendingUp,
              title: "Guaranteed Daily Job Volume",
              desc: "Door2fy invests heavily in customer marketing so you receive consistent 4–8 service bookings every day.",
            },
            {
              icon: Award,
              title: "Genuine Parts Supply Hub",
              desc: "Direct access to our centralized inventory of 100% genuine OEM displays, batteries, keyboards, and SSDs.",
            },
            {
              icon: Sparkles,
              title: "Fast 24-Hour Onboarding",
              desc: "Upload Aadhaar, Police Verification, and technician certs to start taking customer orders within 1 business day.",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-white border border-slate-100 shadow-xs hover:border-[#028dcd]/40 hover:shadow-md transition-all text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. ONBOARDING STEPS ================= */}
      <section className="py-12 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F8FDFF] to-[#EEF5FF] rounded-3xl p-8 sm:p-12 border border-[#E1F7F9] shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            How to Join in 3 Simple Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#028dcd] text-white font-black text-sm flex items-center justify-center mb-3">1</span>
              <h4 className="font-bold text-slate-900 text-base">Submit Documents</h4>
              <p className="text-slate-500 text-xs mt-1">Register on partner.door2fy.in with your ID proof and technical experience proof.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#028dcd] text-white font-black text-sm flex items-center justify-center mb-3">2</span>
              <h4 className="font-bold text-slate-900 text-base">Quick Skill Assessment</h4>
              <p className="text-slate-500 text-xs mt-1">Complete a quick 30-minute diagnostic test with our technical lead engineer.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#028dcd] text-white font-black text-sm flex items-center justify-center mb-3">3</span>
              <h4 className="font-bold text-slate-900 text-base">Receive Kit & Start Earning</h4>
              <p className="text-slate-500 text-xs mt-1">Collect your Door2fy uniform, tool bag, and start receiving live customer bookings.</p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="https://partner.door2fy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#028dcd] text-white font-bold text-sm sm:text-base hover:bg-[#039ecc] shadow-lg shadow-[#028dcd]/25 transition-all hover:scale-105"
            >
              <span>Register on Partner Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
