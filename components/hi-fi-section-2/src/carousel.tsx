'use client'

import { useRef } from 'react'
import { CarouselProps } from '../types'
import { Card } from '@/components/core/card'
import { cn } from '@/lib/utils'
import { useCarousel } from '../hooks/use-carousel'
import { PaginationControl } from './pagination-control'
import { PlayPauseButton } from './play-pause-button'
import { NavigationButtons } from './navigation-buttons'

/**
 * Carousel Component
 * 
 * A carousel that automatically slides from left to right
 * with navigation controls and autoplay functionality
 */
export function Carousel({ items, autoPlayDuration = 4000, className }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const {
    activeIndex,
    isPlaying,
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoplay,
    handleMouseEnter,
    handleMouseLeave
  } = useCarousel({
    totalItems: items.length,
    autoPlayDuration,
  })
  
  return (
    <div className={cn('relative', className)}>
      {/* Carousel Items */}
      <div 
        ref={containerRef}
        className="relative overflow-visible"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Items container with peek feature */}
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-7"
          style={{ transform: `translateX(-${activeIndex * (85)}%)` }}
          aria-live="polite"
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className="min-w-[85%] flex-shrink-0"
              aria-hidden={activeIndex !== index}
            >
              <Card
                variant="v1"
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                heading={item.heading}
                description={item.content}
                aspectRatio="16:9"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <NavigationButtons
          onPrevClick={prevSlide}
          onNextClick={nextSlide}
          containerRef={containerRef}
        />
      </div>
      
      {/* Controls Container */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center gap-2">
          <PaginationControl
            totalItems={items.length}
            activeIndex={activeIndex}
            onDotClick={goToSlide}
            autoPlayProgress={progress}
          />
          
          <PlayPauseButton
            isPlaying={isPlaying}
            onClick={toggleAutoplay}
          />
        </div>
      </div>
    </div>
  )
}
