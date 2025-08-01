'use client';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const articles = [
  {
    image: 'https://images.pexels.com/photos/373946/pexels-photo-373946.jpeg?auto=compress&w=600',
    title: 'Upgrade Your Wardrobe with These 5 Best Maternity Clothes for Comfort and Style in...',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=600',
    title: 'Sports Management Courses in Mumbai: Where Passion Meets Profession in Mumbai',
    link: '#',
  },
  {
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&w=600',
    title: 'Emails, Errands, and Everything in Between: Finding Work Life Balance in India',
    link: '#',
  },
];

export default function RelatedArticlesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -width : width,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-extrabold text-black">Related Articles</h3>
        <a href="#" className="text-blue-600 font-medium flex items-center gap-1 text-base hover:underline">
          Explore more <FaChevronRight className="inline w-4 h-4 mt-0.5" />
        </a>
      </div>
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-100"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          style={{ marginLeft: '-32px' }}
        >
          <FaChevronLeft className="text-gray-700 w-6 h-6" />
        </button>
        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[420px] bg-white rounded-2xl border border-gray-300 overflow-hidden shadow-none"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="h-[280px] w-full bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pb-4 flex flex-col gap-2">
                <div className="font-extrabold text-2xl text-black leading-tight mb-2 line-clamp-2">
                  {article.title}
                </div>
                <a
                  href={article.link}
                  className="text-blue-600 font-medium text-base hover:underline mt-1"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-gray-100"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          style={{ marginRight: '-32px' }}
        >
          <FaChevronRight className="text-gray-700 w-6 h-6" />
        </button>
      </div>
    </div>
  );
} 