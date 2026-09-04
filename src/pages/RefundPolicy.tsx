import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Banknote,
  FileCheck,
} from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Refund & Cancellation Policy | Door2fy"
        description="Learn about Door2fy's transparent refund, cancellation, and warranty policy. 100% money-back guarantee if your laptop issue is not resolved."
        canonicalUrl="https://www.door2fy.in/refund-policy"
      />

      {/* ================= 1. HERO HEADER ================= */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-4">
          <ShieldCheck className="w-4 h-4 text-[#028dcd]" />
          <span>100% Service Protection Guarantee</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Refund & Cancellation Policy
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">
          Effective Date: October 1, 2025 · Last Updated: 2026
        </p>

        <p className="text-slate-600 text-base leading-relaxed mt-4">
          At <strong className="text-slate-900">Door2fy</strong>, customer satisfaction, honest diagnostics, and genuine spare parts are our topmost priorities. We believe in 100% pricing transparency and zero-risk service guarantees.
        </p>
      </div>

      {/* ================= 2. HIGHLIGHT CARDS ================= */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <RotateCcw className="w-6 h-6 text-[#028dcd] mb-2" />
            <h2 className="font-bold text-slate-900 text-base">No Fix, No Fee</h2>
            <p className="text-slate-500 text-xs mt-1">If our certified technician cannot resolve your device issue, you pay ₹0 service fee.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <Clock className="w-6 h-6 text-emerald-500 mb-2" />
            <h2 className="font-bold text-slate-900 text-base">Up to 90-Day Warranty</h2>
            <p className="text-slate-500 text-xs mt-1">Free replacement or re-service on all genuine OEM parts installed by our team.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-xs">
            <Banknote className="w-6 h-6 text-[#028dcd] mb-2" />
            <h2 className="font-bold text-slate-900 text-base">Quick 3–5 Day Refund</h2>
            <p className="text-slate-500 text-xs mt-1">Approved refunds are credited directly to your original payment method within 3–5 banking days.</p>
          </div>
        </div>
      </div>

      {/* ================= 3. POLICY DETAILS ================= */}
      <div className="max-w-4xl mx-auto px-6 space-y-8 text-left text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">1.</span> Service Cancellation Policy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>
              <strong>Free Cancellation Before Dispatch:</strong> You can cancel your service request at any time prior to the technician being dispatched at zero penalty or cost.
            </li>
            <li>
              <strong>Post-Dispatch Cancellation:</strong> If you choose to cancel after the certified engineer has already traveled and reached your premises, a nominal doorstep diagnostic visit fee (₹199–₹299 depending on city) may apply.
            </li>
            <li>
              <strong>Rescheduling:</strong> You can reschedule your booking to any preferred time slot free of charge through the Door2fy mobile app or by contacting customer support.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">2.</span> Eligibility for Refunds
          </h2>
          <p className="text-slate-600">
            You are entitled to a full or partial refund under the following conditions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>
              <strong>Unresolved Technical Issue:</strong> If a technician fails to diagnose or resolve the agreed hardware/software issue.
            </li>
            <li>
              <strong>Defective Spare Part:</strong> If a replacement component (Screen, Battery, Keyboard, Trackpad, SSD) malfunctions within the 30-to-90 day warranty period and a replacement cannot be provided.
            </li>
            <li>
              <strong>Duplicate or Excess Charge:</strong> Any technical billing discrepancy or double deduction through payment gateways.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">3.</span> Warranty Terms & Claim Process
          </h2>
          <p className="text-slate-600">
            Every repair conducted by Door2fy comes with a digital warranty certificate stored securely inside your user dashboard:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>
              <strong>OEM Spare Parts Warranty:</strong> 30 to 90 days depending on component type (Screen, Battery, Adapter, SSD/RAM).
            </li>
            <li>
              <strong>Exclusions:</strong> Warranty does not cover subsequent accidental physical drops, water/liquid spills, external surges, or unauthorized third-party tampering after Door2fy service.
            </li>
            <li>
              <strong>Claim Submission:</strong> To claim warranty or request a refund, simply WhatsApp or call our support line at <a href="tel:+919217759006" className="text-[#028dcd] font-bold">+91 92177 59006</a> or email <a href="mailto:support@door2fy.in" className="text-[#028dcd] font-bold">support@door2fy.in</a> with your Booking ID.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">4.</span> Refund Processing Timeline
          </h2>
          <p className="text-slate-600">
            Once a refund request is approved by our technical audit team:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>
              <strong>UPI / Net Banking / Wallets:</strong> Processed within 24 to 48 business hours.
            </li>
            <li>
              <strong>Credit / Debit Cards:</strong> Reflected on your bank statement within 3 to 5 working days depending on your issuing bank.
            </li>
          </ul>
        </section>

        {/* Contact Strip */}
        <div className="p-6 rounded-3xl bg-[#F0FAFD] border border-[#E1F7F9] text-center">
          <HelpCircle className="w-6 h-6 text-[#028dcd] mx-auto mb-2" />
          <h3 className="font-bold text-slate-900 text-base">Have Questions About Your Warranty or Refund?</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-3">Our dedicated customer care team is available 7 days a week from 8:00 AM to 10:00 PM.</p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#028dcd] text-white text-xs font-bold hover:bg-[#039ecc] shadow-sm transition-all"
          >
            Contact Door2fy Support
          </Link>
        </div>

      </div>
    </div>
  );
}
