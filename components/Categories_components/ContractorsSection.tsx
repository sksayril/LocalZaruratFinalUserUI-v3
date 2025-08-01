import React from 'react';
import Link from 'next/link';

const contractorCategories = [
  {
    title: 'Carpentry Contractors',
    icon: '🔨',
    link: '/contractors/carpentry'
  },
  {
    title: 'Civil Contractors',
    icon: '🏗️',
    link: '/contractors/civil'
  },
  {
    title: 'Electrical Contractors',
    icon: '⚡',
    link: '/contractors/electrical'
  },
  {
    title: 'Flooring Contractors',
    icon: '🏢',
    link: '/contractors/flooring'
  },
  {
    title: 'Furniture Contractors',
    icon: '🪑',
    link: '/contractors/furniture'
  },
  {
    title: 'Painting Contractors',
    icon: '🎨',
    link: '/contractors/painting'
  },
  {
    title: 'Plumbing Contractors',
    icon: '🔧',
    link: '/contractors/plumbing'
  },
  {
    title: 'Borewell Contractors',
    icon: '💧',
    link: '/contractors/borewell'
  },
  {
    title: 'Building Contractors',
    icon: '🏢',
    link: '/contractors/building'
  },
  {
    title: 'Carpentry Contractors',
    icon: '🪚',
    link: '/contractors/carpentry-services'
  },
  {
    title: 'Carpet Contractors',
    icon: '🧶',
    link: '/contractors/carpet'
  },
  {
    title: 'Civil Contractors',
    icon: '🏗️',
    link: '/contractors/civil-services'
  },
  {
    title: 'Construction Contractors',
    icon: '🚧',
    link: '/contractors/construction'
  },
  {
    title: 'Drainage Contractors',
    icon: '🚰',
    link: '/contractors/drainage'
  },
  {
    title: 'Drilling Contractors',
    icon: '⚙️',
    link: '/contractors/drilling'
  },
  {
    title: 'Electrical Contractors',
    icon: '💡',
    link: '/contractors/electrical-services'
  },
  {
    title: 'Elevator Contractors',
    icon: '🛗',
    link: '/contractors/elevator'
  },
  {
    title: 'Fabrication Contractors',
    icon: '🔩',
    link: '/contractors/fabrication'
  },
  {
    title: 'False Ceiling Contractors',
    icon: '🏠',
    link: '/contractors/false-ceiling'
  },
  {
    title: 'Fire Fighting Contractors',
    icon: '🧯',
    link: '/contractors/fire-fighting'
  },
  {
    title: 'Flooring Contractors',
    icon: '🏢',
    link: '/contractors/flooring-services'
  },
  {
    title: 'Furniture Contractors',
    icon: '🪑',
    link: '/contractors/furniture-services'
  },
  {
    title: 'Garden Contractors',
    icon: '🌳',
    link: '/contractors/garden'
  },
  {
    title: 'Interior Decorators',
    icon: '🎨',
    link: '/contractors/interior-decorators'
  }
];

export default function ContractorsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
          alt="Construction and Contractors"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT CONSTRUCTION
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/contractors/get-quote" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/calculator.png" alt="Get Quote" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Get Quote</h3>
                <p className="text-gray-600">Free Estimate →</p>
              </div>
            </div>
          </Link>

          <Link href="/contractors/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          <Link href="/contractors/services" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/construction.png" alt="Contractor Services" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">CONTRACTOR SERVICES</h3>
                <p className="text-gray-600">5200+ Contractors →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/contractors/civil" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              alt="Civil Contractors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Civil Works</h2>
            </div>
          </Link>

          <Link href="/contractors/electrical" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
              alt="Electrical Contractors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Electrical Works</h2>
            </div>
          </Link>

          <Link href="/contractors/interior" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
              alt="Interior Contractors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Interior Design</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 