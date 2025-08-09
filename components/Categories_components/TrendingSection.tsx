'use client';

// import { ChevronRight } from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';
import Link from 'next/link';

// Fallback trending items in case API fails
const fallbackTrendingItems = [
  {
    title: 'Advertising Agencies',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Car Rental For Mumbai',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Hospitals',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Zudio Stores',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function TrendingSection() {
  const { categories, loading, error } = useCategories();

  // Use API data if available, otherwise fallback to static data
  const trendingItems = categories.length > 0 
    ? categories.slice(0, 4).map(category => ({
        title: category.name,
        image: category.icon,
        categoryId: category._id,
        vendorCount: category.vendorCount
      }))
    : fallbackTrendingItems;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl border border-gray-300 border-b-2 p-6">
        <div className="flex items-center mb-1">
          <h3 className="text-2xl font-extrabold text-gray-900 mr-3">Trending Searches Near You</h3>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">NEW</span>
        </div>
        <p className="text-gray-500 mb-4 text-base">Stay updated with the latest local trends.</p>
        
        {/* Loading state */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600 text-sm md:text-base">Loading trending searches...</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-4">
            <p className="text-red-600 text-sm md:text-base">Failed to load trending searches. Using fallback data.</p>
          </div>
        )}

        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {trendingItems.map((item, index) => (
            <Link 
              key={index} 
              href={'categoryId' in item ? `/subcategories/${item.categoryId}` : '#'}
              className="flex flex-row items-center bg-white rounded-xl border border-gray-300 border-[0.5px] min-w-[270px] max-w-[270px] h-[80px] pr-4 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="p-2 h-full flex items-center">
                <img src={item.image} alt={item.title} className="w-20 h-full object-cover rounded-l-xl" />
              </div>
              <div className="flex flex-col justify-center pl-3 flex-1">
                <span className="font-extrabold text-lg text-gray-900 leading-tight">{item.title}</span>
                <div className="flex items-center justify-between mt-1">
                  <button className="text-blue-600 text-base font-semibold flex items-center gap-1">Explore <span className="text-lg">&gt;</span></button>
                  {/* Show vendor count for API categories */}
                  {/* {'vendorCount' in item && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {item.vendorCount} vendors
                    </span>
                  )} */}
                </div>
              </div>
            </Link>
          ))}
          {/* Right arrow for scroll */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 border-[0.5px] ml-2 text-2xl font-bold"><span>&#8250;</span></button>
        </div>
      </div>
    </div>
  );
}