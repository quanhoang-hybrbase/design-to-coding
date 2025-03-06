import { CardProps as ShadcnCardProps } from '@/components/ui/card'
import { HTMLAttributes } from 'react'

/**
 * Card component types
 */
export interface CardProps extends ShadcnCardProps {
	/**
	 * Card variant
	 * @default 'v1'
	 */
	variant?: 'v1' | 'v2' | 'v3';
	
	/**
	 * Image source URL
	 */
	imageSrc?: string;
	
	/**
	 * Image alt text
	 */
	imageAlt?: string;
	
	/**
	 * Card heading
	 */
	heading?: string;
	
	/**
	 * Card description
	 */
	description?: string;
	
	/**
	 * Image aspect ratio
	 * @default '1:1'
	 */
	aspectRatio?: '1:1' | '3:4' | '16:9' | '4:3';
	
	/**
	 * Image object fit
	 * @default 'cover'
	 */
	objectFit?: 'cover' | 'contain';
	
	/**
	 * Enable hover effect
	 * @default false
	 */
	hoverEffect?: boolean;
	
	/**
	 * Optional content for the card body
	 */
	children?: React.ReactNode;
	
	/**
	 * Optional props for heading element
	 */
	headingProps?: HTMLAttributes<HTMLHeadingElement>;
	
	/**
	 * Optional props for description element
	 */
	descriptionProps?: HTMLAttributes<HTMLParagraphElement>;
}
