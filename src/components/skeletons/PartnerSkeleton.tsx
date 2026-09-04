import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PartnerSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Skeleton className="h-7 w-36 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-xl mx-auto rounded-xl" />
          <Skeleton className="h-4 w-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-3.5 w-full" />
              <Skeleton className="h-3.5 w-4/5" />
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
          <Skeleton className="h-7 w-52 rounded-lg" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-24 rounded-2xl" />
            <Skeleton className="h-24 rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
};
