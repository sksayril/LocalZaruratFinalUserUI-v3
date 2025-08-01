import HotelsSection from '@/components/Categories_components/HotelsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotels | Local Zarurat',
  description: 'Find the best hotels near you. Browse top-rated hotels, resorts, and stays.',
};

export default function HotelsPage() {
  return (
    <OptimizedSection>
      <HotelsSection />
    </OptimizedSection>
  );
} 