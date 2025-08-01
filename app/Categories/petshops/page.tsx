import PetShopsSection from '@/components/Categories_components/PetShopsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Shops | Local Zarurat',
  description: 'Find the best pet shops near you. Browse pet stores, supplies, and pet care services.',
};

export default function PetShopsPage() {
  return (
    <OptimizedSection>
      <PetShopsSection />
    </OptimizedSection>
  );
} 