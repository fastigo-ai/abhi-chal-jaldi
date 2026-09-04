import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { FileText, Shield, CheckCircle2, Scale } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Terms & Conditions | Door2fy"
        description="Read the Terms and Conditions of service for Door2fy doorstep laptop and computer tech support services."
        canonicalUrl="https://www.door2fy.in/terms-and-conditions"
      />

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-8 sm:pb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-4">
          <Scale className="w-4 h-4 text-[#028dcd]" />
          <span>Legal Agreement & Terms of Service</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Terms & Conditions
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">
          Effective Date: October 1, 2025 · Last Updated: 2026
        </p>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
          Welcome to <strong className="text-slate-900">Door2fy</strong>. These Terms & Conditions govern your access to and use of Door2fy's website, mobile applications, and on-demand doorstep hardware repair and IT support services.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 text-left text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p className="text-slate-600">
            By creating an account, browsing our website, or scheduling a doorstep service appointment, you confirm that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Description of Services</h2>
          <p className="text-slate-600">
            Door2fy is a technology platform connecting customers requiring laptop repair, desktop troubleshooting, Apple MacBook support, and peripheral setup with certified, background-verified field engineers. Services are provided live at the customer's residence, commercial establishment, or via authorized service facilities when complex chip-level micro-soldering is needed.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Pricing, Estimates & Payments</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li>
              <strong>Upfront Quotation:</strong> All diagnostic assessments are accompanied by a clear, transparent cost estimate before repair work begins.
            </li>
            <li>
              <strong>Genuine OEM Parts:</strong> Replacement parts are billed as per agreed specifications with valid warranty certificates.
            </li>
            <li>
              <strong>Payment Methods:</strong> Payments can be made via UPI, Credit/Debit Cards, Net Banking, or Cash on Delivery after completion and testing.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Customer Data & Confidentiality</h2>
          <p className="text-slate-600">
            We respect customer data privacy. While our technicians are instructed not to inspect private storage drives unless directly requested for data recovery, customers are strongly encouraged to back up confidential personal or corporate data prior to hardware repairs.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Warranty & Guarantees</h2>
          <p className="text-slate-600">
            Repairs carried out by Door2fy include up to 90 days service and parts warranty as specified on the digital invoice. The warranty is void if the device suffers physical drop damage, water immersion, or third-party tampering subsequent to the repair.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">6. Governing Law & Dispute Resolution</h2>
          <p className="text-slate-600">
            These Terms and any disputes arising from services rendered shall be governed by and construed in accordance with the laws of the Republic of India, under the exclusive jurisdiction of the competent courts located in New Delhi, India.
          </p>
        </section>

      </div>
    </div>
  );
}
