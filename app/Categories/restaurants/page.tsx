import { Metadata } from 'next';
import RestaurantsSection from '@/components/Categories_components/RestaurantsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';

export const metadata: Metadata = {
  title: 'Restaurants | Local Zarurat',
  description: 'Find the best restaurants near you. Browse top-rated restaurants, cafes, and eateries.',
};

export default function RestaurantsPage() {
  return (
    <OptimizedSection>
      <RestaurantsSection />
    </OptimizedSection>
  );
} 