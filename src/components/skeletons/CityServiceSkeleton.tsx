import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const CityServiceSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      {/* City Hero Banner Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Location Badge */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-52 rounded-full" />
                <Skeleton className="h-7 w-28 rounded-full" />
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <Skeleton className="h-10 sm:h-12 w-full max-w-lg rounded-xl" />
                <Skeleton className="h-10 sm:h-12 w-3/4 max-w-md rounded-xl" />
              </div>

              {/* Subtext */}
              <div className="space-y-2 max-w-xl">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>

              {/* Quick Booking Bar */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-200/80 max-w-lg space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Skeleton className="h-12 flex-1 rounded-xl" />
                  <Skeleton className="h-12 w-full sm:w-36 rounded-xl bg-[#028dcd]/20" />
                </div>
              </div>

              {/* Key Features / Assurances */}
              <div className="flex flex-wrap gap-4 pt-1">
                <Skeleton className="h-6 w-32 rounded-lg" />
                <Skeleton className="h-6 w-36 rounded-lg" />
                <Skeleton className="h-6 w-32 rounded-lg" />
              </div>
            </div>

            {/* Right Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md aspect-[4/3] rounded-3xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-32 rounded-lg" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="w-full h-36 rounded-2xl" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Skeleton className="h-10 rounded-xl" />
                  <Skeleton className="h-10 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localities in City Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-44" />
          </div>
          <div className="flex flex-wrap gap-2">
            {[...Array(12)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 sm:w-28 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* City Services Grid Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <Skeleton className="h-6 w-32 mx-auto rounded-full" />
          <Skeleton className="h-8 w-64 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-80 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-5 w-20 rounded-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-4/5" />
              </div>
              <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-24 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* City FAQ Accordion Skeleton */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-4">
        <div className="text-center space-y-2 mb-8">
          <Skeleton className="h-7 w-48 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-4/5" />
              <Skeleton className="h-5 w-5 rounded-full" />
            </div>
            <Skeleton className="h-3.5 w-3/5" />
          </div>
        ))}
      </section>
    </div>
  );
};
