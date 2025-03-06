import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from '../src/card'

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // Create a proper mock that doesn't actually render an img tag
    return <div data-testid="mocked-image" {...props} />
  }
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronRight: () => <span data-testid="chevron-right-icon">→</span>
}))

// Mock ButtonGroup component
jest.mock('@/components/core/button-group', () => ({
  ButtonGroup: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="button-group">{children}</div>
  )
}))

// Mock the Button component
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...props }: { children: React.ReactNode }) => (
    <button data-testid="button" {...props}>{children}</button>
  )
}))

// Mock the ShadcnCard component
jest.mock('@/components/ui/card', () => ({
  Card: ({ children, ...props }: { children: React.ReactNode }) => (
    <div data-testid="shadcn-card" {...props}>{children}</div>
  ),
  CardContent: ({ children, ...props }: { children: React.ReactNode }) => (
    <div data-testid="card-content" {...props}>{children}</div>
  ),
  CardHeader: ({ children, ...props }: { children: React.ReactNode }) => (
    <div data-testid="card-header" {...props}>{children}</div>
  )
}))

describe('Card Component', () => {
  // Verify test case 2.01: Card renders with default props (variant v1)
  it('should render with default props (variant v1)', () => {
    render(<Card />)
    
    // Check for default heading
    expect(screen.getByText('Medium length section heading goes here')).toBeInTheDocument()
    
    // Check for default description
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    
    // Check for image
    const image = screen.getByTestId('mocked-image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/assets/placholder-image.png')
  })

  // Verify test case 2.02: Card renders with custom content
  it('should render with custom content', () => {
    const customHeading = 'Custom Heading'
    const customDescription = 'Custom Description'
    const customImageSrc = '/custom-image.jpg'
    
    render(
      <Card 
        heading={customHeading}
        description={customDescription}
        imageSrc={customImageSrc}
      />
    )
    
    // Check for custom heading
    expect(screen.getByText(customHeading)).toBeInTheDocument()
    
    // Check for custom description
    expect(screen.getByText(customDescription)).toBeInTheDocument()
    
    // Check for custom image
    const image = screen.getByTestId('mocked-image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', customImageSrc)
  })

  // Verify test case 2.03: Card renders variant v1 correctly
  it('should render variant v1 correctly with proper styling', () => {
    render(<Card variant="v1" />)
    
    // Check for shadcn card
    const cardElement = screen.getByTestId('shadcn-card')
    expect(cardElement).toBeInTheDocument()
    
    // Check for heading and description
    expect(screen.getByText('Medium length section heading goes here')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  // Verify test case 2.04: Card renders variant v2 correctly
  it('should render variant v2 correctly with proper styling and button', () => {
    render(<Card variant="v2" />)
    
    // Check for link button
    const button = screen.getByTestId('button')
    expect(button).toBeInTheDocument()
    
    // Check for chevron icon
    const chevronIcon = screen.getByTestId('chevron-right-icon')
    expect(chevronIcon).toBeInTheDocument()
  })

  // Verify test case 2.05: Card renders variant v3 correctly
  it('should render variant v3 correctly with icon and button group', () => {
    render(<Card variant="v3" />)
    
    // Check for icon instead of image
    const image = screen.getByTestId('mocked-image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/assets/icon-placeholder.svg')
    
    // Check for button group
    const buttonGroup = screen.getByTestId('button-group')
    expect(buttonGroup).toBeInTheDocument()
    
    // Check for buttons
    const buttons = screen.getAllByTestId('button')
    expect(buttons.length).toBeGreaterThan(0)
    
    // Check for chevron icon in the link button
    const chevronIcon = screen.getByTestId('chevron-right-icon')
    expect(chevronIcon).toBeInTheDocument()
  })

  // Verify test case 2.06: Card handles missing heading gracefully
  it('should handle missing heading gracefully', () => {
    render(<Card heading="" />)
    
    // Check that no heading is rendered
    const heading = screen.queryByText('Medium length section heading goes here')
    expect(heading).not.toBeInTheDocument()
  })

  // Verify test case 2.07: Card handles missing description gracefully
  it('should handle missing description gracefully', () => {
    render(<Card description="" />)
    
    // Check that no description is rendered
    const description = screen.queryByText(/Lorem ipsum dolor sit amet/)
    expect(description).not.toBeInTheDocument()
  })

  // Verify test case 2.08: Card applies headingProps and descriptionProps correctly
  it('should apply headingProps and descriptionProps correctly', () => {
    render(
      <Card 
        headingProps={{ 'data-testid': 'custom-heading', className: 'custom-heading-class' }}
        descriptionProps={{ 'data-testid': 'custom-description', className: 'custom-description-class' }}
      />
    )
    
    // Check for custom heading props
    const heading = screen.getByTestId('custom-heading')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('custom-heading-class')
    
    // Check for custom description props
    const description = screen.getByTestId('custom-description')
    expect(description).toBeInTheDocument()
    expect(description).toHaveClass('custom-description-class')
  })

  // Verify test case 2.09: Card renders children when provided for v1
  it('should render children when provided for v1', () => {
    render(
      <Card>
        <div data-testid="custom-child">Custom Child Content</div>
      </Card>
    )
    
    // Check for custom child content
    const childContent = screen.getByTestId('custom-child')
    expect(childContent).toBeInTheDocument()
  })
})
