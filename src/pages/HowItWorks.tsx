import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Smartphone,
  MapPin,
  Wrench,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Award,
  Star,
  Users,
  BadgeCheck,
  CreditCard,
} from "lucide-react";

// Assets
import phone1 from "@/assets/phone1.png";
import door2fyTechLabEngineers from "@/assets/door2fy-tech-lab-engineers.png";

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Book in 15 Seconds",
      subtitle: "Online or via App",
      description:
        "Select your laptop brand and describe the issue (cracked display, battery failure, slow OS, or water damage). Choose your location and preferred time slot in under 15 seconds.",
      badge: "Step 1",
    },
    {
      number: "02",
      icon: UserCheckIcon,
      title: "Verified Engineer Assigned",
      subtitle: "Background Checked Pro",
      description:
        "Our system instantly matches you with a certified nearby Door2fy technician. You receive the engineer's photo, verified ID, and real-time GPS tracking details.",
      badge: "Step 2",
    },
    {
      number: "03",
      icon: Clock,
      title: "30 Min Doorstep Arrival",
      subtitle: "Fully Equipped at Your Door",
      description:
        "The technician arrives at your home or office equipped with professional diagnostic kits and genuine OEM spare parts for instant on-site troubleshooting.",
      badge: "Step 3",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Live On-Site Repair & Testing",
      subtitle: "100% Data Safe & Transparent",
      description:
        "Your device is diagnosed and repaired right in front of your eyes. Complete hardware testing is conducted to verify performance before you pay.",
      badge: "Step 4",
    },
    {
      number: "05",
      icon: Award,
      title: "Warranty & Digital Invoice",
      subtitle: "Up to 90 Days Protection",
      description:
        "Receive an official digital tax invoice and up to 90 days comprehensive warranty on all replaced spare parts and repair services.",
      badge: "Step 5",
    },
    {
      number: "06",
      icon: Star,
      title: "Pay After Satisfaction",
      subtitle: "Multiple Payment Modes",
      description:
        "Pay securely via UPI, credit/debit card, net banking, or cash only when your laptop is running at peak performance and you are 100% satisfied.",
      badge: "Step 6",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Live GPS Technician Tracking",
      description:
        "Know exactly when your engineer arrives with real-time map tracking and instant ETA alerts.",
    },
    {
      icon: ShieldCheck,
      title: "Zero Data Risk (Live Repair)",
      description:
        "No black-box laboratory drops. Everything is repaired right in front of your desk with complete privacy.",
    },
    {
      icon: CreditCard,
      title: "Transparent Upfront Pricing",
      description:
        "Exact price estimates provided before starting work with zero hidden diagnosis or visiting charges.",
    },
  ];

  const stats = [
    {
      num: "15 Sec",
      label: "Average Booking Time",
      icon: <Clock className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "30 min",
      label: "Rapid Doorstep Arrival",
      icon: <Zap className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "100%",
      label: "Verified & Certified Techs",
      icon: <ShieldCheck className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "90 Days",
      label: "Comprehensive Warranty",
      icon: <Award className="w-5 h-5 text-emerald-500" />,
    },
  ];

  const faqs = [
    {
      q: "How fast can a Door2fy engineer reach my location?",
      a: "Our certified engineers arrive at your home or office within  30 minutes in Delhi NCR, Mumbai, Bengaluru, Pune, and 50+ supported cities across India.",
    },
    {
      q: "Are the technicians background-verified and certified?",
      a: "Yes, 100%. Every Door2fy engineer undergoes police verification, strict background checks, and rigorous hands-on technical training for Apple MacBook, Dell, HP, Lenovo, ASUS, and Acer systems.",
    },
    {
      q: "Do I need to leave my laptop at a service center?",
      a: "No! 95% of hardware and software issues are repaired right at your doorstep in front of your eyes, ensuring total privacy and zero data leakage.",
    },
    {
      q: "What if the issue is not fixed or recurs later?",
      a: "All our repairs and genuine replacement parts are backed by up to 90 days service warranty. If an issue reoccurs within the warranty period, we fix it with zero hassle.",
    },
    {
      q: "What payment methods are supported?",
      a: "We accept Google Pay, PhonePe, Paytm, UPI, Credit Cards, Debit Cards, Net Banking, and Cash on Service. You pay only after you are completely satisfied with the repair.",
    },
  ];

  function UserCheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <SEOHead
        title="How It Works | Door2fy - Doorstep Laptop Repair in 10-30 Mins"
        description="Learn how Door2fy works: 1. Book in 60s, 2. Certified technician assigned, 3. Fast doorstep arrival, 4. Tested & guaranteed repair with 90-day warranty."
        canonicalUrl="https://www.door2fy.in/how-it-works"
        keywords="door2fy repair process, laptop repair booking, doorstep repair service, laptop pickup and drop, easy repair steps, how laptop repair works"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#F0FBFF] overflow-hidden relative min-h-[60dvh] lg:min-h-[560px] flex flex-col justify-center">
        {/* Background Shapes & Focus Lights matching Home */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50 transform-gpu"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30 transform-gpu"></div>
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#028dcd]/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 pb-10 sm:pb-14 lg:pt-28 lg:pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-gray-100 rounded-full shadow-xs mx-auto lg:mx-0 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-700 tracking-wide">
                  Simple 4-Step Process <span className="text-gray-300">·</span> 30 Min Arrival
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-extrabold leading-[1.12] text-gray-900 tracking-tight">
                How Door2fy <br />
                <span className="text-[#028dcd]">Works for You</span>
              </h1>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Experience hassle-free doorstep laptop repair and tech support. Book in under 15 seconds, track your certified technician in real time, and get your device fixed right in front of your eyes.
              </p>

              {/* Highlights Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 shadow-xs border border-slate-100 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-emerald-500">✓</span> 15s Fast Booking
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 shadow-xs border border-slate-100 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-[#028dcd]">⚡</span> 30-Min Arrival
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 shadow-xs border border-slate-100 text-[11px] sm:text-xs font-bold text-slate-800">
                  <span className="text-amber-500">★</span> 90-Day Warranty
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#028dcd] text-white font-bold text-sm hover:bg-[#039ecc] transition-all duration-300 shadow-lg shadow-[#028dcd]/25 hover:scale-105 active:scale-95 text-center"
                >
                  <span>Book a Repair Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-gray-800 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200 shadow-xs hover:border-[#028dcd]/40 text-center"
                >
                  <span>Download App</span>
                </a>
              </div>
            </div>

            {/* Right Visual Graphic Card */}
            <div className="lg:col-span-6 relative flex justify-center items-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full flex justify-center items-center group">
                <img
                  src={door2fyTechLabEngineers}
                  alt="Door2fy Rapid Laptop Service"
                  className="w-full h-auto max-h-[340px] sm:max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(2, 141, 205,0.18)] transform transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6-STEP WORKFLOW CARDS ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Dynamic Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#028dcd]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#028dcd] animate-pulse" />
              <span>Effortless Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Seamless Laptop Care in <br />
              <span className="text-[#028dcd]">6 Simple Steps</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 font-normal">
              From instant booking to live testing and warranty activation, experience complete convenience without stepping out of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-[#F8FDFF] rounded-3xl sm:rounded-[2.5rem] border border-[#E1F7F9] hover:border-[#028dcd] hover:bg-white transition-all duration-500 text-left flex flex-col justify-between shadow-sm hover:shadow-[0_25px_50px_rgba(2, 141, 205,0.1)] hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Step Number Big Watermark */}
                  <div className="absolute -top-6 -right-4 text-7xl font-extrabold text-[#028dcd]/5 group-hover:text-[#028dcd]/10 transition-colors select-none">
                    {step.number}
                  </div>

                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center transition-all duration-500 group-hover:bg-[#028dcd] group-hover:text-white group-hover:scale-110 shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#028dcd] bg-white px-3 py-1 rounded-full border border-[#E1F7F9] shadow-xs">
                        {step.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#028dcd] transition-colors leading-snug mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#028dcd] uppercase tracking-wider mb-2.5">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3D STATS COUNTERS ================= */}
      <section className="py-12 md:py-16 bg-[#F8FDFF] border-y border-[#E1F7F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 text-center transition-all duration-500 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(2, 141, 205,0.12)] flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-3 sm:mb-4 shadow-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">
                  {item.num}
                </h3>

                <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ULTIMATE ADVANTAGES (MATCHING HOME) ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
              <BadgeCheck className="w-3.5 h-3.5 text-[#028dcd]" />
              <span>The Door2fy Edge</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Built for Safety, <br />
              <span className="text-[#028dcd]">Convenience & Speed</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3 font-normal">
              A frictionless tech care experience designed for home users, freelancers, and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-8 bg-[#F8FDFF] rounded-3xl border border-[#E1F7F9] hover:border-[#028dcd] hover:bg-white transition-all duration-300 text-left shadow-sm hover:shadow-[0_20px_40px_rgba(2, 141, 205,0.08)] flex flex-col justify-between group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-6 group-hover:bg-[#028dcd] group-hover:text-white transition-colors">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#028dcd] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE FAQS ================= */}
      <section className="py-16 md:py-20 bg-[#F8FDFF] border-t border-[#E1F7F9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#028dcd] font-bold uppercase tracking-widest text-xs mb-2 block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Got Questions? We Have Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-900 hover:text-[#028dcd] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#028dcd] shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-600 font-normal leading-relaxed border-t border-gray-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APP DOWNLOAD & ON-THE-GO BANNER ================= */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute inset-4 bg-[#028dcd]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>

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

              {/* Content */}
              <div className="w-full lg:w-[48%] text-center lg:text-left space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>On-Demand Tech Assistance</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                  Book Repairs in <br />
                  <span className="text-[#028dcd]">Under 15 Seconds</span>
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Download the Door2fy app to book certified technicians, track GPS arrival live, and get digital warranty certificates.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-all hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-11 md:h-12 w-auto"
                    />
                  </a>
                  <a
                    href="#"
                    className="transform transition-all hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                      className="h-11 md:h-12 w-auto"
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
