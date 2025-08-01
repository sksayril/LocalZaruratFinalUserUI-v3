'use client';

import React from 'react';
import Link from 'next/link';
import { useSubcategories } from '@/hooks/useSubcategories';
import { ArrowLeft, MapPin, Users, Star } from 'lucide-react';

interface SubcategoriesSectionProps {
  mainCategoryId: string;
  mainCategoryName?: string;
}

export default function SubcategoriesSection({ mainCategoryId, mainCategoryName }: SubcategoriesSectionProps) {
  const { subcategories, loading, error } = useSubcategories(mainCategoryId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading Subcategories</h2>
            <p className="text-gray-600">Please wait while we fetch the available services...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
          <div className="text-center py-16">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Failed to Load Subcategories</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {mainCategoryName || 'Subcategories'}
          </h1>
          <p className="text-xl text-gray-600">
            Explore {subcategories.length} specialized services
          </p>
        </div>

        {/* Subcategories Grid */}
        {subcategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory._id}
                href={`/subcategories/${subcategory.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {subcategory.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {subcategory.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{subcategory.vendorCount} vendors</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">📂</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No Subcategories Found</h2>
            <p className="text-gray-600 mb-4">
              There are no subcategories available for this category at the moment.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 