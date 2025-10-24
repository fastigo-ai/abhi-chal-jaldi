import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const BlogList: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-28">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
