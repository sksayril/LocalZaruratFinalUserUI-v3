'use client';

import React, { useState } from 'react';
import { useLocation } from '@/lib/location-context';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Navigation, 
  X, 
  AlertCircle, 
  CheckCircle, 
  Loader2,
  Settings
} from 'lucide-react';

interface LocationPermissionProps {
  variant?: 'button' | 'alert' | 'inline';
  showLocationName?: boolean;
  className?: string;
}

export default function LocationPermission({ 
  variant = 'button', 
  showLocationName = true,
  className = ''
}: LocationPermissionProps) {
  const { 
    location, 
    locationName, 
    permissionStatus, 
    isLoading, 
    error, 
    requestPermission,
    clearLocation
  } = useLocation();

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="w-4 h-4 animate-spin" />;
    if (error) return <AlertCircle className="w-4 h-4 text-red-500" />;
    if (location) return <CheckCircle className="w-4 h-4 text-green-500" />;
    return <MapPin className="w-4 h-4 text-gray-400" />;
  };

  const getStatusText = () => {
    if (isLoading) return 'Getting location...';
    if (error) return 'Location error';
    if (location) return locationName || 'Location found';
    if (permissionStatus === 'denied') return 'Location denied';
    if (permissionStatus === 'unsupported') return 'Location not supported';
    return 'Enable location';
  };

  const handleRequestPermission = async () => {
    try {
      await requestPermission();
    } catch (error) {
      console.error('Failed to request location permission:', error);
    }
  };

  if (variant === 'button') {
    return (
      <Button
        onClick={handleRequestPermission}
        disabled={isLoading}
        variant={location ? "outline" : "default"}
        className={`flex items-center gap-2 ${className}`}
      >
        {getStatusIcon()}
        <span>{getStatusText()}</span>
        {location && (
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              clearLocation();
            }}
            className="ml-2 p-1 h-6 w-6"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </Button>
    );
  }

  if (variant === 'alert') {
    if (!location && !isLoading && !error) {
      return (
        <Alert className={className}>
          <Navigation className="h-4 w-4" />
          <AlertDescription>
            <div className="flex items-center justify-between">
              <span>Enable location access to find services near you</span>
              <Button onClick={handleRequestPermission} size="sm">
                Enable Location
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }

    if (error) {
      return (
        <Alert variant="destructive" className={className}>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <div className="flex items-center justify-between">
              <span>{error}</span>
              <Button onClick={handleRequestPermission} size="sm" variant="outline">
                Retry
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }

    if (location) {
      return (
        <Alert className={`border-green-200 bg-green-50 ${className}`}>
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription>
            <div className="flex items-center justify-between">
              <span>Location: {locationName}</span>
              <Button 
                onClick={clearLocation} 
                size="sm" 
                variant="outline"
                className="text-red-600 hover:text-red-700"
              >
                Clear
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      );
    }

    return null;
  }

  // inline variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {getStatusIcon()}
      {showLocationName && locationName ? (
        <span className="text-sm font-medium text-gray-700">{locationName}</span>
      ) : (
        <span className="text-sm text-gray-500">{getStatusText()}</span>
      )}
      {!location && !isLoading && (
        <Button 
          onClick={handleRequestPermission} 
          size="sm" 
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 p-1 h-6"
        >
          <Settings className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
} 