import { cn } from '@/lib/utils'
import { Card } from '@/components/core/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { FeatureGalleryProps } from '../types'

/**
 * Feature Gallery Component
 * 
 * Displays a grid of feature cards with different layouts based on the variant.
 * Used by the FeatureSection component to render feature items.
 * 
 * @component
 */
function FeatureGallery({
	features,
	variant = 'v1',
	className,
	cardProps = {},
}: FeatureGalleryProps) {
	// Common grid layout class used across all variants
	const gridClasses = 'grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-7'

	// Render variant-specific card content
	const renderCardContent = (feature: any, index: number) => {
		switch (variant) {
			case 'v1':
				return (
					<Card
						key={index}
						variant="v1"
						imageSrc={feature.imageSrc}
						imageAlt={feature.imageAlt || feature.heading}
						heading={feature.heading}
						description={feature.description}
						aspectRatio="1:1"
						objectFit="cover"
						{...cardProps}
					/>
				)
			case 'v2':
				return (
					<Card
						key={index}
						variant="v2"
						imageSrc={feature.imageSrc}
						imageAlt={feature.imageAlt || feature.heading}
						heading={feature.heading}
						description={feature.description}
						aspectRatio="4:3"
						objectFit="cover"
						{...cardProps}
					>
						{feature.buttons && feature.buttons.length > 0 && (
							<Button variant="link" className="px-0 mt-2" asChild>
								<a href={feature.buttons[0].href || '#'}>
									{feature.buttons[0].label || 'Learn more'}
									<ChevronRight className="ml-1 h-4 w-4" />
								</a>
							</Button>
						)}
					</Card>
				)
			case 'v3':
				return (
					<Card
						key={index}
						variant="v3"
						imageSrc={feature.icon || feature.imageSrc}
						imageAlt={feature.imageAlt || feature.heading}
						heading={feature.heading}
						description={feature.description}
						aspectRatio="1:1"
						objectFit="cover"
						{...cardProps}
					/>
				)
			default:
				return (
					<Card
						key={index}
						variant="v1"
						imageSrc={feature.imageSrc}
						imageAlt={feature.imageAlt || feature.heading}
						heading={feature.heading}
						description={feature.description}
						aspectRatio="1:1"
						objectFit="cover"
						{...cardProps}
					/>
				)
		}
	}

	return (
		<div className={cn(gridClasses, className)}>
			{features.map((feature, index) => renderCardContent(feature, index))}
		</div>
	)
}

export { FeatureGallery }
