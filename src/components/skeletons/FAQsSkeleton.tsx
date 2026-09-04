import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const FAQsSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />

          {/* Search Box */}
          <div className="max-w-lg mx-auto pt-2">
            <Skeleton className="h-12 w-full rounded-2xl" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-32 rounded-full" />
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            {i === 0 && (
              <div className="space-y-2 pt-2">
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-5/6" />
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
