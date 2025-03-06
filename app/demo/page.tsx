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
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
				buttons: [
					{
						label: 'Default Button',
						variant: 'default'
					},
					{
						label: 'Learn more',
						variant: 'link'
					}
				]
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
		]
	}
	
	// Title variants for different section variants
	const titleVariants = {
		v1: {
			...featureSectionData.title,
			alignment: 'center',
			length: 'medium'
		},
		v2: {
			...featureSectionData.title,
			tagline: '',
			description: '',
			alignment: 'center',
			length: 'long'
		},
		v3: {
			...featureSectionData.title,
			description: '',
			alignment: 'left',
			length: 'medium'
		}
	}
	
	// Feature data with buttons for variant 3
	const featuresWithButtonsV3 = [
		{
			...featureSectionData.features[0],
			buttons: [
				{
					label: 'Outline Button',
					variant: 'outline'
				},
				{
					label: 'Learn more',
					variant: 'link'
				}
			]
		},
		...featureSectionData.features.slice(1)
	]
	
	return (
		<main className="flex flex-col gap-20">
			<section className="py-10 border-b">
				<h1 className="text-3xl font-bold mb-6 px-5">Feature Section - Variant 1</h1>
				<FeatureSection
					title={titleVariants.v1}
					features={featureSectionData.features}
					variant="v1"
				/>
			</section>
			
			<section className="py-10 border-b">
				<h1 className="text-3xl font-bold mb-6 px-5">Feature Section - Variant 2</h1>
				<FeatureSection
					title={titleVariants.v2}
					features={featureSectionData.features}
					variant="v2"
				/>
			</section>
			
			<section className="py-10 border-b">
				<h1 className="text-3xl font-bold mb-6 px-5">Feature Section - Variant 3</h1>
				<FeatureSection
					title={titleVariants.v3}
					features={featuresWithButtonsV3}
					variant="v3"
				/>
			</section>

		</main>
	)
}
