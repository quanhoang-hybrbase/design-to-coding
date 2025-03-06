import { ButtonProps } from '@/components/ui/button'
import { CardProps } from '@/components/core/card'
import { SectionTitleProps } from '@/components/core/section-title'

/**
 * Feature item data structure
 */
export interface FeatureItem {
	/**
	 * Image source URL
	 */
	imageSrc?: string;
	
	/**
	 * Image alt text
	 */
	imageAlt?: string;
	
	/**
	 * Feature heading
	 */
	heading: string;
	
	/**
	 * Feature description
	 */
	description: string;
	
	/**
	 * Optional link URL for the feature
	 */
	link?: string;
}

/**
 * Button item data structure
 */
export interface ButtonItem extends Omit<ButtonProps, 'children'> {
	/**
	 * Button label
	 */
	label: string;
	
	/**
	 * Optional link URL for the button
	 */
	href?: string;
	
	/**
	 * Optional variant for the button
	 */
	variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

/**
 * FeatureSection component types
 */
export interface FeatureSectionProps {
	/**
	 * Section title props
	 */
	title: SectionTitleProps;
	
	/**
	 * Array of feature items
	 */
	features: FeatureItem[];
	
	/**
	 * Optional array of button items
	 */
	buttons?: ButtonItem[];
	
	/**
	 * Variant of the feature section
	 * @default 'v1'
	 */
	variant?: 'v1' | 'v2' | 'v3';
	
	/**
	 * Optional className for custom styling
	 */
	className?: string;
	
	/**
	 * Optional background color class
	 */
	backgroundColor?: string;
}

/**
 * FeatureGallery component types
 */
export interface FeatureGalleryProps {
	/**
	 * Array of feature items
	 */
	features: FeatureItem[];
	
	/**
	 * Optional card props to apply to all cards
	 */
	cardProps?: Partial<CardProps>;
	
	/**
	 * Optional className for custom styling
	 */
	className?: string;
}
