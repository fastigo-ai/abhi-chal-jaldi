import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function FeedbackIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Notepad / Checklist Sheet */}
      <rect
        x="22"
        y="16"
        width="56"
        height="72"
        rx="14"
        fill="white"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* 4 Square Checkboxes on Left */}
      <rect
        x="29"
        y="28"
        width="9"
        height="9"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <rect
        x="29"
        y="42"
        width="9"
        height="9"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <rect
        x="29"
        y="56"
        width="9"
        height="9"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <rect
        x="29"
        y="70"
        width="9"
        height="9"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* 4 Horizontal Lines */}
      <line
        x1="44"
        y1="32.5"
        x2="68"
        y2="32.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="46.5"
        x2="72"
        y2="46.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="60.5"
        x2="72"
        y2="60.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="74.5"
        x2="72"
        y2="74.5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Angled Pencil Overlay */}
      <g transform="translate(46, 64) rotate(-33)">
        {/* Pencil body + rounded top cap */}
        <path
          d="M -7 -13 L -7 -38 C -7 -45 7 -45 7 -38 L 7 -13 Z"
          fill="white"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Collar line before tip */}
        <line
          x1="-7"
          y1="-13"
          x2="7"
          y2="-13"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Conical tip pointing downwards */}
        <polygon
          points="-7,-13 7,-13 0,0"
          fill="white"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* Graphite lead tip */}
        <polygon
          points="-3.5,-6.5 3.5,-6.5 0,0"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function FeedbackButton() {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  // Hide the floating button when user is already on the feedback page
  if (location.pathname === "/feedback" || location.pathname === "/feedback-form") {
    return null;
  }

  return (
    <aside
      aria-label="Feedback Navigation"
      className="fixed bottom-[84px] right-4 sm:bottom-[96px] sm:right-6 z-50 flex items-center group"
    >
      <Link
        to="/feedback"
        id="floating-feedback-btn"
        aria-label="Open Feedback Form"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center bg-white text-slate-800 p-2.5 sm:p-3 rounded-2xl sm:rounded-2xl shadow-[0_8px_30px_rgba(2,141,205,0.3)] border-2 border-[#028dcd]/35 hover:border-[#028dcd] hover:shadow-[0_12px_35px_rgba(2,141,205,0.45)] transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {/* Ambient subtle glowing ping ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#028dcd] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#028dcd] border-2 border-white"></span>
        </span>

        {/* Custom Exact Feedback Checklist & Pencil Icon */}
        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#028dcd] group-hover:text-[#0275aa] transition-colors duration-200">
          <FeedbackIcon className="w-full h-full drop-shadow-xs" />
        </div>

        {/* Tooltip on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute right-full mr-3 hidden sm:block bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
            >
              Feedback Form
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </aside>
  );
}

export default FeedbackButton;
