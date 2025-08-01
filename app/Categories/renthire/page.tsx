import RentHireSection from '@/components/Categories_components/RentHireSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent & Hire | Local Zarurat',
  description: 'Find rental and hire services near you. Browse electronics, furniture and equipment rentals.',
};

export default function RentHirePage() {
  return (
    <OptimizedSection>
      <RentHireSection />
    </OptimizedSection>
  );
} 