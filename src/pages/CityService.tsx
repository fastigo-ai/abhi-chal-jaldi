import React from "react";
import { useParams } from "react-router-dom";
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
  CheckCircle
} from "lucide-react";
import Banner from "../assets/WhatsApp Image 2025-10-16 at 3.58.29 PM.jpeg";
import support from "../assets/support-removebg-preview.png";
import MACBOOK from "../assets/mac-removebg-preview.png";
import install from "../assets/install-removebg-preview.png";
import { Helmet } from "react-helmet-async";
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

// Dynamic keywords for each city
const cityKeywords: Record<string, string> = {
  agra: "laptop repair Agra, laptop service Agra, computer repair Agra, best laptop service Agra, doorstep laptop repair Agra, laptop technician Agra",
  ahmedabad: "laptop repair Ahmedabad, laptop service Ahmedabad, computer repair Ahmedabad, best laptop service Ahmedabad, home laptop repair Ahmedabad, laptop technician Ahmedabad",
  aligarh: "laptop repair Aligarh, laptop service Aligarh, computer repair Aligarh, best laptop service Aligarh, laptop home service Aligarh, laptop technician Aligarh",
  amritsar: "laptop repair Amritsar, laptop service Amritsar, computer repair Amritsar, best laptop service Amritsar, doorstep laptop repair Amritsar, laptop technician Amritsar",
  bareilly: "laptop repair Bareilly, laptop service Bareilly, computer repair Bareilly, best laptop service Bareilly, laptop home service Bareilly, laptop technician Bareilly",
  bengaluru: "laptop repair Bengaluru, laptop service Bangalore, computer repair Bangalore, laptop technician Bengaluru, doorstep laptop repair Bangalore, laptop repair shop",
  bhagalpur: "best laptop service Bhagalpur, laptop repair Bhagalpur, laptop servicing Bhagalpur, laptop service center Bhagalpur, Door2fy Bhagalpur, laptop technician Bhagalpur, laptop cleaning Bhagalpur, laptop hardware repair Bhagalpur, laptop software repair Bhagalpur, laptop screen replacement Bhagalpur",
  bhopal: "best laptop service Bhopal, laptop repair Bhopal, laptop servicing Bhopal, laptop service center Bhopal, Door2fy Bhopal, laptop technician Bhopal, laptop cleaning Bhopal, laptop hardware repair Bhopal, laptop software repair Bhopal, laptop screen replacement Bhopal",
  bhubaneswar: "best laptop service Bhubaneswar, laptop repair Bhubaneswar, laptop servicing Bhubaneswar, laptop service center Bhubaneswar, Door2fy Bhubaneswar, laptop technician Bhubaneswar, laptop cleaning Bhubaneswar, laptop hardware repair Bhubaneswar, laptop software repair Bhubaneswar, laptop screen replacement Bhubaneswar",
  chandigarh: "best laptop service Chandigarh, laptop repair Chandigarh, laptop servicing Chandigarh, laptop service center Chandigarh, Door2fy Chandigarh, laptop technician Chandigarh, laptop cleaning Chandigarh, laptop hardware repair Chandigarh, laptop software repair Chandigarh, laptop screen replacement Chandigarh",
  cuttack: "best laptop service Cuttack, laptop repair Cuttack, laptop servicing Cuttack, laptop service center Cuttack, Door2fy Cuttack, laptop technician Cuttack, laptop cleaning Cuttack, laptop hardware repair Cuttack, laptop software repair Cuttack, laptop screen replacement Cuttack",
  dehradun: "best laptop service Dehradun, laptop repair Dehradun, laptop servicing Dehradun, laptop service center Dehradun, Door2fy Dehradun, laptop technician Dehradun, laptop cleaning Dehradun, laptop hardware repair Dehradun, laptop software repair Dehradun, laptop screen replacement Dehradun",
  delhi: "laptop repair Delhi, laptop service Delhi, computer repair Delhi, best laptop service near me, doorstep laptop repair Delhi, laptop technician Delhi",
  faridabad: "best laptop service Faridabad, laptop repair Faridabad, laptop servicing Faridabad, laptop service centre Faridabad, Door2fy Faridabad, laptop technician Faridabad, laptop cleaning Faridabad, laptop hardware repair Faridabad, laptop software repair Faridabad, laptop screen replacement Faridabad",
  GandhiNagar: "best laptop service Gandhi Nagar, laptop repair Gandhi Nagar, laptop servicing Gandhi Nagar, laptop service centre Gandhi Nagar, Door2fy Gandhi Nagar, laptop technician Gandhi Nagar, laptop cleaning Gandhi Nagar, laptop hardware repair Gandhi Nagar, laptop software repair Gandhi Nagar, laptop screen replacement Gandhi Nagar",
  Ghaziabad: "best laptop service Ghaziabad, laptop repair Ghaziabad, laptop servicing Ghaziabad, laptop service centre Ghaziabad, Door2fy Ghaziabad, laptop technician Ghaziabad, laptop cleaning Ghaziabad, laptop hardware repair Ghaziabad, laptop software repair Ghaziabad, laptop screen replacement Ghaziabad",
  Gorakhpur: "best laptop service Gorakhpur, laptop repair Gorakhpur, laptop servicing Gorakhpur, laptop service centre Gorakhpur, Door2fy Gorakhpur, laptop technician Gorakhpur, laptop cleaning Gorakhpur, laptop hardware repair Gorakhpur, laptop software repair Gorakhpur, laptop screen replacement Gorakhpur",
  Noida: "laptop repair Noida, best laptop service Noida, computer repair Noida, laptop home service Noida, laptop technician Noida, laptop repair shop near me",
  Gurugram: "best laptop service Gurugram, laptop repair Gurugram, laptop servicing Gurugram, laptop service centre Gurugram, Door2fy Gurugram, laptop technician Gurugram, laptop cleaning Gurugram, laptop hardware repair Gurugram, laptop software repair Gurugram, laptop screen replacement Gurugram",
  gwalior: "best laptop service Gwalior, laptop repair Gwalior, laptop servicing Gwalior, laptop service centre Gwalior, Door2fy Gwalior, laptop technician Gwalior, laptop cleaning Gwalior, laptop hardware repair Gwalior, laptop software repair Gwalior, laptop screen replacement Gwalior",
  haridwar: "best laptop service Haridwar, laptop repair Haridwar, laptop servicing Haridwar, laptop service centre Haridwar, Door2fy Haridwar, laptop technician Haridwar, laptop cleaning Haridwar, laptop hardware repair Haridwar, laptop software repair Haridwar, laptop screen replacement Haridwar",
  haldwani: "best laptop service Haldwani, laptop repair Haldwani, laptop servicing Haldwani, laptop service centre Haldwani, Door2fy Haldwani, laptop technician Haldwani, laptop cleaning Haldwani, laptop hardware repair Haldwani, laptop software repair Haldwani, laptop screen replacement Haldwani",
  hyderabad: "best laptop service Hyderabad, laptop repair Hyderabad, laptop servicing Hyderabad, laptop service centre Hyderabad, Door2fy Hyderabad, laptop technician Hyderabad, laptop cleaning Hyderabad, laptop hardware repair Hyderabad, laptop software repair Hyderabad, laptop screen replacement Hyderabad",
  indore: "best laptop service Indore, laptop repair Indore, laptop servicing Indore, laptop service centre Indore, Door2fy Indore, laptop technician Indore, laptop cleaning Indore, laptop hardware repair Indore, laptop software repair Indore, laptop screen replacement Indore",
  jabalpur: "best laptop service Jabalpur, laptop repair Jabalpur, laptop servicing Jabalpur, laptop service centre Jabalpur, Door2fy Jabalpur, laptop technician Jabalpur, laptop cleaning Jabalpur, laptop hardware repair Jabalpur, laptop software repair Jabalpur, laptop screen replacement Jabalpur",
  jaipur: "best laptop service Jaipur, laptop repair Jaipur, laptop servicing Jaipur, laptop service centre Jaipur, Door2fy Jaipur, laptop technician Jaipur, laptop cleaning Jaipur, laptop hardware repair Jaipur, laptop software repair Jaipur, laptop screen replacement Jaipur",
  jhansi: "best laptop service Jhansi, laptop repair Jhansi, laptop servicing Jhansi, laptop service centre Jhansi, Door2fy Jhansi, laptop technician Jhansi, laptop cleaning Jhansi, laptop hardware repair Jhansi, laptop software repair Jhansi, laptop screen replacement Jhansi",
  kanpur: "best laptop service Kanpur, laptop repair Kanpur, laptop servicing Kanpur, laptop service centre Kanpur, Door2fy Kanpur, laptop technician Kanpur, laptop cleaning Kanpur, laptop hardware repair Kanpur, laptop software repair Kanpur, laptop screen replacement Kanpur",
  lucknow: "laptop repair Lucknow, computer service Lucknow, laptop repair home service Lucknow, laptop maintenance Lucknow, laptop technician Lucknow, best laptop repair shop",
  ludhiana: "best laptop service Ludhiana, laptop repair Ludhiana, laptop servicing Ludhiana, laptop service centre Ludhiana, Door2fy Ludhiana, laptop technician Ludhiana, laptop cleaning Ludhiana, laptop hardware repair Ludhiana, laptop software repair Ludhiana, laptop screen replacement Ludhiana",
  meerut: "best laptop service Meerut, laptop repair Meerut, laptop servicing Meerut, laptop service centre Meerut, Door2fy Meerut, laptop technician Meerut, laptop cleaning Meerut, laptop hardware repair Meerut, laptop software repair Meerut, laptop screen replacement Meerut",
  mohali: "best laptop service Mohali, laptop repair Mohali, laptop servicing Mohali, laptop service centre Mohali, Door2fy Mohali, laptop technician Mohali, laptop cleaning Mohali, laptop hardware repair Mohali, laptop software repair Mohali, laptop screen replacement Mohali",
  moradabad: "best laptop service Moradabad, laptop repair Moradabad, laptop servicing Moradabad, laptop service centre Moradabad, Door2fy Moradabad, laptop technician Moradabad, laptop cleaning Moradabad, laptop hardware repair Moradabad, laptop software repair Moradabad, laptop screen replacement Moradabad",
  mumbai: "laptop repair Mumbai, laptop service Mumbai, computer repair Mumbai, best laptop technician Mumbai, laptop repair home service Mumbai, laptop repair near me",
  mysuru: "best laptop service Mysuru, laptop repair Mysuru, laptop servicing Mysuru, laptop service centre Mysuru, Door2fy Mysuru, laptop technician Mysuru, laptop cleaning Mysuru, laptop hardware repair Mysuru, laptop software repair Mysuru, laptop screen replacement Mysuru",
  nagpur: "best laptop service Nagpur, laptop repair Nagpur, laptop servicing Nagpur, laptop service centre Nagpur, Door2fy Nagpur, laptop technician Nagpur, laptop cleaning Nagpur, laptop hardware repair Nagpur, laptop software repair Nagpur, laptop screen replacement Nagpur",
  noida: "best laptop service Noida, laptop repair Noida, laptop servicing Noida, laptop service centre Noida, Door2fy Noida, laptop technician Noida, laptop cleaning Noida, laptop hardware repair Noida, laptop software repair Noida, laptop screen replacement Noida",
  patna: "best laptop service Patna, laptop repair Patna, laptop servicing Patna, laptop service centre Patna, Door2fy Patna, laptop technician Patna, laptop cleaning Patna, laptop hardware repair Patna, laptop software repair Patna, laptop screen replacement Patna",
  panchkula: "best laptop service Panchkula, laptop repair Panchkula, laptop servicing Panchkula, laptop service centre Panchkula, Door2fy Panchkula, laptop technician Panchkula, laptop cleaning Panchkula, laptop hardware repair Panchkula, laptop software repair Panchkula, laptop screen replacement Panchkula",
  prayagraj: "best laptop service Prayagraj, laptop repair Prayagraj, laptop servicing Prayagraj, laptop service centre Prayagraj, Door2fy Prayagraj, laptop technician Prayagraj, laptop cleaning Prayagraj, laptop hardware repair Prayagraj, laptop software repair Prayagraj, laptop screen replacement Prayagraj",
  pune: "laptop repair Pune, laptop service Pune, best computer repair Pune, laptop repair at home Pune, laptop maintenance Pune, laptop repair near me",
  raipur: "laptop repair Raipur, laptop service Raipur, computer repair Raipur, best laptop service Raipur, doorstep laptop repair Raipur, laptop technician Raipur",
  roorkee: "laptop repair Roorkee, laptop service Roorkee, computer repair Roorkee, best laptop service Roorkee, home laptop repair Roorkee, laptop technician Roorkee",
  rudrapur: "laptop repair Rudrapur, laptop service Rudrapur, computer repair Rudrapur, best laptop service Rudrapur, doorstep laptop repair Rudrapur, laptop technician Rudrapur",
  tirupati: "laptop repair Tirupati, laptop service Tirupati, computer repair Tirupati, best laptop service Tirupati, home laptop repair Tirupati, laptop technician Tirupati",
  ujjain: "laptop repair Ujjain, laptop service Ujjain, computer repair Ujjain, best laptop service Ujjain, laptop maintenance Ujjain, laptop technician Ujjain",
  varanasi: "laptop repair Varanasi, laptop service Varanasi, computer repair Varanasi, best laptop service Varanasi, doorstep laptop repair Varanasi, laptop technician Varanasi",
  vijayawada: "laptop repair Vijayawada, laptop service Vijayawada, computer repair Vijayawada, best laptop service Vijayawada, laptop home repair Vijayawada, laptop technician Vijayawada",
  zirakpur: "laptop repair Zirakpur, laptop service Zirakpur, computer repair Zirakpur, best laptop service Zirakpur, doorstep laptop repair Zirakpur, laptop technician Zirakpur",
  NewDelhi: "laptop repair New Delhi, laptop service New Delhi, computer repair New Delhi, best laptop service New Delhi, doorstep laptop repair New Delhi, laptop technician New Delhi"
};

export default function CityService() {
  const { city } = useParams<{ city: string }>();
  const formattedCity = formatCityName(city);

  if (!city) {
    return (
      <div className="font-sans bg-slate-50 min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          City not specified in URL
        </h2>
      </div>
    );
  }

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Dynamic SEO */}
      <Helmet>
        <title>Laptop Repair & IT Services in {formattedCity} | Door2fy</title>
        <meta
          name="description"
          content={`Expert laptop repair, IT support, MacBook servicing, and hardware installation in ${formattedCity}. Doorstep service available in 10 minutes.`}
        />
        <meta
          name="keywords"
          content={cityKeywords[city.toLowerCase()] || "laptop repair, computer repair, IT support"}
        />
        <link rel="canonical" href={`https://www.door2fy.in/best-laptop-service-in/${city.toLowerCase()}`} />
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10" />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#53BED1]/10 text-[#53BED1] text-sm font-semibold mb-6">
              <Star size={16} fill="currentColor" />
              Top Rated in {formattedCity}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              Reliable Laptop Repair in <span className="text-[#53BED1]">{formattedCity}</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
              Experience the fastest doorstep IT support. We reach you in just <span className="font-bold text-slate-900">10 minutes</span> to fix your MacBook, Laptop, or Desktop.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#53BED1] hover:bg-[#42a9bc] text-white rounded-full px-8 h-14 text-lg">
                  Download App <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <div className="flex items-center gap-2 text-slate-500 font-medium px-4">
                <CheckCircle2 className="text-green-500" />
                Verified Engineers
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#53BED1]/5 rounded-3xl -rotate-3 -z-10" />
            <img
              src={Banner}
              alt="Professional Engineer"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Features/Stats Row */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "10 Min Response", sub: "Fastest Service" },
              { icon: Shield, label: "30-Day Warranty", sub: "Secure Repairs" },
              { icon: Star, label: "4.8/5 Rating", sub: "Happy Customers" },
              { icon: Settings, label: "All Brands", sub: "Expert Support" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="h-8 w-8 text-[#53BED1] mb-3" />
                <div className="font-bold text-slate-900">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. Services Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Specialized Services</h2>
            <p className="text-slate-600 text-lg">Professional solutions for all your technical needs in {formattedCity}</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                title: "MacBook Support", 
                img: MACBOOK, 
                desc: "Expert on-site and remote support for all macOS issues, hardware repairs, and optimizations." 
              },
              { 
                title: "Hardware Installation", 
                img: install, 
                desc: "RAM & SSD upgrades, screen replacements, and professional peripherals setup at your home." 
              },
              { 
                title: "Quick Support", 
                img: support, 
                desc: "Facing sudden crashes or slow performance? Our engineers reach you within 10 minutes." 
              },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="p-8 h-full bg-white border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] group">
                  <div className="mb-6 bg-slate-50 rounded-2xl p-4 inline-block group-hover:scale-110 transition-transform duration-300">
                    <img src={service.img} alt={service.title} className="w-20 h-20 object-contain" loading="lazy" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-[2px] bg-[#53BED1]/20 -z-10" />
            
            {[
              { icon: Smartphone, title: "Book Slot", desc: "Select your service and preferred time on the app." },
              { icon: Settings, title: "Engineer Assigned", desc: "Our best-rated local technician is matched to you." },
              { icon: MapPin, title: "Doorstep Service", desc: "The engineer reaches your location in 10 minutes." },
              { icon: CheckCircle, title: "Issue Resolved", desc: "Get your device fixed and pay after satisfaction." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#53BED1] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#53BED1]/30 text-2xl font-bold">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#53BED1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to fix your device?</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of happy customers in {formattedCity}. Get your laptop fixed at your doorstep today.
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#53BED1] hover:bg-[#42a9bc] text-white rounded-full px-12 h-16 text-xl font-bold">
                Get Started Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
