import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { SEOHead } from "@/components/SEOHead";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight,
  Zap,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] bg-white flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Blog Not Found</h2>
        <p className="text-gray-500 mb-6">The article you are looking for might have been moved or updated.</p>
        <Link
          to="/blogs"
          className="px-6 py-3 bg-[#028dcd] text-white font-bold text-sm rounded-full hover:bg-[#039ecc] transition-colors shadow-md shadow-[#028dcd]/25"
        >
          Explore All Guides
        </Link>
      </div>
    );
  }

  // Other related blogs for the sidebar
  const otherBlogs = blogs
    .filter((b) => b.slug !== slug)
    .slice(0, 4);

  const formattedDate = new Date(blog.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.featuredImage,
    dateModified: blog.updatedAt || new Date().toISOString(),
    datePublished: blog.updatedAt || "2025-01-01",
    author: {
      "@type": "Organization",
      name: "Door2fy Tech Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Door2fy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.door2fy.in/door2fy-icon.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.door2fy.in/blog/${blog.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 pt-20">
      <SEOHead
        title={blog.metaTitle}
        description={blog.metaDescription}
        canonicalUrl={`https://www.door2fy.in/blog/${blog.slug}`}
        keywords={blog.metaDescription}
        ogType="article"
        ogImage={blog.featuredImage}
        schema={blogSchema}
      />

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-[#F0FBFF] py-3.5 border-b border-[#E1F7F9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#028dcd] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 flex-shrink-0" />
          <Link to="/blogs" className="hover:text-[#028dcd] transition-colors">
            Tech Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-gray-400 flex-shrink-0" />
          <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">
            {blog.title}
          </span>
        </div>
      </div>

      {/* ================= ARTICLE HEADER ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] font-extrabold text-xs uppercase tracking-wider mb-4 border border-[#028dcd]/20">
          <span>{blog.category}</span>
          {blog.city && blog.city !== "India" && blog.city !== "All Cities" && (
            <>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#028dcd]" />
                {blog.city}
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] mb-4">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#028dcd]" />
            <span>Updated {formattedDate}</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#028dcd]" />
            <span>5 Min Read</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5 text-emerald-600">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified by Door2fy Engineers</span>
          </div>
        </div>
      </div>

      {/* ================= FEATURED IMAGE ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <div className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-lg border border-[#E1F7F9] max-h-[460px] bg-slate-100">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover max-h-[460px]"
            loading="eager"
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Article Body */}
        <article className="lg:col-span-8 space-y-10 text-left">
          {/* Intro Paragraph */}
          <div className="bg-[#F8FDFF] p-6 sm:p-8 rounded-3xl border border-[#E1F7F9]">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              {blog.content.intro}
            </p>
          </div>

          {/* Sections */}
          {blog.content.sections.map((section: any, index: number) => (
            <div key={index} className="space-y-6">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug pt-2 border-b border-gray-100 pb-3 flex items-center gap-2.5">
                  <span className="w-2 h-6 bg-[#028dcd] rounded-full inline-block shrink-0" />
                  <span>{section.heading}</span>
                </h2>
              )}

              {/* Text Paragraph */}
              {section.text && (
                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  {section.text}
                </p>
              )}

              {/* Points */}
              {section.points && (
                <div className="space-y-4">
                  {section.points.map((p: any, i: number) => (
                    <div
                      key={`${p.title}-${i}`}
                      className="bg-[#F8FDFF] border-l-4 border-[#028dcd] p-5 sm:p-6 rounded-r-2xl border-y border-r border-[#E1F7F9] shadow-xs"
                    >
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1.5">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* List */}
              {section.list && (
                <ul className="space-y-3 pl-2">
                  {section.list.map((item: any, i: number) => {
                    const text = typeof item === "string" ? item : item.title || item.description;
                    return (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#028dcd] shrink-0 mt-0.5" />
                        <span>{text}</span>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Steps */}
              {section.steps && (
                <div className="space-y-3 pl-1">
                  {section.steps.map((step: string, i: number) => (
                    <div key={i} className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
                      <div className="w-7 h-7 rounded-xl bg-[#E1F7F9] text-[#028dcd] font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Brands */}
              {section.brands && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {section.brands.map((brand: string, i: number) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 bg-[#F8FDFF] text-gray-800 font-bold text-xs rounded-full border border-[#E1F7F9]"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              )}

              {/* Price / Services Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-[#E1F7F9] shadow-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#E1F7F9]/60 border-b border-[#E1F7F9]">
                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-700">Service</th>
                        <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-gray-700">Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E1F7F9]/50 bg-[#F8FDFF]">
                      {section.table.map((row: any, i: number) => (
                        <tr key={i} className="hover:bg-white transition-colors">
                          <td className="py-3 px-4 text-sm font-semibold text-gray-900">{row.service}</td>
                          <td className="py-3 px-4 text-sm font-bold text-[#028dcd]">{row.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tips */}
              {section.tips && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {section.tips.map((tip: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 bg-[#E1F7F9]/40 border border-[#028dcd]/20 p-3.5 rounded-2xl text-xs sm:text-sm text-gray-800 font-medium"
                    >
                      <Sparkles className="w-4 h-4 text-[#028dcd] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion Box */}
          <div className="bg-gradient-to-br from-[#E1F7F9]/50 to-[#F8FDFF] p-6 sm:p-8 rounded-3xl border border-[#028dcd]/20 space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#028dcd]" />
              <span>Key Takeaway</span>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-normal">
              {blog.content.conclusion}
            </p>
          </div>
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* Quick Repair CTA Card (Upgraded & Themed) */}
          <div className="bg-[#F8FDFF] p-6 sm:p-7 rounded-3xl border border-[#E1F7F9] shadow-[0_15px_35px_rgba(2, 141, 205,0.08)] space-y-5 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#028dcd]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F7F9] text-[#028dcd] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#028dcd] animate-pulse" />
              <span>Engineers Live Nearby</span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">
                Need Laptop Repair?
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Get certified background-verified engineers at your doorstep in <span className="font-bold text-gray-900">30 minutes</span> with genuine parts & 90-day warranty.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#028dcd]" />
                <span>30 Min Doorstep Arrival</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#028dcd]" />
                <span>100% Genuine OEM Parts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#028dcd]" />
                <span>Live Repair in Front of You</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <Link
                to="/services"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#028dcd] hover:bg-[#039ecc] text-white py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-[#028dcd]/25 transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>Book Doorstep Repair</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 py-3 px-6 rounded-full font-bold text-xs border border-gray-200 transition-all text-center"
              >
                <span>Download Android App</span>
              </a>
            </div>
          </div>

          {/* More Recommended Guides */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-4 text-left">
            <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#028dcd]" />
              <span>Recommended Guides</span>
            </h4>

            <div className="space-y-3.5">
              {otherBlogs.map((b) => (
                <Link
                  key={b.slug}
                  to={`/blog/${b.slug}`}
                  className="group block p-3 rounded-2xl bg-[#F8FDFF] hover:bg-white border border-[#E1F7F9] hover:border-[#028dcd]/40 transition-all"
                >
                  <span className="text-[10px] font-bold text-[#028dcd] uppercase tracking-wider block mb-1">
                    {b.category}
                  </span>
                  <h5 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#028dcd] transition-colors leading-snug line-clamp-2">
                    {b.title}
                  </h5>
                </Link>
              ))}
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#028dcd] hover:underline pt-1"
            >
              <span>View All 15+ Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;
