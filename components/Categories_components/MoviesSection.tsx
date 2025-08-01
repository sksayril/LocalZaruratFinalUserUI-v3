'use client';

import { ChevronRight, Heart } from 'lucide-react';

const movies = [
  {
    title: 'Sitaare Zameen Par (Hindi Movie)',
    language: 'Hindi',
    format: '2D',
    rating: 82,
    image: 'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Maa (2025 Film) (Hindi Movie)',
    language: 'Hindi',
    format: '2D',
    rating: 66,
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'F1',
    language: 'English',
    format: '2D',
    rating: 90,
    image: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Jarann (Marathi Movie)',
    language: 'Marathi',
    format: '2D',
    rating: 60,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Kannappa',
    language: 'Tamil',
    format: '2D',
    rating: 75,
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Jurassic World Rebirth (English)',
    language: 'English',
    format: '2D',
    rating: 85,
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function MoviesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Latest Movies & Review</h3>
      <div className="flex items-start gap-8 overflow-x-auto pb-2">
        {movies.map((movie, index) => (
          <div key={index} className="flex-none w-60">
            <div className="relative h-80 mb-3">
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-3 right-3 flex items-center bg-white px-3 py-1 rounded-md shadow text-base font-bold">
                <Heart className="w-5 h-5 text-red-500 fill-current mr-1" />
                <span className="text-gray-900">{movie.rating}%</span>
              </div>
            </div>
            <h4 className="font-extrabold text-lg text-gray-900 mb-1 leading-tight">{movie.title}</h4>
            <div className="text-base text-gray-600 font-medium">
              {movie.language} <span className="mx-1">•</span> {movie.format}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}