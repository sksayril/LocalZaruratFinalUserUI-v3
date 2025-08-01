import React from 'react';
import Link from 'next/link';

const weddingServices = [
  {
    title: 'Banquet Halls',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    link: '/wedding-planning/banquet-halls'
  },
  {
    title: 'Catering Services',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033',
    link: '/wedding-planning/catering'
  },
  {
    title: 'Stage Decorators',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    link: '/wedding-planning/decorators'
  },
  {
    title: 'Photographers',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    link: '/wedding-planning/photographers'
  },
  {
    title: 'Pandits',
    image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2',
    link: '/wedding-planning/pandits'
  },
  {
    title: 'Invitation Cards',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0',
    link: '/wedding-planning/invitation-cards'
  }
];

const bridalServices = [
  {
    title: 'Bridal Wear',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    link: '/wedding-planning/bridal-wear'
  },
  {
    title: 'Jewellery Showrooms',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed',
    link: '/wedding-planning/jewellery'
  },
  {
    title: 'Makeup Artists',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
    link: '/wedding-planning/makeup'
  },
  {
    title: 'Mehendi Artists',
    image: 'https://images.unsplash.com/photo-1595074475099-3d1c9b9df9f7',
    link: '/wedding-planning/mehendi'
  },
  {
    title: 'Hair Stylists',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    link: '/wedding-planning/hair'
  },
  {
    title: 'Salons',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250',
    link: '/wedding-planning/salons'
  }
];

export default function WeddingPlanningSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
          alt="Wedding Planning"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT WEDDINGS
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/wedding/plan" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/wedding-gift.png" alt="Plan Wedding" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Plan Wedding</h3>
                <p className="text-gray-600">Start Planning →</p>
              </div>
            </div>
          </Link>

          <Link href="/wedding/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          <Link href="/wedding/services" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/wedding-arch.png" alt="Wedding Services" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WEDDING SERVICES</h3>
                <p className="text-gray-600">4500+ Vendors →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/wedding/venues" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              alt="Wedding Venues"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Wedding Venues</h2>
            </div>
          </Link>

          <Link href="/wedding/photography" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
              alt="Wedding Photography"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Wedding Photography</h2>
            </div>
          </Link>

          <Link href="/wedding/bridal" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8"
              alt="Bridal Services"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Bridal Services</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 