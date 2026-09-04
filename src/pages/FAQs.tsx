import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Search,
  ChevronDown,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import EngineerReviews from "./EngineerReviews";

// Assets
import phone1 from "@/assets/phone1.webp";
import faqNamasteImg from "@/assets/door2fy-faq-namaste-engineer.webp";

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true, // First FAQ opened by default
  });

  const faqCategories = [
    {
      category: "General & Booking",
      icon: Zap,
      questions: [
        {
          question: "What is Door2fy?",
          answer:
            "Door2fy is India's leading on-demand doorstep laptop repair and tech support platform. We connect you with certified, background-verified computer engineers who reach your home or office within 30 minutes in Delhi NCR, Mumbai, Bengaluru, Pune, and 50+ cities across India.",
        },
        {
          question: "How do I book a laptop repair on Door2fy?",
          answer:
            "You can book online through Door2fy.in or via our mobile app in under 15 seconds. Simply select your laptop brand (MacBook, Dell, HP, Lenovo, ASUS, Acer, etc.), describe the problem (screen, battery, speed boost, OS crash), choose your location, and select an instant or scheduled time slot.",
        },
        {
          question: "How quickly can a technician reach my location?",
          answer:
            "Our certified engineers arrive at your doorstep in 30 minutes on average. You can track your assigned technician's live GPS location and ETA directly in real time.",
        },
        {
          question: "Which laptop brands and devices do you repair?",
          answer:
            "We provide certified doorstep service for Apple MacBook (Air/Pro, M1/M2/M3), Dell (XPS, Inspiron, Alienware), HP (Pavilion, Spectre, Envy), Lenovo (ThinkPad, IdeaPad, Legion), ASUS (ROG, ZenBook), Acer, MSI, Samsung laptops, and custom desktop PCs.",
        },
        {
          question: "Can I schedule a service for my office or business?",
          answer:
            "Yes! Door2fy provides corporate IT support, Annual Maintenance Contracts (AMC), workstation speed optimizations, and urgent multi-device repair for startups, corporate offices, and co-working spaces.",
        },
      ],
    },
    {
      category: "Safety & Data Privacy",
      icon: ShieldCheck,
      questions: [
        {
          question: "How do you ensure my security and safety during home visits?",
          answer:
            "All Door2fy professionals undergo rigorous police verification, government ID verification, and comprehensive technical skill assessment. You receive the engineer's photo, verified ID card, and live tracking before they arrive.",
        },
        {
          question: "Is my personal data safe during the repair?",
          answer:
            "Yes, 100%! Unlike traditional service centers where you leave your laptop for days, Door2fy performs diagnosis and repairs right in front of your eyes at your home or desk. No unauthorized access or copying of your files is ever possible.",
        },
        {
          question: "What hygiene and safety protocols do engineers follow?",
          answer:
            "Our engineers carry sanitized diagnostic toolkits, wear clean professional attire, and use anti-static ESD safety mats to protect your device and your workspace.",
        },
      ],
    },
    {
      category: "Pricing & Warranty",
      icon: Award,
      questions: [
        {
          question: "How much do Door2fy laptop repairs cost?",
          answer:
            "We provide 100% transparent upfront pricing with zero hidden charges. You receive an exact price quote after the initial 5–10 minute diagnostic check, and you pay only after the repair is completed and verified.",
        },
        {
          question: "What is the diagnostic fee if I decide not to proceed?",
          answer:
            "We charge a nominal inspection fee of ₹199 for doorstep diagnosis and troubleshooting. If you proceed with the suggested repair, the diagnostic fee is completely waived off!",
        },
        {
          question: "What warranty do you provide on repairs and spare parts?",
          answer:
            "All hardware replacements (screens, batteries, keyboards, SSDs, charging ports) and major repairs include up to 90 days comprehensive Door2fy warranty with digital invoice support.",
        },
        {
          question: "Are the replacement spare parts genuine OEM?",
          answer:
            "Yes, 100%. We only source factory-certified OEM genuine spare parts compatible with your specific model to ensure maximum lifespan and original performance.",
        },
      ],
    },
    {
      category: "Cancellation & Payment",
      icon: Clock,
      questions: [
        {
          question: "Can I cancel or reschedule my booking?",
          answer:
            "Yes, you can easily cancel or reschedule your booking at any time with zero penalty before the technician arrives.",
        },
        {
          question: "What payment methods are supported?",
          answer:
            "We support all secure payment methods including UPI (Google Pay, PhonePe, Paytm), Credit Cards, Debit Cards, Net Banking, and Cash on Service. You pay only after you are completely satisfied with the repair.",
        },
        {
          question: "What is your satisfaction and refund policy?",
          answer:
            "We offer a 100% satisfaction guarantee. If an issue is not resolved to your satisfaction or reoccurs within the warranty period, we will send an expert technician to re-diagnose and fix it with zero extra charges.",
        },
      ],
    },
  ];

  // Filter FAQs based on Search
  const filteredFaqCategories = useMemo(() => {
    return faqCategories
      .map((cat) => {
        const matchingQuestions = cat.questions.filter((q) => {
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return (
            q.question.toLowerCase().includes(query) ||
            q.answer.toLowerCase().includes(query)
          );
        });

        if (matchingQuestions.length === 0) return null;

        return {
          ...cat,
          questions: matchingQuestions,
        };
      })
      .filter(Boolean) as typeof faqCategories;
  }, [searchQuery]);

  const toggleAccordion = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <SEOHead
        title="Frequently Asked Questions (FAQs) | Door2fy"
        description="Find answers to common questions about Door2fy's doorstep laptop repair, MacBook services, pricing, warranty, response times, and technician verification."
        canonicalUrl="https://www.door2fy.in/faqs"
        keywords="door2fy faqs, laptop repair questions, doorstep service pricing, laptop repair warranty, Door2fy"
        schema={faqSchema}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#F0FBFF] overflow-hidden relative flex flex-col justify-end">
        {/* Background Glow Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] aspect-square bg-[#F0FBFF] rounded-full -z-10 blur-3xl opacity-50 transform-gpu"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] aspect-square bg-[#E8F8FB] rounded-full -z-10 blur-3xl opacity-30 transform-gpu"></div>
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#028dcd]/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full -z-10 blur-[120px] transform-gpu"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 lg:pt-24 pb-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
            {/* Left Column: Text & Search (6/12) */}
            <div className="lg:col-span-6 text-left space-y-4 sm:space-y-6 order-1 lg:order-1 pb-6 sm:pb-10 lg:pb-16 pt-2 lg:pt-6">
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-gray-100 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-700 tracking-wide">
                  Help & Knowledge Base <span className="text-gray-300">·</span> 24/7 Doorstep Support
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Frequently Asked <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#028dcd] to-[#0284c7]">
                  Questions
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
                Everything you need to know about Door2fy's 30 minute doorstep laptop repair, spare parts warranty, data privacy, and pricing.
              </p>

              {/* Live Search Input */}
              <div className="pt-2 max-w-lg">
                <div className="relative flex items-center shadow-xs rounded-full">
                  <Search className="absolute left-4 w-4 h-4 sm:w-5 sm:h-5 text-[#028dcd] pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search a question (e.g. warranty, arrival time, pricing)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 sm:pl-12 pr-14 py-3 sm:py-4 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#028dcd] focus:ring-4 focus:ring-[#028dcd]/15 transition-all placeholder:text-slate-400 shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 px-2 py-1 text-[11px] font-bold text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Namaste Engineer Image (6/12) Full Top-to-Bottom */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative order-2 lg:order-2 self-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[560px] lg:max-w-[680px] xl:max-w-[760px] flex items-end justify-center lg:justify-end">
                {/* Ambient floor glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[540px] h-[140px] sm:h-[180px] bg-[#028dcd]/30 rounded-full blur-3xl pointer-events-none -z-10" />
                <img
                  src={faqNamasteImg}
                  alt="Door2fy Verified Laptop Technician"
                  className="w-full h-auto max-h-[320px] sm:max-h-[640px] lg:max-h-[720px] object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(2, 141, 205,0.2)] block"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCORDION FAQS SECTION ================= */}
      <section className="pt-8 sm:pt-10 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {filteredFaqCategories.length === 0 ? (
            <div className="text-center py-20 bg-[#F8FDFF] rounded-3xl border border-[#E1F7F9] p-8">
              <HelpCircle className="w-12 h-12 text-[#028dcd] mx-auto mb-3 opacity-60" />
              <h3 className="text-xl font-bold text-gray-900 mb-1">No matching questions found</h3>
              <p className="text-gray-500 text-sm mb-4">
                Try searching for terms like "warranty", "MacBook", "cost", or "arrival time".
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-5 py-2 rounded-full bg-[#028dcd] text-white font-bold text-xs hover:bg-[#039ecc] transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqCategories.map((categoryGroup, catIdx) => {
              const CategoryIcon = categoryGroup.icon;
              return (
                <div key={catIdx} className="space-y-5">
                  <div className="flex items-center gap-3 pb-2 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {categoryGroup.category}
                    </h2>
                  </div>

                  <div className="space-y-3.5">
                    {categoryGroup.questions.map((faq, qIdx) => {
                      const itemKey = `${catIdx}-${qIdx}`;
                      const isOpen = !!openItems[itemKey];

                      return (
                        <div
                          key={qIdx}
                          className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen
                            ? "bg-[#F8FDFF] border-[#028dcd]/40 shadow-sm"
                            : "bg-white border-gray-100 hover:border-[#E1F7F9] hover:bg-[#F8FDFF]/50"
                            }`}
                        >
                          <button
                            onClick={() => toggleAccordion(itemKey)}
                            className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-gray-900 hover:text-[#028dcd] transition-colors"
                          >
                            <span className="leading-snug">{faq.question}</span>
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                                ? "bg-[#028dcd] text-white rotate-180"
                                : "bg-[#E1F7F9] text-[#028dcd]"
                                }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-600 font-normal leading-relaxed border-t border-[#E1F7F9]/60 pt-3.5">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ================= 24/7 SUPPORT CONTACT CHANNELS ================= */}
      <section className="py-16 md:py-20 bg-[#F8FDFF] border-t border-[#E1F7F9]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-3 shadow-sm border border-[#028dcd]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#028dcd]" />
              <span>We're Here to Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Still Have Questions?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 font-normal">
              Speak directly with our technical support team available around the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Phone Card */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(2, 141, 205,0.08)] hover:border-[#028dcd]/40 transition-all duration-300 text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mx-auto group-hover:bg-[#028dcd] group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Call Support</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4">
                  Speak directly with an IT coordinator
                </p>
                <a
                  href="tel:+919217759006"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#028dcd] text-white font-bold text-xs hover:bg-[#039ecc] transition-all shadow-sm shadow-[#028dcd]/20"
                >
                  <span>+91 9217759006</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(2, 141, 205,0.08)] hover:border-[#028dcd]/40 transition-all duration-300 text-center space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mx-auto group-hover:bg-[#028dcd] group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-4">
                  Response within 24 hours guaranteed
                </p>
                <a
                  href="mailto:support@door2fy.in"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#028dcd] text-white font-bold text-xs hover:bg-[#039ecc] transition-all shadow-sm shadow-[#028dcd]/20"
                >
                  <span>support@door2fy.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <EngineerReviews showList={false} />

      {/* ================= APP DOWNLOAD & CTA BANNER ================= */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden border-t border-gray-100">
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
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[48%] text-center lg:text-left space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Doorstep Tech Support</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                  Ready to Book an <br />
                  <span className="text-[#028dcd]">Expert Engineer?</span>
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Download the Door2fy app and get background-verified computer technicians at your home or office in 30 minutes.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <Link
                    to="/services"
                    className="px-6 py-3.5 rounded-full bg-[#028dcd] text-white font-bold text-xs sm:text-sm hover:bg-[#039ecc] transition-all shadow-md shadow-[#028dcd]/25 hover:scale-105"
                  >
                    Book Online Now
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
                      className="h-11 md:h-12 w-auto"
                      loading="lazy"
                      decoding="async"
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
