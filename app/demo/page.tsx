'use client'

import { CardExample } from '@/components/core/card/examples/card-example'
import { FeatureSection } from '@/components/core/feature-section'

export default function DemoPage() {
	// Sample data for the feature section
	const featureSectionData = {
		title: {
			tagline: 'TAGLINE',
			heading: 'Medium length section heading goes here',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
		},
		features: [
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Feature 1',
				heading: 'Medium length section heading goes here',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Feature 2',
				heading: 'Medium length section heading goes here',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
			},
			{
				imageSrc: '/assets/placholder-image.png',
				imageAlt: 'Feature 3',
				heading: 'Medium length section heading goes here',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
			}
		],
		buttons: [
			{
				label: 'Button',
				variant: 'default'
			},
			{
				label: 'Button',
				variant: 'outline'
			}
		]
	}
	
	return (
		<main>
			<FeatureSection
				title={featureSectionData.title}
				features={featureSectionData.features}
				buttons={featureSectionData.buttons}
				variant="v1"
			/>

			<CardExample />
		</main>
	)
}
