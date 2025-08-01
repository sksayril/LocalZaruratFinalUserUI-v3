# API Integration Documentation

## Overview
The Local Zarurat application now integrates with an external API to fetch dynamic category data. The integration is designed to be robust with fallback mechanisms.

## API Endpoints
- **Base URL**: `https://api.localzarurat.com/api`
- **Categories Endpoint**: `/customer/categories`
- **Subcategories Endpoint**: `/customer/categories/:mainCategoryId/subcategories`
- **Full URLs**: 
  - Categories: `https://api.localzarurat.com/api/customer/categories`
  - Subcategories: `https://api.localzarurat.com/api/customer/categories/{mainCategoryId}/subcategories`

## Files Created/Modified

### 1. API Utility (`lib/api.ts`)
- **Purpose**: Centralized API calling functions
- **Features**:
  - Type-safe API responses
  - Error handling with fallbacks
  - Caching configuration
  - Generic API request function for future endpoints

### 2. Custom Hooks
- **`hooks/useCategories.ts`**: React hook for managing categories state
  - Loading states
  - Error handling
  - Automatic data fetching
  - TypeScript support

- **`hooks/useSubcategories.ts`**: React hook for managing subcategories state
  - Takes mainCategoryId as parameter
  - Loading states
  - Error handling
  - Automatic data fetching

### 3. Updated Components
- **CategoryGrid**: Now uses API data with fallback to static data
- **ServiceCategories**: Uses first 5 API categories for featured services
- **SubcategoriesSection**: New component for displaying subcategories

## Data Structure

### API Response Format
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface Category {
  _id: string;
  name: string;
  icon: string;
  description: string;
  vendorCount: number;
  slug: string;
}

interface Subcategory {
  _id: string;
  name: string;
  image: string;
  thumbnail: string;
  description: string;
  vendorCount: number;
  slug: string;
  mainCategory: {
    _id: string;
    name: string;
    icon: string;
  };
}
```

### Fallback Data
If the API fails, the application falls back to static category data to ensure the UI remains functional.

## Features

### 1. Loading States
- Spinner animations during API calls
- User-friendly loading messages

### 2. Error Handling
- Graceful error messages
- Automatic fallback to static data
- Console logging for debugging

### 3. Performance
- 1-hour cache revalidation
- Optimized re-renders
- Lazy loading support

### 4. Type Safety
- Full TypeScript support
- Interface definitions for all data structures
- Compile-time error checking

## Usage

### In Components
```typescript
import { useCategories } from '@/hooks/useCategories';
import { useSubcategories } from '@/hooks/useSubcategories';

function CategoriesComponent() {
  const { categories, loading, error } = useCategories();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {categories.map(category => (
        <div key={category._id}>{category.name}</div>
      ))}
    </div>
  );
}

function SubcategoriesComponent({ mainCategoryId }: { mainCategoryId: string }) {
  const { subcategories, loading, error } = useSubcategories(mainCategoryId);
  
  if (loading) return <div>Loading subcategories...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {subcategories.map(subcategory => (
        <div key={subcategory._id}>{subcategory.name}</div>
      ))}
    </div>
  );
}
```

### Direct API Calls
```typescript
import { fetchCategories, fetchSubcategories } from '@/lib/api';

const categories = await fetchCategories();
const subcategories = await fetchSubcategories('mainCategoryId');
```

## Error Scenarios

1. **Network Error**: Falls back to static data
2. **API Down**: Shows error message, uses fallback
3. **Invalid Response**: Logs error, uses fallback
4. **Timeout**: Handled by fetch timeout, uses fallback

## Routing Structure

### Category Flow
1. **Homepage** (`/`) → Shows main categories from API
2. **Category Click** → Navigates to `/subcategories/{mainCategoryId}`
3. **Subcategories Page** → Shows subcategories for the selected main category
4. **Subcategory Click** → Navigates to `/subcategories/{mainCategoryId}/{subcategorySlug}`
5. **Subcategory Detail** → Shows detailed information about the specific subcategory

### URL Examples
- `/subcategories/687a1c28d8b70df040900b5e` (Electronics11 subcategories)
- `/subcategories/687a1c28d8b70df040900b5e/electronics11-subcategory` (Specific subcategory)

## Future Enhancements

1. **More Endpoints**: Add API calls for restaurants, vendors, etc.
2. **Caching**: Implement more sophisticated caching strategies
3. **Real-time Updates**: WebSocket integration for live data
4. **Offline Support**: Service worker for offline functionality
5. **Vendor Details**: Individual vendor pages and profiles
6. **Search & Filter**: Advanced search functionality for subcategories

## Testing

To test the API integration:
1. Start the development server: `npm run dev`
2. Visit the homepage
3. Check browser console for API calls
4. Verify categories are loading from the API
5. Test error scenarios by temporarily changing the API URL 