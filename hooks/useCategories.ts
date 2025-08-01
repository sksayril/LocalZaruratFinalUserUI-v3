// hooks/useCategories.ts - Custom hook for categories

import { useState, useEffect } from 'react';
import { fetchCategories, Category } from '@/lib/api';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        console.error('Error in useCategories:', err);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return { categories, loading, error };
} 