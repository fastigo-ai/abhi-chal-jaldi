import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ShieldCheck,
  Wrench,
  Zap,
  BookOpen,
  HelpCircle,
  Phone,
  ArrowRight,
  Sparkles,
  MessageSquare,
  ChevronRight,
  Headphones,
  Home,
} from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "../assets/Logo-removebg-preview.webp";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Why us", path: "/why-us", icon: ShieldCheck },
    { name: "Services", path: "/services", icon: Wrench },
    { name: "How it works", path: "/how-it-works", icon: Zap },
    { name: "Blog", path: "/blogs", icon: BookOpen },
    { name: "FAQs", path: "/faqs", icon: HelpCircle },
    { name: "Contact Us", path: "/contact-us", icon: Headphones },
  ];

  const desktopLinks = [
    { name: "Why us", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "How it works", path: "/how-it-works" },
    { name: "Blog", path: "/blogs" },
    { name: "FAQs", path: "/faqs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* === DESKTOP NAVBAR === */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-sm px-4 hidden md:block h-16">
        <div className="flex items-center justify-center space-x-8 px-8 py-3 bg-white/95 rounded-full shadow-md border border-[#E1F7F9] backdrop-blur-md h-full">
          {/* Left Links */}
          {desktopLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                isActive(link.path)
                  ? "text-[#028dcd]"
                  : "text-slate-700 hover:text-[#028dcd]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Center Logo */}
          <Link to="/" className="text-[#028dcd] h-full flex items-center hover:scale-105 transition-transform">
            <img src={Logo} alt="Door2fy Logo" className="h-7 w-auto object-contain" loading="eager" decoding="async" />
          </Link>

          {/* Right Links */}
          {desktopLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                isActive(link.path)
                  ? "text-[#028dcd]"
                  : "text-slate-700 hover:text-[#028dcd]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* === MOBILE NAVBAR TOP BAR === */}
      <nav className="fixed top-3 left-0 right-0 z-50 px-4 md:hidden">
        <div className="flex items-center justify-between bg-white/95 rounded-full shadow-md border border-[#E1F7F9] px-5 py-2.5 backdrop-blur-md">
          {/* Left-aligned logo */}
          <Link to="/" className="h-full flex items-center py-0.5">
            <img src={Logo} alt="Door2fy Logo" className="h-7 w-auto object-contain" loading="eager" decoding="async" />
          </Link>

          {/* Right Actions: Phone pill + Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+919217759006"
              className="w-9 h-9 rounded-full bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center shadow-xs active:scale-95 transition-transform"
              aria-label="Call Door2fy"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              className="w-9 h-9 rounded-full bg-[#028dcd] hover:bg-[#039ecc] text-white flex items-center justify-center shadow-md shadow-[#028dcd]/25 active:scale-95 transition-all"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* === MODERN SLIDE-IN DRAWER FOR MOBILE === */}
      <div
        className={`fixed top-0 right-0 h-full w-[310px] sm:w-[350px] bg-white/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(2, 141, 205,0.2)] z-50 transform transition-transform duration-300 ease-out border-l border-[#E1F7F9] flex flex-col justify-between overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Subtle Background Ambient Blob */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#028dcd]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-0 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E1F7F9] bg-[#F8FDFF]/80">
          <div className="flex items-center">
            <img src={Logo} alt="Door2fy" className="h-6 w-auto object-contain" loading="eager" decoding="async" />
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#E1F7F9] text-slate-600 hover:text-[#028dcd] flex items-center justify-center transition-colors shadow-xs active:scale-95"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group ${
                  active
                    ? "bg-[#E1F7F9] text-[#028dcd] font-extrabold shadow-xs"
                    : "text-slate-700 hover:bg-[#F8FDFF] hover:text-[#028dcd] font-bold"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                      active
                        ? "bg-[#028dcd] text-white shadow-xs"
                        : "bg-[#F8FDFF] text-[#028dcd] group-hover:bg-[#028dcd] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm tracking-tight">{link.name}</span>
                </div>

                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    active
                      ? "text-[#028dcd] translate-x-0.5"
                      : "text-slate-300 group-hover:text-[#028dcd] group-hover:translate-x-1"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom Contact & Action Section */}
        <div className="p-4 border-t border-[#E1F7F9] bg-[#F8FDFF]/90 space-y-3">
          {/* Quick Book CTA */}
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#028dcd] hover:bg-[#039ecc] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#028dcd]/25 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Book Doorstep Repair</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Quick Contact Buttons Row */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+919217759006"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border border-[#E1F7F9] text-slate-800 text-xs font-bold hover:border-[#028dcd] hover:text-[#028dcd] transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#028dcd]" />
              <span>Call Us</span>
            </a>

            <a
              href="https://wa.me/919217759006?text=Hi%20Door2fy%20Team%2C%20I%20need%20tech%20support%20for%20my%20laptop."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-all shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Trust Mini Pill */}
          <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-bold text-slate-400">
            <Sparkles className="w-3 h-3 text-[#028dcd]" />
            <span>10–30m Doorstep Arrival · 90-Day Warranty</span>
          </div>
        </div>
      </div>

      {/* Background Overlay with smooth blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
