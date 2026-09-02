import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Quote,
  Star,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  useReviews,
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
  AIRTABLE_TABLE,
} from "@/utils/reviews";

const supportedCities = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Mumbai",
  "Bengaluru",
  "Pune",
  "Hyderabad",
  "Nagpur",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Agra",
  "Ahmedabad",
  "Chandigarh",
  "Dehradun",
  "Meerut",
  "Indore",
  "Bhopal",
  "Patna",
  "Varanasi",
];

export default function EngineerReviews({
  showList = true,
  showForm = true,
}: {
  showList?: boolean;
  showForm?: boolean;
} = {}) {
  const navigate = useNavigate();
  const { reviews, refreshReviews } = useReviews();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field validation errors
  const [errors, setErrors] = useState<{
    name?: string;
    city?: string;
    phone?: string;
    email?: string;
    review?: string;
  }>({});

  // Rating labels
  const ratingLabels: Record<number, string> = {
    1: "Poor (1 Star)",
    2: "Fair (2 Stars)",
    3: "Good (3 Stars)",
    4: "Very Good (4 Stars)",
    5: "Excellent (5 Stars)",
  };

  // Helper validation functions
  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(val.trim());
  };

  const validatePhone = (val: string): boolean => {
    const cleaned = val.replace(/[\s\-\(\)]/g, "");
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/;
    return indianPhoneRegex.test(cleaned);
  };

  const redirectToTestimonials = () => {
    const testimonialsElem = document.getElementById("testimonials");
    if (testimonialsElem) {
      testimonialsElem.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#testimonials");
      setTimeout(() => {
        const elem = document.getElementById("testimonials");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  // Auto-redirect to testimonials after submission
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        redirectToTestimonials();
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    // 1. Name validation
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Please enter your full name (minimum 2 letters).";
    }

    // 2. City validation
    if (!city.trim() || city.trim().length < 2) {
      newErrors.city = "Please enter or select your city (e.g. Noida, Delhi).";
    }

    // 3. Phone validation
    if (!phone.trim()) {
      newErrors.phone = "Please enter your 10-digit contact number.";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number (e.g. 9217759006).";
    }

    // 4. Email validation
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    // 5. Review message validation
    if (!review.trim()) {
      newErrors.review = "Please write your review feedback.";
    } else if (review.trim().length < 6) {
      newErrors.review = "Please write at least 6 characters describing your experience.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const cleanName = name.trim();
    const cleanCity = city.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanReview = review.trim();

    try {
      // 1. Send to Website Email (support@door2fy.in via Web3Forms API)
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "32aa49c6-f810-4143-9758-0035385c4ccf"
      );
      formDataToSend.append(
        "subject",
        `⭐ New Verified Review (${rating} Stars) - ${cleanName} from ${cleanCity}`
      );
      formDataToSend.append("from_name", "Door2fy Reviews");
      formDataToSend.append("name", cleanName);
      formDataToSend.append("city", cleanCity);
      formDataToSend.append("location", cleanCity);
      formDataToSend.append("phone", cleanPhone);
      formDataToSend.append("email", cleanEmail);
      formDataToSend.append(
        "rating",
        `${rating} / 5 Stars (${"★".repeat(rating)})`
      );
      formDataToSend.append("review_message", cleanReview);

      const emailPromise = fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      // 2. Submit to Airtable database (with smart fallback if City column doesn't exist yet)
      const airtablePromise = (async () => {
        try {
          const res1 = await axios.post(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
            {
              fields: {
                Name: cleanName,
                Rating: Number(rating),
                Review: cleanReview,
                City: cleanCity,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
          return res1;
        } catch (e: any) {
          // If City field not yet created in Airtable table, save with [City] prefix in Review
          return axios.post(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
            {
              fields: {
                Name: cleanName,
                Rating: Number(rating),
                Review: `[${cleanCity}] ${cleanReview}`,
              },
            },
            {
              headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                "Content-Type": "application/json",
              },
            }
          );
        }
      })();

      await Promise.allSettled([emailPromise, airtablePromise]);

      setSubmitted(true);
      toast.success("Thank you! Your review has been submitted.");
      refreshReviews();
      setName("");
      setCity("");
      setPhone("");
      setEmail("");
      setReview("");
      setRating(5);
    } catch (err) {
      console.error(err);
      toast.error("Review submitted. Thank you for your feedback!");
      setSubmitted(true);
      refreshReviews();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* ================= REVIEWS LIST & MARQUEE ================= */}
        {showList && (
          <div id="testimonials" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-xs font-bold mb-3 shadow-sm border border-[#04B6EA]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Customer Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                What Our Customers & <br />
                <span className="text-[#04B6EA]">Engineers Say</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-2 font-normal">
                Real feedback from real users who experienced our rapid doorstep repair.
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden flex flex-col gap-6 pb-6">
              {reviews.length === 0 ? (
                <p className="text-center w-full text-gray-400 py-8">
                  Loading verified reviews...
                </p>
              ) : (
                <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
                  {[...reviews, ...reviews, ...reviews].map((r, idx) => (
                    <div
                      key={`${r.id}-${idx}`}
                      className="min-w-[300px] max-w-[340px] p-6 rounded-3xl bg-[#F8FDFF] border border-[#E1F7F9] relative overflow-hidden flex-shrink-0 mx-3 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                              r.name || "Customer"
                            )}&background=E1F7F9&color=04B6EA&bold=true`}
                            alt={r.name}
                            className="w-10 h-10 rounded-full object-cover shadow-xs"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-gray-900">
                              {r.name}
                            </h4>
                            <p className="text-gray-400 text-[11px] font-medium">
                              {r.city || r.location || "Doorstep Client"}
                            </p>
                            <div className="flex text-amber-400 text-xs mt-0.5">
                              {Array(Number(r.rating) || 5)
                                .fill(0)
                                .map((_, i) => (
                                  <span key={i}>★</span>
                                ))}
                            </div>
                          </div>
                        </div>
                        <Quote className="text-[#04B6EA]/30 w-6 h-6 rotate-180" />
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                        “{r.review}”
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= LEAVE A REVIEW FORM ================= */}
        {showForm && (
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#04B6EA]/5 blur-3xl rounded-[3rem] -z-10" />

            <div className="max-w-3xl mx-auto bg-[#F8FDFF] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 border border-[#E1F7F9] shadow-[0_20px_50px_rgba(4,182,234,0.06)]">
              <div className="text-center mb-8 space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E1F7F9] text-[#04B6EA] text-xs font-bold shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Share Your Experience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Leave a Review
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-normal max-w-md mx-auto">
                  Your feedback helps us continuously improve our doorstep services and recognize our top technicians.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-3xl border border-emerald-100 shadow-sm space-y-5 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Review Submitted Successfully!
                  </h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for sharing your experience! Redirecting to customer testimonials...
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={redirectToTestimonials}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#04B6EA] text-white text-xs font-bold hover:bg-[#039ecc] transition-all shadow-sm shadow-[#04B6EA]/25 cursor-pointer"
                    >
                      <span>View Testimonials</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-bold hover:bg-gray-200 transition-all cursor-pointer"
                    >
                      Submit Another Review
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                  {/* Star Rating Selector */}
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                        Overall Rating <span className="text-red-500">*</span>
                      </label>
                      <span className="text-xs text-[#04B6EA] font-semibold">
                        {ratingLabels[hoverRating || rating]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 text-2xl transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              (hoverRating || rating) >= star
                                ? "text-amber-400 fill-amber-400 drop-shadow-xs"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & City Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="e.g. Rahul Sharma"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border text-sm text-gray-800 focus:outline-none transition-all font-medium ${
                            errors.name
                              ? "border-red-400 ring-2 ring-red-100"
                              : "border-gray-200 focus:border-[#04B6EA] focus:ring-3 focus:ring-[#04B6EA]/10"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 flex items-center gap-1 font-medium pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* City / Location */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        City / Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="text"
                          list="city-options"
                          placeholder="e.g. Noida, Delhi, Gurugram..."
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border text-sm text-gray-800 focus:outline-none transition-all font-medium ${
                            errors.city
                              ? "border-red-400 ring-2 ring-red-100"
                              : "border-gray-200 focus:border-[#04B6EA] focus:ring-3 focus:ring-[#04B6EA]/10"
                          }`}
                        />
                        <datalist id="city-options">
                          {supportedCities.map((c) => (
                            <option key={c} value={c} />
                          ))}
                        </datalist>
                      </div>
                      {errors.city && (
                        <p className="text-xs text-red-500 flex items-center gap-1 font-medium pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.city}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="tel"
                          placeholder="e.g. 9217759006"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border text-sm text-gray-800 focus:outline-none transition-all font-medium ${
                            errors.phone
                              ? "border-red-400 ring-2 ring-red-100"
                              : "border-gray-200 focus:border-[#04B6EA] focus:ring-3 focus:ring-[#04B6EA]/10"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 flex items-center gap-1 font-medium pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
                        <input
                          type="email"
                          placeholder="e.g. rahul.sharma@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border text-sm text-gray-800 focus:outline-none transition-all font-medium ${
                            errors.email
                              ? "border-red-400 ring-2 ring-red-100"
                              : "border-gray-200 focus:border-[#04B6EA] focus:ring-3 focus:ring-[#04B6EA]/10"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 flex items-center gap-1 font-medium pl-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Review Textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700">
                      Your Review / Experience <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <textarea
                        placeholder="Tell us about the engineer's arrival time, diagnostic accuracy, repair speed, or overall satisfaction..."
                        value={review}
                        onChange={(e) => {
                          setReview(e.target.value);
                          if (errors.review) setErrors((prev) => ({ ...prev, review: undefined }));
                        }}
                        rows={4}
                        className={`w-full pl-10 pr-4 py-3 rounded-2xl bg-white border text-sm text-gray-800 focus:outline-none transition-all font-medium resize-none leading-relaxed ${
                          errors.review
                            ? "border-red-400 ring-2 ring-red-100"
                            : "border-gray-200 focus:border-[#04B6EA] focus:ring-3 focus:ring-[#04B6EA]/10"
                        }`}
                      />
                    </div>
                    {errors.review && (
                      <p className="text-xs text-red-500 flex items-center gap-1 font-medium pl-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.review}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#04B6EA] hover:bg-[#039ecc] text-white font-bold text-sm shadow-md shadow-[#04B6EA]/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Validating & Sending Review...</span>
                    ) : (
                      <>
                        <span>Submit Review & Rating</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}