import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Blog } from "../data/blogs";
import { Calendar, ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index = 0 }) => {
  const formattedDate = new Date(blog.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min((index % 6) * 0.07, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col h-full"
    >
      <Link
        to={`/blog/${blog.slug}`}
        className="group flex flex-col h-full bg-[#F8FDFF] hover:bg-white rounded-3xl transition-all duration-400 hover:-translate-y-1.5 overflow-hidden"
      >
        {/* Featured Image Container */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 flex-shrink-0">
          <motion.img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-106"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/95 backdrop-blur-md text-[#028dcd] font-extrabold text-[10px] uppercase tracking-wider rounded-full">
              <Sparkles className="w-2.5 h-2.5 fill-[#028dcd]" />
              <span>{blog.category}</span>
            </span>

            {blog.city && blog.city !== "India" && blog.city !== "All Cities" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold rounded-full">
                <MapPin className="w-2.5 h-2.5 text-[#028dcd]" />
                <span>{blog.city}</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow text-left space-y-4">
          <div className="space-y-2.5">
            {/* Meta Timestamp & Reading Time */}
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400">
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3 h-3 text-[#028dcd]" />
                <span>{formattedDate}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3 h-3 text-[#028dcd]" />
                <span>4 min read</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#028dcd] transition-colors leading-snug line-clamp-2">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
              {blog.metaDescription}
            </p>
          </div>

          {/* Card Footer */}
          <div className="pt-3.5 flex items-center justify-between mt-auto">
            <span className="text-xs font-bold text-slate-500 group-hover:text-[#028dcd] transition-colors">
              Read Complete Guide
            </span>
            <div className="w-7 h-7 rounded-full bg-[#E1F7F9] text-[#028dcd] flex items-center justify-center transition-all duration-300 group-hover:bg-[#028dcd] group-hover:text-white group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
