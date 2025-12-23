import { useParams } from "react-router-dom";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // Ensure the data source matches your export (e.g., blogPosts or blogs)
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
        <p className="text-sm text-primary font-medium mb-2 uppercase tracking-wide">
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
          {/* Intro */}
          <p className="text-xl text-gray-700 mb-10 leading-relaxed font-light">
            {blog.content.intro}
          </p>

          {/* Dynamic Sections */}
          {blog.content.sections.map((section: any, index: number) => (
            <div key={index} className="mb-12">
              {section.heading && (
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
                  {section.heading}
                </h2>
              )}

              {/* 1. Points with Title/Description */}
              {section.points && (
                <div className="space-y-6">
                  {section.points.map((p: any, i: number) => (
                    <div key={i} className="bg-white border-l-4 border-primary p-5 shadow-sm rounded-r-lg">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{p.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* 2. Simple List */}
              {section.list && (
                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
                  {section.list.map((item: string, i: number) => (
                    <li key={i} className="pl-2">{item}</li>
                  ))}
                </ul>
              )}

              {/* 3. Steps (Ordered List) */}
              {section.steps && (
                <ol className="space-y-4">
                  {section.steps.map((step: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 text-lg pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              )}

              {/* 4. Comparison Table (Custom for your data) */}
              {section.comparisonTable && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-200 shadow-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-4 text-left font-bold text-gray-700">Traditional Repair</th>
                        <th className="border p-4 text-left font-bold text-primary">Doorstep Repair</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.comparisonTable.map((row: any, i: number) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border p-4 text-gray-600">{row.traditional}</td>
                          <td className="border p-4 font-medium text-gray-800">{row.doorstep}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 5. Generic/Issue Table */}
              {section.table && (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        {Object.keys(section.table[0]).map((key) => (
                          <th key={key} className="border border-gray-700 p-4 text-left capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.map((row: any, i: number) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {Object.values(row).map((val: any, j: number) => (
                            <td key={j} className="border p-4 text-gray-700">{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 6. Tips */}
              {section.tips && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {section.tips.map((tip: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{tip}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Notes or Summary */}
              {(section.note || section.summary) && (
                <p className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800 italic">
                  <strong>Note:</strong> {section.note || section.summary}
                </p>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-primary/5 p-8 rounded-2xl mt-16 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary">Final Thoughts</h3>
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
              <p className="text-gray-400 mb-6 leading-relaxed">
                Don't let tech issues slow you down. Book professional doorstep laptop repair with verified technicians in your city.
              </p>
              <ul className="text-sm space-y-3 mb-8 text-gray-300">
                <li>• Certified Technicians</li>
                <li>• Transparent Pricing</li>
                <li>• Service at Home/Office</li>
                <li>• Warranty on Repairs</li>
              </ul>
              <a
                href="https://www.door2fy.in"
                className="block text-center bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-all transform hover:scale-105"
              >
                Book Your Repair Now
              </a>
            </div>

            {/* Tags Section */}
            {blog.tags && (
               <div className="bg-gray-50 p-6 rounded-2xl border">
                 <h4 className="font-bold mb-4">Related Topics</h4>
                 <div className="flex flex-wrap gap-2">
                   {blog.tags.map((tag: string, i: number) => (
                     <span key={i} className="px-3 py-1 bg-white border text-gray-600 text-xs rounded-full">
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