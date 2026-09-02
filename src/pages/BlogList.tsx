import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";
import {
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Assets
import phone1 from "@/assets/phone1.png";
import blogsHeroLaptop from "@/assets/blogs-hero-laptop.png";

const ITEMS_PER_PAGE = 6; // 2 rows of 3 cards on desktop

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesSectionRef = useRef<HTMLElement>(null);

  const totalBlogs = blogs.length;

  // Filtered blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return blogs;
    const query = searchQuery.toLowerCase().trim();
    return blogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.metaDescription.toLowerCase().includes(query) ||
        blog.slug.toLowerCase().includes(query) ||
        (blog.city && blog.city.toLowerCase().includes(query)) ||
        blog.category.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  // Reset to page 1 whenever search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;

  // Sliced blogs for current page
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    if (articlesSectionRef.current) {
      articlesSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Featured blog (first blog or summer overheating guide)
  const featuredBlog =
    blogs.find((b) => b.slug === "why-laptops-overheat-in-delhi-summers") || blogs[0];

  const metaTitle = `Latest ${totalBlogs}+ Laptop Repair Guides & Tech Blogs | Door2fy`;
  const metaDescription = `Explore ${totalBlogs}+ expert laptop troubleshooting tips, hardware repair guides, SSD upgrades, and MacBook advice written by certified Door2fy technicians.`;
  const metaKeywords = `laptop blogs, computer repair guides, MacBook troubleshooting, slow laptop fixes, SSD upgrade tips, Door2fy`;

  const startIndexDisplay = filteredBlogs.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndexDisplay = Math.min(currentPage * ITEMS_PER_PAGE, filteredBlogs.length);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-[#04B6EA]/20 selection:text-[#04B6EA]">
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        canonicalUrl="https://www.door2fy.in/blogs"
        keywords={metaKeywords}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-gradient-to-b from-[#F0FBFF] via-[#F8FDFF] to-white overflow-hidden relative pt-24 pb-12 lg:pt-32 lg:pb-14 flex flex-col justify-center">
        {/* Floating Ambient Glow Orbs */}
        <div className="absolute top-[-15%] right-[-10%] w-[550px] h-[550px] bg-[#04B6EA]/15 rounded-full -z-10 blur-[130px] pointer-events-none transform-gpu animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-[#38BDF8]/12 rounded-full -z-10 blur-[120px] pointer-events-none transform-gpu" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Text & Search (6/12) */}
            <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
              {/* Status Pill with Motion */}
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#04B6EA] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#04B6EA]"></span>
                </span>
                <span className="text-xs font-bold text-slate-800 tracking-wide">
                  Door2fy Tech Hub <span className="text-slate-300">·</span> {totalBlogs}+ Certified Guides
                </span>
              </motion.div>

              {/* Headline with Motion */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]"
              >
                Laptop Repair Guides & <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04B6EA] to-[#0284c7]">
                  Tech Insights
                </span>
              </motion.h1>

              {/* Subtitle with Motion */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl"
              >
                Practical troubleshooting steps, hardware maintenance advice, and speed optimization articles written directly by our certified doorstep laptop engineers.
              </motion.p>

              {/* Search Box with Motion */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="pt-1 max-w-xl"
              >
                <div className="relative flex items-center rounded-full bg-[#F0FBFF]">
                  <div className="absolute left-4 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-[#04B6EA]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by issue (e.g. slow laptop, overheating, SSD upgrade)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-14 py-3.5 sm:py-4 rounded-full bg-[#F0FBFF] text-sm font-medium text-slate-800 focus:outline-none transition-all placeholder:text-slate-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 px-2.5 py-1 text-xs font-bold text-slate-400 hover:text-slate-700 bg-white rounded-full transition-colors cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column: 3D Laptop with Pedestal & Floating Icons (6/12) */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex justify-center lg:justify-end items-center relative order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[420px] sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px]">
                {/* Ambient glow behind laptop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[360px] bg-[#04B6EA]/20 rounded-full blur-3xl pointer-events-none -z-10" />
                <img
                  src={blogsHeroLaptop}
                  alt="Door2fy Laptop Repair Guides & Tech Insights"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_45px_rgba(4,182,234,0.18)] transform transition-transform duration-700 hover:scale-[1.03]"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED SPOTLIGHT POST ================= */}
      {!searchQuery && featuredBlog && (
        <section className="pt-12 pb-6 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <Link
                to={`/blog/${featuredBlog.slug}`}
                className="relative block bg-gradient-to-br from-[#F8FDFF] to-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 transition-all duration-500 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-slate-100">
                    <motion.img
                      src={featuredBlog.featuredImage}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-[#04B6EA] font-extrabold text-xs uppercase tracking-wider rounded-full">
                        <Sparkles className="w-3.5 h-3.5 fill-[#04B6EA]" />
                        <span>Featured Guide</span>
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4 text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#04B6EA] bg-[#E1F7F9] px-3 py-1 rounded-full w-fit">
                      <TrendingUp className="w-4 h-4" />
                      <span>Most Read This Month</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 group-hover:text-[#04B6EA] transition-colors leading-tight">
                      {featuredBlog.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal line-clamp-3">
                      {featuredBlog.metaDescription}
                    </p>

                    <div className="pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                        <div className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-[#04B6EA]" />
                          <span>Updated {featuredBlog.updatedAt}</span>
                        </div>
                        <span>·</span>
                        <div className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-[#04B6EA]" />
                          <span>5 min read</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#04B6EA] group-hover:translate-x-1.5 transition-transform">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================= ALL BLOGS GRID WITH PAGINATION ================= */}
      <section ref={articlesSectionRef} className="py-12 lg:py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header & Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : "All Tech & Repair Articles"}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal">
                Expert solutions, repair walkthroughs, and practical guides by Door2fy engineers.
              </p>
            </div>

            <span className="text-xs font-bold text-slate-600 bg-slate-100/90 px-3.5 py-1.5 rounded-full w-fit">
              {filteredBlogs.length > 0
                ? `Showing ${startIndexDisplay}–${endIndexDisplay} of ${filteredBlogs.length} articles`
                : "0 articles found"}
            </span>
          </motion.div>

          {/* No Articles Found State */}
          {filteredBlogs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-[#F8FDFF] rounded-3xl p-8 max-w-lg mx-auto"
            >
              <BookOpen className="w-12 h-12 text-[#04B6EA] mx-auto mb-3 opacity-60" />
              <h3 className="text-xl font-bold text-slate-900 mb-1">No articles found</h3>
              <p className="text-slate-500 text-sm mb-5">
                Try clearing your search query to see all available articles.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-5 py-2.5 rounded-full bg-[#04B6EA] hover:bg-[#039ecc] text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Reset Search
              </button>
            </motion.div>
          ) : (
            <>
              {/* Articles Grid with Framer Motion Stagger */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                {paginatedBlogs.map((blog, idx) => (
                  <BlogCard key={blog.slug} blog={blog} index={idx} />
                ))}
              </div>

              {/* Modern Pagination Controls */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <p className="text-xs text-slate-500 font-medium">
                    Page <span className="font-bold text-slate-900">{currentPage}</span> of{" "}
                    <span className="font-bold text-slate-900">{totalPages}</span>
                  </p>

                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#04B6EA] transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-9 h-9 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center justify-center ${
                            currentPage === pageNum
                              ? "bg-[#04B6EA] text-white scale-105"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#04B6EA]"
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-[#04B6EA] transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                      aria-label="Next Page"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ================= APP DOWNLOAD & ON-THE-GO BANNER ================= */}
      <section className="py-14 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-[#F8FDFF] via-[#F0FBFF] to-white rounded-[2.5rem] md:rounded-[3.5rem] px-8 lg:px-16 py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
              {/* Phones Image with subtle float */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative w-full lg:w-[50%] flex justify-center lg:justify-start transform transition-transform duration-700 group-hover:scale-105 pb-8 lg:pb-0"
              >
                <img
                  src={phone1}
                  alt="Door2fy Mobile App"
                  className="w-full max-w-[260px] lg:max-w-[420px] select-none pointer-events-none"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-[48%] text-center lg:text-left space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1F7F9] text-[#04B6EA] text-xs font-extrabold">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>Instant Tech Assistance</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                  Need an Engineer <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#04B6EA] to-[#0284c7]">
                    Right Now?
                  </span>
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-normal">
                  Our background-verified certified laptop engineers arrive in 10–30 minutes to solve your issues at your doorstep.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <Link
                    to="/services"
                    className="px-6 py-3.5 rounded-full bg-[#04B6EA] hover:bg-[#039ecc] text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 cursor-pointer"
                  >
                    Book Doorstep Repair
                  </Link>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Door2fy&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-all hover:scale-105 active:scale-95 rounded-xl overflow-hidden block"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-10 md:h-11 w-auto"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
