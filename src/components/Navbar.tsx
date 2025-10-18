import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/Logo-removebg-preview.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Why us", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "How it works", path: "/how-it-works" },
    { name: "FAQs", path: "/faqs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* === DESKTOP NAVBAR === */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-screen-sm px-4 hidden md:block h-16">
        <div className="flex items-center justify-center space-x-8 px-8 py-3 bg-white rounded-full shadow-md border border-gray-200 backdrop-blur-md h-full">
          {/* Left Links */}
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors ${
                isActive(link.path) ? "text-[#53BED1]" : "text-gray-800"
              } hover:text-[#53BED1]`}
            >
              {link.name}
            </Link>
          ))}

          {/* Center Logo */}
          <Link to="/" className="text-[#53BED1] h-full flex items-center">
            <img src={Logo} alt="Logo" className="h-7 w-auto" />
          </Link>

          {/* Right Links */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors ${
                isActive(link.path) ? "text-[#53BED1]" : "text-gray-800"
              } hover:text-[#53BED1]`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* === MOBILE NAVBAR === */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:hidden">
        <div className="flex items-center justify-between bg-white rounded-full shadow-md border border-gray-200 px-6 py-3 backdrop-blur-md">
          {/* Left-aligned logo */}
          <Link to="/" className="text-[#53BED1] h-full flex items-center">
            <img src={Logo} alt="Logo" className="h-7 w-auto" />
          </Link>

          {/* Green Circular Hamburger Button */}
          <button
            className="bg-[#53BED1] p-2 rounded-full"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

      {/* === SLIDE-IN MENU FOR MOBILE === */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-semibold text-[#53BED1]">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col space-y-4 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium transition-colors ${
                isActive(link.path) ? "text-green-600" : "text-gray-800"
              } hover:text-green-600`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
