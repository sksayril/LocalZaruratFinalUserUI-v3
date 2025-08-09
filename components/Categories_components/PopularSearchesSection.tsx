'use client';

// import { ChevronRight } from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';
import Link from 'next/link';

// Fallback popular searches in case API fails
const fallbackPopularSearches = [
  {
    title: 'Estate Agents For Residential Rental',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=300',
    buttonText: 'Enquire Now'
  },
  {
    title: 'Interior Designers',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300',
    buttonText: 'Enquire Now'
  },
  {
    title: 'Real Estate Agents',
    image: 'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=300',
    buttonText: 'Enquire Now'
  },
  {
    title: 'Banquet Halls',
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300',
    buttonText: 'Enquire Now'
  },
  {
    title: 'Pathology Labs',
    image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=300',
    buttonText: 'Explore'
  }
];

export default function PopularSearchesSection() {
  const { categories, loading, error } = useCategories();

  // Use API data if available, otherwise fallback to static data
  const popularSearches = categories.length > 0 
    ? categories.slice(0, 5).map(category => ({
        title: category.name,
        image: category.icon,
        buttonText: 'Explore',
        categoryId: category._id,
        vendorCount: category.vendorCount
      }))
    : fallbackPopularSearches;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Popular Searches</h3>
      
      {/* Loading state */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600 text-sm md:text-base">Loading popular searches...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-4">
          <p className="text-red-600 text-sm md:text-base">Failed to load popular searches. Using fallback data.</p>
        </div>
      )}

      <div className="flex overflow-x-auto gap-6 pb-4">
        {popularSearches.map((search, index) => (
          <Link 
            key={index} 
            href={'categoryId' in search ? `/subcategories/${search.categoryId}` : '#'}
            className="flex-none w-64 h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={search.image} 
                alt={search.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 bg-blue-600">
              <h4 className="font-bold text-lg text-white mb-4 text-left leading-tight">{search.title}</h4>
              <div className="flex items-center justify-between">
                <button className="w-full bg-white text-blue-600 px-0 py-2 rounded font-bold text-base hover:bg-gray-100 transition-colors">
                  {search.buttonText}
                </button>
                {/* Show vendor count for API categories */}
                {/* {'vendorCount' in search && (
                  <span className="text-xs text-white bg-blue-700 px-2 py-1 rounded-full ml-2">
                    {search.vendorCount} vendors
                  </span>
                )} */}
              </div>
            </div>
          </Link>
        ))}
        {/* Right arrow for scroll */}
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 ml-2 text-2xl font-bold"><span>&#8250;</span></button>
      </div>
    </div>
  );
}