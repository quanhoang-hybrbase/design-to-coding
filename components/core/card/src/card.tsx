'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Card as ShadcnCard, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/core/button-group'
import { CardProps } from '../types'
import { cn } from '@/lib/utils'

/**
 * Card Component
 * 
 * A reusable component for displaying content with image, heading, and description.
 * Extends the Shadcn UI Card component with additional functionality.
 * 
 * Supports three variants:
 * - v1: Default with square image, heading and description
 * - v2: With 4:3 image, heading, description and link button with trailing icon
 * - v3: With icon on left side, heading, description and button group
 */
const Card = forwardRef<HTMLDivElement, CardProps>(({
	variant = 'v1',
	imageSrc = '/assets/placholder-image.png',
	imageAlt = '',
	heading = 'Medium length section heading goes here',
	description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
	aspectRatio,
	objectFit = 'cover',
	backgroundColor = 'bg-bg-weak-50',
	hoverEffect = false,
	className,
	children,
	headingProps,
	descriptionProps,
	...props
}, ref) => {
	// Set default aspect ratio based on variant
	const defaultAspectRatio = variant === 'v2' ? '4:3' : '1:1'
	const finalAspectRatio = aspectRatio || defaultAspectRatio
	
	// Map aspect ratio to the corresponding Tailwind class
	const aspectRatioClass = {
		'1:1': 'aspect-square',
		'3:4': 'aspect-[3/4]',
		'4:3': 'aspect-[4/3]',
		'16:9': 'aspect-[16/9]',
	}[finalAspectRatio]
	
	// Map object fit to the corresponding Tailwind class
	const objectFitClass = {
		'cover': 'object-cover',
		'contain': 'object-contain',
	}[objectFit]
	
	// Render variant v1 (Default with square image, heading and description)
	const renderVariantV1 = () => (
		<ShadcnCard
			ref={ref}
			className={cn(
				'overflow-hidden flex flex-col border-none shadow-none',
				'gap-8 md:gap-8 sm:gap-6',
				className
			)}
			{...props}
		>
			{/* Image */}
			{imageSrc && (
				<div className={cn('w-full relative rounded-3xl overflow-hidden', aspectRatioClass, backgroundColor)}>
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						className={cn(objectFitClass)}
					/>
				</div>
			)}
			
			{/* Content */}
			<div className="flex flex-col gap-2">
				{heading && (
					<h3 
						className="text-xl md:text-2xl font-semibold leading-[140%] text-text-strong-950"
						{...headingProps}
					>
						{heading}
					</h3>
				)}
				
				{description && (
					<p 
						className="text-base font-normal leading-[150%] text-text-strong-950"
						{...descriptionProps}
					>
						{description}
					</p>
				)}
			</div>
			
			{/* Optional children */}
			{children && (
				<div className="mt-4">
					{children}
				</div>
			)}
		</ShadcnCard>
	)
	
	// Render variant v2 (With 4:3 image, heading, description and link button)
	const renderVariantV2 = () => (
		<ShadcnCard
			ref={ref}
			className={cn(
				'overflow-hidden flex flex-col border-none shadow-none',
				'gap-6',
				className
			)}
			{...props}
		>
			{/* Image */}
			{imageSrc && (
				<div className={cn('w-full relative rounded-3xl overflow-hidden', aspectRatioClass, backgroundColor)}>
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						className={cn(objectFitClass)}
					/>
				</div>
			)}
			
			{/* Content */}
			<div className="flex flex-col gap-3">
				{heading && (
					<h3 
						className="text-xl md:text-2xl font-semibold leading-[140%] text-text-strong-950"
						{...headingProps}
					>
						{heading}
					</h3>
				)}
				
				{description && (
					<p 
						className="text-base font-normal leading-[150%] text-text-strong-950"
						{...descriptionProps}
					>
						{description}
					</p>
				)}
			</div>
			
			{/* Link Button */}
			<div className="mt-4">
				<Button variant="link" className="p-0 h-auto text-text-strong-950 font-medium">
					Button <ChevronRight className="size-4" />
				</Button>
			</div>
		</ShadcnCard>
	)
	
	// Render variant v3 (With icon on left side, heading, description and button group)
	const renderVariantV3 = () => (
		<ShadcnCard
			ref={ref}
			className={cn(
				'overflow-hidden border-none shadow-none',
				className
			)}
			{...props}
		>
			{/* Row layout with icon on left */}
			<div className="flex flex-row gap-6">
				{/* Icon */}
				<div className="flex-shrink-0 w-12 h-12">
					<Image
						src="/assets/icon-placeholder.svg"
						alt="Icon"
						width={48}
						height={48}
						className="object-contain"
					/>
				</div>
				
				{/* Content column */}
				<div className="flex flex-col gap-6">
					{/* Text content */}
					<div className="flex flex-col gap-3">
						{heading && (
							<h3 
								className="text-2xl md:text-3xl font-semibold leading-[140%] md:leading-[130%] text-text-strong-950"
								{...headingProps}
							>
								{heading}
							</h3>
						)}
						
						{description && (
							<p 
								className="text-base font-normal leading-[150%] text-text-strong-950"
								{...descriptionProps}
							>
								{description}
							</p>
						)}
					</div>
					
					{/* Button Group */}
					<ButtonGroup align="left" spacing="default" stackOnMobile={true}>
						<Button variant="outline" className="border-stroke-sub-300 text-text-strong-950">
							Button
						</Button>
						<Button variant="link" className="p-0 h-auto text-text-strong-950 font-medium">
							Button <ChevronRight className="size-4" />
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</ShadcnCard>
	)
	
	// Render the appropriate variant
	switch (variant) {
		case 'v1':
			return renderVariantV1()
		case 'v2':
			return renderVariantV2()
		case 'v3':
			return renderVariantV3()
		default:
			return renderVariantV1()
	}
})

Card.displayName = 'Card'

export { Card }
