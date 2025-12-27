import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div>
      <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl shadow-sm animate-pulse overflow-hidden">
        {/* Image Placeholder */}
        <div className="h-52 bg-gray-200 dark:bg-slate-800" />

        {/* Content Placeholder */}
        <div className="p-6">
          <div className="h-6 bg-gray-200 dark:bg-slate-800 rounded-lg w-3/4 mb-4" />
          <div className="h-8 bg-gray-200 dark:bg-slate-800 rounded-lg w-1/2 mb-8" />

          <div className="space-y-3">
            <div className="h-12 bg-gray-200 dark:bg-slate-800 rounded-2xl w-full" />
            <div className="h-12 bg-gray-100 dark:bg-slate-800/50 rounded-2xl w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
