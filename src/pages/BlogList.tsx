import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const BlogList: React.FC = () => {
  const totalBlogs = blogs.length;

  const topTitles = blogs
    .slice(0, 5)
    .map((b) => b.title)
    .join(", ");

  const categories = Array.from(new Set(blogs.map((b) => b.category))).join(", ");

  const metaTitle = `Latest ${totalBlogs}+ Laptop & Tech Blogs | Door2fy`;
  
  const metaDescription = `Explore ${totalBlogs}+ expert laptop and tech blogs on ${
    topTitles || "laptop repair, tech tips"
  }. Read guides, troubleshooting tips, and repair advice from Door2fy.`;  

  const metaKeywords = `laptop blogs, tech blogs, repair guides, ${categories}, ${topTitles}`;

  return (
    <>
      <Helmet>
        {/* Dynamic Title */}
        <title>{metaTitle}</title>

        {/* Dynamic Meta Description */}
        <meta name="description" content={metaDescription} />

        {/* Dynamic Keywords */}
        <meta name="keywords" content={metaKeywords} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.door2fy.in/blogs" />
        <meta property="og:image" content="https://www.door2fy.in/og/blogs.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.door2fy.in/og/blogs.jpg" />
      </Helmet>

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-4 py-28">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogList;
