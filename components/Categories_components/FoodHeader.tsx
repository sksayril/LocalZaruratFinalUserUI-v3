import React from 'react';
import Link from 'next/link';

export default function FoodHeader() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <img 
          src={`https://media.istockphoto.com/id/2032134576/photo/family-lunch-and-service-of-waiter-at-restaurant-with-plate-fun-and-eating-at-diner-together.jpg?s=612x612&w=0&k=20&c=PE9P_xmF_BDWGMTSGg9RjPHf0JJ6yXoX_QataFbLyFE=`} 
          alt="Food Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">IT'S ALL ABOUT FOOD</h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/book-table" className="bg-white rounded-xl p-6 flex items-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 mr-4">
            <img src="https://cdn-icons-png.flaticon.com/512/1721/1721802.png" alt="Book Table" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Book A Table</h3>
            <p className="text-gray-600">Make Reservation →</p>
          </div>
        </Link>

        <Link href="/trending" className="bg-white rounded-xl p-6 flex items-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 mr-4">
            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Trending" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">WHAT'S TRENDING?</h3>
            <p className="text-gray-600">Try it Yourself →</p>
          </div>
        </Link>

        <Link href="/order" className="bg-white rounded-xl p-6 flex items-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 mr-4">
            <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="Order Food" className="w-full h-full" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">ORDER FOOD</h3>
            <p className="text-gray-600">5830 Restaurants →</p>
          </div>
        </Link>
      </div>
    </div>
  );
} 