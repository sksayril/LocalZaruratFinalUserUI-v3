import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const filterOptions = [
  { label: 'Sort by', type: 'dropdown' },
  { label: 'Book Appointment', type: 'button' },
  { label: 'Available Now', type: 'button' },
  { label: 'Establishment Type', type: 'dropdown' },
  { label: 'Gender', type: 'dropdown' },
  { label: 'Top Rated', type: 'toggle' },
  { label: 'Quick Response', type: 'toggle' },
  { label: 'Jd Verified', type: 'toggle' },
  { label: 'Rating', type: 'dropdown' }
];

const dentists = [
  {
    name: 'Remedy Polyclinic',
    rating: 4.8,
    totalRatings: 35,
    isResponsive: true,
    location: 'Shastri Marg Ghatkopar West, Mumbai',
    experience: '2 Years in Healthcare',
    isAvailable: true,
    features: ['Clean & hygienic'],
    suggestions: 4,
    phone: '09980114699',
    image: '/images/clinics/remedy-polyclinic.jpg'
  },
  {
    name: 'NIVA Dental Clinic Dahisar',
    rating: 5.0,
    totalRatings: 39,
    isResponsive: true,
    isVerified: true,
    location: 'Y R Tawde Road Dahisar West, Mumbai',
    qualification: 'BDS',
    image: '/images/clinics/niva-dental.jpg'
  }
];

export default function DentistsSection() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
          alt="Dental Care Services"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white tracking-wider">
            IT&apos;S ALL ABOUT DENTAL CARE
          </h1>
        </div>
      </div>

      {/* Action Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
          <Link href="/dentists/book" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <Image src="https://img.icons8.com/color/96/dental-braces.png" alt="Book Appointment" width={48} height={48} className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Book Appointment</h3>
                <p className="text-gray-600">Schedule Visit →</p>
              </div>
            </div>
          </Link>

          <Link href="/dentists/trending" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <Image src="https://img.icons8.com/color/96/trending-up.png" alt="What&apos;s Trending" width={48} height={48} className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">WHAT&apos;S TRENDING?</h3>
                <p className="text-gray-600">Try it Yourself →</p>
              </div>
            </div>
          </Link>

          <Link href="/dentists/find" className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <Image src="https://img.icons8.com/color/96/dentist.png" alt="Find Dentists" width={48} height={48} className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">FIND DENTISTS</h3>
                <p className="text-gray-600">26077+ Listings →</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/dentists/general" className="relative h-[300px] rounded-lg overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4"
              alt="General Dentistry"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">General Dentistry</h2>
            </div>
          </Link>

          <Link href="/dentists/orthodontics" className="relative h-[300px] rounded-lg overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99"
              alt="Orthodontics"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Orthodontics</h2>
            </div>
          </Link>

          <Link href="/dentists/cosmetic" className="relative h-[300px] rounded-lg overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
              alt="Cosmetic Dentistry"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Cosmetic Dentistry</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}