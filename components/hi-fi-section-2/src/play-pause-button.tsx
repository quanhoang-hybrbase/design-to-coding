'use client'

import { PlayPauseButtonProps } from '../types'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/**
 * PlayPauseButton Component
 * 
 * Toggles the autoplay state of the carousel
 */
export function PlayPauseButton({ isPlaying, onClick, className }: PlayPauseButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        'h-10 w-10 rounded-full flex items-center justify-center',
        'bg-violet-100',
        className
      )}
      aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
      style={{ backgroundColor: '#EDE9FE' }}
    >
      {isPlaying ? (
        <Pause className="size-5 text-violet-700" />
      ) : (
        <Play className="size-5 text-violet-700" />
      )}
    </Button>
  )
}
