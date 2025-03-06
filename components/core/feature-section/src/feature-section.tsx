'use client'

import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/core/section-title'
import { ButtonGroup } from '@/components/core/button-group'
import { FeatureGallery } from './feature-gallery'
import { FeatureSectionProps } from '../types'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

/**
 * Feature Section Component
 * 
 * A flexible section component that displays a collection of features in different layouts.
 * Supports three variants (v1, v2, v3) with different styling and layout options.
 * 
 * @component
 */
function FeatureSection({
	title,
	features,
	variant = 'v1',
	className,
}: FeatureSectionProps) {
	// Common padding and spacing classes used across all variants
	const sectionClasses = cn(
		'py-16 md:py-28 px-5 md:px-16', // Consistent padding
		'space-y-14 md:space-y-16',     // Consistent vertical spacing
		className
	)

	/**
	 * Renders the appropriate content based on the selected variant
	 */
	const renderVariantContent = () => {
		switch (variant) {
			case 'v1':
				return (
					<>
						<SectionTitle
							{...title}
							alignment="center"
							className="max-w-3xl mx-auto"
						/>
						<FeatureGallery
							features={features}
							variant={variant}
							cardProps={{
								variant: 'v1',
							}}
						/>
						{features[0]?.buttons && (
							<div className="flex justify-center w-full px-5 md:px-0">
								<ButtonGroup stackOnMobile={true} className="w-full md:w-auto">
									{features[0].buttons.map((button, index) => (
										<Button 
											key={index} 
											variant={button.variant || 'default'} 
											asChild={!!button.href}
											className="w-full md:w-auto"
											{...button.buttonProps}
										>
											{button.href ? (
												<a href={button.href}>{button.label}</a>
											) : (
												button.label
											)}
										</Button>
									))}
								</ButtonGroup>
							</div>
						)}
					</>
				)
				
			case 'v2':
				return (
					<>
						<SectionTitle
							{...title}
							alignment="center"
							className="max-w-3xl mx-auto"
						/>
						<FeatureGallery
							features={features}
							variant={variant}
							cardProps={{
								variant: 'v2',
							}}
						/>
					</>
				)
				
			case 'v3':
				return (
					<>
						<SectionTitle
							{...title}
							alignment="left"
							className="max-w-3xl"
						/>
						<FeatureGallery
							features={features}
							variant={variant}
							cardProps={{
								variant: 'v3',
							}}
						/>
					</>
				)
				
			default:
				return null
		}
	}

	return (
		<section className={sectionClasses}>
			{renderVariantContent()}
		</section>
	)
}

export { FeatureSection }
