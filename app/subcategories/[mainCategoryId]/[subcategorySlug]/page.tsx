'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { fetchSubcategories, fetchVendors } from '@/lib/api';
import { useVendors } from '@/hooks/useVendors';
import { ArrowLeft, Users, Star, MapPin, Phone, Mail, Calendar, Clock, Award, CheckCircle, ChevronLeft, ChevronRight, Shield, Wallet, Eye, ThumbsUp, Search, TrendingUp, Shield as VerifiedIcon } from 'lucide-react';
import Link from 'next/link';
import { VendorGridSkeleton, HeroSectionSkeleton, StatsCardSkeleton, BreadcrumbSkeleton, PaginationSkeleton } from '@/components/ui/skeleton-loaders';

interface SubcategoryDetailPageProps {
  params: { 
    mainCategoryId: string;
    subcategorySlug: string;
  };
}

export default function SubcategoryDetailPage({ params }: SubcategoryDetailPageProps) {
  const { mainCategoryId, subcategorySlug } = params;
  const [subcategory, setSubcategory] = useState<any>(null);
  const [subcategoryId, setSubcategoryId] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // Fetch subcategory details to get the ID
  useEffect(() => {
    async function loadSubcategory() {
  try {
        setLoading(true);
    const subcategories = await fetchSubcategories(mainCategoryId);
        const foundSubcategory = subcategories.find(sub => sub.slug === subcategorySlug);
        
        if (foundSubcategory) {
          setSubcategory(foundSubcategory);
          setSubcategoryId(foundSubcategory._id);
        }
  } catch (error) {
        console.error('Error fetching subcategory:', error);
      } finally {
        setLoading(false);
      }
    }

    if (mainCategoryId && subcategorySlug) {
      loadSubcategory();
    }
  }, [mainCategoryId, subcategorySlug]);

  // Use the vendors hook
  const { vendors, subCategory, pagination, loading: vendorsLoading, error: vendorsError } = useVendors(subcategoryId, currentPage, 10);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
          <BreadcrumbSkeleton />
          <HeroSectionSkeleton />
          
          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
          </div>
          
          {/* Vendors Section Skeleton */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <VendorGridSkeleton count={3} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!subcategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
          <div className="text-center py-12 md:py-16">
            <div className="bg-red-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl md:text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6 text-sm md:text-base">The service you're looking for doesn't exist or has been removed.</p>
            <Link 
              href={`/subcategories/${mainCategoryId}`}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Subcategories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-6 md:py-8 px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 flex items-center space-x-1 md:space-x-2 flex-wrap">
          <Link href="/" className="hover:text-blue-600 cursor-pointer font-medium">Home</Link>
          <span className="text-gray-400">›</span>
          <Link href={`/subcategories/${mainCategoryId}`} className="hover:text-blue-600 cursor-pointer font-medium">Subcategories</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-semibold">{subcategory.name}</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
          <div className="relative h-48 md:h-64 lg:h-80">
            <img 
              src={subcategory.image || subcategory.thumbnail} 
              alt={subcategory.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">{subcategory.name}</h1>
              <p className="text-sm md:text-xl opacity-90">{subcategory.description}</p>
            </div>
          </div>
        </div>

        {/* Stats and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg md:rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Available Vendors</h3>
                <p className="text-xl md:text-2xl font-bold text-blue-600">{pagination?.totalItems || 0}</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Verified and trusted service providers</p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg md:rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-green-600 fill-current" />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Average Rating</h3>
                <p className="text-xl md:text-2xl font-bold text-green-600">
                  {vendors.length > 0 ? (vendors.reduce((acc, vendor) => acc + vendor.vendorDetails.averageRating, 0) / vendors.length).toFixed(1) : '0.0'}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Based on customer reviews</p>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg md:rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900">Service Area</h3>
                <p className="text-xl md:text-2xl font-bold text-purple-600">India</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">Available in your area</p>
          </div>
        </div>

        {/* Vendors Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-6 md:mb-8">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Available Vendors</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{pagination?.totalItems || 0} vendors</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
            
            {vendorsLoading ? (
              <VendorGridSkeleton count={3} />
            ) : vendorsError ? (
              <div className="text-center py-12">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 text-xl">⚠️</span>
                </div>
                <p className="text-red-600 text-sm md:text-base">{vendorsError}</p>
              </div>
            ) : vendors.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 text-xl">📭</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">No Vendors Found</h3>
                <p className="text-gray-600 text-sm md:text-base">No vendors are available for this service at the moment.</p>
              </div>
            ) : (
              <>
                {/* Vendor Cards - Updated to match image design */}
                <div className="space-y-6">
                  {vendors.map((vendor, index) => (
                    <div 
                      key={vendor._id} 
                      className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                      onClick={() => window.open(`/vendors/${vendor._id}`, '_blank')}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
                          {vendor.vendorDetails.shopImages && vendor.vendorDetails.shopImages.length > 0 ? (
                            <img 
                              src={vendor.vendorDetails.shopImages[0]} 
                              alt={vendor.vendorDetails.shopName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">🏪</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Carousel Arrow Overlay */}
                          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-4 md:p-6">
                          {/* Header with Name and Rating */}
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                {vendor.vendorDetails.shopName}
                              </h3>
                              <ThumbsUp className="w-4 h-4 text-blue-500" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-bold">
                                {vendor.vendorDetails.averageRating.toFixed(1)}
                              </div>
                              <span className="text-sm text-gray-600">{Math.floor(Math.random() * 500) + 50} Ratings</span>
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="flex items-center gap-2 mb-3">
                            {index === 0 && (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                <Search className="w-3 h-3" />
                                Top Search
                              </span>
                            )}
                            {index === 1 && (
                              <>
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  <VerifiedIcon className="w-3 h-3" />
                                  Verified
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                                  <TrendingUp className="w-3 h-3" />
                                  Trending
                                </span>
                              </>
                            )}
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-2 mb-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">
                              {vendor.vendorDetails.shopAddress.addressLine1}, {vendor.vendorDetails.shopAddress.location}
                            </span>
                          </div>

                                                     {/* Services Tags */}
                           <div className="flex items-center gap-2 mb-4">
                             <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                               {subcategory.name}
                             </span>
                             {vendor.vendorDetails.subscription.features.featuredListing && (
                               <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                 Featured Service
                               </span>
                             )}
                           </div>

                          {/* Contact Buttons */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(`tel:${vendor.phone}`, '_blank');
                              }}
                              className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm"
                              title="Call"
                            >
                              <Phone className="w-3 h-3" />
                              {vendor.phone}
                            </button>
                            
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                const message = `Hi, I'm interested in your services at ${vendor.vendorDetails.shopName}`;
                                const whatsappUrl = `https://wa.me/91${vendor.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
                                window.open(whatsappUrl, '_blank');
                              }}
                              className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm"
                              title="WhatsApp"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                              </svg>
                              WhatsApp
                            </button>
                            
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                const subject = `Inquiry about ${vendor.vendorDetails.shopName}`;
                                const body = `Hi ${vendor.name},\n\nI'm interested in your services at ${vendor.vendorDetails.shopName}.\n\nPlease provide more information about your services and pricing.\n\nBest regards,\n[Your Name]`;
                                const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                window.open(mailtoUrl, '_blank');
                              }}
                              className="flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold text-sm"
                              title="Send Enquiry"
                            >
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                              </svg>
                              Send Enquiry
                              {index === 1 && (
                                <span className="text-xs opacity-75">Responds in 3 Hours</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {pagination && pagination.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === pagination.totalPages}
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Pagination Info */}
                {pagination && (
                  <div className="text-center mt-4 text-sm text-gray-600">
                    Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} vendors
                  </div>
                )}
              </>
            )}
          </div>
        </div>    
      </div>
    </div>
  );
} 