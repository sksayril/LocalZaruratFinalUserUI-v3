'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/lib/auth-context';
import { updateProfile } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit, 
  Save,   
  X, 
  LogOut,
  ArrowLeft,
  Shield,
  CheckCircle,
  Clock
} from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import ProtectedRoute from '@/components/ProtectedRoute';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  address: z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    pincode: z.string().min(6, 'Pincode must be at least 6 characters'),
  }),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { user, token, logout, refreshUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        phone: user.phone,
        address: {
          street: user.address.street,
          city: user.address.city,
          state: user.address.state,
          pincode: user.address.pincode,
        },
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    if (!token) return;

    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      await updateProfile(token, data);
      await refreshUser();
      
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      
    } catch (error: any) {
      setError(error.message || 'Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push(ROUTES.HOME);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setError(null);
    setSuccess(null);
    if (user) {
      reset({
        name: user.name,
        phone: user.phone,
        address: {
          street: user.address.street,
          city: user.address.city,
          state: user.address.state,
          pincode: user.address.pincode,
        },
      });
    }
  };

  if (!user) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center select-none">
                <span className="text-xl md:text-2xl font-bold text-blue-600">Local</span>
                <span className="text-xl md:text-2xl font-bold text-orange-500 ml-1">Zarurat</span>
              </Link>
              <Link 
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Overview */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={user.profileImage || undefined} />
                      <AvatarFallback className="text-2xl">
                        {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <div className="flex justify-center gap-2 mt-2">
                    <Badge variant={user.role === 'vendor' ? 'default' : 'secondary'}>
                      {user.role === 'vendor' ? 'Vendor' : 'Customer'}
                    </Badge>
                    {user.isEmailVerified && (
                      <Badge variant="outline" className="text-green-600">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Joined {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Last login {new Date(user.lastLogin).toLocaleDateString()}
                    </span>
                  </div>
                  <Separator />
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal information and address
                      </CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          onClick={handleCancelEdit}
                          variant="outline"
                          size="sm"
                        >
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          disabled={isLoading}
                          size="sm"
                        >
                          <Save className="w-4 h-4 mr-2" />
                          {isLoading ? 'Saving...' : 'Save Changes'}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {error && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {success && (
                    <Alert className="mb-4">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}

                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            {...register('name')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            {...register('phone')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Address Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Address Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="street">Street Address</Label>
                          <Input
                            id="street"
                            {...register('address.street')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.address?.street && (
                            <p className="text-sm text-red-500 mt-1">{errors.address.street.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            {...register('address.city')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.address?.city && (
                            <p className="text-sm text-red-500 mt-1">{errors.address.city.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            {...register('address.state')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.address?.state && (
                            <p className="text-sm text-red-500 mt-1">{errors.address.state.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="pincode">Pincode</Label>
                          <Input
                            id="pincode"
                            {...register('address.pincode')}
                            disabled={!isEditing}
                            className={!isEditing ? 'bg-gray-50' : ''}
                          />
                          {errors.address?.pincode && (
                            <p className="text-sm text-red-500 mt-1">{errors.address.pincode.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Account Security */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Account Security
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Email Verification</p>
                            <p className="text-sm text-gray-600">
                              {user.isEmailVerified ? 'Verified' : 'Not verified'}
                            </p>
                          </div>
                          <Badge variant={user.isEmailVerified ? 'default' : 'secondary'}>
                            {user.isEmailVerified ? 'Verified' : 'Pending'}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">Phone Verification</p>
                            <p className="text-sm text-gray-600">
                              {user.isPhoneVerified ? 'Verified' : 'Not verified'}
                            </p>
                          </div>
                          <Badge variant={user.isPhoneVerified ? 'default' : 'secondary'}>
                            {user.isPhoneVerified ? 'Verified' : 'Pending'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 