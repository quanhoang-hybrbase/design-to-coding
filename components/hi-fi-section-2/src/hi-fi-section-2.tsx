'use client'

import { SectionTitle } from '@/components/core/section-title'
import { Carousel } from './carousel'
import { FloatingButton } from './floating-button'
import { HiFiSection2Props } from '../types'
import { cn } from '@/lib/utils'

// Carousel items data
const carouselItems = [
  {
    heading: 'Designed to attract',
    content: 'Your forms will look anything but ordinary. Customize the entire design, embed it in all the right places, and strike a chord with engaging video content.',
    imageSrc: '/assets/hi-fi-1/feature-1.png',
    imageAlt: 'Feature 1 image'
  },
  {
    heading: 'Gathers deeper insights',
    content: 'More data is just a follow-up question away. Encourage customers to elaborate by asking questions based on their previous answers.',
    imageSrc: '/assets/hi-fi-1/feature-2.png',
    imageAlt: 'Feature 2 image'
  },
  {
    heading: 'Prioritizes unique data',
    content: 'Some data is harder to come by. Collect readily-available data without having to ask so your customers can focus on sharing everything else.',
    imageSrc: '/assets/hi-fi-1/feature-3.png',
    imageAlt: 'Feature 3 image'
  }
]

/**
 * HiFiSection2 Component
 * 
 * A complex UI section to display a list of Typeform features with carousel
 */
export function HiFiSection2({ className }: HiFiSection2Props) {
  return (
    <section className={cn('relative py-16 md:py-28 px-5 md:px-16', className)}>
      {/* Floating button */}
      <FloatingButton />
      
      {/* Desktop: Left-aligned title, Mobile: Center-aligned title */}
      <div className="container mx-auto">
        <div className="md:text-left text-center">
          <SectionTitle
            tagline="FEATURE"
            heading="With a superior form of data collection"
            length="medium"
            alignment="left"
            className="mb-16 [&>p:first-child]:bg-gradient-to-r [&>p:first-child]:from-violet-700 [&>p:first-child]:to-violet-400 [&>p:first-child]:text-transparent [&>p:first-child]:bg-clip-text"
          />
        </div>
        
        {/* Carousel */}
        <Carousel 
          items={carouselItems}
          autoPlayDuration={4000}
          className="md:max-w-none"
        />
      </div>
    </section>
  )
}
