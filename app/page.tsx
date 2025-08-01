import type { Metadata } from 'next';
import Header from '@/components/Categories_components/Header';
import HeroSection from '@/components/Categories_components/HeroSection';
import ServiceCategories from '@/components/Categories_components/ServiceCategories';
import CategoryGrid from '@/components/Categories_components/CategoryGrid';
import ServiceSections from '@/components/Categories_components/ServiceSections';
import TravelSection from '@/components/Categories_components/TravelSection';
import TrendingSection from '@/components/Categories_components/TrendingSection';
import MoviesSection from '@/components/Categories_components/MoviesSection';
import TouristPlacesSection from '@/components/Categories_components/TouristPlacesSection';
import PopularSearchesSection from '@/components/Categories_components/PopularSearchesSection';
import RainyDaySection from '@/components/Categories_components/RainyDaySection';
import RecentActivitySection from '@/components/Categories_components/RecentActivitySection';
import RelatedArticlesSection from '@/components/Categories_components/RelatedArticlesSection';
import AboutSection from '@/components/Categories_components/AboutSection';
import Footer from '@/components/Categories_components/Footer';

export const metadata: Metadata = {
  title: 'Local Zarurat - Your One-Stop Destination for Local Services',
  description: 'Find and connect with the best local services in your area. From restaurants and beauty spas to wedding planners and home services, discover trusted local businesses near you.',
  keywords: ['local services', 'restaurants near me', 'beauty services', 'home services', 'wedding planners', 'local businesses', 'india'],
  openGraph: {
    title: 'Local Zarurat - Your One-Stop Destination for Local Services',
    description: 'Find and connect with the best local services in your area. From restaurants and beauty spas to wedding planners and home services, discover trusted local businesses near you.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Zarurat Services'
      }
    ],
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServiceCategories />
      <CategoryGrid />
      <ServiceSections />
      <TravelSection />
      <TrendingSection />
      <MoviesSection />
      <TouristPlacesSection />
      <PopularSearchesSection />
      <RainyDaySection />
      <RecentActivitySection />
      <RelatedArticlesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}