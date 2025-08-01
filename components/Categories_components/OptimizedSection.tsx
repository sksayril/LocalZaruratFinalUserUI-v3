import React, { Suspense } from 'react';
import { ReactNode } from 'react';

interface OptimizedSectionProps {
  children: ReactNode;
  className?: string;
}

// Improved skeleton loader that matches the actual content structure
function SectionSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="relative h-[500px] bg-gradient-to-r from-gray-300 to-gray-400 shimmer">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-96 bg-gray-500 rounded-lg shimmer"></div>
        </div>
      </div>

      {/* Action Cards Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded shimmer"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-300 rounded mb-2 shimmer w-32"></div>
                  <div className="h-4 bg-gray-200 rounded shimmer w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative h-[300px] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 shimmer"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="h-8 w-48 bg-gray-500 rounded shimmer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OptimizedSection({ children, className = "" }: OptimizedSectionProps) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      <div className={`transition-all duration-500 ease-in-out fade-in ${className}`}>
        {children}
      </div>
    </Suspense>
  );
} 