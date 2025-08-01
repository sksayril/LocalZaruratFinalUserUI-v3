import HomeDecorSection from '@/components/Categories_components/HomeDecorSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Decor | Local Zarurat',
  description: 'Find the best home decor services near you. Browse interior designers and home decoration experts.',
};

export default function HomeDecorPage() {
  return (
    <OptimizedSection>
      <HomeDecorSection />
    </OptimizedSection>
  );
} 