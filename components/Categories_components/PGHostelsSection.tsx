import React from 'react';
import Link from 'next/link';

export default function PGHostelsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1555854877-bab0e460b1e0"
          alt="PG and Hostels Accommodation"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT ACCOMMODATION
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/pghostels/book" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/bed.png" alt="Book Accommodation" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Book Stay</h3>
                <p className="text-gray-600">Instant Booking →</p>
              </div>
            </div>
          </Link>

          <Link href="/pghostels/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Popular Stays →</p>
              </div>
            </div>
          </Link>

          <Link href="/pghostels/search" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/search-property.png" alt="Find Accommodation" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">FIND STAYS</h3>
                <p className="text-gray-600">950+ Options →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/pghostels/pg" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Paying Guest Accommodation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Paying Guest</h2>
            </div>
          </Link>

          <Link href="/pghostels/hostels" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hostel Accommodation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Hostels</h2>
            </div>
          </Link>

          <Link href="/pghostels/coliving" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt="Co-living Spaces"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Co-living Spaces</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 