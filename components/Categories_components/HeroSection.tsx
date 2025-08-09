'use client';

import { useState, useEffect } from 'react';
import { Search, Mic, MapPin, ChevronDown, Menu, X, Globe, Mail, Briefcase, List, Bell } from 'lucide-react';
import { useLocation } from '@/lib/location-context';
import { useCategories } from '@/hooks/useCategories';
import { Category } from '@/lib/api';
import Link from 'next/link';

export default function HeroSection() {
  const { location, geocodedLocation, getCurrentLocation } = useLocation();
  const { categories, loading: categoriesLoading } = useCategories();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Category[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  // Filter categories based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories([]);
      setShowSearchResults(false);
      return;
    }

    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCategories(filtered);
    setShowSearchResults(true);
  }, [searchQuery, categories]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle search result click
  const handleSearchResultClick = (category: Category) => {
    setSearchQuery(category.name);
    setShowSearchResults(false);
    // Navigate to category page
    window.location.href = `/subcategories/${category._id}`;
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSearchResults(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Search Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Find Local Businesses & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Discover the best local businesses, restaurants, hotels, and services near you
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center p-2 md:p-3">
              {/* Location Input */}
              <div className="flex items-center flex-shrink-0 px-3 md:px-4 py-3 border-r border-gray-200">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium">Your Location</div>
                  <div className="text-sm md:text-base font-semibold text-gray-700 flex items-center">
                    {geocodedLocation ? (
                      <>
                        {geocodedLocation.city}, {geocodedLocation.state}
                        <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
                      </>
                    ) : (
                      <button
                        onClick={getCurrentLocation}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Set Location
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Search Input */}
              <div className="flex items-center flex-1 px-3 md:px-4 py-3 relative">
                <input
                  type="text"
                  placeholder="Search for businesses, services, or categories..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSearchResults(true)}
                  className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 font-medium text-sm md:text-base"
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && filteredCategories.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                    {filteredCategories.map((category, index) => (
                      <div
                        key={category._id}
                        onClick={() => handleSearchResultClick(category)}
                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <img 
                            src={category.icon} 
                            alt={category.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'block';
                            }}
                          />
                          <span className="text-gray-500 text-lg font-bold hidden">📋</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{category.name}</div>
                          <div className="text-sm text-gray-500">{category.description}</div>
                          <div className="text-xs text-blue-600 font-medium">{category.vendorCount} vendors</div>
                        </div>
                        <div className="text-gray-400">
                          <ChevronDown className="w-4 h-4 transform rotate-90" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No Results Message */}
                {showSearchResults && searchQuery.trim() !== '' && filteredCategories.length === 0 && !categoriesLoading && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <div className="text-center text-gray-500">
                      <div className="text-lg mb-2">🔍</div>
                      <div className="font-medium">No categories found</div>
                      <div className="text-sm">Try searching with different keywords</div>
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {showSearchResults && categoriesLoading && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                    <div className="text-center text-gray-500">
                      <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mb-2"></div>
                      <div className="text-sm">Searching categories...</div>
                    </div>
                  </div>
                )}

                {/* Mic Icon */}
                <Mic className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 flex-shrink-0" style={{stroke: '#2196f3', fill: '#fff', background: 'linear-gradient(180deg, #2196f3 60%, #ff9800 100%)', borderRadius: '50%'}} />
                
                {/* Search Button */}
                <button 
                  onClick={() => {
                    if (searchQuery.trim() !== '' && filteredCategories.length > 0) {
                      handleSearchResultClick(filteredCategories[0]);
                    }
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded ml-1 transition-colors"
                >
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-2 overflow-x-hidden">
          {/* Left Banner */}
          <div className="flex-shrink-0 bg-[#2563eb] rounded-2xl flex flex-col justify-between p-6 md:p-8 min-h-[200px] md:min-h-[260px] w-full lg:w-[460px] text-white relative" style={{background: 'linear-gradient(90deg, #2563eb 60%, #2563eb 100%)'}}>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight">Grow your business<br/>on LocalZarurat</div>
              <ul className="mb-4 md:mb-6 mt-3 md:mt-4 space-y-1 md:space-y-2">
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Get noticed</li>
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Boost sales</li>
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>Increase revenue</li>
              </ul>
              <button 
                onClick={() => window.open('https://seller.localzarurat.com', '_blank')}
                className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg shadow w-max cursor-pointer transition-colors"
              >
                Start Now
              </button>
            </div>
            {/* <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNl9idXNpbmVzc19tYW5fcG9ydHJhaXRfaXNvbGF0ZWRfb25fd2hpdGVfdHJhbnNwYV8yZjZjNDE2Yy03NTA2LTQwZjctOWVlZS00MDBkMDQ2NGE5MjMucG5n.png" alt="Business Man" className="absolute right-2 md:right-4 bottom-0 h-32 md:h-48 w-auto object-contain" /> */}
            {/* Dots */}
            <div className="absolute left-1/2 bottom-2 md:bottom-4 -translate-x-1/2 flex gap-1 md:gap-2">
              {[...Array(8)].map((_, i) => (
                <span key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-blue-300'} inline-block`}></span>
              ))}
            </div>
          </div>

          {/* Right Banner */}
          {/* <div className="flex-shrink-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex flex-col justify-between p-6 md:p-8 min-h-[200px] md:min-h-[260px] w-full lg:w-[460px] text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 leading-tight">Discover Amazing<br/>Local Deals</div>
              <ul className="mb-4 md:mb-6 mt-3 md:mt-4 space-y-1 md:space-y-2">
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-300 rounded-full inline-block"></span>Best prices</li>
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-300 rounded-full inline-block"></span>Verified vendors</li>
                <li className="flex items-center gap-2 text-sm md:text-base font-medium"><span className="w-2 h-2 bg-yellow-300 rounded-full inline-block"></span>Instant quotes</li>
              </ul>
              <button className="bg-white text-orange-600 font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg shadow w-max hover:bg-gray-100 transition-colors">Explore Now</button>
            </div>
            <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/banner-woman.png" alt="Happy Customer" className="absolute right-2 md:right-4 bottom-0 h-32 md:h-48 w-auto object-contain z-10" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}