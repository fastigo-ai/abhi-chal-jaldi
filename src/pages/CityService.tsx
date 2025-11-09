import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../assets/WhatsApp Image 2025-10-16 at 3.58.29 PM.jpeg";
import support from "../assets/support-removebg-preview.png";
import MACBOOK from "../assets/mac-removebg-preview.png";
import install from "../assets/install-removebg-preview.png";
import { Helmet } from "react-helmet-async";

// Capitalize first letter of each word in city
const formatCityName = (city: string | undefined): string => {
  if (!city) return "Unknown City";

  return decodeURIComponent(city)
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
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
      <div className="font-sans bg-[#e9f6f8] min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          City not specified in URL
        </h2>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen">
      {/* Dynamic SEO */}
      <Helmet>
        <title>Laptop Repair & IT Services in {formattedCity}</title>
        <meta
          name="description"
          content={`Expert laptop repair, IT support, MacBook servicing, and hardware installation in ${formattedCity}. Doorstep service available.`}
        />
        <meta
          name="keywords"
          content={cityKeywords[city.toLowerCase()] || "laptop repair, computer repair, IT support"}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col bg-[#EFF6FF] md:flex-row justify-between items-center px-8 md:px-20 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get expert IT support and device repair at your doorstep in {formattedCity}
          </h1>
          <p className="text-gray-700 mb-6 text-xl md:text-2xl max-w-3xl mx-auto">
            Quick support for MacBooks, desktops, hardware installation & more.
          </p>
        </div>
        <img
          src={Banner}
          alt="Engineer with Laptop"
          className="h-64 md:h-80 mt-8 md:mt-0 object-contain"
          loading="lazy"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 py-10">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={MACBOOK}
            alt="MacBook Support"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">MacBook Support</h3>
          <p className="text-gray-600">
            On-site or remote support for macOS issues & repairs
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={install}
            alt="Hardware Installation"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Hardware Installation</h3>
          <p className="text-gray-600">
            RAM, SSD upgrades, screen replacements, peripherals
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <img
            src={support}
            alt="Quick Support"
            className="w-24 mx-auto mb-4 h-24"
            loading="lazy"
          />
          <h3 className="font-bold text-lg mb-2">Quick Support</h3>
          <p className="text-gray-600">Instant Quick Support within 10 minutes</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center py-10 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Book slot"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Book your slot</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="Engineer assigned"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Engineer gets assigned</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Service at doorstep"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Service at your doorstep</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="Issue resolved"
              className="w-12 mx-auto mb-2"
              loading="lazy"
            />
            <p className="font-medium">Issue resolved</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-10 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
        <ul className="space-y-3 text-gray-700 mb-8 list-inside list-disc">
          <li>Fast & convenient DoorStep Service</li>
          <li>Verified engineers</li>
          <li>Trusted by local customers</li>
          <li>Available 24/7</li>
        </ul>
      </section>
    </div>
  );
}
