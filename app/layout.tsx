import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LocationProvider } from '@/lib/location-context';
import { AuthProvider } from '@/lib/auth-context';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: 'Local Zarurat - Find Local Services Near You',
    template: '%s | Local Zarurat'
  },
  description: 'Discover and connect with the best local services in your area. From restaurants to wedding planners, find everything you need at Local Zarurat.',
  keywords: ['local services', 'food delivery', 'wedding planning', 'home services', 'beauty services', 'india', 'local business'],
  authors: [{ name: 'Local Zarurat' }],
  creator: 'Local Zarurat',
  publisher: 'Local Zarurat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://localzarurat.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://localzarurat.com',
    title: 'Local Zarurat - Find Local Services Near You',
    description: 'Discover and connect with the best local services in your area. From restaurants to wedding planners, find everything you need at Local Zarurat.',
    siteName: 'Local Zarurat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Zarurat - Find Local Services Near You',
    description: 'Discover and connect with the best local services in your area. From restaurants to wedding planners, find everything you need.',
    creator: '@localzarurat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to replace this with your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://img.icons8.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://img.icons8.com" />
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <LocationProvider>
            <main className="relative">
              {children}
            </main>
          </LocationProvider>
        </AuthProvider>
        
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          type="image/jpeg"
        />
      </body>
    </html>
  );
}