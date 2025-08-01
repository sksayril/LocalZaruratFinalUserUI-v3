'use client';

import React from 'react';
import { useLocation } from '@/lib/location-context';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

interface LocationDisplayProps {
  variant?: 'badge' | 'button' | 'text';
  showIcon?: boolean;
  className?: string;
}

export default function LocationDisplay({ 
  variant = 'badge', 
  showIcon = true,
  className = ''
}: LocationDisplayProps) {
  const { locationName, permissionStatus, isLoading, error, requestPermission } = useLocation();

  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="w-3 h-3 animate-spin" />;
    if (error) return <AlertCircle className="w-3 h-3 text-red-500" />;
    if (locationName) return <CheckCircle className="w-3 h-3 text-green-500" />;
    return <MapPin className="w-3 h-3 text-gray-400" />;
  };

  const getStatusText = () => {
    if (isLoading) return 'Getting location...';
    if (error) return 'Location error';
    if (locationName) return locationName;
    if (permissionStatus === 'denied') return 'Location denied';
    return 'Enable location';
  };

  const handleRequestPermission = async () => {
    try {
      await requestPermission();
    } catch (error) {
      console.error('Failed to request location permission:', error);
    }
  };

  if (variant === 'badge') {
    return (
      <Badge 
        variant={locationName ? "default" : "secondary"}
        className={`flex items-center gap-1 ${className}`}
      >
        {showIcon && getStatusIcon()}
        <span>{getStatusText()}</span>
        {!locationName && !isLoading && (
          <Button 
            onClick={handleRequestPermission} 
            size="sm" 
            variant="ghost"
            className="ml-1 p-0 h-4 w-4 text-xs"
          >
            <MapPin className="w-2 h-2" />
          </Button>
        )}
      </Badge>
    );
  }

  if (variant === 'button') {
    return (
      <Button
        onClick={handleRequestPermission}
        disabled={isLoading}
        variant={locationName ? "outline" : "default"}
        size="sm"
        className={`flex items-center gap-2 ${className}`}
      >
        {showIcon && getStatusIcon()}
        <span>{getStatusText()}</span>
      </Button>
    );
  }

  // text variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && getStatusIcon()}
      <span className="text-sm">{getStatusText()}</span>
      {!locationName && !isLoading && (
        <Button 
          onClick={handleRequestPermission} 
          size="sm" 
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 p-1 h-6"
        >
          <MapPin className="w-3 h-3" />
        </Button>
      )}
    </div>
  );
} 