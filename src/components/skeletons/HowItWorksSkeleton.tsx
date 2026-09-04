import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const HowItWorksSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-36 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* 4-Step Interactive Timeline Skeleton */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-12">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2">
              <Skeleton className="h-56 sm:h-64 w-full rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-md" />
              </div>
              <Skeleton className="h-7 w-4/5 rounded-xl" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
