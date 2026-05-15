import { Link } from "react-router-dom";
import { Blog } from "../data/blogs";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // updatedAt ko readable format me convert karna
  const formattedDate = new Date(blog.updatedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link to={`/blog/${blog.slug}`}>
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1">
        <div className="relative">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-5 flex flex-col justify-between h-[220px]">
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h2>

          {/* Updated date */}
          <p className="text-gray-400 text-xs mb-2">
            Updated on {formattedDate}
          </p>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.metaDescription.slice(0, 140)}...
          </p>

          <div>
            <span
              className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
