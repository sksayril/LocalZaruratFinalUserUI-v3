import React from 'react';
import type { Metadata } from 'next';
import WeddingPlanningSection from '@/components/Categories_components/WeddingPlanningSection';

export const metadata: Metadata = {
  title: 'Wedding Planning Services - Find Wedding Vendors & Suppliers',
  description: 'Discover top wedding planning services including banquet halls, catering, photographers, makeup artists, mehendi artists, and more. Plan your perfect wedding with Local Zarurat.',
  keywords: ['wedding planning', 'banquet halls', 'wedding catering', 'wedding photographers', 'bridal makeup', 'mehendi artists', 'wedding decorators'],
  openGraph: {
    title: 'Wedding Planning Services - Find Wedding Vendors & Suppliers',
    description: 'Discover top wedding planning services including banquet halls, catering, photographers, makeup artists, mehendi artists, and more.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
        width: 1200,
        height: 630,
        alt: 'Wedding Planning Services'
      }
    ],
  }
}

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <WeddingPlanningSection />
    </main>
  );
} 