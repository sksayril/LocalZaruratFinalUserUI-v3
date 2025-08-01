// lib/api.ts - API utility functions

export interface Category {
  _id: string;
  name: string;
  icon: string;
  description: string;
  vendorCount: number;
  slug: string;
}

export interface Subcategory {
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

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Authentication interfaces
export interface UserAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  address: UserAddress;
  dateOfBirth?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface VerifyEmailRequest {
  token: string;
}

export interface VerifyPhoneRequest {
  phone: string;
  otp: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface User {
  _id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  profileImage: string | null;
  address: UserAddress;
  vendorDetails?: VendorDetails;
  customerDetails?: CustomerDetails;
  adminDetails?: AdminDetails;
  loginAttempts: number;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProfileUpdateRequest {
  name?: string;
  phone?: string;
  address?: UserAddress;
  profileImage?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.localzarurat.com/api';

// Enhanced error handling utility
class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic API request function with better error handling
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || `Request failed with status ${response.status}`,
        response.status,
        data.code
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiError('Network error. Please check your connection.', 0);
    }
    throw new ApiError('An unexpected error occurred.', 500);
  }
}

// Authentication API functions
export async function registerUser(userData: RegisterRequest): Promise<AuthResponse> {
  return apiRequest<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

export async function loginUser(credentials: LoginRequest): Promise<AuthResponse> {
  return apiRequest<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export async function getCurrentUser(token: string): Promise<User> {
  const response = await apiRequest<{ data: User }>('/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateProfile(token: string, profileData: ProfileUpdateRequest): Promise<User> {
  const response = await apiRequest<{ data: User }>('/auth/profile', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });
  return response.data;
}

export async function logoutUser(token: string): Promise<void> {
  try {
    await apiRequest<void>('/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    // Don't throw error for logout as it's not critical
    console.warn('Logout API call failed:', error);
  }
}

export async function forgotPassword(data: ForgotPasswordRequest): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function resetPassword(data: ResetPasswordRequest): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function verifyEmail(data: VerifyEmailRequest): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>('/auth/verify-email', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function verifyPhone(data: VerifyPhoneRequest): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>('/auth/verify-phone', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

// Categories API functions
export async function fetchCategories(): Promise<Category[]> {
  const response = await apiRequest<{ success: boolean; data: Category[] }>('/customer/categories', {
    method: 'GET',
    next: { revalidate: 0 },
  });
  return response.data;
}

export async function fetchSubcategories(mainCategoryId: string): Promise<Subcategory[]> {
  if (!mainCategoryId || mainCategoryId.trim() === '') {
    throw new ApiError('Main category ID is required', 400);
  }

  const response = await apiRequest<{ success: boolean; data: Subcategory[] }>(
    `/customer/categories/${mainCategoryId}/subcategories`,
    {
      method: 'GET',
      next: { revalidate: 0 },
    }
  );
  return response.data;
}

// Updated Vendor interfaces based on actual API response
export interface VendorAddress {
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface VendorAddressDetails {
  doorNumber: string;
  street: string;
  location: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface ShopAddress {
  pincode: string;
  addressLine1: string;
  addressLine2: string;
  location: string;
  nearbyLocation: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface SecurityQuestion {
  question: string;
  answer: string;
}

export interface SecurityQuestions {
  question1: SecurityQuestion;
  question2: SecurityQuestion;
}

export interface SubscriptionFeatures {
  maxProducts: number;
  maxImages: number;
  prioritySupport: boolean;
  featuredListing: boolean;
}

export interface Subscription {
  status: string;
  features: SubscriptionFeatures;
  amount: number;
  currentPlan: string;
  endDate: string;
  startDate: string;
  isActive: boolean;
  razorpayPaymentId: string;
}

export interface WalletTransaction {
  type: string;
  amount: number;
  description: string;
  date: string;
  _id: string;
}

export interface Wallet {
  balance: number;
  transactions: WalletTransaction[];
}

export interface RatingDistribution {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
}

export interface KYC {
  isVerified: boolean;
}

export interface VendorDetails {
  shopImages: string[];
  vendorAddress: VendorAddressDetails;
  mainCategory: {
    _id: string;
    name: string;
    icon: string;
  };
  subCategory: {
    _id: string;
    name: string;
    image: string;
    thumbnail: string;
  };
  referredBy: string;
  shopMetaKeywords: string[];
  shopMetaTags: string[];
  shopAddress: ShopAddress;
  isShopListed: boolean;
  kyc: KYC;
  subscription: Subscription;
  wallet: Wallet;
  withdrawalRequests: any[];
  averageRating: number;
  totalRatings: number;
  ratingDistribution: RatingDistribution;
  referralCode: string;
  shopDescription: string;
  shopListedAt: string;
  shopMetaDescription: string;
  shopMetaTitle: string;
  shopName: string;
}

export interface CustomerPreferences {
  categories: string[];
}

export interface CustomerDetails {
  preferences: CustomerPreferences;
  favorites: string[];
}

export interface AdminDetails {
  permissions: string[];
  isSuperAdmin: boolean;
  accessLevel: string;
  lastLogin: string;
}

export interface Vendor {
  _id: string;
  role: string;
  name: string;
  phone: string;
  isActive: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  profileImage: string | null;
  address: VendorAddress;
  securityQuestions: SecurityQuestions;
  vendorDetails: VendorDetails;
  customerDetails: CustomerDetails;
  adminDetails: AdminDetails;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SubcategoryDetail {
  _id: string;
  name: string;
  mainCategory: {
    _id: string;
    name: string;
    icon: string;
  };
  image: string;
  thumbnail: string;
  description: string;
  isActive: boolean;
  sortOrder: number;
  metaTitle: string;
  metaDescription: string;
  vendorCount: number;
  keywords: string[];
  features: string[];
  popularTags: string[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  __v: number;
}

export interface VendorsResponse {
  subCategory: SubcategoryDetail;
  vendors: Vendor[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface VendorsApiResponse {
  success: boolean;
  data: VendorsResponse;
  pagination: Pagination;
}

// New interfaces for vendor detail page
export interface ProductImage {
  url: string;
  isPrimary: boolean;
  alt: string;
  _id: string;
}

export interface ProductPrice {
  amount: number;
  currency: string;
  isNegotiable: boolean;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: {
    mainCategory: {
      _id: string;
      name: string;
      icon: string;
    };
    subCategory: {
      _id: string;
      name: string;
      image: string;
      thumbnail: string;
    };
  };
  images: ProductImage[];
  price: ProductPrice;
  views: number;
}

export interface RatingStats {
  averageRating: number;
  totalRatings: number;
  ratingDistribution: RatingDistribution;
}

export interface VendorDetailResponse {
  vendor: Vendor;
  products: Product[];
  ratingStats: RatingStats;
  recentReviews: any[]; // You can define a Review interface if needed
  isFavorited: boolean;
}

export interface VendorDetailApiResponse {
  success: boolean;
  data: VendorDetailResponse;
}

// Vendors API functions
export async function fetchVendors(
  subcategoryId: string, 
  page: number = 1, 
  limit: number = 10
): Promise<{ data: VendorsResponse; pagination: Pagination }> {
  if (!subcategoryId || subcategoryId.trim() === '') {
    throw new ApiError('Subcategory ID is required', 400);
  }

  const response = await apiRequest<VendorsApiResponse>(
    `/customer/subcategories/${subcategoryId}/vendors?page=${page}&limit=${limit}`,
    {
      method: 'GET',
      next: { revalidate: 0 },
    }
  );

  return {
    data: response.data,
    pagination: response.pagination,
  };
}

export async function fetchVendorDetails(vendorId: string): Promise<VendorDetailResponse> {
  if (!vendorId || vendorId.trim() === '') {
    throw new ApiError('Vendor ID is required', 400);
  }

  const response = await apiRequest<VendorDetailApiResponse>(
    `/customer/vendors/${vendorId}`,
    {
      method: 'GET',
      next: { revalidate: 0 },
    }
  );

  return response.data;
}

// Export the ApiError class for use in components
export { ApiError }; 