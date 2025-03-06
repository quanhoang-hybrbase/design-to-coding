'use client'

import { Card } from '@/components/core/card'
import { FeatureGalleryProps } from '../types'
import { cn } from '@/lib/utils'

/**
 * FeatureGallery Component
 * 
 * A grid layout for displaying feature cards
 */
function FeatureGallery({
	features,
	cardProps,
	className,
}: FeatureGalleryProps) {
	return (
		<div className={cn(
			'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
			className
		)}>
			{features.map((feature, index) => (
				<Card
					key={index}
					imageSrc={feature.imageSrc}
					imageAlt={feature.imageAlt || feature.heading}
					heading={feature.heading}
					description={feature.description}
					aspectRatio="1:1"
					objectFit="cover"
					backgroundColor="bg-muted"
					{...cardProps}
				/>
			))}
		</div>
	)
}

export { FeatureGallery }
