import LoansSection from '@/components/Categories_components/LoansSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loans | Local Zarurat',
  description: 'Find the best loan services near you. Browse personal loans, home loans, and financial services.',
};

export default function LoansPage() {
  return (
    <OptimizedSection>
      <LoansSection />
    </OptimizedSection>
  );
} 