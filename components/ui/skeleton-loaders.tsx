import { Skeleton } from './skeleton';

// Vendor Card Skeleton
export function VendorCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-64 h-48 md:h-auto">
          <Skeleton className="w-full h-full" />
          {/* Carousel Arrow Overlay */}
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-1">
            <Skeleton className="w-4 h-4 rounded-full" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 md:p-6">
          {/* Header with Name and Rating */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="w-4 h-4 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="h-4 w-64" />
          </div>

          {/* Services Tags */}
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-32 rounded-full" />
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Card Skeleton
export function CategoryCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <Skeleton className="h-8 w-32 mb-2 bg-white/20" />
          <Skeleton className="h-4 w-48 bg-white/20" />
        </div>
      </div>
      <div className="p-4">
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-4 w-full mb-3" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

// Hero Section Skeleton
export function HeroSectionSkeleton() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
      <div className="relative h-48 md:h-64 lg:h-80">
        <Skeleton className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
          <Skeleton className="h-12 w-96 mb-2 bg-white/20" />
          <Skeleton className="h-6 w-80 bg-white/20" />
        </div>
      </div>
    </div>
  );
}

// Stats Card Skeleton
export function StatsCardSkeleton() {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <Skeleton className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl" />
        <div className="flex-1">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
      <Skeleton className="h-4 w-48" />
    </div>
  );
}

// Vendor Grid Skeleton
export function VendorGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <VendorCardSkeleton key={index} />
      ))}
    </div>
  );
}

// Category Grid Skeleton
export function CategoryGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <CategoryCardSkeleton key={index} />
      ))}
    </div>
  );
}

// Header Skeleton
export function HeaderSkeleton() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Skeleton className="h-8 w-32" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Skeleton
export function FooterSkeleton() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-6 w-32 mb-4 bg-gray-700" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-24 bg-gray-700" />
                <Skeleton className="h-4 w-28 bg-gray-700" />
                <Skeleton className="h-4 w-20 bg-gray-700" />
                <Skeleton className="h-4 w-26 bg-gray-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Breadcrumb Skeleton
export function BreadcrumbSkeleton() {
  return (
    <div className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex items-center space-x-1 md:space-x-2 flex-wrap">
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

// Pagination Skeleton
export function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Skeleton className="h-10 w-20 rounded-lg" />
      <div className="flex items-center gap-1">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
      </div>
      <Skeleton className="h-10 w-20 rounded-lg" />
    </div>
  );
}

// Search Bar Skeleton
export function SearchBarSkeleton() {
  return (
    <div className="relative">
      <Skeleton className="h-12 w-full rounded-lg" />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
    </div>
  );
}

// Sidebar Skeleton
export function SidebarSkeleton() {
  return (
    <div className="bg-white shadow-lg border-r border-gray-200 p-4">
      <Skeleton className="h-8 w-32 mb-6" />
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Skeleton className="w-6 h-6 rounded" />
            <Skeleton className="h-4 flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Table Row Skeleton
export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr>
      {Array.from({ length: columns }).map((_, index) => (
        <td key={index} className="px-6 py-4">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

// Table Skeleton
export function TableSkeleton({ rows = 5, columns = 5 }: { rows?: number; columns?: number }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <Skeleton className="h-6 w-32" />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <Skeleton className="h-4 w-20" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, index) => (
            <TableRowSkeleton key={index} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Form Field Skeleton
export function FormFieldSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}

// Form Skeleton
export function FormSkeleton({ fields = 5 }: { fields?: number }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="space-y-4">
        {Array.from({ length: fields }).map((_, index) => (
          <FormFieldSkeleton key={index} />
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
} 