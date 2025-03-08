'use client'

import { FeatureItem, FeatureButton } from '@/components/core/feature-section/types'
import { FeatureSection } from '@/components/core/feature-section'
import { SectionTitleProps } from '@/components/core/section-title/types'

/**
 * Hi-fi Section 1 Component
 * 
 * A section that displays a list of features of Typeform using the FeatureSection component
 * with the v1 variant.
 * 
 * @component
 */
function HiFiSection1() {
  // Define the title configuration for the section
  const sectionTitle: SectionTitleProps = {
    tagline: 'FEATURE',
    heading: 'With a superior form of data collection',
    length: 'medium',
    alignment: 'center',
    className: '[&>p:first-child]:text-violet-600',
  }

  // Define the buttons for the feature section
  const buttons: FeatureButton[] = [
    {
      label: 'Compare plans',
      variant: 'default',
      buttonProps: {
        className: 'bg-violet-600 text-white font-semibold hover:bg-violet-700'
      }
    },
    {
      label: 'Browse all templates',
      variant: 'link',
      buttonProps: {
        className: 'font-semibold'
      }
    }
  ]

  // Define the features for the section
  const features: FeatureItem[] = [
    {
      heading: 'Designed to attract',
      description: 'Your forms will look anything but ordinary. Customize the entire design, embed it in all the right places, and strike a chord with engaging video content.',
      imageSrc: '/assets/hi-fi-1/feature-1.png',
      imageAlt: 'Video forms feature',
    },
    {
      heading: 'Gathers deeper insights',
      description: 'More data is just a follow-up question away. Encourage customers to elaborate by asking questions based on their previous answers.',
      imageSrc: '/assets/hi-fi-1/feature-2.png',
      imageAlt: 'Form with follow-up questions',
    },
    {
      heading: 'Prioritizes unique data',
      description: 'Some data is harder to come by. Collect readily-available data without having to ask so your customers can focus on sharing everything else.',
      imageSrc: '/assets/hi-fi-1/feature-3.png',
      imageAlt: 'Data collection form',
    },
  ]

  return (
    <FeatureSection
      title={sectionTitle}
      features={features}
      buttons={buttons}
      variant="v1"
    />
  )
}

export { HiFiSection1 }
