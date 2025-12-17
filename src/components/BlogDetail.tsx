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
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {blog.title}
      </h1>

      {/* Meta Description */}
      <p className="text-gray-600 mb-6">{blog.metaDescription}</p>

      {/* Featured Image */}
      <img
        src={blog.featuredImage}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-md mb-8"
      />

      {/* Intro */}
      <p className="text-lg text-gray-700 mb-10">
        {blog.content.intro}
      </p>

      {/* Sections */}
      {blog.content.sections.map((section, index) => (
        <section key={index} className="mb-12">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            {section.heading}
          </h2>

          {/* LIST (title + description) */}
          {section.list && (
            <div className="space-y-4">
              {section.list.map((item, i) => (
                <div key={i}>
                  <p className="font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* POINTS (title + description OR string) */}
          {section.points && (
            <ul className="space-y-3 mt-4">
              {section.points.map((point: any, i: number) => (
                <li key={i} className="text-gray-700">
                  {typeof point === "string" ? (
                    point
                  ) : (
                    <>
                      <strong>{point.title}:</strong> {point.description}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* BENEFITS (string list) */}
          {section.benefits && (
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              {section.benefits.map((benefit: string, i: number) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          )}

          {/* TABLE (Dynamic columns) */}
          {section.table && section.table.length > 0 && (
            <div className="overflow-x-auto mt-6">
              <table className="w-full border border-gray-300 border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(section.table[0]).map((key) => (
                      <th
                        key={key}
                        className="border p-2 text-left capitalize"
                      >
                        {key.replace(/_/g, " ")}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.map((row: any, i: number) => (
                    <tr key={i}>
                      {Object.values(row).map((value: any, j: number) => (
                        <td key={j} className="border p-2 text-gray-700">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* STEPS */}
          {section.steps && (
            <ol className="list-decimal pl-6 space-y-2 mt-4 text-gray-700">
              {section.steps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )}

          {/* TIPS */}
          {section.tips && (
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              {section.tips.map((tip: string, i: number) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}

          {/* BRANDS */}
          {section.brands && (
            <div className="flex flex-wrap gap-2 mt-4">
              {section.brands.map((brand: string, i: number) => (
                <span
                  key={i}
                  className="bg-gray-100 border px-3 py-1 rounded text-sm"
                >
                  {brand}
                </span>
              ))}
            </div>
          )}

          {/* AREAS */}
          {section.areas && (
            <div className="flex flex-wrap gap-2 mt-4">
              {section.areas.map((area: string, i: number) => (
                <span
                  key={i}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          )}

          {/* TEXT */}
          {section.text && (
            <p className="text-gray-700 mt-4">
              {section.text}
            </p>
          )}

          {/* NOTE */}
          {section.note && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-5 rounded">
              <p className="text-sm text-gray-800">
                {section.note}
              </p>
            </div>
          )}
        </section>
      ))}

      {/* Conclusion */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mt-12 rounded">
        <p className="text-lg text-gray-800 font-medium">
          {blog.content.conclusion}
        </p>
      </div>
    </main>
  );
};

export default BlogDetail;
