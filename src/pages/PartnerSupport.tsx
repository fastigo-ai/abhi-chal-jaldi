import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  Headphones,
  Phone,
  MessageSquare,
  Mail,
  Wrench,
  CreditCard,
  HelpCircle,
  Clock,
  Sparkles,
  Send,
  ShieldCheck,
} from "lucide-react";
import toast from "react-hot-toast";

export default function PartnerSupport() {
  const [formData, setFormData] = useState({
    partnerId: "",
    name: "",
    phone: "",
    city: "",
    category: "Technical & Parts Escalation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in your name, phone number, and query details.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Partner support request submitted! Our partner desk will contact you within 15 minutes.");
      setFormData({
        partnerId: "",
        name: "",
        phone: "",
        city: "",
        category: "Technical & Parts Escalation",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Partner Support & Help Desk | Door2fy"
        description="Dedicated 24/7 support portal for Door2fy registered laptop technician partners. Technical escalations, spare parts requests, and payout assistance."
        canonicalUrl="https://www.door2fy.in/partner-support"
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#F0FAFD] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#028dcd]/20 shadow-xs mb-6">
            <Headphones className="w-4 h-4 text-[#028dcd]" />
            <span className="text-xs font-bold text-[#028dcd] tracking-wide uppercase">
              Dedicated Partner Helpdesk
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-3xl mx-auto">
            Door2fy Partner <span className="text-[#028dcd]">Support Center</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Need urgent diagnostic advice, instant OEM spare parts dispatch, or payout resolution? Our dedicated technician desk is available 7 days a week.
          </p>
        </div>
      </section>

      {/* ================= 2. QUICK CONTACT CHANNELS ================= */}
      <section className="py-8 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Partner Priority Helpline</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">Instant connection to senior hardware engineers for on-site diagnostic guidance.</p>
            <a href="tel:+919217759006" className="text-sm font-extrabold text-[#028dcd] hover:underline">
              +91 92177 59006
            </a>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">WhatsApp Parts Desk</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">Check instant OEM stock availability for displays, batteries, logic boards, and SSDs.</p>
            <a href="https://wa.me/919217759006" target="_blank" rel="noreferrer" className="text-sm font-extrabold text-emerald-600 hover:underline">
              Chat on WhatsApp ↗
            </a>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-100 shadow-sm text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Payouts & Commission Desk</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-4">Assistance for daily UPI settlements, incentive bonuses, and account adjustments.</p>
            <a href="mailto:partner@door2fy.in" className="text-sm font-extrabold text-blue-600 hover:underline">
              partner@door2fy.in
            </a>
          </div>
        </div>
      </section>

      {/* ================= 3. PARTNER TICKET FORM ================= */}
      <section className="py-12 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm text-left">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#028dcd] uppercase">Submit a Support Ticket</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              How Can Our Partner Team Assist You Today?
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Partner ID / Registration No. (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. D2F-TECH-1042"
                  value={formData.partnerId}
                  onChange={(e) => setFormData({ ...formData, partnerId: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#028dcd]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#028dcd]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Registered Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#028dcd]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Support Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#028dcd] bg-white"
                >
                  <option>Technical & Parts Escalation</option>
                  <option>Payout & Wallet Discrepancy</option>
                  <option>Customer Address / Navigation Issue</option>
                  <option>Account Status & Document Update</option>
                  <option>New Toolkit / Uniform Request</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Describe Your Issue or Request *</label>
              <textarea
                rows={4}
                required
                placeholder="Provide booking ID (if applicable), customer laptop model, or description of the issue..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#028dcd]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#028dcd] text-white font-bold text-sm hover:bg-[#039ecc] shadow-lg shadow-[#028dcd]/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Submitting Ticket..." : "Submit Partner Ticket"}</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
