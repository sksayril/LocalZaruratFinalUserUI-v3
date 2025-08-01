import React from 'react';
import Link from 'next/link';

export default function DrivingSchoolsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
          alt="Driving Schools and Training"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT DRIVING
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/driving/enroll" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/car.png" alt="Enroll Now" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Enroll Now</h3>
                <p className="text-gray-600">Start Learning →</p>
              </div>
            </div>
          </Link>

          <Link href="/driving/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          <Link href="/driving/schools" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/driving-instructor.png" alt="Driving Schools" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">DRIVING SCHOOLS</h3>
                <p className="text-gray-600">1699+ Schools →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/driving/car" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d"
              alt="Car Training"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Car Training</h2>
            </div>
          </Link>

          <Link href="/driving/bike" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
              alt="Bike Training"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Bike Training</h2>
            </div>
          </Link>

          <Link href="/driving/license" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
              alt="License Support"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">License Support</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 