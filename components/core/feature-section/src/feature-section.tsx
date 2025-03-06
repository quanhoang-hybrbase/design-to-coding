'use client'

import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/core/section-title'
import { ButtonGroup } from '@/components/core/button-group'
import { FeatureGallery } from './feature-gallery'
import { FeatureSectionProps } from '../types'
import { cn } from '@/lib/utils'

/**
 * FeatureSection Component
 * 
 * A section for displaying a grid of features with title and optional buttons
 */
function FeatureSection({
	title,
	features,
	buttons,
	variant = 'v1',
	className,
	backgroundColor = 'bg-background',
}: FeatureSectionProps) {
	// Figma values for padding
	const paddingClasses = 'py-28 px-4 md:px-16'
	
	// Figma values for gap
	const gapClasses = 'space-y-20'
	
	return (
		<section className={cn(
			paddingClasses,
			gapClasses,
			backgroundColor,
			className
		)}>
			<SectionTitle
				tagline={title.tagline}
				heading={title.heading}
				description={title.description}
			/>
			
			<FeatureGallery features={features} />
			
			{buttons && buttons.length > 0 && (
				<ButtonGroup align="center" className="mt-12">
					{buttons.map((button, index) => (
						<Button
							key={index}
							variant={button.variant || 'default'}
							href={button.href}
							{...button}
						>
							{button.label}
						</Button>
					))}
				</ButtonGroup>
			)}
		</section>
	)
}

export { FeatureSection }
