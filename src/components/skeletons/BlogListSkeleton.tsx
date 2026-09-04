import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogListSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      {/* Blog List Header */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
            <Skeleton className="h-9 w-32 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-28 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Blog & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Featured Post */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Skeleton className="h-64 sm:h-80 w-full rounded-2xl" />
          </div>
          <div className="lg:col-span-5 space-y-4">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-8 w-full rounded-xl" />
            <Skeleton className="h-8 w-4/5 rounded-xl" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex items-center gap-3 pt-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
              <Skeleton className="h-48 w-full rounded-xl" />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-20 rounded-md" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-6 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-4/5" />
              </div>
              <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
