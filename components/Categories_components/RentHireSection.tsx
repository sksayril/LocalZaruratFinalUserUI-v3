import React from 'react';
import Link from 'next/link';

export default function RentHireSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
          alt="Rent and Hire Services"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT RENT & HIRE
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/renthire/quick-rent" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/clock.png" alt="Quick Rent" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Quick Rent</h3>
                <p className="text-gray-600">Instant Booking →</p>
              </div>
            </div>
          </Link>

          <Link href="/renthire/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Popular Items →</p>
              </div>
            </div>
          </Link>

          <Link href="/renthire/browse" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/search.png" alt="Browse Items" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">BROWSE ITEMS</h3>
                <p className="text-gray-600">1500+ Options →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/renthire/electronics" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
              alt="Electronics Rental"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Electronics Rental</h2>
            </div>
          </Link>

          <Link href="/renthire/appliances" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
              alt="Home Appliances"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Home Appliances</h2>
            </div>
          </Link>

          <Link href="/renthire/furniture" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Furniture Rental"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Furniture Rental</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 