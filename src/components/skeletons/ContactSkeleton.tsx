import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ContactSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />
        </div>
      </section>

      {/* Contact Cards & Form 2-Column Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Info Columns */}
          <div className="lg:col-span-5 space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                <Skeleton className="h-12 w-12 rounded-xl flex-shrink-0" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-36" />
                  <Skeleton className="h-3.5 w-48" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-7 w-44 rounded-lg" />
              <Skeleton className="h-4 w-64" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-11 w-full rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-11 w-full rounded-xl" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-28 w-full rounded-xl" />
            </div>

            <Skeleton className="h-12 w-full rounded-xl bg-[#028dcd]/20" />
          </div>
        </div>
      </section>
    </div>
  );
};
