'use client';

const cities = [
  'Agra', 'Ahmedabad', 'Ajmer', 'Aligarh', 'Allahabad', 'Amritsar', 'Aurangabad', 'Bangalore', 'Bareilly', 'Belgaum', 'Bhavnagar', 'Bhopal', 'Bhubaneswar', 'Bikaner', 'Bilaspur', 'Chandigarh', 'Chennai', 'Coimbatore', 'Cuttack', 'Dehradun', 'Delhi', 'Dhanbad', 'Durgapur', 'Erode', 'Faridabad', 'Firozabad', 'Ghaziabad', 'Gorakhpur', 'Guntur', 'Gurgaon', 'Guwahati', 'Gwalior', 'Hubli', 'Hyderabad', 'Indore', 'Jabalpur', 'Jaipur', 'Jalandhar', 'Jammu', 'Jamnagar', 'Jamshedpur', 'Jodhpur', 'Kanpur', 'Kochi', 'Kolhapur', 'Kolkata', 'Kota', 'Kozhikode', 'Lucknow', 'Ludhiana', 'Madurai', 'Mangalore', 'Meerut', 'Moradabad', 'Mumbai', 'Mysore', 'Nagpur', 'Nashik', 'Navi Mumbai', 'Noida', 'Patna', 'Pondicherry', 'Pune', 'Raipur', 'Rajkot', 'Ranchi', 'Salem', 'Surat', 'Thane', 'Thiruvananthapuram', 'Thrissur', 'Tiruchirappalli', 'Tirunelveli', 'Udaipur', 'Vadodara', 'Varanasi', 'Vijayawada', 'Visakhapatnam', 'Warangal'
];

const quickLinks = [
  'About us', 'Advertise', 'Investor Relations', 'Media', 'We\'re hiring', 'Testimonials', 'Customer Care', 'Feedback', 'Free Listing', 'Business Badge', 'What\'s New', 'Jd Collection', 'Report a Bug', 'Client Success Videos', 'B2B Sitemap', 'B2B India Sitemap', 'Sitemap', 'Return & Exchange Policy'
];

const jdVerticals = [
  'B2B', 'All India', 'Doctors', 'Bills & Recharge', 'Cricket', 'Accommodation',
  'Advertising & Pr', 'Agriculture', 'Apparel', 'Astrology', 'Automobiles & Two Wheelers', 'Beauty & Personal Care',
  'Business & Legal', 'Chemicals', 'Construction & Real Estate', 'Education', 'Electronic Component', 'Electronics',
  'Energy', 'Engineering', 'Entertainment', 'Events & Wedding', 'Food & Beverage', 'Furniture',
  'Health & Medical', 'Home & Garden', 'Housekeeping & Facility Management', 'Industrial Plants & Machinery', 'IT Components', 'Jewellery',
  'Lights & Lighting', 'Luggage Bags & Cases', 'Office & School Supplies', 'Packaging & Printing', 'Pet & Pet Supplies', 'Placements',
  'Public', 'Restaurant', 'Rubber & Plastics', 'Security & Protection', 'Sports & Entertainment', 'Textile & Leather',
  'Toys & Games', 'Transportation & Shipping', 'Travel', 'Watches & Eyewear'
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Cities Section */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            {cities.join(' | ')}
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
              {quickLinks.map((link, index) => (
                <a key={index} href="#" className="text-xs md:text-sm text-gray-600 hover:text-blue-600 py-1">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">JD Verticals</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
              {jdVerticals.map((vertical, index) => (
                <a key={index} href="#" className="text-xs md:text-sm text-gray-600 hover:text-blue-600 py-1">
                  {vertical}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-4 md:pt-6">
          <p className="text-xs md:text-sm text-gray-600">
            Copyrights 2008-25. All Rights Reserved. Privacy | Terms | Infringement
          </p>
        </div>
      </div>
    </footer>
  );
}