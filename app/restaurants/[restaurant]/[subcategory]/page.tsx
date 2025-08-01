import React from 'react';
import { restaurantsMockData, Restaurant } from '../../mockData';
import Link from 'next/link';

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, '-');
}

const subcategories = ['overview', 'menu', 'photos', 'reviews'];

function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurantsMockData.find(r => slugify(r.name) === slug);
}

export default function RestaurantSubcategoryPage({ params }: { params: { restaurant: string, subcategory: string } }) {
  const { restaurant, subcategory } = params;
  const data = getRestaurantBySlug(restaurant);

  if (!data || !subcategories.includes(subcategory)) {
    return <div className="max-w-3xl mx-auto py-12 text-center text-2xl font-bold">Not Found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto py-6 px-2 md:px-4">
        <div className="text-sm text-gray-600 mb-2">
          <Link href={`/restaurants/${restaurant}`}>{data.name}</Link> &gt; {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
        </div>
        <h1 className="text-2xl font-bold mb-4">{data.name} - {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}</h1>
        {/* Product Section for Overview */}
        {subcategory === 'overview' && (
          <div className="py-8 bg-gradient-to-br from-pink-50 via-yellow-50 to-white rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-yellow-400 rounded-full mr-3 shadow-lg" />
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-serif">Product</h2>
            </div>
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-0 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-pink-100 ring-2 ring-yellow-100/60 overflow-hidden transition-shadow hover:shadow-[0_8px_40px_0_rgba(255,182,193,0.15)]">
              {/* Product image with badge */}
              <div className="flex-shrink-0 w-full md:w-56 flex flex-col items-center justify-center relative bg-gradient-to-tr from-yellow-100 to-pink-100 md:rounded-l-3xl rounded-t-3xl md:rounded-t-none p-8 md:p-0">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Signature Dish" className="w-32 h-32 object-cover rounded-2xl shadow-xl border-4 border-white/70 -mt-8 md:mt-0 md:-ml-8" />
                <span className="absolute top-6 left-1/2 -translate-x-1/2 md:left-8 md:top-6 bg-gradient-to-r from-pink-400 to-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/30">Signature Dish</span>
              </div>
              {/* Product content */}
              <div className="flex-1 w-full p-8 md:p-0">
                <p className="text-xl text-gray-900 font-semibold mb-2 font-serif">Discover our signature products and bestsellers, crafted to delight your taste buds.</p>
                <p className="text-gray-500 mb-6">This is the Product section. Add your product details here.</p>
                <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 relative overflow-hidden group">
                  <span className="relative z-10">Order Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-gradient-x" />
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Example content for each subcategory */}
        {subcategory === 'overview' && <div>Overview content for {data.name}.</div>}
        {subcategory === 'menu' && <div>Menu content for {data.name}.</div>}
        {subcategory === 'photos' && <div>Photos content for {data.name}.</div>}
        {subcategory === 'reviews' && <div>Reviews content for {data.name}.</div>}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  function slugify(name: string) {
    return name.toLowerCase().replace(/ /g, '-');
  }
  const params = [];
  for (const r of restaurantsMockData) {
    for (const sub of subcategories) {
      params.push({ restaurant: slugify(r.name), subcategory: sub });
    }
  }
  return params;
} 