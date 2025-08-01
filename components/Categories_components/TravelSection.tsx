'use client';

const travelServices = [
  {
    name: 'Flight',
    icon: 'https://img.icons8.com/color/96/000000/airport.png',
    subtitle: 'Powered By',
    provider: 'Easemytrip.com',
  },
  {
    name: 'Bus',
    icon: 'https://img.icons8.com/color/96/000000/bus.png',
    subtitle: 'Affordable Rides',
    provider: '',
  },
  {
    name: 'Train',
    icon: 'https://img.icons8.com/color/96/000000/train.png',
    subtitle: '',
    provider: '',
  },
  {
    name: 'Hotel',
    icon: 'https://img.icons8.com/color/96/000000/5-star-hotel.png',
    subtitle: 'Budget-friendly Stay',
    provider: '',
  },
  {
    name: 'Car Rentals',
    icon: 'https://img.icons8.com/color/96/000000/car-rental.png',
    subtitle: 'Drive Easy Anywhere',
    provider: '',
  }
];

export default function TravelSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="bg-white rounded-2xl border border-gray-300 border-b-2 p-0 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between px-8 py-6">
          {/* Left column */}
          <div className="flex flex-col justify-center md:w-1/3">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Travel Bookings</h3>
            <p className="text-gray-700 mb-3 text-base leading-snug">Instant ticket bookings for your best travel experience</p>
            <a className="text-blue-600 hover:underline font-semibold text-base cursor-pointer w-max" href="#">Explore More</a>
          </div>
          {/* Right column */}
          <div className="flex-1 flex items-center justify-end">
            <div className="grid grid-cols-5 gap-6 w-full md:w-auto">
              {travelServices.map((service, index) => (
                <div key={index} className="flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-300 w-32 h-32">
                  <div className="w-14 h-14 flex items-center justify-center mb-2">
                    <img src={service.icon} alt={service.name} className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-base font-semibold text-gray-800 text-center mb-0.5">{service.name}</p>
                  {service.subtitle && (
                    <p className="text-xs text-green-700 font-semibold leading-tight">{service.subtitle}</p>
                  )}
                  {service.provider && (
                    <p className="text-xs text-green-700 font-semibold leading-tight">{service.provider}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}