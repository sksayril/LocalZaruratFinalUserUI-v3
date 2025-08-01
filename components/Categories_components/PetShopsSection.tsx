import React from 'react';
import Link from 'next/link';

export default function PetShopsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
          alt="Pet Shops and Pet Care"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT'S ALL ABOUT PETS
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/petshops/adopt" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/pet-adoption.png" alt="Adopt A Pet" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Adopt A Pet</h3>
                <p className="text-gray-600">Find Your Companion →</p>
              </div>
            </div>
          </Link>

          <Link href="/petshops/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/trending-up.png" alt="What's Trending" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT'S TRENDING?</h3>
                <p className="text-gray-600">Popular Pets →</p>
              </div>
            </div>
          </Link>

          <Link href="/petshops/supplies" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img src="https://img.icons8.com/color/96/pet-food.png" alt="Pet Supplies" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">PET SUPPLIES</h3>
                <p className="text-gray-600">1200+ Products →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/petshops/dogs" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1552053831-71594a27632d"
              alt="Dogs and Puppies"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Dogs & Puppies</h2>
            </div>
          </Link>

          <Link href="/petshops/cats" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
              alt="Cats and Kittens"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Cats & Kittens</h2>
            </div>
          </Link>

          <Link href="/petshops/exotic" className="relative h-[300px] rounded-lg overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
              alt="Exotic Pets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Exotic Pets</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 