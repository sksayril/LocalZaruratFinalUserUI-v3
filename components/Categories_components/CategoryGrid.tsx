'use client';

import Link from 'next/link';
import { useCategories } from '@/hooks/useCategories';
import { CategoryGridSkeleton } from '@/components/ui/skeleton-loaders';

// Fallback categories in case API fails
const fallbackCategories = [
  { name: 'Restaurants', icon: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },
  { name: 'Hotels', icon: 'https://cdn-icons-png.flaticon.com/512/235/235861.png' },
  { name: 'Beauty Spa', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'Home Decor', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' },
  { name: 'Wedding Planning', icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176297.png', special: true },
  { name: 'Education', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png' },
  { name: 'Rent & Hire', icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png' },
  { name: 'Hospitals', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'Contractors', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Pet Shops', icon: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },
  { name: 'PG/Hostels', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' },
  { name: 'Estate Agent', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Dentists', icon: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png' },
  { name: 'Gym', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046865.png' },
  { name: 'Loans', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' },
  { name: 'Event Organisers', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png' },
  { name: 'Driving Schools', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046861.png' },
  { name: 'Packers & Movers', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046863.png' },
  { name: 'Courier Service', icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046862.png' },
  { name: 'Popular Categories', icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png', popular: true },
];

const categoryRoutes: Record<string, string> = {
  'Restaurants': '/Categories/restaurants',
  'Hotels': '/Categories/hotels',
  'Beauty Spa': '/Categories/beautyspa',
  'Home Decor': '/Categories/homedecor',
  'Wedding Planning': '/Categories/weddingplanning',
  'Education': '/Categories/education',
  'Rent & Hire': '/Categories/renthire',
  'Hospitals': '/Categories/hospitals',
  'Contractors': '/Categories/contractors',
  'Pet Shops': '/Categories/petshops',
  'PG/Hostels': '/Categories/pghostels',
  'Estate Agent': '/Categories/estateagent',
  'Dentists': '/Categories/dentists',
  'Gym': '/Categories/gym',
  'Loans': '/Categories/loans',
  'Event Organisers': '/Categories/eventorganisers',
  'Driving Schools': '/Categories/drivingschools',
  'Packers & Movers': '/Categories/packersmovers',
  'Courier Service': '/Categories/courierservice',
  'Popular Categories': '/Categories/popular-categories',
};

export default function CategoryGrid() {
  const { categories, loading, error } = useCategories();

  // Use API data if available, otherwise fallback to static data
  const displayCategories = categories.length > 0 ? categories : fallbackCategories;
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      {/* Loading state */}
      {loading && (
        <div className="py-8">
          <CategoryGridSkeleton count={20} />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-8">
          <p className="text-red-600 text-sm md:text-base">Failed to load categories. Using fallback data.</p>
        </div>
      )}

      {/* Categories grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 md:gap-4 lg:gap-6">
        {displayCategories.map((category, index) => {
          // Handle both API and fallback category structures
          const isApiCategory = 'slug' in category;
          const categoryName = isApiCategory ? category.name : category.name;
          const categoryIcon = isApiCategory ? category.icon : category.icon;
          const isSpecial = !isApiCategory && 'special' in category ? category.special : false;
          const isPopular = !isApiCategory && 'popular' in category ? category.popular : false;
          
          return (
            <Link
              key={isApiCategory ? category._id : index}
              href={isApiCategory ? `/subcategories/${category._id}` : (categoryRoutes[categoryName] || `#`)}
              className={`flex flex-col items-center p-3 md:p-4 rounded-xl md:rounded-2xl border bg-white shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-1 active:scale-95 ${isSpecial ? 'border-pink-300 relative' : ''} ${isPopular ? 'border-2 border-blue-600' : ''}`}
            >
              {/* Icon */}
              {isPopular ? (
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3">
                  <span className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                    <img src={categoryIcon} alt={categoryName} className="w-5 h-5 md:w-7 md:h-7" />
                  </span>
                </div>
              ) : (
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3">
                  <img src={categoryIcon} alt={categoryName} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                </div>
              )}
              {/* Wedding label */}
              {isSpecial && (
                <span className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 bg-pink-100 text-pink-700 text-[10px] md:text-xs font-bold px-2 md:px-3 py-0.5 rounded-full border border-pink-300" style={{letterSpacing: 0.5}}>WEDDING</span>
              )}
              <span className="text-xs md:text-sm lg:text-base text-center font-semibold text-gray-800 mt-1 leading-tight">
                {categoryName}
              </span>
              {/* Show vendor count for API categories */}
              {isApiCategory && (
                <span className="text-[10px] md:text-xs text-gray-500 mt-1 text-center">
                  {category.vendorCount} vendors
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}