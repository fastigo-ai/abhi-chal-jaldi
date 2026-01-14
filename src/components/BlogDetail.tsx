import { useParams } from "react-router-dom";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white max-w-6xl px-4 py-20 mx-auto">
      {/* ================= HEADER ================= */}
      <div className="container mx-auto px-4 pt-10 pb-6">
        <p className="text-sm text-[#53BED1] font-medium mb-2 uppercase tracking-wide">
          {blog.category} {blog.city && `• ${blog.city}`}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
          {blog.title}
        </h1>

        <p className="text-gray-500 text-sm italic">
          Last Updated: {blog.updatedAt}
        </p>
      </div>

      {/* ================= FEATURED IMAGE ================= */}
      <div className="container mx-auto px-4">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-[250px] md:h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <article className="lg:col-span-8">
          <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light">
            {blog.content.intro}
          </p>

          {blog.content.sections.map((section: any, index: number) => (
            <div key={index} className="mb-12">
              {section.heading && (
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                  {section.heading}
                </h2>
              )}

              {/* Points */}
              {section.points && (
                <div className="space-y-6">
                  {section.points.map((p: any, i: number) => (
                    <div
                      key={`${p.title}-${i}`}
                      className="bg-white border-l-4 border-[#53BED1] p-5 shadow-sm rounded-r-lg"
                    >
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        {p.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* List */}
              {section.list && (
                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                  {section.list.map((item: string, i: number) => (
                    <li key={`${item}-${i}`} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Steps */}
              {section.steps && (
                <ol className="space-y-4">
                  {section.steps.map((step: string, i: number) => (
                    <li key={`${step}-${i}`} className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-[#53BED1] text-white rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 text-lg pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              )}

              {/* Comparison Table */}
              {section.comparisonTable && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border border-gray-200 shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-4 text-left font-bold">
                          Traditional Repair
                        </th>
                        <th className="border p-4 text-left font-bold text-[#53BED1]">
                          Doorstep Repair
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.comparisonTable.map((row: any, i: number) => (
                        <tr key={i}>
                          <td className="border p-4 text-gray-600">
                            {row.traditional}
                          </td>
                          <td className="border p-4 text-gray-800 font-medium">
                            {row.doorstep}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Generic Table */}
              {section.table && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        {Object.keys(section.table[0]).map((key, i) => (
                          <th key={`${key}-${i}`} className="p-4 text-left">
                            {key.replace(/([A-Z])/g, " $1")}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row: any, i: number) => (
                        <tr key={i} className={i % 2 ? "bg-gray-50" : "bg-white"}>
                          {Object.values(row).map((val: any, j: number) => (
                            <td key={`${i}-${j}`} className="border p-4 text-gray-700">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tips */}
              {section.tips && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {section.tips.map((tip: string, i: number) => (
                    <div
                      key={`${tip}-${i}`}
                      className="flex items-center gap-3 bg-[#53BED1]/10 border-l-4 border-[#53BED1] p-4 rounded-r-lg shadow-sm"
                    >
                      <span className="text-[#53BED1] font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Note */}
              {(section.note || section.summary) && (
                <p className="mt-4 p-4 bg-[#53BED1]/10 border border-[#53BED1]/30 rounded text-gray-800 italic">
                  <strong>Note:</strong> {section.note || section.summary}
                </p>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-[#53BED1]/10 p-8 rounded-2xl mt-16 border border-[#53BED1]/30">
            <h3 className="text-2xl font-bold mb-4 text-[#53BED1]">
              Final Thoughts
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              {blog.content.conclusion}
            </p>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4">Need Laptop Repair?</h4>
              <p className="text-gray-400 mb-6">
                Book professional doorstep laptop repair with verified technicians.
              </p>
              <a
                href="https://www.door2fy.in"
                className="block text-center bg-[#53BED1] hover:bg-[#53BED1]/90 text-black py-3 rounded-xl font-bold transition-transform hover:scale-105"
              >
                Book Your Repair Now
              </a>
            </div>

            {blog.tags && (
              <div className="bg-gray-50 p-6 rounded-2xl border">
                <h4 className="font-bold mb-4">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag: string, i: number) => (
                    <span
                      key={`${tag}-${i}`}
                      className="px-3 py-1 bg-white border text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetail;
