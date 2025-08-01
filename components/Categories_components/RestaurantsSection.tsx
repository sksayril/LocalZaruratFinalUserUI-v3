import React from 'react';
import Link from 'next/link';

export default function RestaurantsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=500&fit=crop&auto=format&q=80"
          alt="Restaurants and Dining"
          className="w-full h-full object-cover opacity-70"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider text-center">
            IT'S ALL ABOUT FOOD
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 -mt-16 md:-mt-20 relative z-10">
          <Link href="/restaurants/book-table" className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img 
                  src="https://img.icons8.com/color/96/restaurant-table.png" 
                  alt="Book Table" 
                  className="w-full h-full" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">Book A Table</h3>
                <p className="text-gray-600 text-sm md:text-base">Make Reservation →</p>
              </div>
            </div>
          </Link>

          <Link href="/restaurants/trending" className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img 
                  src="https://img.icons8.com/color/96/trending-up.png" 
                  alt="What's Trending" 
                  className="w-full h-full" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600 text-sm md:text-base">Try it Yourself →</p>
              </div>
            </div>
          </Link>

          <Link href="/restaurants/order" className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12">
                <img 
                  src="https://img.icons8.com/color/96/food-delivery.png" 
                  alt="Order Food" 
                  className="w-full h-full" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">ORDER FOOD</h3>
                <p className="text-gray-600 text-sm md:text-base">5830 Restaurants →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          <Link href="/restaurants/indian" className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Indian Flavours"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Indian Flavours</h2>
            </div>
          </Link>

          <Link href="/restaurants/global" className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Global Cuisines"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Global Cuisines</h2>
            </div>
          </Link>

          <Link href="/restaurants/nightlife" className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden group md:col-span-2 lg:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&h=300&fit=crop&auto=format&q=80"
              alt="Nightlife"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Nightlife</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 