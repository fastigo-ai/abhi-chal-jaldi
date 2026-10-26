import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import {
  User,
  Building2,
  Tag,
  Calendar,
  IndianRupee,
  CheckCircle2,
  Copy,
  RotateCcw,
  Send,
  FileText,
  X,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Logo from "../assets/Logo-removebg-preview.webp";

interface FormDataState {
  engineerName: string;
  clientName: string;
  ticketId: string;
  serviceDate: string;
  q1ReachTime: string;
  q2CompleteTime: string;
  q3SowComparison: string;
  q4PaymentSufficient: string;
  fairPayment: string;
  q5PaymentTime: string;
  q6SowClarity: string;
  q7SiteSupport: string;
  q8JobProblems: string;
  q9Improvements: string;
}

const initialFormState: FormDataState = {
  engineerName: "",
  clientName: "",
  ticketId: "",
  serviceDate: "",
  q1ReachTime: "",
  q2CompleteTime: "",
  q3SowComparison: "",
  q4PaymentSufficient: "",
  fairPayment: "",
  q5PaymentTime: "",
  q6SowClarity: "",
  q7SiteSupport: "",
  q8JobProblems: "",
  q9Improvements: "",
};

export default function Feedback() {
  const [formData, setFormData] = useState<FormDataState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [generatedSummaryText, setGeneratedSummaryText] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleRadioChange = (fieldName: keyof FormDataState, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[fieldName];
        return next;
      });
    }
  };

  const generateFormattedSummary = (): string => {
    return `📋 *Door2fy Engineer Feedback Summary*
----------------------------------------
👤 *1. Engineer & Job Details:*
• Engineer Name: ${formData.engineerName.trim() || "Not provided"}
• Client / Company: ${formData.clientName.trim() || "Not provided"}
• Service / Ticket ID: ${formData.ticketId.trim() || "Not provided"}
• Service Date: ${formData.serviceDate || "Not provided"}

⏱️ *2. Call & Service Experience:*
• Q1. Site pahunchne mein time: ${formData.q1ReachTime || "Not answered"}
• Q2. Service complete karne mein time: ${formData.q2CompleteTime || "Not answered"}

💼 *3. SOW & Payment Assessment:*
• Q3. SOW comparison: ${formData.q3SowComparison || "Not answered"}
• Q4. Agreed payment sufficient thi?: ${formData.q4PaymentSufficient || "Not answered"}
${formData.fairPayment.trim() ? `• Fair payment expectation: ₹${formData.fairPayment.trim()}` : ""}
• Q5. Payment promised time par mili?: ${formData.q5PaymentTime || "Not answered"}

🤝 *4. SOW Clarity & Site Support:*
• Q6. SOW & requirements clarity: ${formData.q6SowClarity || "Not answered"}
• Q7. Client site support: ${formData.q7SiteSupport || "Not answered"}

💬 *5. Additional Feedback:*
• Q8. Job ke dauran problem: ${formData.q8JobProblems.trim() || "None"}
• Q9. Door2fy improvements: ${formData.q9Improvements.trim() || "None"}
----------------------------------------
Generated on: ${new Date().toLocaleString("en-IN")}`;
  };

  const handleGenerateSummary = () => {
    const summary = generateFormattedSummary();
    setGeneratedSummaryText(summary);
    setShowSummaryModal(true);
  };

  const handleCopyResponses = async () => {
    const summary = generateFormattedSummary();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(summary);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = summary;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      toast.success("Feedback summary copied to clipboard! 📋");
    } catch (err) {
      toast.error("Failed to copy. Please manually copy the summary text.");
    }
  };

  const handleClearForm = () => {
    if (
      window.confirm("Are you sure you want to clear all responses in this feedback form?")
    ) {
      setFormData(initialFormState);
      setErrors({});
      toast.success("Form cleared successfully.");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.engineerName.trim()) {
      newErrors.engineerName = "Please enter engineer name.";
    }
    if (!formData.serviceDate) {
      newErrors.serviceDate = "Please select service date.";
    }
    if (!formData.q1ReachTime) {
      newErrors.q1ReachTime = "Please select reach time.";
    }
    if (!formData.q2CompleteTime) {
      newErrors.q2CompleteTime = "Please select service completion time.";
    }
    if (!formData.q3SowComparison) {
      newErrors.q3SowComparison = "Please select actual work vs SOW.";
    }
    if (!formData.q4PaymentSufficient) {
      newErrors.q4PaymentSufficient = "Please select payment assessment.";
    }
    if (!formData.q5PaymentTime) {
      newErrors.q5PaymentTime = "Please select payment timeline status.";
    }
    if (!formData.q6SowClarity) {
      newErrors.q6SowClarity = "Please select SOW clarity.";
    }
    if (!formData.q7SiteSupport) {
      newErrors.q7SiteSupport = "Please select client site support status.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please answer all required questions marked with *");
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("access_key", "32aa49c6-f810-4143-9758-0035385c4ccf");
      payload.append(
        "subject",
        `👨‍💻 Engineer Feedback: ${formData.engineerName} - ${formData.clientName || "Client"} (${formData.serviceDate})`
      );
      payload.append("from_name", "Door2fy Engineer Feedback");
      payload.append("engineer_name", formData.engineerName);
      payload.append("client_name", formData.clientName || "Not provided");
      payload.append("ticket_id", formData.ticketId || "Not provided");
      payload.append("service_date", formData.serviceDate);
      payload.append("q1_reach_time", formData.q1ReachTime);
      payload.append("q2_complete_time", formData.q2CompleteTime);
      payload.append("q3_sow_comparison", formData.q3SowComparison);
      payload.append("q4_payment_sufficient", formData.q4PaymentSufficient);
      payload.append("fair_payment_expectation", formData.fairPayment || "Not specified");
      payload.append("q5_payment_time", formData.q5PaymentTime);
      payload.append("q6_sow_clarity", formData.q6SowClarity);
      payload.append("q7_site_support", formData.q7SiteSupport);
      payload.append("q8_job_problems", formData.q8JobProblems || "None");
      payload.append("q9_improvements", formData.q9Improvements || "None");
      payload.append("summary_body", generateFormattedSummary());

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        toast.success("Engineer feedback submitted successfully! ✅");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        toast.error("Submission failed. You can also copy your responses directly.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please copy your responses or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2F9FB] via-[#F8FDFF] to-[#EBF6F9] pb-24 pt-24 sm:pt-28 md:pt-32 text-slate-800 relative overflow-hidden">
      <SEOHead
        title="Engineer Feedback Form | Door2fy"
        description="Door2fy Engineer Feedback Form for service quality, Scope of Work (SOW), payment and on-site support feedback."
        canonicalUrl="https://www.door2fy.in/feedback"
      />

      {/* Decorative Ambient Radial Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#028dcd]/12 via-[#38bdf8]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] -right-20 w-[450px] h-[450px] bg-[#E1F7F9]/80 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[65%] -left-20 w-[400px] h-[400px] bg-[#028dcd]/6 rounded-full blur-[120px] pointer-events-none -z-10" />

      <main className="max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Header with Door2fy Logo & Subtitle */}
        <header className="text-center mb-8 sm:mb-10">
          <Link
            to="/"
            className="inline-block transition-transform hover:scale-105 active:scale-95 mb-4 focus:outline-none"
            aria-label="Door2fy Home"
          >
            <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-2xl shadow-[0_4px_20px_rgba(2,141,205,0.12)] border border-[#028dcd]/20 hover:border-[#028dcd]/40 transition-all">
              <img
                src={Logo}
                alt="Door2fy logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineer Feedback Form
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-xl mx-auto font-medium leading-relaxed">
            Service quality, Scope of Work (SOW), payment and on-site support feedback
          </p>
        </header>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(2,141,205,0.12)] border border-[#028dcd]/20 text-center max-w-lg mx-auto"
          >
            <div className="w-18 h-18 sm:w-20 sm:h-20 bg-[#E1F7F9] text-[#028dcd] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Feedback Received!
            </h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Thank you, <span className="font-semibold text-slate-900">{formData.engineerName}</span>.
              Your service feedback has been recorded for review by the operations and payment team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleCopyResponses}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#E1F7F9] text-[#028dcd] font-semibold text-xs sm:text-sm hover:bg-[#D5F3F7] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#028dcd]/25"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Responses</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData(initialFormState);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#028dcd] to-[#0275aa] text-white font-semibold text-xs sm:text-sm hover:from-[#027ec0] hover:to-[#016592] shadow-md shadow-[#028dcd]/30 transition-all cursor-pointer"
              >
                Submit Another Response
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
            {/* 1. Engineer & Job Details */}
            <section
              id="engineer-job-details"
              className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(2,141,205,0.06)] border border-[#028dcd]/15 hover:border-[#028dcd]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[#028dcd]/10 pb-3 mb-5">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#028dcd] to-[#0275aa] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shadow-[#028dcd]/30">
                  1
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Engineer & Job Details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Engineer Name */}
                <div id="engineerName">
                  <label htmlFor="input-engineerName" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Engineer Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#028dcd] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="input-engineerName"
                      type="text"
                      name="engineerName"
                      value={formData.engineerName}
                      onChange={handleInputChange}
                      placeholder="Enter engineer name"
                      className={`w-full h-11 pl-10 pr-3.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all ${
                        errors.engineerName ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.engineerName && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.engineerName}</p>
                  )}
                </div>

                {/* Client / Company Name */}
                <div>
                  <label htmlFor="input-clientName" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Client / Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#028dcd] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="input-clientName"
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                      placeholder="Enter client name"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all"
                    />
                  </div>
                </div>

                {/* Service / Ticket ID */}
                <div>
                  <label htmlFor="input-ticketId" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Service / Ticket ID
                  </label>
                  <div className="relative">
                    <Tag className="w-4 h-4 text-[#028dcd] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="input-ticketId"
                      type="text"
                      name="ticketId"
                      value={formData.ticketId}
                      onChange={handleInputChange}
                      placeholder="Enter ticket or project ID"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all"
                    />
                  </div>
                </div>

                {/* Service Date */}
                <div id="serviceDate">
                  <label htmlFor="input-serviceDate" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Service Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#028dcd] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="input-serviceDate"
                      type="date"
                      name="serviceDate"
                      value={formData.serviceDate}
                      onChange={handleInputChange}
                      className={`w-full h-11 pl-10 pr-3.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all ${
                        errors.serviceDate ? "border-red-400 bg-red-50/20" : "border-slate-200"
                      }`}
                    />
                  </div>
                  {errors.serviceDate && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.serviceDate}</p>
                  )}
                </div>
              </div>
            </section>

            {/* 2. Call & Service Experience */}
            <section className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(2,141,205,0.06)] border border-[#028dcd]/15 hover:border-[#028dcd]/30 transition-all space-y-6">
              <div className="flex items-center gap-3 border-b border-[#028dcd]/10 pb-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#028dcd] to-[#0275aa] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shadow-[#028dcd]/30">
                  2
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Call & Service Experience
                </h2>
              </div>

              {/* Q1 */}
              <div id="q1ReachTime" className="space-y-2.5">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q1. Call assign hone ke baad site par pahunchne mein kitna time laga?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "30 minutes ke andar",
                    "30–60 minutes",
                    "1–2 hours",
                    "2 hours se zyada",
                    "Remote support / site visit nahi thi",
                  ].map((option, idx) => {
                    const isSelected = formData.q1ReachTime === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q1ReachTime", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          idx === 4 ? "sm:col-span-2" : ""
                        } ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q1ReachTime && (
                  <p className="text-xs text-red-500 font-medium">{errors.q1ReachTime}</p>
                )}
              </div>

              {/* Q2 */}
              <div id="q2CompleteTime" className="space-y-2.5 pt-3 border-t border-[#028dcd]/10">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q2. Actual service complete karne mein kitna time laga?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "1 hour se kam",
                    "1–2 hours",
                    "2–4 hours",
                    "4–8 hours",
                    "1 working day se zyada",
                  ].map((option, idx) => {
                    const isSelected = formData.q2CompleteTime === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q2CompleteTime", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          idx === 4 ? "sm:col-span-2" : ""
                        } ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q2CompleteTime && (
                  <p className="text-xs text-red-500 font-medium">{errors.q2CompleteTime}</p>
                )}
              </div>
            </section>

            {/* 3. SOW & Payment Assessment */}
            <section className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(2,141,205,0.06)] border border-[#028dcd]/15 hover:border-[#028dcd]/30 transition-all space-y-6">
              <div className="flex items-center gap-3 border-b border-[#028dcd]/10 pb-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#028dcd] to-[#0275aa] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shadow-[#028dcd]/30">
                  3
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  SOW & Payment Assessment
                </h2>
              </div>

              {/* Q3 */}
              <div id="q3SowComparison" className="space-y-2.5">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q3. Actual work agreed SOW ke comparison mein kaisa tha?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "SOW ke according tha",
                    "SOW se kam work tha",
                    "SOW se zyada work tha",
                    "SOW se kaafi zyada work tha",
                  ].map((option) => {
                    const isSelected = formData.q3SowComparison === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q3SowComparison", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q3SowComparison && (
                  <p className="text-xs text-red-500 font-medium">{errors.q3SowComparison}</p>
                )}
              </div>

              {/* Q4 */}
              <div id="q4PaymentSufficient" className="space-y-2.5 pt-3 border-t border-[#028dcd]/10">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q4. Kya agreed payment is job ke liye sufficient thi?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Haan, payment sahi thi",
                    "Thodi zyada payment honi chahiye thi",
                    "Kaafi zyada payment honi chahiye thi",
                    "Actual work ke hisaab se payment kam thi",
                  ].map((option) => {
                    const isSelected = formData.q4PaymentSufficient === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q4PaymentSufficient", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q4PaymentSufficient && (
                  <p className="text-xs text-red-500 font-medium">{errors.q4PaymentSufficient}</p>
                )}

                {/* Fair Payment Highlight Box */}
                <div className="bg-[#E1F7F9]/50 border border-[#028dcd]/20 rounded-2xl p-4 mt-3">
                  <label htmlFor="input-fairPayment" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Aapke hisaab se is job ki fair payment kitni honi chahiye thi? (₹)
                  </label>
                  <div className="relative max-w-sm">
                    <IndianRupee className="w-4 h-4 text-[#028dcd] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="input-fairPayment"
                      type="text"
                      name="fairPayment"
                      value={formData.fairPayment}
                      onChange={handleInputChange}
                      placeholder="e.g. 1500"
                      className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Q5 */}
              <div id="q5PaymentTime" className="space-y-2.5 pt-3 border-t border-[#028dcd]/10">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q5. Kya payment promised time par mili?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Haan, time par mili",
                    "1–3 din late",
                    "4–7 din late",
                    "7 din se zyada late",
                    "Abhi tak payment pending hai",
                  ].map((option, idx) => {
                    const isSelected = formData.q5PaymentTime === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q5PaymentTime", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          idx === 4 ? "sm:col-span-2" : ""
                        } ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q5PaymentTime && (
                  <p className="text-xs text-red-500 font-medium">{errors.q5PaymentTime}</p>
                )}
              </div>
            </section>

            {/* 4. SOW Clarity & Site Support */}
            <section className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(2,141,205,0.06)] border border-[#028dcd]/15 hover:border-[#028dcd]/30 transition-all space-y-6">
              <div className="flex items-center gap-3 border-b border-[#028dcd]/10 pb-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#028dcd] to-[#0275aa] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shadow-[#028dcd]/30">
                  4
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  SOW Clarity & Site Support
                </h2>
              </div>

              {/* Q6 */}
              <div id="q6SowClarity" className="space-y-2.5">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q6. Kya work start karne se pehle SOW aur requirements clear thi?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Bilkul clear thi",
                    "Mostly clear thi",
                    "Kuch points unclear the",
                    "SOW clear nahi thi",
                  ].map((option) => {
                    const isSelected = formData.q6SowClarity === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q6SowClarity", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q6SowClarity && (
                  <p className="text-xs text-red-500 font-medium">{errors.q6SowClarity}</p>
                )}
              </div>

              {/* Q7 */}
              <div id="q7SiteSupport" className="space-y-2.5 pt-3 border-t border-[#028dcd]/10">
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Q7. Kya client site par required support mila?{" "}
                  <span className="text-red-500">*</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Haan, full support mila",
                    "Partial support mila",
                    "Support nahi mila",
                    "Site support required nahi tha",
                  ].map((option) => {
                    const isSelected = formData.q7SiteSupport === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleRadioChange("q7SiteSupport", option)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#028dcd] bg-gradient-to-r from-[#E1F7F9] to-[#F0FAFC] text-[#0277ab] font-semibold ring-2 ring-[#028dcd]/25 shadow-xs"
                            : "border-slate-200 hover:border-[#028dcd]/40 hover:bg-[#F8FCFD] text-slate-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? "border-[#028dcd] bg-[#028dcd]" : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.q7SiteSupport && (
                  <p className="text-xs text-red-500 font-medium">{errors.q7SiteSupport}</p>
                )}
              </div>
            </section>

            {/* 5. Additional Feedback */}
            <section className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(2,141,205,0.06)] border border-[#028dcd]/15 hover:border-[#028dcd]/30 transition-all space-y-5">
              <div className="flex items-center gap-3 border-b border-[#028dcd]/10 pb-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-[#028dcd] to-[#0275aa] text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-xs shadow-[#028dcd]/30">
                  5
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Additional Feedback
                </h2>
              </div>

              {/* Q8 */}
              <div>
                <label htmlFor="input-q8JobProblems" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  Q8. Job ke dauran koi problem aayi?
                </label>
                <textarea
                  id="input-q8JobProblems"
                  name="q8JobProblems"
                  rows={3}
                  value={formData.q8JobProblems}
                  onChange={handleInputChange}
                  placeholder="Travel, waiting time, extra work, client coordination, tools, etc."
                  className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all resize-none"
                />
              </div>

              {/* Q9 */}
              <div>
                <label htmlFor="input-q9Improvements" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
                  Q9. Door2fy ko kya improve karna chahiye?
                </label>
                <textarea
                  id="input-q9Improvements"
                  name="q9Improvements"
                  rows={3}
                  value={formData.q9Improvements}
                  onChange={handleInputChange}
                  placeholder="Apne suggestions likhein..."
                  className="w-full p-3.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-4 focus:ring-[#028dcd]/10 focus:border-[#028dcd] transition-all resize-none"
                />
              </div>
            </section>

            {/* Bottom Action Section */}
            <div className="space-y-3.5 pt-2">
              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#028dcd] via-[#027ec0] to-[#01689b] hover:from-[#027ec0] hover:to-[#015783] text-white font-bold text-sm sm:text-base shadow-[0_8px_25px_rgba(2,141,205,0.35)] hover:shadow-[0_12px_32px_rgba(2,141,205,0.45)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Feedback...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Feedback</span>
                  </>
                )}
              </button>

              {/* Utility Actions: Generate Feedback Summary, Copy Responses, Clear Form */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={handleGenerateSummary}
                  className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-[#E1F7F9] to-[#EBF9FA] border border-[#028dcd]/30 text-[#0277ab] font-semibold text-xs sm:text-sm hover:from-[#d6f4f8] hover:to-[#e0f6f8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-[#028dcd]" />
                  <span>Generate Summary</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyResponses}
                  className="w-full py-3 px-3 rounded-xl bg-white border border-[#028dcd]/25 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-[#F0FAFC] hover:border-[#028dcd]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Copy className="w-4 h-4 text-[#028dcd]" />
                  <span>Copy Responses</span>
                </button>

                <button
                  type="button"
                  onClick={handleClearForm}
                  className="w-full py-3 px-3 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-600 font-semibold text-xs sm:text-sm hover:bg-rose-100/70 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <RotateCcw className="w-4 h-4 text-rose-500" />
                  <span>Clear Form</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 inline" />
                <span>Responses are confidential and stored securely for Door2fy engineering reviews.</span>
              </p>
            </div>
          </form>
        )}

        {/* Modal for Generated Feedback Summary */}
        <AnimatePresence>
          {showSummaryModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-[0_20px_60px_rgba(2,141,205,0.25)] border border-[#028dcd]/20 max-h-[90vh] flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-[#028dcd]/15 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#028dcd]" />
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Feedback Summary
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSummaryModal(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-[#E1F7F9] transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto mb-4 p-4 bg-gradient-to-b from-[#F0FAFC] to-[#F8FCFD] rounded-2xl border border-[#028dcd]/20 font-mono text-xs sm:text-sm text-slate-800 whitespace-pre-wrap select-all leading-relaxed">
                  {generatedSummaryText}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handleCopyResponses}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#028dcd] to-[#0275aa] text-white font-semibold text-xs sm:text-sm hover:from-[#027ec0] hover:to-[#016592] shadow-sm shadow-[#028dcd]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy to Clipboard</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSummaryModal(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
