'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCategories } from '@/hooks/useCategories';

// Fallback categories for featured services
const fallbackCategories = [
  {
    title: 'WEDDING PLANNING',
    subtitle: 'Plan Your Big Day',
    color: 'bg-pink-600',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    link: '/weddingplanning'
  },
  {
    title: 'B2B',
    subtitle: 'Quick Quotes',
    color: 'bg-blue-600',
    image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '/b2b'
  },
  {
    title: 'REPAIRS & SERVICES',
    subtitle: 'Get Nearest Vendor',
    color: 'bg-blue-700',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '/repairs'
  },
  {
    title: 'REAL ESTATE',
    subtitle: 'Finest Agents',
    color: 'bg-purple-600',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '/realestate'
  },
  {
    title: 'DOCTORS',
    subtitle: 'Book Now',
    color: 'bg-green-600',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300',
    link: '/doctors'
  }
];

const colorClasses = [
  'bg-pink-600',
  'bg-blue-600', 
  'bg-blue-700',
  'bg-purple-600',
  'bg-green-600'
];

export default function ServiceCategories() {
  const { categories, loading, error } = useCategories();

  // Use first 5 API categories or fallback to static data
  const displayCategories = categories.length > 0 
    ? categories.slice(0, 5).map((category, index) => ({
        title: category.name.toUpperCase(),
        subtitle: `${category.vendorCount} Vendors`,
        color: colorClasses[index % colorClasses.length],
        image: category.icon,
        link: `/subcategories/${category._id}`
      }))
    : fallbackCategories;
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Loading state */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600 text-sm md:text-base">Loading featured services...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-8">
          <p className="text-red-600 text-sm md:text-base">Failed to load featured services. Using fallback data.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {displayCategories.map((category, idx) => (
          <Link 
            key={idx} 
            href={category.link}
            className={`${category.color} rounded-lg p-4 md:p-6 text-white hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95`}
          >
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="flex-1">
                <h3 className="font-semibold mb-1 text-sm md:text-base leading-tight">{category.title}</h3>
                <p className="text-xs md:text-sm opacity-90">{category.subtitle}</p>
              </div>
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 ml-2" />
            </div>
            <img 
              src={category.image} 
              alt={category.title}
              className="w-full h-24 md:h-32 object-cover rounded mt-3 md:mt-4"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}