import React from "react";
import { SEOHead } from "@/components/SEOHead";
import { Users, HeartHandshake, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AntiDiscriminationPolicy() {
  return (
    <div className="min-h-screen bg-[#FBFDFF] pt-24 pb-20 text-slate-800 font-sans">
      <SEOHead
        title="Anti-Discrimination Policy | Door2fy"
        description="Door2fy is committed to a safe, inclusive, and non-discriminatory environment for both customers and technician partners."
        canonicalUrl="https://www.door2fy.in/anti-discrimination-policy"
      />

      <div className="max-w-4xl mx-auto px-6 pt-8 pb-10 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold mb-4">
          <HeartHandshake className="w-4 h-4 text-[#028dcd]" />
          <span>Commitment to Equality & Respect</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Anti-Discrimination Policy
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2">
          Effective Date: October 1, 2025 · Last Updated: 2026
        </p>

        <p className="text-slate-600 text-base leading-relaxed mt-4">
          <strong className="text-slate-900">Door2fy</strong> is founded on values of respect, dignity, and inclusivity. We maintain a strict zero-tolerance policy towards discrimination and harassment in any form.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-8 text-left text-slate-700 leading-relaxed text-sm sm:text-base">
        
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Core Principles of Non-Discrimination</h2>
          <p className="text-slate-600">
            Door2fy does not discriminate against any customer, employee, or technician partner on the grounds of:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-medium pt-2 pl-2">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Race, Caste, or Ethnicity</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Religion or Spiritual Beliefs</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Gender, Gender Identity, or Orientation</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Disability, Health, or Medical Status</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Geographic Origin or Language</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Age or Marital Status</li>
          </ul>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Respect for Service Partners & Engineers</h2>
          <p className="text-slate-600">
            Our certified field engineers deserve a respectful, safe, and dignified working environment when visiting customer premises. Customers who engage in verbal abuse, racial slurs, physical intimidation, or discrimination against service partners will face immediate cancellation and permanent banning from the platform.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Universal Service Accessibility</h2>
          <p className="text-slate-600">
            Door2fy strives to serve all neighborhoods, residential societies, and commercial pin codes within our operating cities without geographic bias or discrimination.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Reporting Violations & Grievance Redressal</h2>
          <p className="text-slate-600">
            If you experience or witness any discrimination or harassment during a Door2fy service interaction, please report it immediately to our Grievance Officer at <a href="mailto:grievance@door2fy.in" className="text-[#028dcd] font-bold">grievance@door2fy.in</a> or call <a href="tel:+919217759006" className="text-[#028dcd] font-bold">+91 92177 59006</a>. All complaints are investigated with utmost confidentiality within 24 hours.
          </p>
        </section>

      </div>
    </div>
  );
}
