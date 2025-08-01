'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, MapPin, Globe, Mail, Briefcase, Zap, List, Download, Bell, ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import UserProfile from '@/components/UserProfile';

export default function Header() {
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center select-none">
            <span className="text-xl md:text-2xl font-bold text-blue-600">Local</span>
            <span className="text-xl md:text-2xl font-bold text-orange-500 ml-1">Zarurat</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {/* Language Dropdown */}
            <div className="flex items-center space-x-1 text-sm text-blue-600 cursor-pointer font-medium">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-sm font-semibold hover:text-blue-600 hidden xl:block">We are Hiring</a>
            <a href="#" className="text-sm font-semibold hover:text-blue-600 hidden xl:block">Investor Relations</a>
            {/* Leads with red dot */}
            <div className="flex items-center space-x-1 text-sm relative font-medium">
              <Mail className="w-4 h-4" />
              <span className="hover:text-blue-600 hidden md:block">Leads</span>
              <span className="absolute -top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              <a href="#" className="hover:text-blue-600 hidden md:block">Advertise</a>
            </div>
            {/* Free Listing with BUSINESS badge */}
            <div className="flex items-center space-x-1 text-sm font-medium">
              <List className="w-4 h-4" />
              <a href="#" className="hover:text-blue-600 hidden md:block">Free Listing</a>
              <span className="ml-1 px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded align-middle hidden md:inline" style={{lineHeight: '1.1'}}>BUSINESS</span>
            </div>
            {/* Bell Icon */}
            <Bell className="w-5 h-5 text-gray-700" />
            {/* User Profile or Login Button */}
            {user ? (
              <UserProfile />
            ) : (
              <Link 
                href="/login"
                className="bg-blue-600 text-white px-4 md:px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 ml-2 inline-block transition-all duration-300 hover:scale-105"
              >
                <span className="hidden md:block">Login / Sign Up</span>
                <span className="md:hidden">Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium">
                <Globe className="w-4 h-4" />
                <span>Language: EN</span>
              </div>
              <a href="#" className="block text-sm font-semibold hover:text-blue-600 py-2">We are Hiring</a>
              <a href="#" className="block text-sm font-semibold hover:text-blue-600 py-2">Investor Relations</a>
              <div className="flex items-center space-x-2 text-sm font-medium py-2">
                <Mail className="w-4 h-4" />
                <span>Leads</span>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium py-2">
                <Briefcase className="w-4 h-4" />
                <span>Advertise</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium py-2">
                <List className="w-4 h-4" />
                <span>Free Listing</span>
                <span className="px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded">BUSINESS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium py-2">
                <Bell className="w-4 h-4" />
                <span>Notifications</span>
              </div>
              {user ? (
                <div className="py-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </div>
                </div>
              ) : (
                <Link 
                  href="/login"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-bold hover:bg-blue-700 block text-center transition-all duration-300"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}