'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { User, LogOut, Settings, MapPin, Mail, Phone, Calendar } from 'lucide-react';

export default function UserProfile() {
  const { user, logout, loading } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await logout();
      setShowDropdown(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="relative">
      {/* User Avatar Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        disabled={loading}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
        </div>
        <span className="hidden md:block text-sm font-medium text-gray-700">
          {user.name}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            showDropdown ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* User Info Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'customer' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role === 'customer' ? 'Customer' : 'Vendor'}
                  </span>
                  {user.isEmailVerified && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">{user.email}</span>
            </div>
            
            {user.phone && (
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">{user.phone}</span>
              </div>
            )}

            {user.address && (
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                <div className="text-gray-700">
                  <div>{user.address.street}</div>
                  <div>{user.address.city}, {user.address.state} {user.address.pincode}</div>
                  <div>{user.address.country}</div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">
                Member since {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Link
              href="/profile"
              onClick={() => setShowDropdown(false)}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              <Settings className="w-4 h-4" />
              Profile Settings
            </Link>
            
            <button
              onClick={handleLogout}
              disabled={loading}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
            >
              <LogOut className="w-4 h-4" />
              {loading ? 'Signing out...' : 'Sign Out'}
            </button>
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
} 