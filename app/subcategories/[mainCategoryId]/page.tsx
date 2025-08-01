import { Metadata } from 'next';
import Link from 'next/link';
import SubcategoriesSectionNew from '@/components/Categories_components/SubcategoriesSectionNew';
import OptimizedSection from '@/components/Categories_components/OptimizedSection';
import { fetchCategories } from '@/lib/api';

interface SubcategoriesPageProps {
  params: { mainCategoryId: string };
}

export async function generateMetadata({ params }: SubcategoriesPageProps): Promise<Metadata> {
  const { mainCategoryId } = params;
  
  try {
    const categories = await fetchCategories();
    const mainCategory = categories.find(cat => cat._id === mainCategoryId);
    
    return {
      title: `${mainCategory?.name || 'Subcategories'} | Local Zarurat`,
      description: `Explore specialized services and subcategories in ${mainCategory?.name || 'this category'}. Find the best local vendors and services.`,
    };
  } catch (error) {
    return {
      title: 'Subcategories | Local Zarurat',
      description: 'Explore specialized services and subcategories. Find the best local vendors and services.',
    };
  }
}

export default async function SubcategoriesPage({ params }: SubcategoriesPageProps) {
  const { mainCategoryId } = params;
  
  console.log('SubcategoriesPage: Received mainCategoryId:', mainCategoryId);
  
  // Fetch main category name for display
  let mainCategoryName = 'Subcategories';
  try {
    const categories = await fetchCategories();
    console.log('SubcategoriesPage: Available categories:', categories.map(cat => ({ id: cat._id, name: cat.name })));
    const mainCategory = categories.find(cat => cat._id === mainCategoryId);
    console.log('SubcategoriesPage: Found main category:', mainCategory);
    if (mainCategory) {
      mainCategoryName = mainCategory.name;
    }
  } catch (error) {
    console.error('Error fetching main category:', error);
  }

  return (
    <OptimizedSection>
      {/* <div className="flex gap-4 justify-center my-8">
        <Link href={`/subcategories/${mainCategoryId}/search`} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Search Services</Link>
        <Link href={`/subcategories/${mainCategoryId}/trending`} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Trending</Link>
        <Link href={`/subcategories/${mainCategoryId}/all`} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">View All</Link>
      </div> */}
      <SubcategoriesSectionNew 
        mainCategoryId={mainCategoryId} 
        mainCategoryName={mainCategoryName}
      />
    </OptimizedSection>
  );
}

// Generate static params for known categories
export async function generateStaticParams() {
  try {
    const categories = await fetchCategories();
    return categories.map((category) => ({
      mainCategoryId: category._id,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array as fallback to prevent build failure
    return [];
  }
} 