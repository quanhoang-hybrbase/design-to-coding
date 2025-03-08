'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

/**
 * FloatingButton Component
 * 
 * A fixed button that stays at the top right corner of the screen
 * Transforms to an icon button on mobile
 */
export function FloatingButton({ className }: { className?: string }) {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Check on initial load
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <div 
      className={cn(
        'fixed z-50',
        isMobile ? 'top-7 right-7' : 'top-10 right-10',
        className
      )}
    >
      {isMobile ? (
        <Button
          className="w-7 h-7 rounded-full p-0 bg-gradient-to-r from-violet-700 via-violet-600 to-violet-400"
          size="icon"
          aria-label="Menu"
        >
          <Menu className="h-4 w-4 text-gray-50" />
        </Button>
      ) : (
        <Button
          className="font-semibold text-gray-50 bg-gradient-to-r from-violet-700 via-violet-600 to-violet-400"
        >
          Compare Plans
        </Button>
      )}
    </div>
  )
}
