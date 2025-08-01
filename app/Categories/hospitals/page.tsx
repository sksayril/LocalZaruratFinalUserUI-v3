import HospitalsSection from '@/components/Categories_components/HospitalsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitals | Local Zarurat',
  description: 'Find the best hospitals near you. Browse top-rated hospitals and healthcare services.',
};

export default function HospitalsPage() {
  return (
    <OptimizedSection>
      <HospitalsSection />
    </OptimizedSection>
  );
} 