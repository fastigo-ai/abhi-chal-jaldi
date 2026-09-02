import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Clock, 
  Shield, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Smartphone, 
  MapPin, 
  CheckCircle,
  Laptop,
  Cpu,
  Zap,
  ChevronDown,
  Award,
  PenTool,
  BatteryCharging,
  HardDrive
} from "lucide-react";
import Banner from "../assets/WhatsApp Image 2025-10-16 at 3.58.29 PM.jpeg";
import support from "../assets/support-removebg-preview.png";
import MACBOOK from "../assets/mac-removebg-preview.png";
import install from "../assets/install-removebg-preview.png";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Capitalize first letter of each word in city
const formatCityName = (city: string | undefined): string => {
  if (!city) return "Unknown City";

  return decodeURIComponent(city)
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Popular localities by major cities for hyper-local relevance
const cityLocalities: Record<string, string[]> = {
  delhi: ["Nehru Place", "Connaught Place", "Dwarka", "Rohini", "Saket", "South Extension", "Janakpuri", "Lajpat Nagar", "Pitampura", "Vasant Kunj", "Laxmi Nagar", "Karol Bagh"],
  noida: ["Sector 62", "Sector 18", "Sector 137", "Sector 50", "Sector 76", "Greater Noida West", "Sector 15", "Sector 128"],
  gurugram: ["DLF Phase 1-5", "Cyber City", "Golf Course Road", "Sohna Road", "Sector 56", "Sector 14", "Palam Vihar"],
  bengaluru: ["Koramangala", "Indiranagar", "HSR Layout", "Whitefield", "Marathahalli", "Jayanagar", "Electronic City", "JP Nagar"],
  mumbai: ["Andheri", "Bandra", "Borivali", "Dadar", "Powai", "Goregaon", "Malad", "Thane", "Navi Mumbai"],
  pune: ["Kothrud", "Hinjawadi", "Viman Nagar", "Baner", "Wakad", "Hadapsar", "Aundh", "Kalyani Nagar"],
  nagpur: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Pratap Nagar", "Ramdaspeth", "Civil Lines", "Sadar", "Wardha Road"],
  hyderabad: ["Madhapur", "Gachibowli", "Hitec City", "Kukatpally", "Banjara Hills", "Jubilee Hills", "Secunderabad"],
  kolkata: ["Salt Lake", "New Town", "Park Street", "Ballygunge", "Dum Dum", "Garia", "Howrah"],
  jaipur: ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C-Scheme", "Raja Park", "Tonk Road"],
  lucknow: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Alambagh", "Mahanagar"]
};

// Dynamic keywords for each city
const cityKeywords: Record<string, string> = {
  agra: "doorstep laptop repair Agra, laptop repair Agra, computer repair Agra, best laptop service Agra, MacBook repair Agra, laptop technician Agra",
  ahmedabad: "doorstep laptop repair Ahmedabad, laptop repair Ahmedabad, computer repair Ahmedabad, best laptop service Ahmedabad, home laptop repair Ahmedabad, laptop technician Ahmedabad",
  aligarh: "doorstep laptop repair Aligarh, laptop repair Aligarh, computer repair Aligarh, best laptop service Aligarh, laptop home service Aligarh, laptop technician Aligarh",
  amritsar: "doorstep laptop repair Amritsar, laptop repair Amritsar, computer repair Amritsar, best laptop service Amritsar, doorstep laptop repair Amritsar, laptop technician Amritsar",
  bareilly: "doorstep laptop repair Bareilly, laptop repair Bareilly, computer repair Bareilly, best laptop service Bareilly, laptop home service Bareilly, laptop technician Bareilly",
  bengaluru: "doorstep laptop repair Bangalore, laptop repair Bengaluru, laptop service Bangalore, computer repair Bangalore, laptop technician Bengaluru, MacBook repair Bangalore",
  bhagalpur: "best laptop service Bhagalpur, laptop repair Bhagalpur, laptop servicing Bhagalpur, laptop service center Bhagalpur, Door2fy Bhagalpur, laptop technician Bhagalpur",
  bhopal: "best laptop service Bhopal, laptop repair Bhopal, laptop servicing Bhopal, laptop service center Bhopal, Door2fy Bhopal, laptop technician Bhopal",
  bhubaneswar: "best laptop service Bhubaneswar, laptop repair Bhubaneswar, laptop servicing Bhubaneswar, laptop service center Bhubaneswar, Door2fy Bhubaneswar",
  chandigarh: "best laptop service Chandigarh, laptop repair Chandigarh, laptop servicing Chandigarh, laptop service center Chandigarh, Door2fy Chandigarh",
  cuttack: "best laptop service Cuttack, laptop repair Cuttack, laptop servicing Cuttack, laptop service center Cuttack, Door2fy Cuttack",
  dehradun: "best laptop service Dehradun, laptop repair Dehradun, laptop servicing Dehradun, laptop service center Dehradun, Door2fy Dehradun",
  delhi: "doorstep laptop repair Delhi, laptop repair Delhi, MacBook repair Delhi, computer repair Delhi, laptop repair near me, best laptop service in Delhi, doorstep computer technician Delhi",
  faridabad: "doorstep laptop repair Faridabad, best laptop service Faridabad, laptop repair Faridabad, laptop servicing Faridabad, Door2fy Faridabad",
  gandhinagar: "best laptop service Gandhi Nagar, laptop repair Gandhi Nagar, laptop servicing Gandhi Nagar, Door2fy Gandhi Nagar",
  ghaziabad: "doorstep laptop repair Ghaziabad, best laptop service Ghaziabad, laptop repair Ghaziabad, laptop servicing Ghaziabad, Door2fy Ghaziabad",
  gorakhpur: "best laptop service Gorakhpur, laptop repair Gorakhpur, laptop servicing Gorakhpur, Door2fy Gorakhpur",
  noida: "doorstep laptop repair Noida, laptop repair Noida, best laptop service Noida, computer repair Noida, laptop home service Noida, laptop technician Noida",
  gurugram: "doorstep laptop repair Gurugram, best laptop service Gurugram, laptop repair Gurgaon, laptop servicing Gurgaon, Door2fy Gurgaon",
  gwalior: "best laptop service Gwalior, laptop repair Gwalior, laptop servicing Gwalior, Door2fy Gwalior",
  haridwar: "best laptop service Haridwar, laptop repair Haridwar, laptop servicing Haridwar, Door2fy Haridwar",
  haldwani: "best laptop service Haldwani, laptop repair Haldwani, laptop servicing Haldwani, Door2fy Haldwani",
  hyderabad: "doorstep laptop repair Hyderabad, best laptop service Hyderabad, laptop repair Hyderabad, laptop servicing Hyderabad, Door2fy Hyderabad",
  indore: "doorstep laptop repair Indore, best laptop service Indore, laptop repair Indore, laptop servicing Indore, Door2fy Indore",
  jabalpur: "best laptop service Jabalpur, laptop repair Jabalpur, laptop servicing Jabalpur, Door2fy Jabalpur",
  jaipur: "doorstep laptop repair Jaipur, best laptop service Jaipur, laptop repair Jaipur, laptop servicing Jaipur, Door2fy Jaipur",
  jhansi: "best laptop service Jhansi, laptop repair Jhansi, laptop servicing Jhansi, Door2fy Jhansi",
  kanpur: "doorstep laptop repair Kanpur, best laptop service Kanpur, laptop repair Kanpur, laptop servicing Kanpur, Door2fy Kanpur",
  lucknow: "doorstep laptop repair Lucknow, laptop repair Lucknow, computer service Lucknow, laptop repair home service Lucknow, laptop technician Lucknow",
  ludhiana: "best laptop service Ludhiana, laptop repair Ludhiana, laptop servicing Ludhiana, Door2fy Ludhiana",
  meerut: "best laptop service Meerut, laptop repair Meerut, laptop servicing Meerut, Door2fy Meerut",
  mohali: "best laptop service Mohali, laptop repair Mohali, laptop servicing Mohali, Door2fy Mohali",
  moradabad: "best laptop service Moradabad, laptop repair Moradabad, laptop servicing Moradabad, Door2fy Moradabad",
  mumbai: "doorstep laptop repair Mumbai, laptop repair Mumbai, laptop service Mumbai, computer repair Mumbai, best laptop technician Mumbai",
  mysuru: "best laptop service Mysuru, laptop repair Mysuru, laptop servicing Mysuru, Door2fy Mysuru",
  nagpur: "doorstep laptop repair Nagpur, best laptop service Nagpur, laptop repair Nagpur, laptop servicing Nagpur, Door2fy Nagpur",
  patna: "doorstep laptop repair Patna, best laptop service Patna, laptop repair Patna, laptop servicing Patna, Door2fy Patna",
  panchkula: "best laptop service Panchkula, laptop repair Panchkula, laptop servicing Panchkula, Door2fy Panchkula",
  prayagraj: "best laptop service Prayagraj, laptop repair Prayagraj, laptop servicing Prayagraj, Door2fy Prayagraj",
  pune: "doorstep laptop repair Pune, laptop repair Pune, laptop service Pune, best computer repair Pune, laptop repair at home Pune",
  raipur: "doorstep laptop repair Raipur, laptop repair Raipur, laptop service Raipur, computer repair Raipur, best laptop service Raipur",
  roorkee: "best laptop service Roorkee, laptop repair Roorkee, laptop service Roorkee, home laptop repair Roorkee",
  rudrapur: "best laptop service Rudrapur, laptop repair Rudrapur, laptop service Rudrapur, doorstep laptop repair Rudrapur",
  tirupati: "best laptop service Tirupati, laptop repair Tirupati, laptop service Tirupati, home laptop repair Tirupati",
  ujjain: "best laptop service Ujjain, laptop repair Ujjain, laptop service Ujjain, laptop maintenance Ujjain",
  varanasi: "doorstep laptop repair Varanasi, laptop repair Varanasi, laptop service Varanasi, computer repair Varanasi",
  vijayawada: "best laptop service Vijayawada, laptop repair Vijayawada, laptop service Vijayawada, laptop home repair Vijayawada",
  zirakpur: "best laptop service Zirakpur, laptop repair Zirakpur, laptop service Zirakpur, doorstep laptop repair Zirakpur",
  newdelhi: "doorstep laptop repair New Delhi, laptop repair New Delhi, laptop service New Delhi, computer repair New Delhi, best laptop service New Delhi"
};

export default function CityService() {
  const { city } = useParams<{ city: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!city) {
    return (
      <div className="font-sans bg-slate-50 min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          City not specified in URL
        </h2>
      </div>
    );
  }

  const normalizedCityKey = city.toLowerCase().replace(/[^a-z0-9]/g, "");
  const formattedCity = formatCityName(city);
  const localities = cityLocalities[normalizedCityKey] || [
    "Central Area", "Tech Hubs", "Commercial Districts", "Residential Sectors", "Suburbs"
  ];

  const cityFaqs = [
    {
      q: `How quickly can a Door2fy technician arrive at my location in ${formattedCity}?`,
      a: `Our background-verified engineers reach your doorstep across ${formattedCity} in as fast as 10 to 30 minutes after you place your booking via our mobile app or web portal.`
    },
    {
      q: `What types of laptop and MacBook issues do you fix in ${formattedCity}?`,
      a: `We repair all major hardware and software issues on-site in ${formattedCity}, including cracked screen replacement, battery failure, liquid damage repair, motherboard chip-level troubleshooting, SSD/RAM upgrades, OS crashes, slow boot, and keyboard/trackpad fixes.`
    },
    {
      q: `Are the spare parts used for laptop repair in ${formattedCity} genuine?`,
      a: `Yes, 100%. We only use certified OEM genuine spare parts backed with up to 90 days service and replacement warranty.`
    },
    {
      q: `Which laptop brands do you repair in ${formattedCity}?`,
      a: `We provide certified doorstep service for Apple MacBook (Air/Pro, M1/M2/M3), Dell (XPS, Inspiron, Alienware), HP (Pavilion, Spectre, Envy), Lenovo (ThinkPad, IdeaPad, Legion), ASUS (ROG, ZenBook), Acer, MSI, and Samsung laptops.`
    },
    {
      q: `What are the diagnostic charges in ${formattedCity} if I decide not to proceed with the repair?`,
      a: `We charge a minimal upfront inspection fee of ₹199 for doorstep diagnosis in ${formattedCity}. If you proceed with the suggested repair, the diagnostic fee is completely waived off!`
    }
  ];

  // Schema.org Structured Data
  const citySchema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://www.door2fy.in/best-laptop-service-in/${city.toLowerCase()}#business`,
      "name": `Door2fy - Doorstep Laptop Repair in ${formattedCity}`,
      "url": `https://www.door2fy.in/best-laptop-service-in/${city.toLowerCase()}`,
      "logo": "https://www.door2fy.in/door2fy-icon.jpg",
      "image": "https://www.door2fy.in/og-image.jpg",
      "description": `Fast 10-30 minute doorstep laptop repair, MacBook servicing, PC troubleshooting & hardware upgrade in ${formattedCity} by certified engineers. Genuine spare parts & 90-day warranty.`,
      "telephone": "+91-9217759006",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedCity,
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "City",
        "name": formattedCity
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
        "reviewCount": "2480",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Doorstep Laptop Repair & Service in ${formattedCity}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Door2fy"
      },
      "areaServed": {
        "@type": "City",
        "name": formattedCity
      },
      "description": `Professional on-site laptop repair, screen replacement, battery fix, and macOS/Windows troubleshooting in ${formattedCity}.`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cityFaqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.door2fy.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": `Laptop Repair in ${formattedCity}`,
          "item": `https://www.door2fy.in/best-laptop-service-in/${city.toLowerCase()}`
        }
      ]
    }
  ];

  // Common repair issues grid
  const repairIssues = [
    { title: "Screen & Display Replacement", desc: "Cracked screen, flickering lines, blackout display, or dead pixels fixed with 100% original OEM panels.", icon: Laptop },
    { title: "Battery & Charging Port Fix", desc: "Fast battery drainage, laptop not charging, or loose DC jack replaced with genuine high-capacity batteries.", icon: BatteryCharging },
    { title: "Motherboard & Chip-Level Repair", desc: "No power, blue screen (BSOD), GPU failure, and IC short-circuits repaired by certified micro-soldering engineers.", icon: Cpu },
    { title: "SSD & RAM Speed Upgrade", desc: "Speed up slow laptops by 10x with blazing-fast NVMe SSDs and memory upgrades completed in 15 minutes.", icon: HardDrive },
    { title: "Liquid & Water Damage Care", desc: "Ultrasonic board cleaning, corrosion reversal, and component-level drying for accidental spills.", icon: PenTool },
    { title: "Overheating & Fan Cleaning", desc: "Laptop shutting down during use? Deep fan cleaning, heatsink de-dusting, and Arctic MX thermal paste reapplication.", icon: Zap },
  ];

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Dynamic SEO Meta & Canonical */}
      <SEOHead
        title={`Doorstep Laptop Repair in ${formattedCity} | MacBook & PC Service - Door2fy`}
        description={`Need quick laptop repair in ${formattedCity}? Door2fy certified engineers arrive at your doorstep in 10-30 mins. Genuine parts, 90-day warranty, 5-min diagnosis.`}
        canonicalUrl={`https://www.door2fy.in/best-laptop-service-in/${city.toLowerCase()}`}
        keywords={cityKeywords[normalizedCityKey] || `laptop repair ${formattedCity}, doorstep laptop repair ${formattedCity}, computer service ${formattedCity}, MacBook repair ${formattedCity}`}
        schema={citySchema}
      />

      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#F0FAFD] to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#04B6EA]/30 text-[#04B6EA] text-xs font-bold shadow-xs">
              <Star size={14} className="fill-[#04B6EA]" />
              <span>#1 Rated Doorstep Laptop Care in {formattedCity}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Doorstep Laptop Repair & Service in <span className="text-[#04B6EA]">{formattedCity}</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Get instant, certified tech support at your home or office in {formattedCity}. Our background-verified engineers arrive in <span className="font-bold text-slate-900">10–30 minutes</span> with genuine parts and a 90-day warranty.
            </p>

            {/* Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>10-30 Min Arrival</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs text-xs font-semibold text-slate-800">
                <Shield className="w-4 h-4 text-[#04B6EA] shrink-0" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-100 shadow-xs text-xs font-semibold text-slate-800 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>100% Genuine Parts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#04B6EA] hover:bg-[#039ecc] text-white rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-[#04B6EA]/25 transition-all hover:scale-105">
                  Book Doorstep Technician <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/contact-us">
                <Button variant="outline" size="lg" className="rounded-full px-7 h-14 text-base font-bold border-slate-200 hover:bg-slate-50">
                  Request Callback
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
              <img
                src={Banner}
                alt={`Doorstep Laptop Repair Technician in ${formattedCity}`}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 select-none"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#04B6EA]">Service Guarantee</p>
                  <p className="text-xs font-extrabold text-slate-900">Diagnosis in 5–10 Mins</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                  ✓ Active in {formattedCity}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, label: "10-30 Mins", sub: `Rapid Doorstep Response in ${formattedCity}` },
              { icon: Shield, label: "Up to 90 Days", sub: "Comprehensive Service Warranty" },
              { icon: Star, label: "4.9 / 5.0", sub: "Over 42,700+ Satisfied Users" },
              { icon: Settings, label: "All Brands", sub: "MacBook, Dell, HP, Lenovo & ASUS" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center mb-2.5 font-bold">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="font-extrabold text-lg sm:text-xl text-slate-900">{stat.label}</div>
                <div className="text-xs text-slate-500 font-medium">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Laptop Issues We Fix */}
      <section className="py-16 md:py-24 bg-[#F8FDFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mb-12">
            <span className="text-[#04B6EA] text-xs font-extrabold uppercase tracking-widest block mb-2">
              Common Laptop Problems Resolved
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Complete Hardware & Software Repair in {formattedCity}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Our technicians carry genuine toolkits and original replacement components to repair 95% of issues on the spot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairIssues.map((issue, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-left group">
                <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center mb-4 group-hover:bg-[#04B6EA] group-hover:text-white transition-colors">
                  <issue.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#04B6EA] transition-colors">{issue.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specialized Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Our Specialized IT & Device Care Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Tailored on-site support for students, working professionals, and business offices across {formattedCity}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Apple MacBook Support", 
                img: MACBOOK, 
                desc: "Specialized diagnostics for MacBook Air, MacBook Pro, and iMac. Logic board repair, battery swap, and macOS recovery." 
              },
              { 
                title: "Hardware Upgrade & Setup", 
                img: install, 
                desc: "High-speed RAM upgrades, NVMe SSD installations, Wi-Fi card fixes, thermal re-pasting, and office printer setup." 
              },
              { 
                title: "Emergency 10-Min Support", 
                img: support, 
                desc: "Sudden system freeze, Excel crash, boot loop, or virus infection? Our quick response team arrives in 10-30 minutes." 
              },
            ].map((service, i) => (
              <Card key={i} className="p-8 h-full bg-[#F8FDFF] border border-[#E1F7F9] shadow-xs hover:shadow-xl transition-all duration-300 rounded-[2.5rem] text-left group">
                <div className="mb-6 bg-white rounded-2xl p-4 inline-block shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <img src={service.img} alt={service.title} className="w-20 h-20 object-contain" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#04B6EA] transition-colors">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Localities Covered in this City */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#04B6EA]" />
            <h3 className="text-lg md:text-xl font-bold text-slate-900">
              Areas & Localities We Serve in {formattedCity}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            We provide fast 10–30 minute doorstep laptop and computer repair across all major localities in {formattedCity}:
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {localities.map((loc, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
                📍 {loc}
              </span>
            ))}
            <span className="px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-xs font-bold">
              + All Surrounding Sectors
            </span>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            How Door2fy Works in {formattedCity}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-14">
            Four simple steps to get your computer running like brand new without visiting a repair shop.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { icon: Smartphone, title: "1. Book via App/Web", desc: "Select your issue and enter your location in " + formattedCity + "." },
              { icon: Settings, title: "2. Nearest Tech Assigned", desc: "Our highest-rated verified engineer is matched to your request." },
              { icon: MapPin, title: "3. Doorstep Arrival", desc: "The engineer reaches your doorstep within 10–30 minutes." },
              { icon: CheckCircle, title: "4. Pay After Satisfaction", desc: "Test your repaired device and pay securely with warranty." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-14 h-14 rounded-2xl bg-[#04B6EA] text-white flex items-center justify-center mb-5 shadow-lg shadow-[#04B6EA]/30 font-bold text-xl">
                  {i + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. City FAQs Accordion */}
      <section className="py-16 md:py-20 bg-[#F8FDFF] border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <div className="text-center mb-12">
            <span className="text-[#04B6EA] text-xs font-bold uppercase tracking-widest block mb-2">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions in {formattedCity}
            </h2>
          </div>

          <div className="space-y-4">
            {cityFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-100 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#04B6EA] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transform transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-[#04B6EA]" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#04B6EA]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 space-y-6">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#04B6EA] text-xs font-bold tracking-wider uppercase inline-block">
              Fast Doorstep Service
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to fix your laptop in {formattedCity}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Join thousands of satisfied customers in {formattedCity}. Get genuine parts, expert engineers, and doorstep diagnosis in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#04B6EA] hover:bg-[#039ecc] text-white rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-[#04B6EA]/30 transition-all hover:scale-105">
                  Download Door2fy App
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
