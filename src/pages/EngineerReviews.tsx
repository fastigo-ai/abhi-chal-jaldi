import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_API_KEY = "patgmxjfTIPlbY9H5.913709b38e9a5e28a0247201f1808269abedbf4499b1d14e2f7933534b0b6dc1";
const AIRTABLE_BASE_ID = "appFPJTYE9q21Dlbz";
const AIRTABLE_TABLE = "Engineer Reviews";

export default function EngineerReviews() {
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

      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
          What Engineers Say
        </h2>
        <p className="text-slate-500 mt-3">
          Real feedback from real professionals
        </p>
      </div>

      {/* Reviews Section FIRST */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {reviews.length === 0 ? (
          <p className="text-center col-span-2 text-slate-400">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          reviews.map((r: any) => (
            <div
              key={r.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg text-slate-800">
                  {r.fields.Name}
                </h3>
                <span className="text-yellow-500 text-sm">
                  {Array(r.fields.Rating).fill("⭐").join("")}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {r.fields.Review}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Divider */}
      <div className="border-t pt-16">

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
    </div>
  </section>
);

}