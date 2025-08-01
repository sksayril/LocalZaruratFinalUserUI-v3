import React from 'react';
import Link from 'next/link';

const beautyServices = [
  {
    icon: '/icons/hair-cut.svg',
    title: 'Hair Cut',
    description: 'Hair Cut Services'
  },
  {
    icon: '/icons/facial.svg',
    title: 'Facial',
    description: 'Beauty Parlours For Facial'
  },
  {
    icon: '/icons/manicure.svg',
    title: 'Manicure',
    description: 'Nail Treatment Services'
  }, 
  {
    icon: '/icons/pedicure.svg',
    title: 'Pedicure',
    description: 'Beauty Parlours For Pedicure'
  },
  {
    icon: '/icons/hair-color.svg',
    title: 'Hair Color',
    description: 'Beauty Parlours For Hair Coloring'
  },
  {
    icon: '/icons/threading.svg',
    title: 'Threading',
    description: 'Threading Services'
  },
  {
    icon: '/icons/hair-styling.svg',
    title: 'Hair Styling',
    description: 'Hair Stylists'
  },
  {
    icon: '/icons/waxing.svg',
    title: 'Waxing',
    description: 'Beauty Parlours For Waxing'
  },
  {
    icon: '/icons/bridal-makeup.svg',
    title: 'Bridal Makeup',
    description: 'Bridal Makeup Artists'
  },
  {
    icon: '/icons/party-makeup.svg',
    title: 'Party Makeup',
    description: 'Party Makeup Artists'
  },
  {
    icon: '/icons/hair-straightening.svg',
    title: 'Hair Straightening',
    description: 'Beauty Parlours For Hair Straightening'
  },
  {
    icon: '/icons/nail-extensions.svg',
    title: 'Nail Extensions',
    description: 'Nail Extension Services'
  }
];

const topSalons = [
  {
    name: 'Muktaa Wellness Thane',
    image: '/salon-images/muktaa.jpg',
    location: 'Khera Circle Marg Thane West, Mumbai',
    phone: '08123883368',
    verified: true
  },
  {
    name: 'Feel Spa',
    image: '/salon-images/feel-spa.jpg',
    location: 'Khopat Road Thane West, Mumbai',
    phone: '09972300762',
    verified: true
  }
];

export default function BeautySpaSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8"
          alt="Beauty and Spa"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT BEAUTY
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/beauty/book-appointment" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/calendar.png" alt="Book Appointment" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Book Appointment</h3>
                <p className="text-gray-600">Schedule Service →</p>
              </div>
            </div>
          </Link>

          <Link href="/beauty/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

          <Link href="/beauty/services" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/spa.png" alt="Beauty Services" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">BEAUTY SERVICES</h3>
                <p className="text-gray-600">2840 Salons →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/beauty/hair-care" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
              alt="Hair Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Hair Care</h2>
            </div>
          </Link>

          <Link href="/beauty/skincare" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9"
              alt="Skin Care"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Skin Care</h2>
            </div>
          </Link>

          <Link href="/beauty/wellness" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
              alt="Wellness & Spa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Wellness & Spa</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 