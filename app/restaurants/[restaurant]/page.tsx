import React from 'react';
import { restaurantsMockData, Restaurant } from '../mockData';
import { Phone, ShoppingCart, Calendar, MessageCircle, Share2, Edit3, Star, MapPin, Clock, DollarSign, Bookmark, Plus, Camera } from 'lucide-react';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurantsMockData.find(r => slugify(r.name) === slug);
}

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Product', value: 'product' },
  { label: 'Quick Info', value: 'quick-info' },
  { label: 'Services', value: 'services' },
  { label: 'Photos', value: 'photos' },
  { label: 'Reviews', value: 'reviews' },
];

export default function RestaurantDetailPage({ params }: { params: { restaurant: string } }) {
  const { restaurant } = params;
  const data = getRestaurantBySlug(restaurant);

  // For static export, we'll use a default active tab
  const activeTab: string = 'overview';

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Restaurant Not Found</h1>
          <p className="text-gray-600 text-lg">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Example product data for the Product tab
  const productData = [
    {
      id: 1,
      name: 'Butter Chicken',
      description: 'Creamy, rich butter chicken with tender pieces of chicken in a tomato-based sauce',
      price: '₹450',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=200&fit=crop',
    },
    // ... add more products as needed ...
  ];

  // Render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'product':
        return (
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">Our Popular Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {productData.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="w-32 h-24 object-cover rounded-lg mb-4" />
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <span className="font-bold text-blue-600">{product.price}</span>
                </div>
              ))}
            </div>
          </div>
        );
      // ... add cases for other tabs if needed ...
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex items-center space-x-2">
          <span className="hover:text-blue-600 cursor-pointer font-medium">Mumbai</span>
          <span className="text-gray-400">›</span>
          <span className="hover:text-blue-600 cursor-pointer font-medium">North Indian Restaurants In Mumbai</span>
          <span className="text-gray-400">›</span>
          <span className="hover:text-blue-600 cursor-pointer font-medium">North Indian Restaurants in Juhu</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-semibold">{data.name}</span>
        </div>

        {/* Premium Image Gallery */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-2 row-span-2 relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Featured
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={data.image} 
                alt={data.name} 
                className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg flex items-center justify-center text-lg font-bold text-blue-700 border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors duration-300 cursor-pointer group">
            <div className="text-center">
              <Plus className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <span className="text-sm font-semibold">+65 More</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-lg flex items-center justify-center text-lg font-bold text-green-700 border-2 border-dashed border-green-300 hover:border-green-400 transition-colors duration-300 cursor-pointer group">
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <span className="text-sm font-semibold">Add Photo</span>
            </div>
          </div>
        </div>

        {/* Premium Header Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://img.freepik.com/free-icon/restaurant_318-164514.jpg" 
                  alt="logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">{data.name}</h1>
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                    {data.rating}
                  </span>
                  <span className="text-gray-700 text-lg font-semibold">{data.ratingsCount.toLocaleString()} Ratings</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>Juhu, Mumbai</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <Clock className="w-5 h-5" />
                  <span>Open until 3:30 pm</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span>16 Years in Business</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span>₹ {data.price} for two</span>
                </div>
              </div>
            </div>
        </div>

          {/* Premium Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Show Number
            </button>
            
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <ShoppingCart className="w-5 h-5" />
              Order Online
            </button>
            
            <button className="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              <Calendar className="w-5 h-5" />
              Book a Table
            </button>
            
            <button className="bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 text-green-700 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-green-200">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            
            <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <Share2 className="w-5 h-5" />
              Share
            </button>
            
            <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <Edit3 className="w-5 h-5" />
              Edit
            </button>
        </div>

          {/* Premium Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-bold border border-gray-300">
              North Indian Restaurants
            </span>
            <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-bold border border-gray-300">
              Restaurants
            </span>
            <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 p-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              <Bookmark className="w-5 h-5" />
            </button>
        </div>
        </div>

        {/* Premium Tabs - Static version for export */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 mb-8 overflow-hidden">
          <div className="flex gap-3">
            {tabs.map(tab => (
              <div
                key={tab.value}
                className={`flex-1 py-4 px-6 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.value
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 border border-gray-200'
                }`}
              >
                {activeTab === tab.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                )}
                <span className="relative z-10">{tab.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Premium Content Sections */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            {/* Contact Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Information</h2>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl transform hover:scale-105 w-full">
                  <Phone className="w-5 h-5" />
                  Show Contact Number
                </div>
              </div>
            </div>

            {/* Product Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
                </div>
                <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-inner">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Culinary Excellence</h3>
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        Discover our signature dishes and culinary excellence. From traditional favorites to modern interpretations, 
                        every dish is crafted with passion and the finest ingredients.
                      </p>
                      <div className="flex items-center gap-4 mt-4">
                        <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-orange-200">
                          Premium Quality
                        </span>
                        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-green-200">
                          Fresh Ingredients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Sidebar */}
          <div className="lg:w-96 space-y-6">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Special Offers</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 rounded-3xl p-6 border border-blue-200 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-3 inline-block shadow-lg">
                      20% OFF
                    </div>
                    <h4 className="text-xl font-bold text-blue-800 mb-2">On First Order</h4>
                    <p className="text-blue-600 text-sm font-semibold mb-4">Use code: WELCOME20</p>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                      Claim Offer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  function slugify(name: string) {
    return name.toLowerCase().replace(/ /g, '-');
  }
  return restaurantsMockData.map(r => ({ restaurant: slugify(r.name) }));
} 