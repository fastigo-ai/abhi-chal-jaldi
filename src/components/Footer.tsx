import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pronto</h3>
            <p className="text-sm opacity-90">
              India's fastest house help service. Professional cleaning exactly when you need it.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/why-us" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Mopping & Cleaning</li>
              <li>Laundry Services</li>
              <li>Window Cleaning</li>
              <li>Kitchen Deep Clean</li>
              <li>Bathroom Cleaning</li>
              <li>Utensils Washing</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 99104 83315</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@withpronto.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-90">
          <p>&copy; 2025 Pronto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
