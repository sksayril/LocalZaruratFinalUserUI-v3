'use client';

import React from 'react';
import { useLocation } from '@/lib/location-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
  Loader2
} from 'lucide-react';
import Link from 'next/link';

export default function LocationSettingsPage() {
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

  const getPermissionStatusColor = () => {
    switch (permissionStatus) {
      case 'granted': return 'bg-green-100 text-green-800';
      case 'denied': return 'bg-red-100 text-red-800';
      case 'unsupported': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getPermissionStatusText = () => {
    switch (permissionStatus) {
      case 'granted': return 'Granted';
      case 'denied': return 'Denied';
      case 'unsupported': return 'Not Supported';
      default: return 'Not Requested';
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Location Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your location permissions and view your current location details
          </p>
        </div>

        {/* Permission Status */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Permission Status
            </CardTitle>
            <CardDescription>
              Current location permission status for this browser
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className={getPermissionStatusColor()}>
                  {getPermissionStatusText()}
                </Badge>
                {permissionStatus === 'granted' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {permissionStatus === 'denied' && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              {permissionStatus !== 'granted' && permissionStatus !== 'unsupported' && (
                <Button onClick={requestPermission} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Requesting...
                    </>
                  ) : (
                    <>
                      <Navigation className="w-4 h-4 mr-2" />
                      Request Permission
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Current Location */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Current Location
            </CardTitle>
            <CardDescription>
              Your current location coordinates and address
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center gap-2 text-gray-600">
                <Loader2 className="w-4 h-4 animate-spin" />
                Getting your location...
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : location ? (
              <div className="space-y-4">
                {/* Location Name */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location Name</h4>
                  <p className="text-lg font-medium text-blue-600">{locationName}</p>
                </div>

                <Separator />

                {/* Coordinates */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coordinates</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Latitude</p>
                      <p className="font-mono text-sm">{location.latitude.toFixed(6)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Longitude</p>
                      <p className="font-mono text-sm">{location.longitude.toFixed(6)}</p>
                    </div>
                  </div>
                </div>

                {/* Accuracy */}
                {location.accuracy && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Accuracy</h4>
                    <p className="text-sm text-gray-600">
                      ±{Math.round(location.accuracy)} meters
                    </p>
                  </div>
                )}

                {/* Timestamp */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Last Updated</h4>
                  <p className="text-sm text-gray-600">
                    {formatTimestamp(location.timestamp)}
                  </p>
                </div>

                {/* Geocoded Details */}
                {geocodedLocation && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Address Details</h4>
                      <div className="space-y-1 text-sm">
                        {geocodedLocation.city && (
                          <p><span className="font-medium">City:</span> {geocodedLocation.city}</p>
                        )}
                        {geocodedLocation.state && (
                          <p><span className="font-medium">State:</span> {geocodedLocation.state}</p>
                        )}
                        {geocodedLocation.country && (
                          <p><span className="font-medium">Country:</span> {geocodedLocation.country}</p>
                        )}
                        {geocodedLocation.formatted && (
                          <p><span className="font-medium">Full Address:</span> {geocodedLocation.formatted}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4">
                  <Button onClick={requestPermission} variant="outline">
                    <Target className="w-4 h-4 mr-2" />
                    Refresh Location
                  </Button>
                  <Button onClick={clearLocation} variant="outline" className="text-red-600 hover:text-red-700">
                    <XCircle className="w-4 h-4 mr-2" />
                    Clear Location
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Location Set</h3>
                <p className="text-gray-600 mb-4">
                  Enable location access to see your current location details
                </p>
                <Button onClick={requestPermission}>
                  <Navigation className="w-4 h-4 mr-2" />
                  Enable Location
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              About Location Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Location services help us provide you with relevant local businesses and services 
                in your area. Your location data is stored locally on your device and is not 
                shared with third parties without your consent.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Privacy & Security</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• Location data is stored locally on your device</li>
                  <li>• No location data is transmitted to our servers</li>
                  <li>• You can clear your location data at any time</li>
                  <li>• Location permissions can be revoked in your browser settings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 