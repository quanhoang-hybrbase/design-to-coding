/**
 * SectionTitle component types
 */
export interface SectionTitleProps {
	/**
	 * Optional tagline displayed above the heading
	 */
	tagline?: string;
	
	/**
	 * Main heading text
	 */
	heading: string;
	
	/**
	 * Optional description displayed below the heading
	 */
	description?: string;
	
	/**
	 * Optional className for custom styling
	 */
	className?: string;

	/**
	 * Length of the section title
	 * - Medium: font-size 40px, line-height 120%, letter-spacing 0%
	 * - Long: font-size 48px, line-height 120%, letter-spacing 0%
	 * @default "Long"
	 */
	length?: 'medium' | 'long';

	/**
	 * Alignment of the section title content
	 * - Center: all children centered
	 * - Left: all children left aligned
	 * @default "Center"
	 */
	alignment?: 'center' | 'left';
}
