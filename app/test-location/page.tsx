'use client';

import React from 'react';
import { useLocation } from '@/lib/location-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import LocationPermission from '@/components/LocationPermission';
import LocationDisplay from '@/components/LocationDisplay';
import { 
  MapPin, 
  Navigation, 
  Settings, 
  Globe, 
  Clock, 
  Target,
  AlertCircle,
  CheckCircle,
  XCircle,
  Loader2,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function TestLocationPage() {
  const { 
    location, 
    locationName, 
    geocodedLocation,
    permissionStatus, 
    isLoading, 
    error, 
    requestPermission,
    clearLocation
  } = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Location Test Page</h1>
          <p className="text-gray-600 mt-2">
            Test and demonstrate the location permission functionality
          </p>
        </div>

        {/* Component Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* LocationPermission Components */}
          <Card>
            <CardHeader>
              <CardTitle>LocationPermission Components</CardTitle>
              <CardDescription>
                Different variants of the LocationPermission component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Button Variant</h4>
                <LocationPermission variant="button" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Alert Variant</h4>
                <LocationPermission variant="alert" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Inline Variant</h4>
                <LocationPermission variant="inline" />
              </div>
            </CardContent>
          </Card>

          {/* LocationDisplay Components */}
          <Card>
            <CardHeader>
              <CardTitle>LocationDisplay Components</CardTitle>
              <CardDescription>
                Different variants of the LocationDisplay component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Badge Variant</h4>
                <LocationDisplay variant="badge" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Button Variant</h4>
                <LocationDisplay variant="button" />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Text Variant</h4>
                <LocationDisplay variant="text" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Current Location Status
            </CardTitle>
            <CardDescription>
              Real-time status of location services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Permission Status</h4>
                <Badge className={
                  permissionStatus === 'granted' ? 'bg-green-100 text-green-800' :
                  permissionStatus === 'denied' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }>
                  {permissionStatus}
                </Badge>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Loading State</h4>
                <div className="flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-sm">Loading...</span>
                    </>
                  ) : (
                    <span className="text-sm text-green-600">Ready</span>
                  )}
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Location Name</h4>
                <p className="text-sm font-medium">
                  {locationName || 'Not set'}
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Error Status</h4>
                <p className="text-sm">
                  {error ? (
                    <span className="text-red-600">{error}</span>
                  ) : (
                    <span className="text-green-600">No errors</span>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Details */}
        {location && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Location Details
              </CardTitle>
              <CardDescription>
                Detailed information about your current location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coordinates */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Coordinates</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Latitude:</span>
                      <span className="font-mono text-sm">{location.latitude.toFixed(6)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Longitude:</span>
                      <span className="font-mono text-sm">{location.longitude.toFixed(6)}</span>
                    </div>
                    {location.accuracy && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Accuracy:</span>
                        <span className="text-sm">±{Math.round(location.accuracy)}m</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Timestamp:</span>
                      <span className="text-sm">{new Date(location.timestamp).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Geocoded Information */}
                {geocodedLocation && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Address Information</h4>
                    <div className="space-y-2">
                      {geocodedLocation.city && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">City:</span>
                          <span className="text-sm">{geocodedLocation.city}</span>
                        </div>
                      )}
                      {geocodedLocation.state && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">State:</span>
                          <span className="text-sm">{geocodedLocation.state}</span>
                        </div>
                      )}
                      {geocodedLocation.country && (
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Country:</span>
                          <span className="text-sm">{geocodedLocation.country}</span>
                        </div>
                      )}
                      {geocodedLocation.formatted && (
                        <div>
                          <span className="text-sm text-gray-600 block mb-1">Full Address:</span>
                          <p className="text-sm bg-gray-50 p-2 rounded">{geocodedLocation.formatted}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              {/* Actions */}
              <div className="flex gap-2">
                <Button onClick={requestPermission} variant="outline">
                  <Target className="w-4 h-4 mr-2" />
                  Refresh Location
                </Button>
                <Button onClick={clearLocation} variant="outline" className="text-red-600 hover:text-red-700">
                  <XCircle className="w-4 h-4 mr-2" />
                  Clear Location
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Location Error:</strong> {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Testing Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How to Test:</h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Click on any location component to request permission</li>
                  <li>Allow location access when prompted by your browser</li>
                  <li>Observe how the components update with your location</li>
                  <li>Try denying permission to see error handling</li>
                  <li>Use the "Clear Location" button to reset the state</li>
                </ol>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Note:</h4>
                <p className="text-blue-800">
                  This page uses the OpenCage Geocoding API to convert coordinates to readable addresses. 
                  The API key is included in the code for demonstration purposes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 