'use client'

import { ButtonGroupProps } from '../types'
import { cn } from '@/lib/utils'

/**
 * ButtonGroup Component
 * 
 * A reusable component for grouping buttons with consistent spacing and alignment
 */
function ButtonGroup({
	children,
	align = 'center',
	spacing = 'default',
	direction = 'row',
	stackOnMobile = false,
	className,
	...props
}: ButtonGroupProps) {
	// Map alignment to the corresponding Tailwind class
	const alignmentClass = {
		'left': 'justify-start',
		'center': 'justify-center',
		'right': 'justify-end',
	}[align]
	
	// Map spacing to the corresponding Tailwind class
	const spacingClass = {
		'compact': 'gap-2',
		'default': 'gap-4',
		'loose': 'gap-6',
	}[spacing]
	
	// Map direction to the corresponding Tailwind class
	const directionClass = {
		'row': 'flex-row',
		'column': 'flex-col',
	}[direction]
	
	return (
		<div
			className={cn(
				'flex',
				directionClass,
				alignmentClass,
				spacingClass,
				stackOnMobile && 'flex-col md:flex-row',
				className
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export { ButtonGroup }
