import React from 'react';
import Link from 'next/link';

export default function PackersMoversSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
          alt="Packers and Movers Services"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT MOVING
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/packersmovers/quote" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/price-tag.png" alt="Get Quote" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Get Quote</h3>
                <p className="text-gray-600">Free Estimate →</p>
              </div>
            </div>
          </Link>

          <Link href="/packersmovers/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Popular Services →</p>
              </div>
            </div>
          </Link>

          <Link href="/packersmovers/book" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/truck.png" alt="Book Movers" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">BOOK MOVERS</h3>
                <p className="text-gray-600">450+ Verified →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/packersmovers/home" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Home Shifting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Home Shifting</h2>
            </div>
          </Link>

          <Link href="/packersmovers/office" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Office Relocation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Office Relocation</h2>
            </div>
          </Link>

          <Link href="/packersmovers/storage" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
              alt="Storage Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Storage Solutions</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 