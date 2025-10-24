import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogDetail from "../components/BlogDetail";

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  return <BlogDetail blog={blog} />;
};

export default BlogPage;
