import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="space-y-4 text-start">
            <h3 className="text-2xl font-bold">Door2fy</h3>
            <p className="text-sm opacity-90 max-w-xs mx-auto">
              India's fastest house help service. Professional cleaning exactly
              when you need it.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 text-start">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/why-us"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4 text-start md:col-start-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center justify-start space-x-2">
                <Phone className="h-5 w-5" />
                <span>+91 99104 83315</span>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <Mail className="h-5 w-5" />
                <span>support@withDoor2fy.com</span>
              </div>
              <div className="flex items-center justify-start space-x-2">
                <MapPin className="h-5 w-5" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-black/20 text-center text-sm opacity-90">
          <p>&copy; 2025 Door2fy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
