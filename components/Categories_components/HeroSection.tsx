'use client';

import { Search, MapPin, Download, Mic, ChevronDown } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useLocation } from '@/lib/location-context';
import LocationPermission from '@/components/LocationPermission';

export default function HeroSection() {
  const { locationName, permissionStatus, isLoading } = useLocation();

  return (
    <div className="bg-gray-50 py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-left leading-tight">
            Search across <span className="text-blue-600">'4.7 Crore+'</span> <span className="text-blue-600">Businesses</span>
          </h1>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center w-full gap-4">
            <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-4">
              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                {/* Location Input */}
                <div className="flex items-center px-3 md:px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-200 min-w-[140px] md:min-w-[180px]">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 mr-2 flex-shrink-0" />
                  {locationName ? (
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {locationName}
                    </span>
                  ) : (
                    <LocationPermission 
                      variant="inline" 
                      showLocationName={false}
                      className="flex-1"
                    />
                  )}
                </div>
                {/* Search Input */}
                <div className="flex items-center flex-1 px-3 md:px-4 py-3">
                  <input
                    type="text"
                    placeholder="Search for Packers and Movers"
                    className="bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 font-medium text-sm md:text-base"
                  />
                  {/* Mic Icon */}
                  <Mic className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2 flex-shrink-0" style={{stroke: '#2196f3', fill: '#fff', background: 'linear-gradient(180deg, #2196f3 60%, #ff9800 100%)', borderRadius: '50%'}} />
                  {/* Search Button */}
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded ml-1">
                    <Search className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Download App Button */}
            <button className="flex items-center justify-center border border-gray-300 px-4 py-3 rounded-lg bg-white hover:bg-gray-100 min-w-[160px] lg:min-w-[160px]">
              <span className="font-semibold text-gray-800 text-sm md:text-base">Download App</span>
              <Download className="w-4 h-4 md:w-5 md:h-5 text-blue-600 ml-2" />
              <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-500 ml-1" />
            </button>
          </div>
        </div>

        {/* Carousel and Service Categories */}
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
              <button className="bg-green-400 hover:bg-green-500 text-black font-bold px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg shadow w-max">Start Now</button>
            </div>
            <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/banner-man.png" alt="Business Man" className="absolute right-2 md:right-4 bottom-0 h-32 md:h-48 w-auto object-contain" />
            {/* Dots */}
            <div className="absolute left-1/2 bottom-2 md:bottom-4 -translate-x-1/2 flex gap-1 md:gap-2">
              {[...Array(8)].map((_, i) => (
                <span key={i} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-blue-300'} inline-block`}></span>
              ))}
            </div>
          </div>
          {/* Service Cards */}
          <div className="flex flex-row gap-2 md:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {/* B2B */}
            <div className="bg-[#1e7ed6] rounded-2xl p-4 md:p-6 text-white flex flex-col justify-between min-h-[200px] md:min-h-[260px] w-[200px] md:w-[240px] relative overflow-hidden flex-shrink-0">
              <div className="font-extrabold text-xl md:text-2xl mb-1">B2B</div>
              <div className="text-sm md:text-base font-medium mb-2">Quick Quotes</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/b2b-man.png" alt="B2B" className="absolute bottom-2 right-2 h-20 w-20 md:h-28 md:w-28 object-contain" />
              <span className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold opacity-80">›</span>
            </div>
            {/* Repairs & Services */}
            <div className="bg-[#2b4fa2] rounded-2xl p-4 md:p-6 text-white flex flex-col justify-between min-h-[200px] md:min-h-[260px] w-[200px] md:w-[240px] relative overflow-hidden flex-shrink-0">
              <div className="font-extrabold text-lg md:text-xl mb-1">REPAIRS & SERVICES</div>
              <div className="text-sm md:text-base font-medium mb-2">Get Nearest Vendor</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/repairs-man.png" alt="Repairs" className="absolute bottom-2 right-2 h-20 w-20 md:h-28 md:w-28 object-contain" />
              <span className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold opacity-80">›</span>
            </div>
            {/* Real Estate */}
            <div className="bg-[#5a6ee0] rounded-2xl p-4 md:p-6 text-white flex flex-col justify-between min-h-[200px] md:min-h-[260px] w-[200px] md:w-[240px] relative overflow-hidden flex-shrink-0">
              <div className="font-extrabold text-lg md:text-xl mb-1">REAL ESTATE</div>
              <div className="text-sm md:text-base font-medium mb-2">Finest Agents</div>
              <img src="https://assets.jdmagicbox.com/comp/jd_new_cms/jd_homepage/realestate-building.png" alt="Real Estate" className="absolute bottom-2 right-2 h-20 w-20 md:h-28 md:w-28 object-contain" />
              <span className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl font-bold opacity-80">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}