import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const filterOptions = [
	{ label: 'Sort by', type: 'dropdown' },
	{ label: 'Amenities', type: 'dropdown' },
	{ label: 'Open Now', type: 'button' },
	{ label: 'Top Rated', type: 'toggle' },
	{ label: 'Quick Response', type: 'toggle' },
	{ label: 'Jd Verified', type: 'toggle' },
	{ label: 'Ratings', type: 'dropdown' },
	{ label: 'Deals', type: 'toggle' },
	{ label: 'Jd Trust', type: 'toggle' }
];

const gyms = [
	{
		name: 'E Gym - The Family Club',
		rating: 4.5,
		totalRatings: 969,
		isVerified: true,
		isTopSearch: true,
		location: 'Off Link Road Malad West, Mumbai',
		specialties: ['Pilates'],
		phone: '09972232683',
		image: '/images/gyms/e-gym.jpg'
	},
	{
		name: 'Twalkar Wellness',
		rating: 4.7,
		totalRatings: 1186,
		isVerified: true,
		isPopular: true,
		location: 'Chincholi Bunder Road Malad West, Mumbai',
		image: '/images/gyms/twalkar-wellness.jpg'
	}
];

export default function GymSection() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[500px] bg-black">
				<Image
					src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
					alt="Fitness and Gym"
					fill
					className="object-cover opacity-70"
					priority
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-6xl font-bold text-white tracking-wider">
						IT&apos;S ALL ABOUT FITNESS
					</h1>
				</div>
			</div>

			{/* Action Cards */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
					<Link
						href="/gym/membership"
						className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12">
								<Image
									src="https://img.icons8.com/color/96/membership-card.png"
									alt="Get Membership"
									width={48}
									height={48}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">
									Get Membership
								</h3>
								<p className="text-gray-600">Join Today →</p>
							</div>
						</div>
					</Link>

					<Link
						href="/gym/trending"
						className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12">
								<Image
									src="https://img.icons8.com/color/96/trending-up.png"
									alt="What&apos;s Trending"
									width={48}
									height={48}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">
									WHAT&apos;S TRENDING?
								</h3>
								<p className="text-gray-600">Try it Yourself →</p>
							</div>
						</div>
					</Link>

					<Link
						href="/gym/find"
						className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12">
								<Image
									src="https://img.icons8.com/color/96/gym.png"
									alt="Find Gyms"
									width={48}
									height={48}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">FIND GYMS</h3>
								<p className="text-gray-600">8165+ Fitness Centers →</p>
							</div>
						</div>
					</Link>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					<Link
						href="/gym/strength"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
							alt="Strength Training"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">
								Strength Training
							</h2>
						</div>
					</Link>

					<Link
						href="/gym/cardio"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
							alt="Cardio Workouts"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">Cardio Workouts</h2>
						</div>
					</Link>

					<Link
						href="/gym/yoga"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1506629905028-b5ac04d3d17c"
							alt="Yoga & Wellness"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">Yoga & Wellness</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}