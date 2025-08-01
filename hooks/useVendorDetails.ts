// hooks/useVendorDetails.ts - Custom hook for vendor details

import { useState, useEffect } from 'react';
import { fetchVendorDetails, VendorDetailResponse } from '@/lib/api';

export function useVendorDetails(vendorId: string) {
  const [vendorDetails, setVendorDetails] = useState<VendorDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVendorDetails() {
      try {
        console.log('useVendorDetails: Loading vendor details for vendorId:', vendorId);
        setLoading(true);
        setError(null);
        
        if (!vendorId) {
          setLoading(false);
          return;
        }

        const data = await fetchVendorDetails(vendorId);
        console.log('useVendorDetails: Received data:', data);
        
        setVendorDetails(data);
      } catch (err) {
        console.error('useVendorDetails: Error occurred:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch vendor details');
        console.error('Error in useVendorDetails:', err);
      } finally {
        setLoading(false);
      }
    }

    if (vendorId) {
      console.log('useVendorDetails: vendorId provided, loading vendor details');
      loadVendorDetails();
    } else {
      console.log('useVendorDetails: No vendorId provided');
      setLoading(false);
    }
  }, [vendorId]);

  return { 
    vendorDetails, 
    loading, 
    error,
    vendor: vendorDetails?.vendor || null,
    products: vendorDetails?.products || [],
    ratingStats: vendorDetails?.ratingStats || null,
    recentReviews: vendorDetails?.recentReviews || [],
    isFavorited: vendorDetails?.isFavorited || false
  };
} 