import { RefObject } from 'react'

export interface CarouselItem {
  heading: string
  content: string
  imageSrc: string
  imageAlt: string
}

export interface CarouselProps {
  items: CarouselItem[]
  autoPlayDuration?: number
  className?: string
}

export interface UseCarouselProps {
  totalItems: number
  autoPlayDuration: number
  startIndex?: number
}

export interface UseCarouselReturn {
  activeIndex: number
  isPlaying: boolean
  progress: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
  toggleAutoplay: () => void
  handleMouseEnter: () => void
  handleMouseLeave: () => void
}

export interface PaginationControlProps {
  totalItems: number
  activeIndex: number
  onDotClick: (index: number) => void
  autoPlayProgress: number
  className?: string
}

export interface PlayPauseButtonProps {
  isPlaying: boolean
  onClick: () => void
  className?: string
}

export interface NavigationButtonsProps {
  onPrevClick: () => void
  onNextClick: () => void
  containerRef: RefObject<HTMLDivElement>
  className?: string
}

export interface HiFiSection2Props {
  className?: string
}
