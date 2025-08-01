export const ROUTES = {
  // Main pages
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
  PROFILE: '/profile',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  
  // Categories
  CATEGORIES: '/categories',
  SUBCATEGORIES: '/subcategories',
  
  // Vendors
  VENDORS: '/vendors',
  
  // Restaurants
  RESTAURANTS: '/restaurants',
  RESTAURANTS_GLOBAL: '/restaurants/global',
  RESTAURANTS_INDIAN: '/restaurants/indian',
  RESTAURANTS_NIGHTLIFE: '/restaurants/nightlife',
  
  // Location
  LOCATION_SETTINGS: '/location-settings',
  
  // Test pages
  TEST_API: '/test-api',
  TEST_LOCATION: '/test-location',
  TEST_VENDOR_API: '/test-vendor-api',
} as const;

export const CATEGORY_ROUTES: Record<string, string> = {
  'Beauty & Spa': '/Categories/beautyspa',
  'Contractors': '/Categories/contractors',
  'Courier Service': '/Categories/courierservice',
  'Dentists': '/Categories/dentists',
  'Driving Schools': '/Categories/drivingschools',
  'Education': '/Categories/education',
  'Estate Agent': '/Categories/estateagent',
  'Event Organisers': '/Categories/eventorganisers',
  'Gym': '/Categories/gym',
  'Home Decor': '/Categories/homedecor',
  'Hospitals': '/Categories/hospitals',
  'Hotels': '/Categories/hotels',
  'Loans': '/Categories/loans',
  'Packers & Movers': '/Categories/packersmovers',
  'Pet Shops': '/Categories/petshops',
  'PG & Hostels': '/Categories/pghostels',
  'Quick Bites': '/Categories/quickbites',
  'Rent & Hire': '/Categories/renthire',
  'Restaurants': '/Categories/restaurants',
  'Sweet Tooth': '/Categories/sweettooth',
  'Wedding': '/Categories/wedding',
  'Wedding Planning': '/Categories/weddingplanning',
} as const;

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    PROFILE: '/auth/profile',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
    VERIFY_PHONE: '/auth/verify-phone',
  },
  
  // Customer
  CUSTOMER: {
    CATEGORIES: '/customer/categories',
    SUBCATEGORIES: '/customer/categories/:categoryId/subcategories',
    VENDORS: '/customer/subcategories/:subcategoryId/vendors',
    VENDOR_DETAILS: '/customer/vendors/:vendorId',
  },
  
  // Vendor
  VENDOR: {
    PROFILE: '/vendor/profile',
    PRODUCTS: '/vendor/products',
    ORDERS: '/vendor/orders',
    ANALYTICS: '/vendor/analytics',
  },
} as const; 