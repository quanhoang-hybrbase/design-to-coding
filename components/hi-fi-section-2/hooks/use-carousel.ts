'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { UseCarouselProps, UseCarouselReturn } from '../types'

/**
 * useCarousel Hook
 * 
 * Custom hook to manage carousel state and behavior
 */
export function useCarousel({
  totalItems,
  autoPlayDuration,
  startIndex = 0
}: UseCarouselProps): UseCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(startIndex)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  
  // Track start time of each slide for progress calculation
  const slideStartTimeRef = useRef<number>(Date.now())
  
  // Go to next slide
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems)
    setProgress(0)
    slideStartTimeRef.current = Date.now()
  }, [totalItems])
  
  // Go to previous slide
  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
    setProgress(0)
    slideStartTimeRef.current = Date.now()
  }, [totalItems])
  
  // Go to a specific slide
  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
    slideStartTimeRef.current = Date.now()
  }, [])
  
  // Toggle autoplay state
  const toggleAutoplay = useCallback(() => {
    setIsPlaying((prev) => !prev)
    slideStartTimeRef.current = Date.now()
    setProgress(0)
  }, [])
  
  // Handle mouse enter - pause autoplay
  const handleMouseEnter = useCallback(() => {
    setIsPlaying(false)
  }, [])
  
  // Handle mouse leave - resume autoplay
  const handleMouseLeave = useCallback(() => {
    setIsPlaying(true)
    slideStartTimeRef.current = Date.now()
    setProgress(0)
  }, [])
  
  // Update progress based on elapsed time
  useEffect(() => {
    if (!isPlaying) return
    
    // Calculate progress based on elapsed time
    const updateProgress = () => {
      const elapsedTime = Date.now() - slideStartTimeRef.current
      const newProgress = Math.min((elapsedTime / autoPlayDuration) * 100, 100)
      setProgress(newProgress)
      
      // If progress is complete, go to next slide
      if (newProgress >= 100) {
        nextSlide()
      }
    }
    
    // Update progress every 50ms for smooth animation
    const progressInterval = setInterval(updateProgress, 50)
    
    return () => {
      clearInterval(progressInterval)
    }
  }, [isPlaying, autoPlayDuration, nextSlide])
  
  return {
    activeIndex,
    isPlaying,
    progress,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoplay,
    handleMouseEnter,
    handleMouseLeave
  }
}
