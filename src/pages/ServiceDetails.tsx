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
        <Link to="/services" className="text-[#04B6EA] hover:underline">
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
          <Link to="/" className="hover:text-[#04B6EA] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <Link to="/services" className="hover:text-[#04B6EA] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        

        {/* Content Section */}
        <div className="space-y-8">
          <div>
            <Link to="/services" className="inline-flex items-center text-sm font-semibold text-[#04B6EA] mb-6 hover:text-[#039ecc] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {service.description}
            </p>
          </div>

          <div className="bg-[#04B6EA]/5 p-6 md:p-8 rounded-2xl border border-[#04B6EA]/10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-2 h-6 bg-[#04B6EA] rounded-full mr-3 inline-block"></span>
              About this service
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#04B6EA] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Expert technicians with years of experience</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#04B6EA] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Quick diagnosis within 5-10 minutes</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#04B6EA] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Doorstep service across the city</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link
              to="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#04B6EA] text-white text-lg font-semibold rounded-full hover:bg-[#039ecc] transition-all duration-300 shadow-lg shadow-[#04B6EA]/30 hover:shadow-[#04B6EA]/50 transform hover:-translate-y-1"
            >
              Book Service Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
