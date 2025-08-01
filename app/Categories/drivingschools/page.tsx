import DrivingSchoolsSection from '@/components/Categories_components/DrivingSchoolsSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driving Schools | Local Zarurat',
  description: 'Find the best driving schools near you. Browse driving instructors and vehicle training centers.',
};

export default function DrivingSchoolsPage() {
  return (
    <OptimizedSection>
      <DrivingSchoolsSection />
    </OptimizedSection>
  );
} 