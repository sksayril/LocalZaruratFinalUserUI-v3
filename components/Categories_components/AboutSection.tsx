'use client';

import { Building2, Globe, Package, Utensils } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'B2B',
    description: 'Experience the ultimate B2B portal by LocalZarurat. You can explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. You\'ll find everything you need for B2B requirements on this exclusive platform. Our interactive interface allows you to apply relevant filters, ascertain the best rates, and get instant assistance via chat.'
  },
  {
    icon: Globe,
    title: 'All India',
    description: 'Elevate your search for B2B requisites. From lead generation to promoting and selling products/services, LocalZarurat enables enterprises to reach vast audiences all across India through digital strategies. LocalZarurat India encompasses manufacturers, dealers, suppliers, vendors, wholesalers, and more, offering convenience in the B2B market space and empowering businesses nationwide.'
  },
  {
    icon: Package,
    title: 'Packers and Movers',
    description: 'If you\'re relocating to another place, or even if you just want to send some belongings elsewhere, find the best deals on the most reliable packers and movers in your location. Get quotes from multiple agencies, read reviews from previous customers, and check ratings before making a selection for a hassle-free experience.'
  },
  {
    icon: Utensils,
    title: 'Order Food Online',
    description: 'You are just three clicks away from placing an order and exploring a wide range of exotic cuisines. Order food online with LocalZarurat and get your favourite food delivered at your doorstep. Search for restaurants, view reviews and ratings, avail discounts and order your food.'
  }
];

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          One-Stop for All Local Businesses, Services, & Stores Nearby Across India
        </h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Welcome to LocalZarurat, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.
          </p>
          
          <p>
            Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Chennai, Mumbai and Pune to Hyderabad and Bangalore, we reach stretched out to other smaller cities across the country too.
          </p>
          
          <p>
            Our 'Free listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-8">
          Some of our services that will prove useful to you on a day-to-day basis are :
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}