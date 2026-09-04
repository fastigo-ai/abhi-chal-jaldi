import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const HomeSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      {/* Hero Section Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-50/60 py-12 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (Text & Search) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-7 w-48 rounded-full" />
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <Skeleton className="h-10 sm:h-14 w-full max-w-xl rounded-xl" />
                <Skeleton className="h-10 sm:h-14 w-4/5 max-w-lg rounded-xl" />
              </div>

              {/* Subheading description */}
              <div className="space-y-2 max-w-lg">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>

              {/* Search / Booking Action Bar */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-slate-200/80 max-w-xl space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Skeleton className="h-12 flex-1 rounded-xl" />
                  <Skeleton className="h-12 w-full sm:w-36 rounded-xl bg-[#028dcd]/20" />
                </div>
                {/* Popular chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-24 rounded-full" />
                  <Skeleton className="h-5 w-28 rounded-full" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>

            {/* Right Column (Hero Device / Engineer Graphic) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-white/80 p-4 border border-slate-200 shadow-sm flex flex-col justify-between">
                <Skeleton className="w-full h-44 rounded-2xl" />
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-1.5">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-3.5 w-24" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Services Grid Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Skeleton className="h-7 w-36 mx-auto rounded-full" />
          <Skeleton className="h-9 w-72 mx-auto rounded-xl" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
              <Skeleton className="h-36 w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3.5 w-full" />
                <Skeleton className="h-3.5 w-2/3" />
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-24 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Feature Cards */}
      <section className="bg-white py-14 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
