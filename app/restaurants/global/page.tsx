import React from 'react';
import { restaurantsMockData, Restaurant } from '../mockData';
import Link from 'next/link';
import { Phone, ShoppingCart, Calendar, FileText, ChevronDown, Star, TrendingUp, Filter } from 'lucide-react';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

const filters = [
  { label: 'Sort by', icon: ChevronDown },
  { label: 'Price', icon: ChevronDown },
  { label: 'Global Cuisines', icon: ChevronDown, active: true },
  { label: 'Amenities', icon: ChevronDown },
  { label: 'Ratings', icon: ChevronDown },
  { label: 'Book a Table' },
  { label: 'Online Ordering' },
  { label: 'Open Now' },
  { label: 'Trending', icon: TrendingUp },
  { label: 'Top Rated', icon: Star },
  { label: 'All Filters', icon: Filter, right: true },
];

export default function GlobalCuisinesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 px-2 md:px-4">
        {/* Breadcrumb and Title */}
        <div className="text-sm text-gray-600 mb-2">
          Mumbai &gt; Global Cuisines in Mumbai &gt; 1002+ Listings
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Best Global Cuisines in Mumbai - Order Food Online</h1>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-6 items-center">
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            return (
              <button
                key={index}
                className={`px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 hover:shadow-md ${
                  filter.active
                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 hover:bg-blue-100'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                } ${filter.right ? 'ml-auto' : ''}`}
              >
                {filter.label}
                {Icon && <Icon className="w-4 h-4" />}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {restaurantsMockData.map((r: Restaurant, i: number) => (
            <Link key={i} href={`/restaurants/${slugify(r.name)}`} className="block hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={r.image} alt={r.name} className="w-48 h-36 object-cover rounded-xl shadow-md" />
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900">{r.name}</h2>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                          <Star className="w-4 h-4 fill-current" />
                          {r.rating}
                        </span>
                        <span className="text-gray-600 text-sm">{r.ratingsCount.toLocaleString()} Ratings</span>
                        {r.tags && r.tags.map((tag: string, idx: number) => (
                          <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
                        {r.address}
                      </div>
                      <div className="text-green-600 text-sm font-semibold mb-1">{r.openTime}</div>
                      <div className="text-gray-700 text-sm mb-3">₹ {r.price} Price for two</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                      <Phone className="w-4 h-4" />
                      Show Number
                    </button>
                    
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                      <ShoppingCart className="w-4 h-4" />
                      Order Online
                    </button>
                    
                    {r.actions.includes('Book a table') && (
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                        <Calendar className="w-4 h-4" />
                        Book a Table
                      </button>
                    )}
                    
                    {r.actions.includes('Menu') && (
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                        <FileText className="w-4 h-4" />
                        View Menu
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 