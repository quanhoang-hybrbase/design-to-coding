'use client'

import { PaginationControlProps } from '../types'
import { cn } from '@/lib/utils'
import { Progress } from '@/components/ui/progress'

/**
 * PaginationControl Component
 * 
 * Displays pagination dots for the carousel with progress indicator for the active item
 */
export function PaginationControl({
  totalItems,
  activeIndex,
  onDotClick,
  autoPlayProgress,
  className
}: PaginationControlProps) {
  return (
    <div 
      className={cn(
        'flex items-center justify-center py-4 px-5 bg-violet-100 rounded-full',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            className={cn(
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
              'transition-opacity'
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? 'true' : 'false'}
          >
            {activeIndex === index ? (
              <div style={{ width: '64px', height: '12px' }} className="rounded-full overflow-hidden">
                <Progress 
                  value={autoPlayProgress} 
                  className="rounded-full h-3 w-16 bg-gradient-to-r from-violet-700 to-violet-300"
                />
              </div>
            ) : (
              <div style={{ width: '12px', height: '12px', backgroundColor: '#C4B5FD' }} className="rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
