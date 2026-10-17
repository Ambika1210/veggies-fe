import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 p-4 shadow-sm animate-pulse flex flex-col justify-between h-[360px]">
      <div className="w-full h-44 bg-stone-100 rounded-xl mb-4" />
      <div className="space-y-2.5">
        <div className="h-4 bg-stone-200 rounded w-1/3" />
        <div className="h-5 bg-stone-200 rounded w-4/5" />
        <div className="h-4 bg-stone-100 rounded w-1/2" />
      </div>
      <div className="pt-4 flex items-center justify-between border-t border-stone-100 mt-2">
        <div className="h-6 bg-stone-200 rounded w-16" />
        <div className="h-9 bg-stone-200 rounded-xl w-24" />
      </div>
    </div>
  );
};
