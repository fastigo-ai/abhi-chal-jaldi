import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 relative">
          <div className="hidden md:flex items-center space-x-12 absolute left-0">
            <Link
              to="/why-us"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/why-us") ? "text-primary" : "text-foreground"
              }`}
            >
              Why us
            </Link>
            <Link
              to="/services"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
          </div>

          <Link to="/" className="flex items-center">
            <span className="text-4xl font-bold text-primary">Pronto</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12 absolute right-0">
            <Link
              to="/how-it-works"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/how-it-works") ? "text-primary" : "text-foreground"
              }`}
            >
              How it works
            </Link>
            <Link
              to="/faqs"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/faqs") ? "text-primary" : "text-foreground"
              }`}
            >
              FAQs
            </Link>
          </div>

          <button
            className="md:hidden p-2 absolute right-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="w-full">Download App</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
