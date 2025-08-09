'use client';

import { ChevronRight } from 'lucide-react';
import { useCategories } from '@/hooks/useCategories';
import Link from 'next/link';

// Service mappings for different main categories
const serviceMappings: Record<string, { name: string; image: string }[]> = {
  'Beauty Parlour & Selon': [
    { name: 'Beauty Parlours', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Spa & Massages', image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Salons', image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Hotel/Restaurant/Lodge': [
    { name: 'Restaurants', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Hotels', image: 'https://images.pexels.com/photos/235/235861.png' },
    { name: 'Lodges', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Transporting': [
    { name: 'Car Service', image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Bike Service', image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'AC Service', image: 'https://images.pexels.com/photos/8005055/pexels-photo-8005055.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Electronic': [
    { name: 'Electronics', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Repairs', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Services', image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Medical store 🏪': [
    { name: 'Medicines', image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Health Products', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Medical Care', image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Photo & videography': [
    { name: 'Photography', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Videography', image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Studio Services', image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Rental Service': [
    { name: 'Room Rental', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Equipment Rental', image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Vehicle Rental', image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ],
  'Resturents': [
    { name: 'Indian Cuisine', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Fast Food', image: 'https://images.pexels.com/photos/1779065/pexels-photo-1779065.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Fine Dining', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ]
};

// Define section interface
interface Section {
  title: string;
  services: { name: string; image: string }[];
  categoryId?: string;
  vendorCount?: number;
}

// Fallback sections in case API fails
const fallbackSections: Section[] = [
  {
    title: 'Wedding Requisites',
    services: [
      { name: 'Banquet Halls', image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Bridal Requisite', image: 'https://images.pexels.com/photos/1779065/pexels-photo-1779065.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Caterers', image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    title: 'Beauty & Spa',
    services: [
      { name: 'Beauty Parlours', image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Spa & Massages', image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Salons', image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    title: 'Repairs & Services',
    services: [
      { name: 'AC Service', image: 'https://images.pexels.com/photos/8005055/pexels-photo-8005055.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Car Service', image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Bike Service', image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  },
  {
    title: 'Daily Needs',
    services: [
      { name: 'Movies', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Grocery', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300' },
      { name: 'Electricians', image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=300' }
    ]
  }
];

export default function ServiceSections() {
  const { categories, loading, error } = useCategories();

  // Create dynamic sections from API data
  const createDynamicSections = (): Section[] => {
    if (categories.length === 0) return fallbackSections;

    // Take first 4 categories and map them to sections
    const selectedCategories = categories.slice(0, 4);
    
    return selectedCategories.map((category, index) => {
      const services = serviceMappings[category.name] || [
        { name: 'Service 1', image: category.icon },
        { name: 'Service 2', image: category.icon },
        { name: 'Service 3', image: category.icon }
      ];

      return {
        title: category.name,
        services,
        categoryId: category._id,
        vendorCount: category.vendorCount
      };
    });
  };

  const displaySections = createDynamicSections();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Loading state */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600 text-sm md:text-base">Loading service sections...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-8">
          <p className="text-red-600 text-sm md:text-base">Failed to load service sections. Using fallback data.</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {displaySections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-300 border-[0.5px] p-8 shadow-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 text-left">{section.title}</h3>
              {/* Show vendor count for API categories */}
              {section.vendorCount !== undefined && (
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {section.vendorCount} vendors
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-8 gap-y-4">
              {section.services.map((service, serviceIndex) => (
                <Link 
                  key={serviceIndex} 
                  href={section.categoryId ? `/subcategories/${section.categoryId}` : '#'}
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="w-48 h-32 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center mx-2">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover p-1 rounded-xl"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-800 text-center leading-tight">{service.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}