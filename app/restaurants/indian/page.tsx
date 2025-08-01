import React from 'react';
import { restaurantsMockData, Restaurant } from '../mockData';
import Link from 'next/link';
import { Phone, ShoppingCart, Calendar, FileText, ChevronDown, Star, TrendingUp, Filter, MapPin, Clock, DollarSign } from 'lucide-react';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

const filters = [
  { label: 'Sort by', icon: ChevronDown },
  { label: 'Price', icon: ChevronDown },
  { label: 'Pan Asian', icon: ChevronDown, active: true },
  { label: 'Amenities', icon: ChevronDown },
  { label: 'Ratings', icon: ChevronDown },
  { label: 'Book a Table' },
  { label: 'Online Ordering' },
  { label: 'Open Now' },
  { label: 'Trending', icon: TrendingUp },
  { label: 'Top Rated', icon: Star },
  { label: 'All Filters', icon: Filter, right: true },
];

export default function IndianFlavoursPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        {/* Breadcrumb and Title */}
        <div className="text-sm text-gray-600 mb-3 flex items-center">
          <span className="hover:text-blue-600 cursor-pointer">Mumbai</span>
          <span className="mx-2">›</span>
          <span className="hover:text-blue-600 cursor-pointer">Pan Asian Restaurants in Mumbai</span>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">1002+ Listings</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
          Best Pan Asian Restaurants in Mumbai
          <span className="block text-xl text-gray-600 font-normal mt-2">Order Food Online & Book Tables</span>
        </h1>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          {filters.map((filter, index) => {
            const Icon = filter.icon;
            return (
              <button
                key={index}
                className={`px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg ${
                  filter.active
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                } ${filter.right ? 'ml-auto' : ''}`}
              >
                {filter.label}
                {Icon && <Icon className="w-4 h-4" />}
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {restaurantsMockData.map((r: Restaurant, i: number) => (
            <Link key={i} href={`/restaurants/${slugify(r.name)}`} className="block group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/10 transform hover:-translate-y-2 group-hover:border-gray-200">
                <div className="p-8 flex flex-col lg:flex-row gap-8">
                  {/* Image Section */}
                  <div className="relative lg:w-80 lg:flex-shrink-0">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img 
                        src={r.image} 
                        alt={r.name} 
                        className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      {/* Premium Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        Premium
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h2 className="text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {r.name}
                          </h2>
                          
                          {/* Rating and Tags */}
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                <Star className="w-4 h-4 fill-current" />
                                {r.rating}
                              </span>
                              <span className="text-gray-600 text-sm font-medium">
                                {r.ratingsCount.toLocaleString()} Ratings
                              </span>
                            </div>
                            {r.tags && r.tags.map((tag: string, idx: number) => (
                              <span key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-blue-200">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Details */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-600">
                              <MapPin className="w-5 h-5 text-gray-400" />
                              <span className="text-sm">{r.address}</span>
                            </div>
                            <div className="flex items-center gap-3 text-green-600">
                              <Clock className="w-5 h-5" />
                              <span className="text-sm font-semibold">{r.openTime}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                              <DollarSign className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-medium">₹ {r.price} Price for two</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                        <Phone className="w-5 h-5" />
                        Show Number
                      </button>
                      
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                        <ShoppingCart className="w-5 h-5" />
                        Order Online
                      </button>
                      
                      {r.actions.includes('Book a table') && (
                        <button className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                          <Calendar className="w-5 h-5" />
                          Book a Table
                        </button>
                      )}
                      
                      {r.actions.includes('Menu') && (
                        <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                          <FileText className="w-5 h-5" />
                          View Menu
                        </button>
                      )}
                    </div>
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