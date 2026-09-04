import { useEffect, lazy, Suspense } from "react"; 
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";

// 🧩 Layout Components
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SmoothScroll } from "./components/SmoothScroll";
import { RouteSkeletonLoader } from "./components/skeletons";

// 🏠 Pages (Lazy Loaded)
const Home = lazy(() => import("./pages/Home"));
const WhyUs = lazy(() => import("./pages/WhyUs"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const FAQs = lazy(() => import("./pages/FAQs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CityService = lazy(() => import("./pages/CityService"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Contact = lazy(() => import("./pages/ContactUs"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const AntiDiscriminationPolicy = lazy(() => import("./pages/AntiDiscriminationPolicy"));
const PartnerGuidelines = lazy(() => import("./pages/PartnerGuidelines"));
const PartnerBenefits = lazy(() => import("./pages/PartnerBenefits"));
const PartnerSupport = lazy(() => import("./pages/PartnerSupport"));
const EngineerReviews = lazy(() => import("./pages/EngineerReviews"));

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

// Smooth External Redirect Component for Careers
const CareersRedirect = () => {
  useEffect(() => {
    window.location.replace("https://partner.door2fy.in/");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3 pt-24 text-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#028dcd]"></div>
      <p className="text-slate-600 font-medium text-sm">Opening Door2fy Career Portal...</p>
    </div>
  );
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
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            {/* ✅ Add the tracker inside BrowserRouter so it can use useLocation */}
            <MetaPixelTracker />
            <SmoothScroll />
            
            <ScrollToTop />
            <Navbar />

            <Suspense fallback={<RouteSkeletonLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<WhyUs />} />
                <Route path="/about" element={<WhyUs />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/careers" element={<CareersRedirect />} />
                <Route path="/career" element={<CareersRedirect />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:slug" element={<ServiceDetails />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/refundable-policy" element={<RefundPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/anti-discrimination-policy" element={<AntiDiscriminationPolicy />} />
                <Route path="/partner-guidelines" element={<PartnerGuidelines />} />
                <Route path="/partner-benefits" element={<PartnerBenefits />} />
                <Route path="/engineer-reviews" element={<EngineerReviews />} />
                <Route path="/partner-support" element={<PartnerSupport />} />
                <Route path="/blogs" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path="/best-laptop-service-in/:city" element={<CityService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;