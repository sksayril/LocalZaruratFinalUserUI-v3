import EducationSection from '@/components/Categories_components/EducationSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Local Zarurat',
  description: 'Find the best education centers near you. Browse coaching, tuition, and training institutes.',
};

export default function EducationPage() {
  return (
    <OptimizedSection>
      <EducationSection />
    </OptimizedSection>
  );
} 