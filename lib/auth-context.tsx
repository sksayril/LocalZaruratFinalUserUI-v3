'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, AuthResponse, registerUser, loginUser, logoutUser, getCurrentUser, ApiError } from './api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    address: {
      street: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    dateOfBirth?: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  error: string | null;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
          setToken(storedToken);
          // Fetch current user data
          const userData = await getCurrentUser(storedToken);
          setUser(userData);
        }
      } catch (error) {
        // Token is invalid, clear it
        console.warn('Invalid token, clearing auth state:', error);
        localStorage.removeItem('authToken');
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: AuthResponse = await loginUser({ email, password });
      
      // Store token in localStorage
      localStorage.setItem('authToken', response.data.token);
      
      // Update state
      setToken(response.data.token);
      setUser(response.data.user);
      
    } catch (error) {
      let errorMessage = 'Login failed. Please try again.';
      
      if (error instanceof ApiError) {
        if (error.status === 401) {
          errorMessage = 'Invalid email or password.';
        } else if (error.status === 429) {
          errorMessage = 'Too many login attempts. Please try again later.';
        } else if (error.status === 0) {
          errorMessage = 'Network error. Please check your connection.';
        } else {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    address: {
      street: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    dateOfBirth?: string;
  }) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response: AuthResponse = await registerUser(userData);
      
      // Store token in localStorage
      localStorage.setItem('authToken', response.data.token);
      
      // Update state
      setToken(response.data.token);
      setUser(response.data.user);
      
    } catch (error) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error instanceof ApiError) {
        if (error.status === 409) {
          errorMessage = 'An account with this email already exists.';
        } else if (error.status === 400) {
          errorMessage = 'Please check your information and try again.';
        } else if (error.status === 0) {
          errorMessage = 'Network error. Please check your connection.';
        } else {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      if (token) {
        await logoutUser(token);
      }
    } catch (error) {
      // Don't throw error for logout as it's not critical
      console.warn('Logout API call failed:', error);
    } finally {
      // Clear local state regardless of API call success
      localStorage.removeItem('authToken');
      setToken(null);
      setUser(null);
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    if (!token) return;
    
    try {
      const userData = await getCurrentUser(token);
      setUser(userData);
    } catch (error) {
      console.warn('Failed to refresh user data:', error);
      // If refresh fails, logout the user
      await logout();
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    token,
    loading,
    isLoading,
    login,
    register,
    logout,
    clearError,
    error,
    isAuthenticated: !!user && !!token,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 