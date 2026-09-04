import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Building2,
  Users,
  Handshake,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/Logo-removebg-preview.png";

// Cities list matching the visual layout
const citiesList = [
  "Agra",
  "Ahmedabad",
  "Aligarh",
  "Amritsar",
  "Bareilly",
  "Bengaluru",
  "Bhagalpur",
  "Bhopal",
  "Bhubaneswar",
  "Chandigarh",
  "Cuttack",
  "Dehradun",
  "Delhi",
  "Faridabad",
  "Gandhi Nagar",
  "Ghaziabad",
  "Gorakhpur",
  "Greater Noida",
  "Gurugram",
  "Gwalior",
  "Haridwar",
  "Haldwani",
  "Hyderabad",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jhansi",
  "Kanpur",
  "Lucknow",
  "Ludhiana",
  "Meerut",
  "Mohali",
  "Moradabad",
  "Mumbai",
  "Mysuru",
  "Nagpur",
  "Noida",
  "Patna",
  "Panchkula",
  "Prayagraj",
  "Pune",
  "Raipur",
  "Roorkee",
  "Rudrapur",
  "Tirupati",
  "Ujjain",
  "Varanasi",
  "Vijayawada",
  "Zirakpur",
  "New Delhi",
];

const companyLinks: { name: string; path?: string; href?: string }[] = [
  { name: "About Us", path: "/why-us" },
  { name: "Our Services", path: "/services" },
  { name: "Careers", href: "https://partner.door2fy.in/" },
  { name: "Blog & Insights", path: "/blogs" },
  { name: "Contact Us", path: "/contact-us" },
];

const customerLinks = [
  { name: "How It Works", path: "/how-it-works" },
  { name: "Refundable Policy", path: "/refund-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Anti-Discrimination Policy", path: "/anti-discrimination-policy" },
  { name: "Help & Support", path: "/faqs" },
];

const partnerLinks = [
  { name: "Register as a Professional", href: "https://partner.door2fy.in" },
  { name: "Partner Guidelines", path: "/partner-guidelines" },
  { name: "Partner Benefits", path: "/partner-benefits" },
  { name: "Partner Support", path: "/partner-support" },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gradient-to-b from-[#F4F8FF] via-[#EBF3FF] to-[#F8FAFC] pt-8 sm:pt-10 pb-24 md:pb-8 px-4 sm:px-6 md:px-8 text-slate-700 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= 1. CITIES BANNER CARD ================= */}
        <div className="bg-gradient-to-br from-[#EEF5FF] via-[#EBF3FE] to-[#F5F8FF] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_4px_25px_rgba(2, 141, 205,0.04)] text-center relative overflow-hidden mb-8 sm:mb-12">
          {/* Decorative background light glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#028dcd]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            We Are Live In <span className="text-[#028dcd]">50 Cities</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 mb-4 sm:mb-6">
            Delivering services across India — and growing every day!
          </p>

          {/* City Chips Grid */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-6xl mx-auto">
            {citiesList.map((city, idx) => (
              <Link
                key={idx}
                to={`/best-laptop-service-in/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-white/90 hover:bg-white text-slate-800 font-semibold text-[11px] sm:text-xs rounded-full border border-blue-100/90 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#028dcd]/50 hover:text-[#028dcd] hover:shadow-md transition-all duration-200 group"
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#028dcd] group-hover:scale-110 transition-transform" />
                <span>{city}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= 2. MAIN FOOTER CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative pb-6 md:pb-10">
          
          {/* --- LEFT COLUMN: Brand & Description --- */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full relative text-center md:text-left items-center md:items-start">
            <div>
              {/* Brand Logo */}
              <Link to="/" className="inline-flex items-center">
                <img src={Logo} alt="Door2fy" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
              </Link>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                India's Trusted Home Services Platform
              </p>

              {/* Tagline */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 sm:mt-4 max-w-sm">
                From home to office, we bring verified professionals at your doorstep. Quality, trust and convenience — only with Door2fy.
              </p>
            </div>

            {/* Indian Monument Skyline Background Illustration */}
            <div className="mt-6 sm:mt-8 pt-2 sm:pt-4 pointer-events-none opacity-40 w-full">
              <svg viewBox="0 0 500 120" className="w-full h-16 sm:h-20 md:h-24 text-[#028dcd]" fill="currentColor">
                {/* Gateway / India Gate */}
                <path d="M 20 120 L 20 50 L 30 50 L 30 30 L 40 20 L 70 20 L 80 30 L 80 50 L 90 50 L 90 120 L 75 120 L 75 80 C 75 65 35 65 35 80 L 35 120 Z" />
                {/* Taj Mahal Dome */}
                <path d="M 120 120 L 120 70 L 130 70 L 130 50 L 140 50 Q 155 10 170 50 L 180 50 L 180 70 L 190 70 L 190 120 L 175 120 L 175 90 C 175 75 135 75 135 90 L 135 120 Z" />
                <rect x="110" y="40" width="4" height="80" rx="1" />
                <rect x="196" y="40" width="4" height="80" rx="1" />
                {/* Hawa Mahal Arch Windows */}
                <path d="M 230 120 L 230 40 L 245 25 L 260 40 L 275 25 L 290 40 L 290 120 Z" />
                <circle cx="260" cy="55" r="5" />
                <circle cx="260" cy="75" r="5" />
                <circle cx="260" cy="95" r="5" />
                {/* Qutub Minar */}
                <path d="M 330 120 L 340 15 L 350 15 L 360 120 Z" />
                <line x1="335" y1="40" x2="355" y2="40" stroke="white" strokeWidth="2" />
                <line x1="332" y1="70" x2="358" y2="70" stroke="white" strokeWidth="2" />
                {/* Temple Shikhara */}
                <path d="M 400 120 L 410 40 Q 425 10 440 40 L 450 120 Z" />
                <line x1="425" y1="10" x2="425" y2="0" stroke="currentColor" strokeWidth="2" />
                <circle cx="425" cy="0" r="2" />
              </svg>
            </div>
          </div>

          {/* --- MIDDLE COLUMNS: Navigation Links --- */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Column 1: Company */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="p-1.5 rounded-lg bg-[#028dcd]/10 text-[#028dcd] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Company</h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-xs font-medium">
                {companyLinks.map((item, idx) => (
                  <li key={idx}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-[#028dcd] hover:translate-x-1 transition-all duration-200 py-0.5 inline-block"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path!}
                        className="text-slate-600 hover:text-[#028dcd] hover:translate-x-1 transition-all duration-200 py-0.5 inline-block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: For Customers */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="p-1.5 rounded-lg bg-[#028dcd]/10 text-[#028dcd] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">For Customers</h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-xs font-medium">
                {customerLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-slate-600 hover:text-[#028dcd] hover:translate-x-1 transition-all duration-200 py-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: For Partners */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="p-1.5 rounded-lg bg-[#028dcd]/10 text-[#028dcd] shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">For Partners</h3>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 text-xs font-medium">
                {partnerLinks.map((item, idx) => (
                  <li key={idx}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-[#028dcd] hover:translate-x-1 transition-all duration-200 py-0.5 inline-block"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path!}
                        className="text-slate-600 hover:text-[#028dcd] hover:translate-x-1 transition-all duration-200 py-0.5 inline-block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>



        {/* ================= 4. BOTTOM COPYRIGHT & SOCIAL BAR ================= */}
        <div className="border-t border-blue-100/80 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 font-medium">
          {/* Left copyright notice */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left">
            <span>© 2025 Door2fy. All rights reserved.</span>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <span className="text-slate-600 font-semibold text-xs">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#028dcd] hover:border-[#028dcd]/40 hover:shadow-xs flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-pink-600 hover:border-pink-300 hover:shadow-xs flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#028dcd] hover:border-[#028dcd]/40 hover:shadow-xs flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:shadow-xs flex items-center justify-center transition-all"
                aria-label="X (Twitter)"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-300 hover:shadow-xs flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
