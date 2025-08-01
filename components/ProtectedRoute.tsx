'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { ROUTES } from '@/lib/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  redirectTo = ROUTES.LOGIN 
}: ProtectedRouteProps) {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (requireAuth && !isAuthenticated) {
        // User is not authenticated, redirect to login
        router.push(redirectTo);
      } else if (!requireAuth && isAuthenticated) {
        // User is authenticated but shouldn't be on this page (e.g., login/signup pages)
        router.push(ROUTES.HOME);
      }
    }
  }, [user, loading, isAuthenticated, requireAuth, redirectTo, router]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If authentication check is complete and user should be here, render children
  if (requireAuth && isAuthenticated) {
    return <>{children}</>;
  }

  // If no auth required and user is not authenticated, render children
  if (!requireAuth && !isAuthenticated) {
    return <>{children}</>;
  }

  // If we get here, user is in wrong state, show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
} 