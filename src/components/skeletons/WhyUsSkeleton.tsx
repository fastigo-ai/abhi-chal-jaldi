import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const WhyUsSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-36 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-14 w-full max-w-2xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-lg mx-auto" />
          <Skeleton className="h-4 w-4/5 max-w-md mx-auto" />
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/70 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-8 w-20 mx-auto rounded-lg" />
              <Skeleton className="h-3.5 w-28 mx-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* 4 Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 flex items-start gap-5">
              <Skeleton className="h-14 w-14 rounded-2xl flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
