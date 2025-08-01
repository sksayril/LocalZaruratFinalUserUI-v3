'use client';

import { FaWhatsapp, FaStar } from 'react-icons/fa';

const recentActivities = [
  {
    title: 'Sattaa Matkaa',
    location: 'Dharavi - Mumbai',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Gaytri Gaytri kahar',
    review: 'अपिन open number kya khula hai',
    stars: 5,
    subtitle: 'Wrote a review',
  },
  {
    title: 'Dpboss Satta Matka',
    location: 'Dharavi - Mumbai',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'raja',
    review: 'Good experience guessing dpboss',
    stars: 5,
    subtitle: 'Wrote a review',
  },
  {
    title: 'Boat (Customer Care)',
    location: '',
    isSpecial: true,
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'shoaib',
    review: 'Boat Customer Care truly stands out with its exceptional service and support. The extended warranty they offer gives me peace of mind, knowing my investment is protected for...',
    stars: 5,
    subtitle: 'Wrote a review',
  },
];

export default function RecentActivitySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-3xl font-extrabold text-black mb-6">Recent Activity</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentActivities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-300 flex flex-col justify-between min-h-[420px]"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between px-6 pt-6 pb-2">
              <div>
                <h4 className="font-extrabold text-2xl text-black leading-tight">{activity.title}</h4>
                {activity.location && (
                  <p className="text-lg text-gray-600 mt-1">{activity.location}</p>
                )}
              </div>
              <button className="flex items-center gap-2 border border-gray-300 bg-white rounded-lg px-4 py-2 text-base font-medium ml-2">
                <FaWhatsapp className="text-green-500 w-5 h-5" />
                <span className="text-black">WhatsApp</span>
              </button>
            </div>
            {/* Image Area */}
            <div className="px-6">
              {activity.isSpecial ? (
                <div className="h-[160px] w-full bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Boat logo: red triangle */}
                  <svg width="120" height="120" viewBox="0 0 120 120" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <polygon points="60,20 110,100 10,100" fill="#ef232a" />
                  </svg>
                </div>
              ) : (
                <div className="h-[160px] w-full rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            {/* Bottom Row: Review */}
            <div className="flex flex-col gap-2 px-6 py-4">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src={activity.avatar}
                  alt={activity.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <div className="font-bold text-lg text-black leading-tight">{activity.name}</div>
                  <div className="text-sm text-gray-500">{activity.subtitle}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: activity.stars }).map((_, i) => (
                  <FaStar key={i} className="text-orange-500 w-5 h-5" />
                ))}
              </div>
              <div className="text-base text-black leading-snug">
                {activity.review}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}