import CourierServiceSection from '@/components/Categories_components/CourierServiceSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courier Service | Local Zarurat',
  description: 'Find the best courier services near you. Browse delivery and logistics companies.',
};

export default function CourierServicePage() {
  return (
    <OptimizedSection>
      <CourierServiceSection />
    </OptimizedSection>
  );
} 