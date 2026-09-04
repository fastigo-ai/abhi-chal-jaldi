import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  AlertTriangle,
  BookOpen,
} from "lucide-react";

export default function PartnerGuidelines() {
  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Service Partner Guidelines & Code of Conduct | Door2fy"
        description="Comprehensive guidelines, ethical standards, and operational protocols for Door2fy certified technician partners across India."
        canonicalUrl="https://www.door2fy.in/partner-guidelines"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-8 pb-8 sm:pb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-4">
          <BookOpen className="w-4 h-4 text-[#028dcd]" />
          <span>Door2fy Certified Partner Standards</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Partner Guidelines & Code of Conduct
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">
          Effective for All Registered Technicians & Service Partners Across 50+ Cities
        </p>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
          As a <strong className="text-slate-900">Door2fy Certified Partner</strong>, you represent the highest benchmark of trustworthiness, technical precision, and customer courtesy in the tech support industry.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 text-left text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">1.</span> Professionalism & Appearance
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li><strong>Official Uniform & ID:</strong> Wear the Door2fy branded polo/jacket and display your digital ID card with QR verification upon doorstep arrival.</li>
            <li><strong>Grooming & Decorum:</strong> Maintain a neat, professional appearance and greet customers respectfully ("Namaste" / "Good Day").</li>
            <li><strong>Work Area Cleanliness:</strong> Always carry an anti-static ESD mat and clean up all screw residues, thermal paste wipes, and packing material before departing.</li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">2.</span> Punctuality & Response SLA
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li><strong>30-Minute Doorstep SLA:</strong> Upon accepting a dispatch order, navigate immediately to the customer location using the in-app GPS navigation.</li>
            <li><strong>Live Tracking:</strong> Keep your app GPS active during transit to provide the customer with an accurate live ETA.</li>
            <li><strong>Delay Notification:</strong> In case of unavoidable traffic delays or inclement weather, contact the customer immediately via in-app calling.</li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">3.</span> Diagnostic Integrity & Genuine Parts
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li><strong>Transparent Diagnosis:</strong> Show and explain the hardware failure to the customer in clear, non-technical terms.</li>
            <li><strong>100% Genuine Parts:</strong> Only install authentic OEM spare parts supplied or approved by Door2fy with genuine serial verification.</li>
            <li><strong>No Hidden Charges:</strong> Strictly adhere to standard platform pricing without demanding unauthorized cash surcharges.</li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-[#028dcd]">4.</span> Customer Privacy & Data Protection
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 pl-2">
            <li><strong>Zero Data Browsing:</strong> Never open personal folders, photos, browsing history, or documents on the customer's computer without explicit permission during data backup.</li>
            <li><strong>Confidentiality:</strong> Treat all corporate and residential files as strictly confidential.</li>
          </ul>
        </section>

        <div className="p-6 rounded-3xl bg-[#F0FAFD] border border-[#E1F7F9] text-center">
          <Award className="w-8 h-8 text-[#028dcd] mx-auto mb-2" />
          <h3 className="font-bold text-slate-900 text-base">Ready to Partner With Door2fy?</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-4">Join over 1,000+ top-rated laptop technicians and enjoy daily payouts, free tools, and guaranteed jobs.</p>
          <a
            href="https://partner.door2fy.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#028dcd] text-white text-xs sm:text-sm font-bold hover:bg-[#039ecc] shadow-md shadow-[#028dcd]/20 transition-all hover:scale-105"
          >
            Register on Partner Portal
          </a>
        </div>

      </div>
    </div>
  );
}
