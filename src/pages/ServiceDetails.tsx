import { useParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { services } from "@/data/services";
import { ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-[#028dcd] hover:underline">
          Go back to services
        </Link>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Door2fy",
      "url": "https://www.door2fy.in/"
    },
    "serviceType": "Laptop & Computer Repair",
    "areaServed": "India",
    "url": `https://www.door2fy.in/service/${service.slug}`
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 pt-20">
      <SEOHead
        title={`${service.title} - Doorstep Repair & Support | Door2fy`}
        description={`Get fast doorstep ${service.title.toLowerCase()} service by certified engineers in 5–10 minutes. 90-day warranty, genuine spare parts, and on-site resolution.`}
        canonicalUrl={`https://www.door2fy.in/service/${service.slug}`}
        keywords={`${service.title}, laptop repair, computer support, doorstep service, Door2fy`}
        schema={serviceSchema}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#028dcd] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <Link to="/services" className="hover:text-[#028dcd] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[260px] sm:h-[400px] md:h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 sm:space-y-8 text-left">
          <div>
            <Link to="/services" className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#028dcd] mb-4 sm:mb-6 hover:text-[#039ecc] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-medium">
              {service.description}
            </p>
          </div>

          <div className="bg-[#028dcd]/5 p-5 sm:p-6 md:p-8 rounded-2xl border border-[#028dcd]/10">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center">
              <span className="w-2 h-5 sm:h-6 bg-[#028dcd] rounded-full mr-3 inline-block"></span>
              About this service
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#028dcd] mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Expert technicians with years of experience</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#028dcd] mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Quick diagnosis within 5-10 minutes</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#028dcd] mr-3 sm:mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm sm:text-base md:text-lg">Doorstep service across 50+ cities</p>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3.5 sm:py-4 bg-[#028dcd] text-white text-base sm:text-lg font-bold rounded-full hover:bg-[#039ecc] transition-all duration-300 shadow-lg shadow-[#028dcd]/30 hover:shadow-[#028dcd]/50 transform hover:-translate-y-0.5 text-center"
            >
              Book Service on App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
