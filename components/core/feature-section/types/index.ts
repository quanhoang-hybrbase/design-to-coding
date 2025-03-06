import { ButtonProps } from '@/components/ui/button'
import { CardProps } from '@/components/core/card/types'
import { SectionTitleProps } from '@/components/core/section-title/types'

/**
 * Feature Section Button
 * 
 * Represents a button in the feature section
 */
export interface FeatureButton {
	/**
	 * Button label text
	 */
	label: string
	
	/**
	 * Button URL
	 */
	href?: string
	
	/**
	 * Button variant
	 * @default 'default'
	 */
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
	
	/**
	 * Additional button props
	 */
	buttonProps?: Omit<ButtonProps, 'variant'>
}

/**
 * Feature Item
 * 
 * Represents a single feature in the feature section
 */
export interface FeatureItem {
	/**
	 * Feature heading
	 */
	heading: string
	
	/**
	 * Feature description
	 */
	description: string
	
	/**
	 * Feature image source
	 */
	imageSrc?: string
	
	/**
	 * Feature image alt text
	 */
	imageAlt?: string
	
	/**
	 * Feature icon (for v3 variant)
	 */
	icon?: string
	
	/**
	 * Feature buttons
	 */
	buttons?: FeatureButton[]
}

/**
 * Feature Section Props
 * 
 * Props for the FeatureSection component
 */
export interface FeatureSectionProps {
	/**
	 * Section title props
	 */
	title: SectionTitleProps
	
	/**
	 * Array of feature items to display
	 */
	features: FeatureItem[]
	
	/**
	 * Section variant
	 * @default 'v1'
	 */
	variant?: 'v1' | 'v2' | 'v3'
	
	/**
	 * Additional class names
	 */
	className?: string
}

/**
 * Feature Gallery Props
 * 
 * Props for the FeatureGallery component
 */
export interface FeatureGalleryProps {
	/**
	 * Array of feature items to display
	 */
	features: FeatureItem[]
	
	/**
	 * Gallery variant (matches the parent FeatureSection variant)
	 * @default 'v1'
	 */
	variant?: 'v1' | 'v2' | 'v3'
	
	/**
	 * Additional class names
	 */
	className?: string
	
	/**
	 * Props to pass to each Card component
	 */
	cardProps?: Partial<CardProps>
}
