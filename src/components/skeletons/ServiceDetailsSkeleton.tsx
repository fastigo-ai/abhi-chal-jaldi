import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ServiceDetailsSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16 font-sans text-slate-900">
      {/* Breadcrumb Skeleton */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <span className="text-gray-300">/</span>
          <Skeleton className="h-4 w-16" />
          <span className="text-gray-300">/</span>
          <Skeleton className="h-4 w-36" />
        </div>
      </div>

      {/* Main Details 2-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left: Image Placeholder */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 p-4 border border-slate-100 aspect-[4/3] flex items-center justify-center">
          <Skeleton className="w-full h-full rounded-2xl" />
        </div>

        {/* Right: Content & Booking Box */}
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-9 sm:h-12 w-full max-w-lg rounded-xl" />
            <Skeleton className="h-9 sm:h-12 w-3/4 rounded-xl" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Key Bullet Features */}
          <div className="space-y-3 pt-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>

          {/* Pricing & CTA Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Skeleton className="h-3.5 w-20" />
                <Skeleton className="h-7 w-28 rounded-lg" />
              </div>
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Skeleton className="h-12 flex-1 rounded-xl bg-[#028dcd]/20" />
              <Skeleton className="h-12 w-full sm:w-36 rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Details Tabs / FAQ Shimmer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 border-t border-slate-100">
        <div className="max-w-3xl space-y-4">
          <Skeleton className="h-8 w-48 rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
};
