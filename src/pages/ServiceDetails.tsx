import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { services } from "@/data/services";
import { ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-[#53BED1] hover:underline">
          Go back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 pt-20">
      <Helmet>
        <title>{service.title} | Door2fy</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#53BED1] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <Link to="/services" className="hover:text-[#53BED1] transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0" />
          <span className="text-gray-900 font-medium">{service.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#53BED1]/10 border border-gray-100 relative group">
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
            <Link to="/services" className="inline-flex items-center text-sm font-semibold text-[#53BED1] mb-6 hover:text-[#3FA4B5] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              {service.description}
            </p>
          </div>

          <div className="bg-[#53BED1]/5 p-6 md:p-8 rounded-2xl border border-[#53BED1]/10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <span className="w-2 h-6 bg-[#53BED1] rounded-full mr-3 inline-block"></span>
              About this service
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#53BED1] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Expert technicians with years of experience</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#53BED1] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Quick diagnosis within 5-10 minutes</p>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="w-6 h-6 text-[#53BED1] mr-4 flex-shrink-0 mt-0.5" />
              <p className="text-slate-700 text-lg">Doorstep service across the city</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link
              to="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#53BED1] text-white text-lg font-semibold rounded-full hover:bg-[#3FA4B5] transition-all duration-300 shadow-lg shadow-[#53BED1]/30 hover:shadow-[#53BED1]/50 transform hover:-translate-y-1"
            >
              Book Service Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
