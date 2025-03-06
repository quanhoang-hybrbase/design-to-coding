'use client'

import { SectionTitleProps } from '../types'
import { cn } from '@/lib/utils'

/**
 * SectionTitle Component
 * 
 * A reusable component for section headings with optional tagline and description
 */
function SectionTitle({
	tagline,
	heading,
	description,
	className,
	length = 'long',
	alignment = 'center',
}: SectionTitleProps) {
	// Determine text alignment based on the alignment prop
	const alignmentClasses = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
	
	return (
		<div className={cn('max-w-3xl flex flex-col gap-3 md:gap-4', alignmentClasses, className)}>
			{tagline && (
				<p className="text-sm font-medium uppercase tracking-wider text-text-sub-600">
					{tagline}
				</p>
			)}
			
			<h2 className={cn(
				'font-bold tracking-tight text-text-strong-950 text-4xl', 
				length === 'long' ? 'md:text-6xl leading-tight' : 'md:text-5xl leading-tight'
			)}>
				{heading}
			</h2>
			
			{description && (
				<p className="text-base md:text-lg leading-normal text-text-strong-950">
					{description}
				</p>
			)}
		</div>
	)
}

export { SectionTitle }
