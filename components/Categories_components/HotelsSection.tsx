import React from 'react';
import Link from 'next/link';

const hotels = [
  {
    name: 'Hotel Prestige Residency',
    image: '/hotel-prestige.jpg',
    description: 'Clean rooms',
    location: 'Castle Mill-thane West, Thane',
    rating: 4.8,
    reviews: 327,
    pricePerNight: 2819,
    amenities: ['Parking Available'],
    phone: '08147107593',
    suggestions: 17,
    badges: ['Trust', 'Verified', 'Top Search']
  },
  {
    name: 'Hotel Paradise',
    image: '/hotel-paradise.jpg',
    description: 'Comfortable stay',
    location: 'Marol Pipeline-Andheri East, Mumbai',
    rating: 3.4,
    reviews: 314,
    pricePerNight: 2292,
    amenities: ['AC', 'WiFi'],
    badges: ['Verified', 'Responsive']
  },
  // Add more hotels as needed
];

const filters = [
  { name: 'Sort by', icon: '↓' },
  { name: 'Star Rating', icon: '★' },
  { name: 'Budget', icon: '₹' },
  { name: 'Hotel View', icon: '👁' },
  { name: 'Pets Essential', icon: '🐾' },
  { name: 'User Ratings', icon: '⭐' },
  { name: 'Amenities', icon: '✓' }
];

export default function HotelsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="Hotels and Accommodation"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT HOTELS
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/hotels/book-room" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/bed.png" alt="Book Room" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Book A Room</h3>
                <p className="text-gray-600">Reserve Now →</p>
              </div>
            </div>
          </Link>

          <Link href="/hotels/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          <Link href="/hotels/services" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/hotel.png" alt="Hotel Services" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">FIND HOTELS</h3>
                <p className="text-gray-600">13074+ Hotels →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/hotels/luxury" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1578774204375-8cb4ed9b8bbc"
              alt="Luxury Hotels"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Luxury Hotels</h2>
            </div>
          </Link>

          <Link href="/hotels/budget" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              alt="Budget Hotels"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Budget Stays</h2>
            </div>
          </Link>

          <Link href="/hotels/resorts" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
              alt="Resorts"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Beach Resorts</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 