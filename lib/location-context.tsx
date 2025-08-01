'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp: number;
}

interface GeocodedLocation {
  city?: string;
  state?: string;
  country?: string;
  formatted?: string;
}

interface LocationContextType {
  location: LocationData | null;
  locationName: string | null;
  geocodedLocation: GeocodedLocation | null;
  permissionStatus: 'granted' | 'denied' | 'prompt' | 'unsupported';
  isLoading: boolean;
  error: string | null;
  requestPermission: () => Promise<void>;
  getCurrentLocation: () => Promise<void>;
  clearLocation: () => void;
  geocodeLocation: (lat: number, lng: number) => Promise<GeocodedLocation>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [geocodedLocation, setGeocodedLocation] = useState<GeocodedLocation | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'granted' | 'denied' | 'prompt' | 'unsupported'>('prompt');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if geolocation is supported
  useEffect(() => {
    if (!navigator.geolocation) {
      setPermissionStatus('unsupported');
      setError('Geolocation is not supported by this browser.');
      return;
    }

    // Check permission status
    if ('permissions' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        setPermissionStatus(result.state as any);
        
        result.onchange = () => {
          setPermissionStatus(result.state as any);
        };
      });
    }

    // Load saved location from localStorage
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      try {
        const parsed = JSON.parse(savedLocation);
        setLocation(parsed.location);
        setLocationName(parsed.locationName);
        setGeocodedLocation(parsed.geocodedLocation);
      } catch (e) {
        console.error('Error parsing saved location:', e);
      }
    }
  }, []);

  const geocodeLocation = async (lat: number, lng: number): Promise<GeocodedLocation> => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=209d17df24024d31bdb7645501875d4c&language=en`
      );
      
      if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        const components = result.components;
        
        return {
          city: components.city || components.town || components.village,
          state: components.state,
          country: components.country,
          formatted: result.formatted
        };
      }
      
      throw new Error('No geocoding results found');
    } catch (error) {
      console.error('Geocoding error:', error);
      throw error;
    }
  };

  const requestPermission = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await getCurrentLocation();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to get location');
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentLocation = async () => {
    return new Promise<void>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported'));
        return;
      }

      const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      };

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const locationData: LocationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              timestamp: position.timestamp
            };

            setLocation(locationData);
            setPermissionStatus('granted');

            // Geocode the location
            const geocoded = await geocodeLocation(locationData.latitude, locationData.longitude);
            setGeocodedLocation(geocoded);

            // Create location name
            const name = geocoded.city || geocoded.formatted || `${locationData.latitude.toFixed(4)}, ${locationData.longitude.toFixed(4)}`;
            setLocationName(name);

            // Save to localStorage
            localStorage.setItem('userLocation', JSON.stringify({
              location: locationData,
              locationName: name,
              geocodedLocation: geocoded
            }));

            resolve();
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          let errorMessage = 'Failed to get location';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location permission denied';
              setPermissionStatus('denied');
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
            default:
              errorMessage = 'Unknown location error';
          }
          
          setError(errorMessage);
          reject(new Error(errorMessage));
        },
        options
      );
    });
  };

  const clearLocation = () => {
    setLocation(null);
    setLocationName(null);
    setGeocodedLocation(null);
    localStorage.removeItem('userLocation');
  };

  const value: LocationContextType = {
    location,
    locationName,
    geocodedLocation,
    permissionStatus,
    isLoading,
    error,
    requestPermission,
    getCurrentLocation,
    clearLocation,
    geocodeLocation
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 