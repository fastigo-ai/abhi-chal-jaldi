import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function Services() {
  // Same masonry layout logic
  const layout = [
    "md:col-span-2 md:row-span-3 h-[250px] md:h-auto",
    "md:col-span-1 md:row-span-2 h-[250px] md:h-auto",
    "md:col-span-1 md:row-span-2 h-[250px] md:h-auto",
    "md:col-span-2 md:row-span-2 h-[250px] md:h-auto",
    "md:col-span-1 md:row-span-2 h-[250px] md:h-auto",
    "md:col-span-1 md:row-span-1 h-[250px] md:h-auto",
    "md:col-span-1 md:row-span-1 h-[250px] md:h-auto",
    "md:col-span-2 md:row-span-2 h-[250px] md:h-auto",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 font-sans antialiased text-slate-900">
      <Helmet>
        <title>Our Services | Door2fy</title>
        <meta
          name="description"
          content="Fast doorstep laptop & tech support services. Expert diagnosis in 5–10 minutes."
        />
      </Helmet>

      {/* Header */}
      <div className="text-center mb-20  pt-12 px-4 sm:px-6 lg:px-8 bg-[#53BED1]/5 relative overflow-hidden">
          <h1 className="text-3xl md:text-6xl font-semibold text-slate-900 leading-snug">
            Professional <br /> Engineering Services
          </h1>
        <p className="text-md md:text-xl text-slate-600 font-medium italic max-w-2xl mx-auto mt-4">
          Door2fy • Quick Tech Support
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-4
            md:auto-rows-[180px]
            gap-6
            mb-32
          "
        >
          {services.map((service, index) => (
            <Link
              to={`/service/${service.slug}`}
              key={service.id}
              className={`${layout[index % layout.length]}
                group relative overflow-hidden rounded-xl shadow-lg cursor-pointer block`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/90 via-black/50 to-transparent
                  opacity-100 md:opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  flex items-end
                "
              >
                <div
                  className="
                    p-6 text-white
                    translate-y-0 md:translate-y-6 group-hover:translate-y-0
                    transition-transform duration-500
                  "
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.description}
                  </p>

                  <span className="inline-block mt-4 text-sm font-medium border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                    Get Support →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
