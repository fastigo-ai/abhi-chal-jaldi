import { Helmet } from "react-helmet-async";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const BlogList: React.FC = () => {
  const totalBlogs = blogs.length;
  const topics = blogs.slice(0, 3).map((b) => b.title).join(", ");

  const metaDescription = `Explore ${totalBlogs} latest laptop and tech blogs on topics like ${topics} and more. Stay updated with expert tips from Pronto.`;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Door2fy</title>
        <meta name="description" content={blog.metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
