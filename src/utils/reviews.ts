import { useState, useEffect } from "react";
import axios from "axios";

export interface ReviewItem {
  id: string | number;
  name: string;
  city?: string;
  location?: string;
  rating: number;
  review: string;
  createdTime?: string;
}

export const AIRTABLE_API_KEY =
  "patgmxjfTIPlbY9H5.913709b38e9a5e28a0247201f1808269abedbf4499b1d14e2f7933534b0b6dc1";
export const AIRTABLE_BASE_ID = "appFPJTYE9q21Dlbz";
export const AIRTABLE_TABLE = "Engineer Reviews";

export const fallbackReviews: ReviewItem[] = [
  {
    id: "fb-1",
    name: "Aarav Sharma",
    city: "Noida",
    location: "Noida Sector 62",
    rating: 5,
    review: "Door2Fy fixed my laptop quickly. Professional engineer reached within 15 minutes and smooth doorstep service.",
  },
  {
    id: "fb-2",
    name: "Sneha Verma",
    city: "Ghaziabad",
    location: "Indirapuram, Ghaziabad",
    rating: 5,
    review: "Quick response and efficient troubleshooting. The technician repaired my MacBook screen on the spot.",
  },
  {
    id: "fb-3",
    name: "Karan Mehta",
    city: "Greater Noida",
    location: "Greater Noida",
    rating: 5,
    review: "Excellent hardware repair service. My laptop was repaired faster than expected and is working perfectly now.",
  },
  {
    id: "fb-4",
    name: "Ritika Singh",
    city: "Delhi",
    location: "Delhi NCR",
    rating: 5,
    review: "Highly professional team with genuine support. The technician arrived on time and handled the system setup perfectly.",
  },
  {
    id: "fb-5",
    name: "Aditya Rao",
    city: "Noida",
    location: "Sector 18, Noida",
    rating: 5,
    review: "Door2Fy provides reliable IT services at affordable pricing. Saved a lot of time for our home office setup.",
  },
  {
    id: "fb-6",
    name: "Pooja Malhotra",
    city: "Gurugram",
    location: "Gurugram",
    rating: 5,
    review: "Great experience with their on-site support. The technician was polite, responsive, and technically strong.",
  },
];

export async function fetchAirtableReviews(): Promise<ReviewItem[]> {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    );

    const records = response.data?.records || [];
    if (!Array.isArray(records) || records.length === 0) {
      return fallbackReviews;
    }

    const parsed: ReviewItem[] = records
      .filter((r: any) => r.fields && r.fields.Review && r.fields.Review.trim().length > 3)
      .map((r: any) => {
        let rawReview = (r.fields.Review || "").trim();
        let city = (r.fields.City || r.fields.Location || "").trim();

        // If City is prefixed in Review like "[Noida] great service", extract it
        const prefixMatch = rawReview.match(/^\[(.*?)\]\s*(.*)$/);
        if (prefixMatch) {
          if (!city) city = prefixMatch[1].trim();
          rawReview = prefixMatch[2].trim();
        }

        return {
          id: r.id,
          name: (r.fields.Name || "Verified Customer").trim(),
          city: city || "India",
          location: city || (r.fields.Location || "Doorstep Client").trim(),
          rating: Math.min(5, Math.max(1, Number(r.fields.Rating) || 5)),
          review: rawReview,
          createdTime: r.createdTime,
        };
      });

    // Merge fetched reviews with fallback reviews
    const combined = [...parsed, ...fallbackReviews];
    const unique = combined.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.review.toLowerCase() === item.review.toLowerCase())
    );

    return unique.length > 0 ? unique : fallbackReviews;
  } catch (error) {
    console.error("Failed to fetch Airtable reviews:", error);
    return fallbackReviews;
  }
}

export function useReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(fallbackReviews);
  const [loading, setLoading] = useState<boolean>(true);

  const loadReviews = async () => {
    setLoading(true);
    const data = await fetchAirtableReviews();
    setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  return { reviews, loading, refreshReviews: loadReviews };
}
