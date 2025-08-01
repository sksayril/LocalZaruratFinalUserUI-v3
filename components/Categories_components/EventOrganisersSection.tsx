import React from 'react';
import Link from 'next/link';

export default function EventOrganisersSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
          alt="Event Planning and Organization"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT EVENTS
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/eventorganisers/plan" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/event-planning.png" alt="Plan Event" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Plan Event</h3>
                <p className="text-gray-600">Get Started →</p>
              </div>
            </div>
          </Link>

          <Link href="/eventorganisers/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Popular Events →</p>
              </div>
            </div>
          </Link>

          <Link href="/eventorganisers/book" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/calendar.png" alt="Book Organizer" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">BOOK ORGANIZER</h3>
                <p className="text-gray-600">300+ Experts →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/eventorganisers/corporate" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865"
              alt="Corporate Events"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Corporate Events</h2>
            </div>
          </Link>

          <Link href="/eventorganisers/wedding" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Wedding Planning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Wedding Planning</h2>
            </div>
          </Link>

          <Link href="/eventorganisers/parties" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
              alt="Party Planning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Party Planning</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 