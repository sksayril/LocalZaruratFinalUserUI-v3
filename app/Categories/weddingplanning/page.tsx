import WeddingPlanningSection from '@/components/Categories_components/WeddingPlanningSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Planning | Local Zarurat',
  description: 'Find the best wedding planners near you. Browse wedding services and event coordinators.',
};

export default function WeddingPlanningPage() {
  return (
    <OptimizedSection>
      <WeddingPlanningSection />
    </OptimizedSection>
  );
}