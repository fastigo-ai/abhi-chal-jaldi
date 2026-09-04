import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ServicesSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      {/* Header Banner Skeleton */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-40 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />

          {/* Search & Filter bar */}
          <div className="max-w-xl mx-auto pt-4 space-y-3">
            <Skeleton className="h-12 w-full rounded-2xl" />
            <div className="flex flex-wrap justify-center gap-2">
              <Skeleton className="h-8 w-20 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
              <Skeleton className="h-8 w-28 rounded-full" />
              <Skeleton className="h-8 w-20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
              <Skeleton className="h-44 w-full rounded-xl" />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-4/5" />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-9 w-28 rounded-xl bg-[#028dcd]/20" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
