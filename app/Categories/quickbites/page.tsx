import QuickBitesSection from '@/components/Categories_components/QuickBitesSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Bites | Local Zarurat',
  description: 'Find quick bites and fast food near you. Browse bakeries, coffee shops, and quick service restaurants.',
};

export default function QuickBitesPage() {
  return (
    <OptimizedSection>
      <QuickBitesSection />
    </OptimizedSection>
  );
} 