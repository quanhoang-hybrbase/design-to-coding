import { HTMLAttributes } from 'react'

/**
 * ButtonGroup component types
 */
export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Buttons to be rendered in the group
	 */
	children: React.ReactNode;
	
	/**
	 * Alignment of the buttons
	 * @default 'center'
	 */
	align?: 'left' | 'center' | 'right';
	
	/**
	 * Space between buttons
	 * @default 'default'
	 */
	spacing?: 'default' | 'compact' | 'loose';
	
	/**
	 * Direction of the buttons
	 * @default 'row'
	 */
	direction?: 'row' | 'column';
	
	/**
	 * Whether to stack buttons on mobile
	 * @default false
	 */
	stackOnMobile?: boolean;
}
