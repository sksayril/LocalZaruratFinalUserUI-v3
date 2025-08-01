import React from 'react';
import Link from 'next/link';

export default function EstateAgentSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          alt="Real Estate Services"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT PROPERTY
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/estate/buy" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/home.png" alt="Buy Property" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Buy Property</h3>
                <p className="text-gray-600">Find Your Home →</p>
              </div>
            </div>
          </Link>

          <Link href="/estate/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Try it Yourself →</p>
              </div>
            </div>
          </Link>

          <Link href="/estate/agents" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/realtor.png" alt="Estate Agents" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">ESTATE AGENTS</h3>
                <p className="text-gray-600">2300+ Agents →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/estate/residential" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Residential Properties"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Residential</h2>
            </div>
          </Link>

          <Link href="/estate/commercial" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Commercial Properties"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Commercial</h2>
            </div>
          </Link>

          <Link href="/estate/rental" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Rental Properties"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Rental Properties</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 