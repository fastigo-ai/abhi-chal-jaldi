import React from "react";
import { Blog } from "../data/blogs";

interface BlogDetailProps {
  blog?: Blog;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog }) => {
  if (!blog) {
    return <p className="text-center text-gray-600 py-20">Blog not found!</p>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.metaDescription}</p>

      <img
        src={blog.featuredImage}
        alt={blog.title}
        className="w-full h-96 object-fill rounded-md mb-8"
      />

      <p className="text-lg text-gray-700 mb-8">{blog.content.intro}</p>

      {blog.content.sections.map((section, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {section.heading}
          </h2>

          {section.points && (
            <ul className="space-y-3">
              {section.points.map((p, i) => (
                <li key={i}>
                  <strong>{p.title}:</strong> {p.description}
                </li>
              ))}
            </ul>
          )}

          {section.list && (
            <ul className="list-disc pl-6 text-gray-700">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.brands && (
            <div className="flex flex-wrap gap-2">
              {section.brands.map((brand, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded text-sm border"
                >
                  {brand}
                </span>
              ))}
            </div>
          )}

          {section.areas && (
            <div className="flex flex-wrap gap-2 mt-2">
              {section.areas.map((area, i) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          )}

          {section.table && (
            <table className="w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Service Type</th>
                  <th className="border p-2 text-left">Estimated Cost (INR)</th>
                </tr>
              </thead>
              <tbody>
                {section.table.map((row, i) => (
                  <tr key={i}>
                    <td className="border p-2">{row.service}</td>
                    <td className="border p-2">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {section.steps && (
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              {section.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}

          {section.tips && (
            <ul className="list-disc pl-6 space-y-2 mt-3">
              {section.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}

          {section.text && <p className="text-gray-700">{section.text}</p>}
        </section>
      ))}

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-10 rounded">
        <p className="text-lg text-gray-800 font-medium">
          {blog.content.conclusion}
        </p>
      </div>
    </main>
  );
};

export default BlogDetail;
