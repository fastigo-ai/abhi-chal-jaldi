import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Clock,
  ShieldCheck,
  Star,
  Users,
  Award,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Lock,
  Wrench,
  ThumbsUp,
  Cpu,
  BadgeCheck,
} from "lucide-react";

// Assets
import doorstepNamasteEngineerDoorway from "@/assets/doorstep-namaste-engineer-doorway.png";
import phone1 from "@/assets/phone1.png";
import { useReviews } from "@/utils/reviews";

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "30 Min Doorstep Arrival",
      badge: "Rapid Response",
      description:
        "Skip the travel and long service center queues. Our certified engineers reach your home or office in  30 minutes with live GPS status.",
    },
    {
      icon: ShieldCheck,
      title: "100% Background-Verified",
      badge: "Safety Assured",
      description:
        "Every Door2fy technician undergoes strict police and Aadhaar identity verification before being deployed to your doorstep.",
    },
    {
      icon: Award,
      title: "100% Genuine OEM Parts",
      badge: "Original Quality",
      description:
        "We use certified original components for screens, keyboards, SSDs, and motherboards, backed by up to 90 days warranty.",
    },
    {
      icon: Zap,
      title: "5–10 Min Quick Diagnosis",
      badge: "Fast & Accurate",
      description:
        "Get instant hardware and software testing with live status reporting right in front of your eyes.",
    },
    {
      icon: Users,
      title: "Transparent Pricing",
      badge: "Zero Hidden Costs",
      description:
        "Clear upfront estimates with zero surprise fees. You only approve work after a comprehensive free doorstep inspection.",
    },
    {
      icon: Star,
      title: "4.9/5 Customer Rating",
      badge: "42,000+ Happy Users",
      description:
        "Loved and trusted by thousands of working professionals, students, and businesses across 50+ Indian cities.",
    },
  ];

  const stats = [
    {
      num: "1000+",
      label: "Laptops Repaired",
      icon: <CheckCircle2 className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "30 min",
      label: "Average Arrival Time",
      icon: <Clock className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "50+",
      label: "Cities Active Across India",
      icon: <Users className="w-5 h-5 text-[#028dcd]" />,
    },
    {
      num: "4.9/5",
      label: "Customer Rating",
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-500" />,
    },
  ];

  const comparisonData = [
    {
      feature: "Doorstep Arrival Time",
      door2fy: "30 Minutes",
      localShops: "2–5 Days Waiting",
      otherApps: "24–48 Hours",
    },
    {
      feature: "Background Check",
      door2fy: "100% Police Verified",
      localShops: "Unverified / Unknown",
      otherApps: "Basic Check",
    },
    {
      feature: "Repairs Done In Front of You",
      door2fy: "Yes, 100% Transparent",
      localShops: "No, Taken to Backroom",
      otherApps: "Often Pick & Drop Only",
    },
    {
      feature: "Spare Parts Authenticity",
      door2fy: "100% Genuine OEM",
      localShops: "Duplicate / Refurbished",
      otherApps: "Third-party Generic",
    },
    {
      feature: "Service Warranty",
      door2fy: "Up to 90 Days Protection",
      localShops: "No Warranty / 7 Days",
      otherApps: "14–30 Days",
    },
    {
      feature: "Data Safety Guarantee",
      door2fy: "Encrypted & Zero Data Access",
      localShops: "High Risk of Data Theft",
      otherApps: "Standard Policy",
    },
  ];

  const metaTitle = "Why Choose Door2fy | India's Most Trusted Doorstep Laptop Care";
  const metaDescription =
    "Discover why over 42,000 users trust Door2fy for fast, certified laptop repair. 30 min doorstep arrival, verified engineers, and genuine spare parts.";
  const metaKeywords =
    "why door2fy, trusted laptop repair, verified computer technician, doorstep laptop repair india, genuine spare parts warranty";

  const { reviews } = useReviews();

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonicalUrl="https://www.door2fy.in/why-us"
        keywords={metaKeywords}
      />

      {/* ================= HERO SECTION (FULL-BLEED 0-PADDING BANNER) ================= */}
      <section className="w-full relative min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden px-0 bg-[#F0FBFF]">
        {/* Full-bleed Background Image */}
        <img
          src={doorstepNamasteEngineerDoorway}
          alt="Door2fy Verified Technician Greeting at Doorstep"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] sm:object-[68%_center] lg:object-center select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />

        {/* Content Container (Positioned on Left Side) */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 pt-24 pb-14 lg:py-28">
          <div className="max-w-xl lg:max-w-2xl text-left space-y-5">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/90 backdrop-blur-xs border border-gray-200/80 rounded-full shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-700 tracking-wide">
                India's #1 Doorstep Laptop Care Network <span className="text-gray-300">·</span> 50+ Cities Live
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black leading-[1.12] text-gray-900 tracking-tight">
              Why India Trusts <br />
              <span className="text-gray-900">Door2fy Care</span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              Engineered for total transparency, speed, and safety. Get certified background-verified laptop engineers at your doorstep in <span className="font-bold text-gray-900"> 30 minutes</span> with genuine spare parts and guaranteed peace of mind.
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200 text-xs font-bold text-slate-800">
                <span className="text-emerald-500">✓</span> 100% Verified Techs
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200 text-xs font-bold text-slate-800">
                <span className="text-[#028dcd]">⚡</span> 30 Min Arrival
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-xs border border-slate-200 text-xs font-bold text-slate-800">
                <span className="text-amber-500">★</span> 4.9/5 Rating (1000+ users)
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#028dcd] text-white font-bold text-sm hover:bg-[#039ecc] transition-all duration-300 shadow-lg shadow-[#028dcd]/25 hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/95 backdrop-blur-xs text-gray-800 font-bold text-sm hover:bg-white transition-all border border-gray-200 shadow-xs hover:border-[#028dcd]/40 w-full sm:w-auto"
              >
                <span>Download App</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6 CORE PILLARS SECTION ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Dynamic Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#028dcd]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#028dcd] animate-pulse" />
              <span>The Door2fy Standard</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Built on Trust, Speed & <br />
              <span className="text-[#028dcd]">Engineering Excellence</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-4 font-normal">
              We redesigned computer repair from the ground up to eliminate risky lab drop-offs, hidden costs, and endless waiting times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="group p-6 sm:p-8 bg-[#F8FDFF] rounded-3xl sm:rounded-[2.5rem] border border-[#E1F7F9] hover:border-[#028dcd] hover:bg-white transition-all duration-500 text-left flex flex-col justify-between shadow-sm hover:shadow-[0_25px_50px_rgba(2, 141, 205,0.1)] hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Subtle Background Radial Pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity"
                    style={{
                      backgroundImage: "radial-gradient(circle, #028dcd 1.5px, transparent 1.5px)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center transition-all duration-500 group-hover:bg-[#028dcd] group-hover:text-white group-hover:scale-110 shadow-sm">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#028dcd] bg-white px-3 py-1 rounded-full border border-[#E1F7F9] shadow-xs">
                        {reason.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#028dcd] transition-colors leading-snug mb-2.5">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                        {reason.description}
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

      {/* ================= COMPARISON MATRIX (DOOR2FY VS OTHERS) ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
              <BadgeCheck className="w-3.5 h-3.5 text-[#028dcd]" />
              <span>Smart Comparison</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              How Door2fy Compares to <br />
              <span className="text-[#028dcd]">Traditional Repair Shops</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mt-3 font-normal">
              See why thousands of professionals and businesses choose on-demand doorstep repair.
            </p>
          </div>

          <div className="bg-[#F8FDFF] rounded-3xl md:rounded-[3rem] border border-[#E1F7F9] shadow-sm overflow-hidden p-4 sm:p-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#E1F7F9]">
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Features & Guarantee
                    </th>
                    <th className="py-4 px-4 text-sm font-extrabold text-[#028dcd] bg-[#E1F7F9]/50 rounded-t-2xl">
                      ⚡ Door2fy Care
                    </th>
                    <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Local Repair Shops
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1F7F9]/60">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/60 transition-colors">
                      <td className="py-4 px-4 text-sm font-bold text-gray-900">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-sm font-bold text-[#028dcd] bg-[#E1F7F9]/20 flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{row.door2fy}</span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-rose-400 shrink-0" />
                          <span>{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS MARQUEE (MATCHING HOME) ================= */}
      <section id="testimonials" className="py-12 lg:py-16 bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-left">
          <span className="text-[#028dcd] font-bold uppercase tracking-[0.4em] text-[10px] md:text-[11px] mb-2 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Trusted by 1000+ <br />
            Satisfied Customers.
          </h2>
          <p className="text-gray-500 mt-2 font-medium text-sm md:text-base">
            Real experiences from people who rely on Door2fy for their home and office tech needs.
          </p>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full flex flex-col gap-6 overflow-hidden">
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
            {[...reviews, ...reviews, ...reviews].map((r, idx) => (
              <div
                key={`r-${idx}`}
                className="w-[290px] sm:w-[340px] md:w-[380px] h-[190px] sm:h-[210px] p-5 md:p-6 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] relative overflow-hidden flex-shrink-0 mx-3 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(2, 141, 205,0.1)] flex flex-col justify-between hover:bg-white"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-0.5 text-amber-400 mb-2.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 font-medium text-xs sm:text-sm leading-relaxed line-clamp-3">
                      “{r.review}”
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-[#E1F7F9] flex items-center justify-center font-bold text-[#028dcd] text-xs">
                      {r.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-xs">{r.name}</h4>
                      <p className="text-gray-400 text-[10px]">{r.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
            .animate-marquee {
              animation: marquee 50s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused !important;
            }
          `,
          }}
        />
      </section>

      {/* ================= APP DOWNLOAD & ON-THE-GO BANNER ================= */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute inset-4 bg-[#028dcd]/10 blur-3xl rounded-[4rem] group-hover:opacity-60 transition-opacity"></div>

            <div className="relative bg-[#F8FDFF] rounded-[2.5rem] md:rounded-[3.5rem] px-8 lg:px-16 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between border border-[#E1F7F9] shadow-[0_20px_50px_rgba(79,183,212,0.06)] overflow-hidden">
              {/* Phones Image - Left Side */}
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>On-Demand Device Care</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                  Book Repairs in <br />
                  <span className="text-[#028dcd]">Under 15 Seconds</span>
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Download the Door2fy app to track verified engineers live on map, manage warranty certificates, and receive priority doorstep support.
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
