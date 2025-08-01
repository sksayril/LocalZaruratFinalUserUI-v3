import React from 'react';
import Link from 'next/link';

export default function HomeDecorSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
          alt="Home Decor and Interior Design"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT HOME DECOR
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/homedecor/consultation" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/interior-design.png" alt="Design Consultation" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Design Consultation</h3>
                <p className="text-gray-600">Get Expert Advice →</p>
              </div>
            </div>
          </Link>

          <Link href="/homedecor/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Latest Designs →</p>
              </div>
            </div>
          </Link>

          <Link href="/homedecor/shop" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/shopping-cart.png" alt="Shop Decor" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">SHOP DECOR</h3>
                <p className="text-gray-600">2100+ Items →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/homedecor/furniture" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
              alt="Furniture Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Furniture Collection</h2>
            </div>
          </Link>

          <Link href="/homedecor/lighting" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f"
              alt="Lighting Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Lighting Solutions</h2>
            </div>
          </Link>

          <Link href="/homedecor/accessories" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f"
              alt="Home Accessories"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Home Accessories</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 