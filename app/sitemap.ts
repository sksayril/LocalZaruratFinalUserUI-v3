import { MetadataRoute } from 'next'
import { fetchCategories } from '@/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://localzarurat.com'
  
  // List all your static routes
  const staticRoutes = [
    '',
    '/wedding',
    '/beautyspa',
    '/contractors',
    '/courierservice',
    '/dentists',
    '/drivingschools',
    '/education',
    '/estateagent',
    '/eventorganisers',
    '/gym',
    '/homedecor',
    '/hospitals',
    '/hotels',
    '/loans',
    '/packersmovers',
    '/petshops',
    '/pghostels',
    '/quickbites',
    '/renthire',
    '/restaurants',
    '/sweettooth',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add dynamic subcategory routes
  let subcategoryRoutes: MetadataRoute.Sitemap = [];
  try {
    const categories = await fetchCategories();
    subcategoryRoutes = categories.map((category) => ({
      url: `${baseUrl}/subcategories/${category._id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error);
  }

  return [...staticRoutes, ...subcategoryRoutes];
} 