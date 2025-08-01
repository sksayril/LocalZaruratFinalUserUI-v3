import PGHostelsSection from '@/components/Categories_components/PGHostelsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PG & Hostels | Local Zarurat',
  description: 'Find the best PG and hostel accommodations near you. Browse paying guest and hostel options.',
};

export default function PGHostelsPage() {
  return (
    <OptimizedSection>
      <PGHostelsSection />
    </OptimizedSection>
  );
} 