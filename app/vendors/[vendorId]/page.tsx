'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { useVendorDetails } from '@/hooks/useVendorDetails';
import { useLocation } from '@/lib/location-context';
import { ArrowLeft, Star, MapPin, Phone, Mail, Calendar, Award, CheckCircle, Shield, Wallet, Heart, Eye, ShoppingCart, Share2, MessageCircle, ThumbsUp, ThumbsDown, Users, Package, TrendingUp, Bookmark, Edit3, Crown, Zap, Clock, Users as UsersIcon, Navigation, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { VendorCardSkeleton, HeroSectionSkeleton, BreadcrumbSkeleton, FormSkeleton } from '@/components/ui/skeleton-loaders';

interface VendorDetailPageProps {
  params: { 
    vendorId: string;
  };
}

export default function VendorDetailPage({ params }: VendorDetailPageProps) {
  const { vendorId } = params;
  const [activeTab, setActiveTab] = useState('overview');
  const { vendor, products, ratingStats, recentReviews, isFavorited, loading, error } = useVendorDetails(vendorId);
  const { location: userLocation } = useLocation();

  // Calculate distance between user and vendor
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    return distance;
  };

  // Get distance if both locations are available
  const getDistance = () => {
    if (userLocation && vendor?.vendorDetails?.shopAddress?.coordinates) {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        vendor.vendorDetails.shopAddress.coordinates.latitude,
        vendor.vendorDetails.shopAddress.coordinates.longitude
      );
      return distance < 1 ? `${(distance * 1000).toFixed(0)}m` : `${distance.toFixed(1)}km`;
    }
    return null;
  };

  // Debug logging
  console.log('VendorDetailPage: vendorId:', vendorId);
  console.log('VendorDetailPage: loading:', loading);
  console.log('VendorDetailPage: error:', error);
  console.log('VendorDetailPage: vendor:', vendor);
  console.log('VendorDetailPage: products:', products);
  console.log('VendorDetailPage: ratingStats:', ratingStats);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
          <BreadcrumbSkeleton />
          <HeroSectionSkeleton />
          
          {/* Vendor Info Skeleton */}
          <div className="bg-white shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1">
                  <div className="h-8 w-64 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="flex gap-4 mb-6">
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
                <div className="w-full md:w-80">
                  <FormSkeleton fields={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !vendor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
          <div className="text-center py-12 md:py-16">
            <div className="bg-red-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl md:text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Vendor Not Found</h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              {error || "The vendor you're looking for doesn't exist or has been removed."}
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 selection:bg-blue-100 selection:text-blue-800">
      <div className="flex justify-end mt-5 mr-4">
            <Link 
              href={`/subcategories/${vendor.vendorDetails.mainCategory._id}/${vendor.vendorDetails.subCategory.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-red-500/30 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vendors
            </Link>
          </div>
      <div className="max-w-7xl mx-auto py-4 md:py-12 px-3 md:px-6 space-y-8">
        {/* Breadcrumb with more refined styling */}
        <div className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex items-center space-x-2 flex-wrap">
          <Link href="/" className="hover:text-blue-600 cursor-pointer font-medium transition-colors group flex items-center">
            <span className="group-hover:translate-x-[-2px] transition-transform">Home</span>
          </Link>
          <span className="text-gray-400">›</span>
          <Link href={`/subcategories/${vendor.vendorDetails.mainCategory._id}`} className="hover:text-blue-600 cursor-pointer font-medium">
            {vendor.vendorDetails.mainCategory.name}
          </Link>
          <span className="text-gray-400">›</span>
          <Link href={`/subcategories/${vendor.vendorDetails.mainCategory._id}/${vendor.vendorDetails.subCategory.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600 cursor-pointer font-medium">
            {vendor.vendorDetails.subCategory.name}
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-semibold">{vendor.name}</span>
        </div>

        {/* Premium Hero Section with Enhanced Image Gallery */}
        <div className="bg-whiten  shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-3xl">
          {/* Image Gallery with more premium hover effects */}
          <div className="relative h-60 md:h-96 lg:h-[500px] group">
            <div className="grid grid-cols-4 gap-2 h-full">
              {/* Main Large Image with enhanced hover effect */}
              <div className="col-span-3 relative overflow-hidden">
                {vendor.vendorDetails.shopImages && vendor.vendorDetails.shopImages.length > 0 ? (
                  <img 
                    src={vendor.vendorDetails.shopImages[0]} 
                    alt={vendor.vendorDetails.shopName}
                    className="w-full h-full object-cover rounded-l-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center rounded-l-3xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {vendor.vendorDetails.shopName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-l-3xl"></div>
              </div>
              
              {/* Side Images with premium hover state */}
              <div className="col-span-1 space-y-2">
                {vendor.vendorDetails.shopImages && vendor.vendorDetails.shopImages.length > 1 ? (
                  <>
                    <div className="relative h-1/2 overflow-hidden">
                      <img 
                        src={vendor.vendorDetails.shopImages[1]} 
                        alt={vendor.vendorDetails.shopName}
                        className="w-full h-full object-cover rounded-tr-3xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-tr-3xl"></div>
                    </div>
                    <div className="relative h-1/2 overflow-hidden">
                      <img 
                        src={vendor.vendorDetails.shopImages[2] || vendor.vendorDetails.shopImages[1]} 
                        alt={vendor.vendorDetails.shopName}
                        className="w-full h-full object-cover rounded-br-3xl transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-br-3xl"></div>
                      {vendor.vendorDetails.shopImages.length > 3 && (
                        <div className="absolute inset-0 bg-black/60 rounded-br-3xl flex items-center justify-center">
                          <span className="text-white text-sm font-bold">+{vendor.vendorDetails.shopImages.length - 3} More</span>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-1/2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-tr-3xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">+</span>
                      </div>
                    </div>
                    <div className="h-1/2 bg-gradient-to-br from-gray-200 to-gray-300 rounded-br-3xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">+</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Action Buttons with more refined hover states */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="bg-white/80 backdrop-blur-md text-gray-700 p-2.5 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5" />
              </button>
              <button className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-105 ${
                isFavorited 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white hover:shadow-lg'
              }`}>
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
              <button className="bg-white/80 backdrop-blur-md text-gray-700 p-2.5 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vendor Info Section with more refined typography and spacing */}
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Left Side - Vendor Details */}
              <div className="flex-1">
                                    {/* Logo and Name */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm text-center leading-tight">
                          {vendor.name.split(' ').map(word => word.charAt(0)).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{vendor.name}</h1>
                          <ThumbsUp className="w-5 h-5 text-blue-500" />
                        </div>
                    
                    {/* Rating and Badges */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                          {ratingStats?.averageRating.toFixed(1) || '4.7'}
                        </div>
                        <span className="text-sm text-gray-600">{ratingStats?.totalRatings || 222} Ratings</span>
                      </div>
                      
                      {/* Trust Badges */}
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                          <Crown className="w-3 h-3" />
                          Trust
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          Claimed
                        </span>
                      </div>
                    </div>

                    {/* Location and Experience */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{vendor.vendorDetails.shopAddress.location}, {vendor.vendorDetails.shopAddress.nearbyLocation}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Member since {new Date(vendor.createdAt).getFullYear()}</span>
                      </div>
                    </div>

                    {/* Service Tags */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {vendor.vendorDetails.mainCategory.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {vendor.vendorDetails.subCategory.name}
                      </span>
                    </div>

                    {/* Coordinates Display */}
                    {vendor.vendorDetails.shopAddress.coordinates && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          <Navigation className="w-3 h-3" />
                          {vendor.vendorDetails.shopAddress.coordinates?.latitude.toFixed(6)}, {vendor.vendorDetails.shopAddress.coordinates?.longitude.toFixed(6)}
                        </span>
                        {getDistance() && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                            <MapPin className="w-3 h-3" />
                            {getDistance()} away
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="lg:w-80 space-y-3">
                {/* Main CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    {vendor.phone}
                  </button>
                  
                  <button className="w-full bg-blue-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Enquire Now
                  </button>
                  
                  <button className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </button>
                  
                  {/* Location Action Buttons */}
                  {vendor.vendorDetails.shopAddress.coordinates && (
                    <div className="space-y-2">
                      <button 
                        onClick={() => {
                          const coordinates = vendor.vendorDetails.shopAddress.coordinates;
                          if (coordinates) {
                            const { latitude, longitude } = coordinates;
                            window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
                          }
                        }}
                        className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <MapPin className="w-5 h-5" />
                        View on Google Maps
                      </button>
                      
                      <button 
                        onClick={() => {
                          const coordinates = vendor.vendorDetails.shopAddress.coordinates;
                          if (coordinates) {
                            const { latitude, longitude } = coordinates;
                            window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
                          }
                        }}
                        className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-5 h-5" />
                        Get Directions
                      </button>
                    </div>
                  )}
                </div>

                {/* Rating Input */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className="w-5 h-5 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Click to Rate</p>
                </div>

                {/* Small Action Icons */}
                <div className="flex items-center justify-center gap-4">
                  <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs with more premium styling */}
          <div className="bg-white shadow-xl border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8 py-1">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-1 border-b-3 ${
                    activeTab === 'overview' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } font-semibold text-sm relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:scale-x-100 hover:after:scale-x-110 transition-transform`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('healthServices')}
                  className={`py-4 px-1 border-b-2 ${
                    activeTab === 'healthServices' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-gray-700 font-medium text-sm`}
                >
                  Health Services
                </button>
                <button 
                  onClick={() => setActiveTab('quickInfo')}
                  className={`py-4 px-1 border-b-2 ${
                    activeTab === 'quickInfo' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-gray-700 font-medium text-sm`}
                >
                  Quick Info
                </button>
                <button 
                  onClick={() => setActiveTab('services')}
                  className={`py-4 px-1 border-b-2 ${
                    activeTab === 'services' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-gray-700 font-medium text-sm`}
                >
                  Services
                </button>
                <button 
                  onClick={() => setActiveTab('photos')}
                  className={`py-4 px-1 border-b-2 ${
                    activeTab === 'photos' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-gray-700 font-medium text-sm`}
                >
                  Photos
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-1 border-b-2 ${
                    activeTab === 'reviews' 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500'
                  } hover:text-gray-700 font-medium text-sm`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Add the content sections */}
            <div className="p-6 md:p-8">
              {/* Overview Section */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">{vendor.name}</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <p className="text-gray-600 text-lg">{vendor.vendorDetails.shopDescription}</p>
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span>{vendor.vendorDetails.shopAddress.addressLine1}, {vendor.vendorDetails.shopAddress.addressLine2}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <span>Member since {new Date(vendor.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Health Services Section */}
              {activeTab === 'healthServices' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Health Services</h2>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{vendor.vendorDetails.mainCategory.name}</h3>
                        <p className="text-gray-600">{vendor.vendorDetails.subCategory.name} Services</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Specialized in {vendor.vendorDetails.subCategory.name} services at {vendor.vendorDetails.shopAddress.location}
                    </p>
                  </div>
                </div>
              )}

              {/* Quick Info Section */}
              {activeTab === 'quickInfo' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Quick Info</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Contact</h3>
                          <p className="text-gray-600">{vendor.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Address</h3>
                          <p className="text-gray-600">
                            {vendor.address.street}, {vendor.address.city}<br />
                            {vendor.address.state} - {vendor.address.pincode}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-purple-600 mt-1" />
                        <div>
                          <h3 className="font-semibold">Shop Location</h3>
                          <p className="text-gray-600">
                            {vendor.vendorDetails.shopAddress.addressLine1}<br />
                            Near: {vendor.vendorDetails.shopAddress.nearbyLocation}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Details Card */}
                    {vendor.vendorDetails.shopAddress.coordinates && (
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <Navigation className="w-6 h-6 text-blue-600" />
                          <h3 className="text-lg font-semibold">Location Details</h3>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Latitude:</span>
                            <span className="font-mono text-sm">{vendor.vendorDetails.shopAddress.coordinates?.latitude.toFixed(6)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Longitude:</span>
                            <span className="font-mono text-sm">{vendor.vendorDetails.shopAddress.coordinates?.longitude.toFixed(6)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Pincode:</span>
                            <span className="text-sm">{vendor.vendorDetails.shopAddress.pincode}</span>
                          </div>
                        </div>
                        
                        <div className="pt-4 space-y-2">
                          <button 
                            onClick={() => {
                              const coordinates = vendor.vendorDetails.shopAddress.coordinates;
                              if (coordinates) {
                                const { latitude, longitude } = coordinates;
                                window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
                              }
                            }}
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <MapPin className="w-4 h-4" />
                            View on Maps
                          </button>
                          
                          <button 
                            onClick={() => {
                              const coordinates = vendor.vendorDetails.shopAddress.coordinates;
                              if (coordinates) {
                                const { latitude, longitude } = coordinates;
                                window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
                              }
                            }}
                            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <Navigation className="w-4 h-4" />
                            Get Directions
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Services Section */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Products & Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map((product) => (
                      <div key={product._id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          {product.images && product.images[0] && (
                            <img 
                              src={product.images[0].url} 
                              alt={product.images[0].alt} 
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                          )}
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                            <p className="text-gray-600 mt-1">{product.description}</p>
                            <div className="mt-3 flex items-center justify-between">
                              <span className="text-lg font-bold text-green-600">₹{product.price.amount}</span>
                              {product.price.isNegotiable && (
                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                                  Negotiable
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photos Section */}
              {activeTab === 'photos' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {vendor.vendorDetails.shopImages?.map((image, index) => (
                      <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img 
                          src={image} 
                          alt={`${vendor.vendorDetails.shopName} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  {(!vendor.vendorDetails.shopImages || vendor.vendorDetails.shopImages.length === 0) && (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <p className="text-gray-600">No photos available yet.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Reviews Section */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Ratings & Reviews</h2>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900">{ratingStats ? ratingStats.averageRating.toFixed(1) : '0.0'}</div>
                        <div className="flex items-center gap-1 my-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`w-5 h-5 ${
                                ratingStats && star <= ratingStats.averageRating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{ratingStats ? ratingStats.totalRatings : 0} ratings</p>
                      </div>
                      <div className="flex-1">
                        {ratingStats ? (
                          Object.entries(ratingStats.ratingDistribution)
                            .sort(([a], [b]) => Number(b) - Number(a))
                            .map(([rating, count]) => (
                              <div key={rating} className="flex items-center gap-2 mb-1">
                                <span className="text-sm text-gray-600 w-3">{rating}</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ 
                                      width: `${ratingStats.totalRatings > 0 
                                        ? (count / ratingStats.totalRatings) * 100 
                                        : 0}%` 
                                    }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-8">{count}</span>
                              </div>
                            ))
                        ) : (
                          <div className="text-gray-400 text-sm">No ratings yet.</div>
                        )}
                      </div>
                    </div>
                    
                    {recentReviews?.length > 0 ? (
                      <div className="space-y-4">
                        {recentReviews.map((review, index) => (
                          <div key={index} className="border-t border-gray-100 pt-4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`w-4 h-4 ${
                                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                      }`} 
                                    />
                                  ))}
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Star className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats and Quick Actions */}
          <div className="bg-white shadow-lg border border-gray-100 p-6 md:p-8 mb-2 relative overflow-hidden">
            {/* Premium gradient border */}
            {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-black via-black to-black"></div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Products Card */}
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-4 rounded-2xl border-2 border-black">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Package className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-blue-900/60">Products</h3>
                      <p className="text-2xl md:text-3xl font-bold text-blue-600">{products.length}</p>
                      <p className="text-xs md:text-sm text-blue-900/50 mt-1">Available products</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-4 rounded-2xl border-2 border-black ">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <Star className="w-6 h-6 md:w-7 md:h-7 text-green-600 fill-current" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-green-900/60">Rating</h3>
                      <p className="text-2xl md:text-3xl font-bold text-green-600">
                        {ratingStats?.averageRating.toFixed(1) || '0.0'}
                      </p>
                      <p className="text-xs md:text-sm text-green-900/50 mt-1">Average rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Since Card */}
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-4 rounded-2xl border-2 border-black">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Calendar className="w-6 h-6 md:w-7 md:h-7 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-purple-900/60">Since</h3>
                      <p className="text-2xl md:text-3xl font-bold text-purple-600">
                        {new Date(vendor.createdAt).getFullYear()}
                      </p>
                      <p className="text-xs md:text-sm text-purple-900/50 mt-1">Years in business</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Views Card */}
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="p-4 rounded-2xl border-2 border-black">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-orange-900/60">Views</h3>
                      <p className="text-2xl md:text-3xl font-bold text-orange-600">
                        {products.reduce((acc, product) => acc + product.views, 0)}
                      </p>
                      <p className="text-xs md:text-sm text-orange-900/50 mt-1">Total product views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Left Column - Products */}
            <div className="lg:col-span-3">
              {/* Products Section */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Products & Services</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{products.length} products</span>
                    </div>
                  </div>
                  
                  {products.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Package className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">No Products Available</h3>
                      <p className="text-gray-600 text-sm md:text-base">This vendor hasn't listed any products yet.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {products.map((product) => (
                        <div key={product._id} className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 group">
                          {/* Product Image */}
                          <div className="relative h-48 md:h-56 rounded-lg md:rounded-xl overflow-hidden mb-4">
                            {product.images && product.images.length > 0 ? (
                              <img 
                                src={product.images[0].url} 
                                alt={product.images[0].alt || product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <Package className="w-12 h-12 text-gray-400" />
                              </div>
                            )}
                            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                              {product.views} views
                            </div>
                          </div>

                          {/* Product Info */}
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                          
                          {/* Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xl md:text-2xl font-bold text-green-600">₹{product.price.amount}</span>
                              {product.price.isNegotiable && (
                                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Negotiable</span>
                              )}
                            </div>
                            <span className="text-xs text-gray-500">{product.price.currency}</span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button className="flex-1 bg-blue-600 text-white px-4 py-2 md:py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                              <ShoppingCart className="w-4 h-4" />
                              Inquire
                            </button>
                            <button className="bg-gray-100 text-gray-700 px-4 py-2 md:py-3 rounded-lg text-sm font-bold hover:bg-gray-200 transition-all duration-300">
                              <MessageCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Vendor Info & Reviews */}
            <div className="space-y-6 md:space-y-8">
              {/* Sidebar Action Tabs */}
              <div className="space-y-3">
                <div className="bg-orange-500 text-white p-3 rounded-lg flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-orange-600 transition-colors">
                  Advertise
                </div>
                <div className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-blue-600 transition-colors">
                  Free Listing
                </div>
              </div>
              {/* Vendor Information */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Vendor Information</h2>
                  
                  <div className="space-y-4 md:space-y-6">
                    {/* Contact Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Contact Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-green-500" />
                          <span className="font-medium">{vendor.phone}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-blue-500 mt-0.5" />
                          <span>
                            {vendor.address.street}, {vendor.address.city}, {vendor.address.state} - {vendor.address.pincode}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Shop Details */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Shop Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-purple-500 mt-0.5" />
                          <span>
                            {vendor.vendorDetails.shopAddress.addressLine1}, {vendor.vendorDetails.shopAddress.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span>Listed {new Date(vendor.vendorDetails.shopListedAt).toLocaleDateString()}</span>
                        </div>
                        {vendor.vendorDetails.shopAddress.coordinates && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Navigation className="w-4 h-4 text-green-500" />
                            <span>
                              {vendor.vendorDetails.shopAddress.coordinates?.latitude.toFixed(4)}, {vendor.vendorDetails.shopAddress.coordinates?.longitude.toFixed(4)}
                            </span>
                          </div>
                        )}
                        {getDistance() && (
                          <div className="flex items-center gap-2 text-sm text-orange-600">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">{getDistance()} away</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">About</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {vendor.vendorDetails.shopDescription}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-6 md:mt-8">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact
                    </button>
                    <button className="flex-1 bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Message
                    </button>
                  </div>
                </div>
              </div>

              {/* Rating & Reviews */}
              {/* <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Rating & Reviews</h2>
                  
                  {ratingStats && ratingStats.totalRatings > 0 ? (
                    <div className="space-y-4 md:space-y-6">
                      {/* Overall Rating */}
                      {/* <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                          {ratingStats.averageRating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`w-5 h-5 md:w-6 md:h-6 ${
                                star <= ratingStats.averageRating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{ratingStats.totalRatings} reviews</p>
                      </div>

                      {/* Rating Distribution */}
                      {/* <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => {
                          const count = ratingStats.ratingDistribution[rating.toString() as keyof typeof ratingStats.ratingDistribution];
                          const percentage = ratingStats.totalRatings > 0 ? (count / ratingStats.totalRatings) * 100 : 0;
                          return (
                            <div key={rating} className="flex items-center gap-2">
                              <span className="text-sm text-gray-600 w-4">{rating}★</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 w-8">{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <Star className="w-6 h-6 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">No Reviews Yet</h3>
                      <p className="text-gray-600 text-sm">Be the first to review this vendor!</p>
                    </div>
                  )}

                  {/* Review Action */}
                  {/* <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t">
                    <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>  */} 
            </div>
          </div>

          {/* Awards and Certificates Section */}
          <div className="bg-white md:rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-2 md:mb-4">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Awards and Certificates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Award Card */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-lg font-bold text-gray-800">Excellence Award</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Recognized for outstanding service quality and customer satisfaction.</p>
                  <div className="text-xs text-gray-500">Awarded 2023</div>
                </div>

                {/* Certificate Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-800">Quality Certified</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">ISO certified for maintaining high standards in beauty and wellness services.</p>
                  <div className="text-xs text-gray-500">Certified 2022</div>
                </div>

                {/* Recognition Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-8 h-8 text-green-600" />
                    <h3 className="text-lg font-bold text-gray-800">Top Rated</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Consistently rated among the top beauty clinics in the region.</p>
                  <div className="text-xs text-gray-500">2021-2023</div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
} 