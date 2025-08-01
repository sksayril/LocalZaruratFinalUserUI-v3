import React from 'react';
import Link from 'next/link';

const categories = [
  {
    title: 'Indian Flavours',
    items: ['Tandoori', 'South Indian', 'Pure Veg', 'North Indian'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe'
  },
  {
    title: 'Global Cuisines',
    items: ['Pan Asian', 'Continental', 'Chinese', 'Italian'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c'
  },
  {
    title: 'Nightlife',
    items: ['Pubs', 'Lounge Bars', 'Night Clubs', 'Restaurants & Bars'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b'
  },
  {
    title: 'Quick Bites',
    items: ['Bakeries', 'Coffee Shops', 'Fast Food', 'Pizza Outlets'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
  },
  {
    title: 'Sweet Tooth',
    items: ['Cake Shops', 'Desserts', 'Donut Outlets', 'More'],
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b'
  },
  {
    title: 'Foodie',
    items: ['Chinese', 'Dhaba Joints', 'Fab Biryanis', 'Thali Feasts'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'
  }
];

export default function FoodCategories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 relative">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link href={`/food/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-700 hover:text-blue-600">
                      - {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 