import { Metadata } from 'next';
import RestaurantsSection from '@/components/Categories_components/RestaurantsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurants | Local Zarurat',
  description: 'Find the best restaurants near you. Browse top-rated restaurants, cafes, and eateries.',
};

export default function RestaurantsPage() {
  return (
    <OptimizedSection>
      <div className="flex gap-4 justify-center my-8">
        <Link href="/restaurants/indian" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Indian Flavours</Link>
        <Link href="/restaurants/global" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Global Cuisines</Link>
        <Link href="/restaurants/nightlife" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Nightlife</Link>
      </div>
      <RestaurantsSection />
    </OptimizedSection>
  );
} 