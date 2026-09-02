import React, { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare,
  User,
  CheckCircle2,
  Headphones,
  ArrowRight,
  Laptop,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Laptop Repair",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "32aa49c6-f810-4143-9758-0035385c4ccf");
    formDataToSend.append("subject", `New Contact Inquiry: ${formData.category} - ${formData.name}`);
    formDataToSend.append("from_name", "Door2fy Contact Form");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone || "Not provided");
    formDataToSend.append("category", formData.category);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Your message has been sent successfully. We'll call you shortly. ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          category: "Laptop Repair",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try calling us directly.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection or contact us via phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Contact Door2fy | 10-Minute Doorstep Laptop Support & Repair"
        description="Need instant laptop repair or IT support? Contact Door2fy for 10-30 minute doorstep assistance across Delhi NCR and India. Call +91 9217759006."
        canonicalUrl="https://www.door2fy.in/contact-us"
        keywords="contact door2fy, laptop repair contact, IT support helpline, book laptop technician, Door2fy customer care number"
      />

      {/* Dynamic Ambient Background Glow */}
      <div className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#04B6EA]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Grid: Left Details & Right Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Contact Channels & Info (7/12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-7 text-left space-y-8"
            >
              <div>
                {/* Header Tag / Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-xs font-extrabold mb-4 shadow-xs border border-[#04B6EA]/20">
                  <Sparkles className="w-3.5 h-3.5 fill-[#04B6EA]" />
                  <span>24/7 Doorstep Support & Consultation</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-slate-900 tracking-tight leading-[1.12]">
                  Get in touch with <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04B6EA] to-[#0284c7]">
                    Door2fy Experts
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mt-4 max-w-xl">
                  Have a laptop issue, need quick hardware diagnostics, or require corporate IT support? 
                  Our certified engineers arrive at your doorstep in <span className="text-[#04B6EA] font-bold">10–30 minutes</span>.
                </p>
              </div>

              {/* Interactive Contact Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Phone Call Card */}
                <a
                  href="tel:+919217759006"
                  className="group p-5 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] hover:border-[#04B6EA]/60 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_rgba(4,182,234,0.12)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center group-hover:bg-[#04B6EA] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#04B6EA] bg-[#E1F7F9]/80 px-2.5 py-1 rounded-full">
                      Instant Call
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                      Direct Support Line
                    </h3>
                    <p className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#04B6EA] transition-colors">
                      +91 9217759006
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Average response time &lt; 2 mins
                    </p>
                  </div>
                </a>

                {/* WhatsApp Chat Card */}
                <a
                  href="https://wa.me/919217759006?text=Hi%20Door2fy%20Team%2C%20I%20need%20tech%20support%20for%20my%20laptop."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] hover:border-[#04B6EA]/60 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_rgba(4,182,234,0.12)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-xs">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Live Chat
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                      WhatsApp Helpdesk
                    </h3>
                    <p className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                      Chat on WhatsApp
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Send photos or videos of your issue
                    </p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:support@door2fy.in"
                  className="group p-5 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] hover:border-[#04B6EA]/60 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_rgba(4,182,234,0.12)] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center group-hover:bg-[#04B6EA] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#04B6EA] bg-[#E1F7F9]/80 px-2.5 py-1 rounded-full">
                      Official Email
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                      Customer Assistance
                    </h3>
                    <p className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#04B6EA] transition-colors">
                      support@Door2fy.in
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Replies within 30–60 minutes
                    </p>
                  </div>
                </a>

                {/* Working Hours & Coverage Card */}
                <div className="p-5 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open Now
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
                      Service Hours
                    </h3>
                    <p className="text-base sm:text-lg font-black text-slate-900">
                      8:00 AM – 10:00 PM
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Monday to Sunday (All 7 Days)
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Location Banner */}
              <div className="p-6 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#04B6EA] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#04B6EA]/25">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    Primary Service Hub & Head Office
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                    New Delhi, Delhi NCR — On-demand doorstep coverage across 50+ major cities in India.
                  </p>
                </div>
              </div>

              {/* Trust Guarantees */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#04B6EA] shrink-0" />
                    <span className="text-xs font-bold">100% Data Privacy</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#04B6EA] shrink-0" />
                    <span className="text-xs font-bold">Verified Engineers</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#04B6EA] shrink-0" />
                    <span className="text-xs font-bold">Up to 90 Days Warranty</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Modern High-Conversion Form (5/12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              {/* Form Ambient Glow */}
              <div className="absolute -inset-4 bg-[#04B6EA]/15 rounded-[3.5rem] blur-2xl -z-10" />

              <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-7 sm:p-9 md:p-10 border border-[#E1F7F9] shadow-[0_25px_60px_rgba(4,182,234,0.12)] relative text-left">
                <div className="mb-7">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-[11px] font-extrabold mb-2">
                    <Headphones className="w-3.5 h-3.5" />
                    <span>Quick Callback Form</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
                    Fill out the form below and an engineer will reach out within minutes.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 ml-1">
                      Your Full Name <span className="text-[#04B6EA]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-2xl bg-[#F8FDFF] border-2 border-[#E1F7F9] focus:border-[#04B6EA] focus:bg-white text-slate-900 text-sm font-bold outline-none transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 ml-1">
                        Email Address <span className="text-[#04B6EA]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@gmail.com"
                          className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-2xl bg-[#F8FDFF] border-2 border-[#E1F7F9] focus:border-[#04B6EA] focus:bg-white text-slate-900 text-sm font-bold outline-none transition-all placeholder:text-slate-400 shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 ml-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-2xl bg-[#F8FDFF] border-2 border-[#E1F7F9] focus:border-[#04B6EA] focus:bg-white text-slate-900 text-sm font-bold outline-none transition-all placeholder:text-slate-400 shadow-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Interest Category */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 ml-1">
                      Service Requirement
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full h-12 sm:h-14 pl-11 pr-10 rounded-2xl bg-[#F8FDFF] border-2 border-[#E1F7F9] focus:border-[#04B6EA] focus:bg-white text-slate-900 text-sm font-bold outline-none transition-all appearance-none cursor-pointer shadow-xs"
                      >
                        <option value="Laptop Repair">Laptop Repair (General / Hardware)</option>
                        <option value="MacBook Support">Apple MacBook Support & Screen/Battery</option>
                        <option value="Speed & OS Optimization">Slow Laptop / OS & Speed Optimization</option>
                        <option value="Screen & Keyboard Replacement">Screen / Keyboard / Hinge Replacement</option>
                        <option value="Data Recovery & Storage">Data Recovery & SSD Upgrade</option>
                        <option value="Corporate / AMC Support">Corporate IT Support & Office AMC</option>
                        <option value="Other Inquiries">Other Inquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 ml-1">
                      Device Details / Problem Description <span className="text-[#04B6EA]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us your device brand, model, and what issue you are facing..."
                        className="w-full p-4 rounded-2xl bg-[#F8FDFF] border-2 border-[#E1F7F9] focus:border-[#04B6EA] focus:bg-white text-slate-900 text-sm font-bold outline-none transition-all placeholder:text-slate-400 resize-none shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-14 sm:h-16 rounded-2xl bg-[#04B6EA] hover:bg-[#039ecc] text-white font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#04B6EA]/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <span>Sending your message...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-[11px] text-slate-400 font-medium pt-1">
                    🔒 Your information is 100% confidential. No spam guaranteed.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: 3 Quick Action Pillars */}
      <section className="py-12 md:py-16 bg-[#F8FDFF] border-t border-[#E1F7F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E1F7F9] shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 fill-[#04B6EA]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Urgent Doorstep Booking
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                Facing an urgent breakdown right before a meeting? Book a priority technician for immediate dispatch.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#04B6EA] hover:text-[#0284c7] transition-colors"
              >
                <span>Browse Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E1F7F9] shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#04B6EA]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Corporate & Bulk IT Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                Need AMC contracts, routine hardware preventive maintenance, or bulk laptop setups for your team?
              </p>
              <Link
                to="/why-choose-us"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#04B6EA] hover:text-[#0284c7] transition-colors"
              >
                <span>Why Choose Door2fy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E1F7F9] shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#04B6EA] flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-[#04B6EA]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                Have questions regarding warranty, genuine parts, diagnostic charges, or service locations?
              </p>
              <Link
                to="/faqs"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#04B6EA] hover:text-[#0284c7] transition-colors"
              >
                <span>Read FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
