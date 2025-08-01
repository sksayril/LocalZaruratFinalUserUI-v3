import React from 'react';
import Link from 'next/link';

export default function HospitalsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
          alt="Hospitals and Healthcare"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT HEALTHCARE
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/hospitals/emergency" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/ambulance.png" alt="Emergency Services" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Emergency Services</h3>
                <p className="text-gray-600">24/7 Available →</p>
              </div>
            </div>
          </Link>

          <Link href="/hospitals/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Latest Treatments →</p>
              </div>
            </div>
          </Link>

          <Link href="/hospitals/book" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/appointment-scheduling.png" alt="Book Appointment" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">BOOK APPOINTMENT</h3>
                <p className="text-gray-600">850+ Doctors →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/hospitals/multispeciality" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
              alt="Multispeciality Hospitals"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Multispeciality</h2>
            </div>
          </Link>

          <Link href="/hospitals/specialized" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              alt="Specialized Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Specialized Care</h2>
            </div>
          </Link>

          <Link href="/hospitals/emergency" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561"
              alt="Emergency Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Emergency Care</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 