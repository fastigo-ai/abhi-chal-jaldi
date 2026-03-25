import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import axios from "axios";

const AIRTABLE_API_KEY = "patgmxjfTIPlbY9H5.913709b38e9a5e28a0247201f1808269abedbf4499b1d14e2f7933534b0b6dc1";
const AIRTABLE_BASE_ID = "appFPJTYE9q21Dlbz";
const AIRTABLE_TABLE = "Engineer Reviews";

export default function EngineerReviews({ showList = true, showForm = true }: { showList?: boolean; showForm?: boolean } = {}) {
  const [reviews, setReviews] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  // Fetch reviews from Airtable
  useEffect(() => {
    axios
      .get(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`, {
        headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
      })
      .then((res) => setReviews(res.data.records))
      .catch(console.error);
  }, []);

  // Submit review to Airtable
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !review) return;

    await axios.post(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
      { fields: { Name: name, Rating: rating, Review: review } },
      { headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}`, "Content-Type": "application/json" } }
    );

    setName("");
    setReview("");
    setRating(5);
    alert("Review submitted!");
  };

  return (
  <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
    <div className="max-w-5xl mx-auto px-6">

      {showList && (
        <>
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              What Engineers Say
        </h2>
        <p className="text-slate-500 mt-3">
          Real feedback from real professionals
        </p>
      </div>

      {/* Reviews Marquee Section */}
      <div className="relative w-full overflow-hidden flex flex-col gap-8 pb-10">
        {reviews.length === 0 ? (
          <p className="text-center w-full text-slate-400">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          <>
            {/* Row 1: Right to Left */}
            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
              {[...reviews.slice(0, Math.ceil(reviews.length / 2)), ...reviews.slice(0, Math.ceil(reviews.length / 2)), ...reviews.slice(0, Math.ceil(reviews.length / 2)), ...reviews.slice(0, Math.ceil(reviews.length / 2))].map((r: any, idx) => (
                <div
                  key={`${r.id}-r1-${idx}`}
                  className="min-w-[350px] max-w-[350px] p-8 rounded-[2rem] bg-slate-50/40 border border-slate-200 border-dashed relative overflow-hidden flex-shrink-0 mx-4 transition-shadow hover:shadow-lg"
                >
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }} />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <img src={`https://ui-avatars.com/api/?name=${r.fields.Name}&background=random&color=fff`} alt={r.fields.Name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                        <div>
                          <h4 className="font-bold text-slate-800">{r.fields.Name}</h4>
                          <span className="text-yellow-500 text-xs">
                            {Array(r.fields.Rating).fill("⭐").join("")}
                          </span>
                        </div>
                      </div>
                      <Quote className="text-slate-300/60 w-8 h-8 rotate-180" fill="currentColor" />
                    </div>
                    <hr className="border-t border-dashed border-slate-200 mb-6" />
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">
                      {r.fields.Review}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: Left to Right */}
            <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] w-max">
              {[...reviews.slice(Math.ceil(reviews.length / 2)), ...reviews.slice(Math.ceil(reviews.length / 2)), ...reviews.slice(Math.ceil(reviews.length / 2)), ...reviews.slice(Math.ceil(reviews.length / 2))].map((r: any, idx) => (
                <div
                  key={`${r.id}-r2-${idx}`}
                  className="min-w-[350px] max-w-[350px] p-8 rounded-[2rem] bg-slate-50/40 border border-slate-200 border-dashed relative overflow-hidden flex-shrink-0 mx-4 transition-shadow hover:shadow-lg"
                >
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }} />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <img src={`https://ui-avatars.com/api/?name=${r.fields.Name}&background=random&color=fff`} alt={r.fields.Name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                        <div>
                          <h4 className="font-bold text-slate-800">{r.fields.Name}</h4>
                          <span className="text-yellow-500 text-xs">
                            {Array(r.fields.Rating).fill("⭐").join("")}
                          </span>
                        </div>
                      </div>
                      <Quote className="text-slate-300/60 w-8 h-8 rotate-180" fill="currentColor" />
                    </div>
                    <hr className="border-t border-dashed border-slate-200 mb-6" />
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">
                      {r.fields.Review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
        </>
      )}

      {showForm && (
        <>
        {showList && <div className="border-t pt-16" />}
        <div className={showList ? "" : "pt-8"}>

          {/* Form Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-800">
            Leave a Review
          </h3>
        </div>

        {/* Submit Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg border focus:ring-2 focus:ring-[#53BED1] outline-none"
            required
          />

          <textarea
            placeholder="Write your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="p-3 rounded-lg border focus:ring-2 focus:ring-[#53BED1] outline-none"
            rows={4}
            required
          />

          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="p-3 rounded-lg border focus:ring-2 focus:ring-[#53BED1] outline-none"
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>
                {r} Star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-[#53BED1] text-white py-3 rounded-lg font-semibold hover:bg-[#3da9bb] transition"
          >
            Submit Review
          </button>
        </form>
        </div>
        </>
      )}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 40s linear infinite;
      }
    `}</style>
  </section>
);

}