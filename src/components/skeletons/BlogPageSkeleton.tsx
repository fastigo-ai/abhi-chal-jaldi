import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogPageSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16 font-sans text-slate-900">
      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <span className="text-gray-300">/</span>
          <Skeleton className="h-4 w-12" />
          <span className="text-gray-300">/</span>
          <Skeleton className="h-4 w-40" />
        </div>
      </div>

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Article Meta Header */}
        <div className="space-y-4">
          <Skeleton className="h-7 w-28 rounded-full" />
          <Skeleton className="h-10 sm:h-14 w-full rounded-2xl" />
          <Skeleton className="h-10 sm:h-14 w-3/4 rounded-2xl" />
          <div className="flex items-center gap-4 pt-2">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <Skeleton className="h-72 sm:h-96 w-full rounded-3xl" />

        {/* Article Body Paragraphs */}
        <div className="space-y-6 pt-4">
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <Skeleton className="h-8 w-64 rounded-xl" />

          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
            <Skeleton className="h-6 w-48 rounded-lg" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="h-8 w-56 rounded-xl" />

          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};
