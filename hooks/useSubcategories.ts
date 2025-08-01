// hooks/useSubcategories.ts - Custom hook for subcategories

import { useState, useEffect } from 'react';
import { fetchSubcategories, Subcategory } from '@/lib/api';

export function useSubcategories(mainCategoryId: string) {
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSubcategories() {
      try {
        console.log('useSubcategories: Loading subcategories for mainCategoryId:', mainCategoryId);
        setLoading(true);
        setError(null);
        const data = await fetchSubcategories(mainCategoryId);
        console.log('useSubcategories: Received data:', data);
        setSubcategories(data);
      } catch (err) {
        console.error('useSubcategories: Error occurred:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch subcategories');
        console.error('Error in useSubcategories:', err);
      } finally {
        setLoading(false);
      }
    }

    if (mainCategoryId) {
      console.log('useSubcategories: mainCategoryId provided, loading subcategories');
      loadSubcategories();
    } else {
      console.log('useSubcategories: No mainCategoryId provided');
      setLoading(false);
    }
  }, [mainCategoryId]);

  return { subcategories, loading, error };
} 