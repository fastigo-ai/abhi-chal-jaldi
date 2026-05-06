import { useEffect } from "react"; // ✅ Import useEffect
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // ✅ Add useLocation
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";

// 🧩 Layout Components
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

// 🏠 Pages
import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CityService from "./pages/CityService";
import NotFound from "./pages/NotFound";
import BlogList from "./pages/BlogList";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/ContactUs";

// ⚙️ Meta Pixel Tracker Component
// This component listens to URL changes and fires the Pixel event
const MetaPixelTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof (window as any).fbq !== "undefined") {
      (window as any).fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

// ⚙️ Query Client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <HelmetProvider>
          <BrowserRouter>
            {/* ✅ Add the tracker inside BrowserRouter so it can use useLocation */}
            <MetaPixelTracker />
            
            <ScrollToTop />
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/best-laptop-service-in/:city" element={<CityService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;