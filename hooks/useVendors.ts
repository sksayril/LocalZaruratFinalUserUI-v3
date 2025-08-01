// hooks/useVendors.ts - Custom hook for vendors

import { useState, useEffect } from 'react';
import { fetchVendors, VendorsResponse, Pagination } from '@/lib/api';

export function useVendors(subcategoryId: string, page: number = 1, limit: number = 10) {
  const [vendorsData, setVendorsData] = useState<VendorsResponse | null>(null);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadVendors() {
      try {
        console.log('useVendors: Loading vendors for subcategoryId:', subcategoryId, 'page:', page);
        setLoading(true);
        setError(null);
        
        if (!subcategoryId) {
          setLoading(false);
          return;
        }

        const result = await fetchVendors(subcategoryId, page, limit);
        console.log('useVendors: Received data:', result);
        
        setVendorsData(result.data);
        setPagination(result.pagination);
      } catch (err) {
        console.error('useVendors: Error occurred:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch vendors');
        console.error('Error in useVendors:', err);
      } finally {
        setLoading(false);
      }
    }

    if (subcategoryId) {
      console.log('useVendors: subcategoryId provided, loading vendors');
      loadVendors();
    } else {
      console.log('useVendors: No subcategoryId provided');
      setLoading(false);
    }
  }, [subcategoryId, page, limit]);

  return { 
    vendorsData, 
    pagination, 
    loading, 
    error,
    vendors: vendorsData?.vendors || [],
    subCategory: vendorsData?.subCategory || null
  };
} 