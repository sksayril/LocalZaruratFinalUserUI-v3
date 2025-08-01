'use client';

import { ChevronRight } from 'lucide-react';

const touristPlaces = [
  {
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pune',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Nashik',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Ahmedabad',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80'
  }
];

export default function TouristPlacesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white rounded-2xl border border-gray-300 border-b-2 p-6">
        <div className="flex items-center mb-1">
          <h3 className="text-2xl font-extrabold text-gray-900 mr-3">Explore Top Tourist Places</h3>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">NEW</span>
        </div>
        <div className="flex items-center gap-4 overflow-x-auto pb-2 mt-4">
          {touristPlaces.map((place, index) => (
            <div key={index} className="flex flex-row items-center bg-white rounded-xl border border-gray-300 border-[0.5px] min-w-[270px] max-w-[270px] h-[80px] pr-4 overflow-hidden">
              <div className="p-2 h-full flex items-center">
                <img src={place.image} alt={place.name} className="w-20 h-full object-cover rounded-l-xl" />
              </div>
              <div className="flex flex-col justify-center pl-3 flex-1">
                <span className="font-extrabold text-lg text-gray-900 leading-tight">{place.name}</span>
                <button className="text-blue-600 text-base font-semibold flex items-center gap-1 mt-1">Explore <span className="text-lg">&gt;</span></button>
              </div>
            </div>
          ))}
          {/* Right arrow for scroll */}
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 border-[0.5px] ml-2 text-2xl font-bold"><span>&#8250;</span></button>
        </div>
      </div>
    </div>
  );
}