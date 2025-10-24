import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

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


// ⚙️ Query Client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast Notifications */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* Scroll to top on route change */}
          <ScrollToTop />

          {/* Global Navbar */}
          <Navbar />

          {/* All Routes */}
          <Routes>
            {/* 🏠 General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPage />} />

            {/* 🌆 City-Specific Service Pages */}
            <Route
              path="/best-laptop-service-in/:city"
              element={<CityService />}
            />

            {/* 🚫 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Global Footer */}
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
