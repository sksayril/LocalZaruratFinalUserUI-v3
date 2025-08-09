'use client';

import { Building2, Globe, Package, Utensils, Users, TrendingUp, Star, Phone, MapPin, Calendar, Shield, Award } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'B2B Portal',
    description: 'Experience the ultimate B2B portal by LocalZarurat. Explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. Find everything you need for B2B requirements with interactive filters, best rates, and instant chat assistance.'
  },
  {
    icon: Globe,
    title: 'All India Coverage',
    description: 'LocalZarurat covers businesses across India, from major cities like Mumbai, Delhi, Bangalore, Chennai, and Pune to smaller towns. Our platform connects manufacturers, dealers, suppliers, vendors, and wholesalers nationwide, creating a comprehensive B2B marketplace.'
  },
  {
    icon: Package,
    title: 'Packers and Movers',
    description: 'Find reliable packers and movers for hassle-free relocation. Get quotes from multiple agencies, read customer reviews, check ratings, and compare services to make the best selection for your moving needs.'
  },
  {
    icon: Utensils,
    title: 'Food Delivery',
    description: 'Order food online with LocalZarurat and get your favorite cuisines delivered to your doorstep. Search restaurants, view reviews and ratings, avail discounts, and enjoy a seamless food ordering experience.'
  }
];

const businessBenefits = [
  {
    icon: Users,
    title: 'Reach More Customers',
    description: 'Get discovered by thousands of potential customers searching for your services. Our platform increases your business visibility and helps you tap into new markets across India.'
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Expand your customer base and increase sales through our comprehensive listing platform. Get leads, inquiries, and bookings from customers actively looking for your services.'
  },
  {
    icon: Star,
    title: 'Build Trust & Credibility',
    description: 'Showcase your business with detailed profiles, customer reviews, ratings, and verified information. Build trust with potential customers through our platform\'s credibility features.'
  },
  {
    icon: Phone,
    title: 'Direct Customer Contact',
    description: 'Receive direct inquiries and calls from interested customers. Our platform facilitates direct communication between businesses and customers, helping you convert leads into sales.'
  }
];

const platformFeatures = [
  {
    icon: MapPin,
    title: 'Location-Based Search',
    description: 'Customers can find businesses near them with our advanced location-based search. Your business appears in relevant local searches, increasing your chances of getting discovered.'
  },
  {
    icon: Calendar,
    title: 'Booking & Reservations',
    description: 'Enable customers to book appointments, make reservations, and schedule services directly through your listing. Streamline your business operations with integrated booking systems.'
  },
  {
    icon: Shield,
    title: 'Verified Business Listings',
    description: 'All businesses on LocalZarurat are verified and authenticated. This builds customer confidence and ensures only legitimate businesses are featured on our platform.'
  },
  {
    icon: Award,
    title: 'Best Deals & Offers',
    description: 'Promote your special offers, discounts, and deals to attract more customers. Our platform highlights the best bargains, helping you stand out from competitors.'
  }
];

export default function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main About Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          One-Stop Platform for All Local Businesses, Services & Stores Across India
        </h2>
        
        <div className="space-y-6 text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          <p className="text-lg">
            Welcome to <span className="font-semibold text-blue-600">LocalZarurat</span>, your comprehensive 'one-stop shop' for all local business needs. We take pride in our iconic customer support number <span className="font-bold text-blue-600">8249737118</span> and our strong network of local business information across India.
          </p>
          
          <p>
            Our platform connects customers with verified businesses across diverse sectors including Hotels, Restaurants, Auto Care, Home Decor, Personal Care, Pet Care, Fitness, Insurance, Real Estate, Sports, Education, and many more. From major metropolitan cities to smaller towns, LocalZarurat ensures comprehensive coverage across the country.
          </p>
          
          <p>
            We offer a <span className="font-semibold">FREE listing feature</span> that gives businesses a platform to showcase their specialties. Customers can access information through multiple channels including phone, SMS, web, mobile app, and WAP. Our 'Rate & Review' system helps build trust, while 'Best Deals', 'Last Minute Deals', and 'Live Quotes' ensure customers get the best value for their money.
          </p>
        </div>
      </div>

      {/* Business Growth Section */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          🚀 Grow Your Business with LocalZarurat
        </h3>
        
        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Are you a business owner looking to expand your customer base? LocalZarurat provides the perfect platform to list your business, reach more customers, and grow your revenue. Our comprehensive listing services help businesses of all sizes establish a strong online presence and connect with potential customers actively searching for their services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessBenefits.map((benefit, index) => (
            <div key={index} className="flex space-x-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex-shrink-0">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div 
            onClick={() => window.open('https://seller.localzarurat.com', '_blank')}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <span>List Your Business Now</span>
            <span>→</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Join thousands of businesses already growing with LocalZarurat</p>
        </div>
      </div>

      {/* Platform Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          ✨ Why Choose LocalZarurat for Your Business?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platformFeatures.map((feature, index) => (
            <div key={index} className="flex space-x-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Services */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          🎯 Our Core Services
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex space-x-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
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

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Grow Your Business?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join LocalZarurat today and connect with thousands of customers actively searching for your services. Our platform is designed to help businesses thrive in the digital age.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.open('https://seller.localzarurat.com', '_blank')}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            List Your Business
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Learn More
          </button>
        </div>
        <p className="text-sm text-blue-200 mt-4">
          Call us at <span className="font-bold">8249737118</span> for immediate assistance
        </p>
      </div>
    </div>
  );
}