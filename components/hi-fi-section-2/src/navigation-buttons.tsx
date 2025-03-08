'use client'

import { useState, useEffect, useRef } from 'react'
import { NavigationButtonProps } from '../types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/**
 * NavigationButton Component
 * 
 * Renders the previous/next buttons for the carousel navigation
 */
export function NavigationButton({ direction, onClick, className }: NavigationButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        'rounded-full h-11 w-11 flex items-center justify-center',
        'bg-gradient-to-r from-violet-700 to-violet-400',
        'text-white shadow-md',
        className
      )}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="size-6" />
      ) : (
        <ChevronRight className="size-6" />
      )}
    </Button>
  )
}

/**
 * NavigationButtons Component
 * 
 * Forward/Backward buttons for manual carousel navigation
 */
export function NavigationButtons({
  onPrevClick,
  onNextClick,
  containerRef,
  className
}: {
  onPrevClick: () => void
  onNextClick: () => void
  containerRef: React.RefObject<HTMLDivElement>
  className?: string
}) {
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      
      // Show buttons when mouse is within 100px of the left or right edge
      setShowButtons(x <= 100 || x >= rect.width - 100)
    }

    const handleMouseLeave = () => {
      setShowButtons(false)
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [containerRef])

  return (
    <>
      <Button
        onClick={onPrevClick}
        variant="ghost"
        size="icon"
        className={cn(
          'absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full transition-opacity duration-300 z-10',
          'bg-gradient-to-r from-violet-700 to-violet-400',
          showButtons ? 'opacity-100' : 'opacity-0',
          className
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-50" />
      </Button>
      
      <Button
        onClick={onNextClick}
        variant="ghost"
        size="icon"
        className={cn(
          'absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full transition-opacity duration-300 z-10',
          'bg-gradient-to-r from-violet-700 to-violet-400',
          showButtons ? 'opacity-100' : 'opacity-0',
          className
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-50" />
      </Button>
    </>
  )
}
