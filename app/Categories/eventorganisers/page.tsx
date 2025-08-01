import EventOrganisersSection from '@/components/Categories_components/EventOrganisersSection';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Organisers | Local Zarurat',
  description: 'Find the best event organisers near you. Browse wedding planners, corporate event managers.',
};

export default function EventOrganisersPage() {
  return (
    <OptimizedSection>
      <EventOrganisersSection />
    </OptimizedSection>
  );
} 