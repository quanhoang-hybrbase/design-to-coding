'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm border border-solid font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground border-primary hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/90',
				outline: 'border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
				ghost: 'border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground',
				link: 'border-transparent bg-transparent text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-12 px-6 text-base',
				sm: 'h-10 px-4 text-sm',
				lg: 'h-14 px-8 text-lg',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	href?: string
}

/**
 * Button component that follows the design system
 * Can be rendered as a button or a link based on the href prop
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, href, ...props }, ref) => {
		// If href is provided, render as Link
		if (href) {
			return (
				<Link
					href={href}
					className={cn(buttonVariants({ variant, size, className }))}
				>
					{props.children}
				</Link>
			)
		}

		// Otherwise render as button
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
