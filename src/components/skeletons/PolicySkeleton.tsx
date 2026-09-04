import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const PolicySkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 pt-20 pb-16 font-sans">
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Skeleton className="h-7 w-32 mx-auto rounded-full" />
          <Skeleton className="h-10 sm:h-12 w-full max-w-lg mx-auto rounded-xl" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-7 w-56 rounded-lg" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
