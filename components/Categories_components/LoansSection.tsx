import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

const loanCategories = [
	{
		name: 'Home Loan',
		icon: '/images/icons/home-loan.svg',
		link: '/loans/home-loan'
	},
	{
		name: 'Personal Loan',
		icon: '/images/icons/personal-loan.svg',
		link: '/loans/personal-loan'
	},
	{
		name: 'Credit Card',
		icon: '/images/icons/credit-card.svg',
		link: '/loans/credit-card'
	},
	{
		name: 'Business Loan',
		icon: '/images/icons/business-loan.svg',
		link: '/loans/business-loan'
	},
	{
		name: 'Car Loan',
		icon: '/images/icons/car-loan.svg',
		link: '/loans/car-loan'
	},
	{
		name: 'Two Wheeler Loan',
		icon: '/images/icons/two-wheeler.svg',
		link: '/loans/two-wheeler-loan'
	},
	{
		name: 'Gold Loan',
		icon: '/images/icons/gold-loan.svg',
		link: '/loans/gold-loan'
	},
	{
		name: 'Loans Against Property',
		icon: '/images/icons/property-loan.svg',
		link: '/loans/property-loan'
	},
	{
		name: 'Education Loan',
		icon: '/images/icons/education-loan.svg',
		link: '/loans/education-loan'
	}
];

const loanPurposes = [
	{
		name: 'Education',
		icon: '/images/icons/education.svg',
		link: '/loans/education'
	},
	{
		name: 'Travel',
		icon: '/images/icons/travel.svg',
		link: '/loans/travel'
	},
	{
		name: 'Marriage',
		icon: '/images/icons/marriage.svg',
		link: '/loans/marriage'
	},
	{
		name: 'Health',
		icon: '/images/icons/health.svg',
		link: '/loans/health'
	}
];

export default function LoansSection() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<div className="relative h-[500px] bg-black">
				<Image
					src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
					alt="Loans and Finance"
					fill
					className="object-cover opacity-70"
					priority
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-6xl font-bold text-white tracking-wider">
						IT&apos;S ALL ABOUT LOANS
					</h1>
				</div>
			</div>

			{/* Action Cards */}
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-10">
					<Link
						href="/loans/apply"
						className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12">
								<Image
									src="https://img.icons8.com/color/96/loan.png"
									alt="Apply Loan"
									width={48}
									height={48}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">Apply Loan</h3>
								<p className="text-gray-600">Get Approved →</p>
							</div>
						</div>
					</Link>

					<Link
						href="/loans/trending"
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
						href="/loans/compare"
						className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
					>
						<div className="flex items-center gap-4">
							<div className="w-12 h-12">
								<Image
									src="https://img.icons8.com/color/96/calculator.png"
									alt="Compare Loans"
									width={48}
									height={48}
									className="w-full h-full"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-1">COMPARE LOANS</h3>
								<p className="text-gray-600">Best Rates →</p>
							</div>
						</div>
					</Link>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
					<Link
						href="/loans/personal"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1554224154-26032fded4bf"
							alt="Personal Loans"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">Personal Loans</h2>
						</div>
					</Link>

					<Link
						href="/loans/home"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
							alt="Home Loans"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">Home Loans</h2>
						</div>
					</Link>

					<Link
						href="/loans/business"
						className="relative h-[300px] rounded-lg overflow-hidden group"
					>
						<Image
							src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
							alt="Business Loans"
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
							priority={false}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h2 className="text-3xl font-bold text-white">Business Loans</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}