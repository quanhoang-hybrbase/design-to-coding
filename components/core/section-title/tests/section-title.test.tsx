import React from 'react'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from '../src/section-title'

describe('SectionTitle Component', () => {
  // Verify test case 1.01 in PRD.md: Component renders with required props
  test('renders with required heading prop', () => {
    render(<SectionTitle heading="Test Heading" />)
    
    // Verify heading is rendered
    const headingElement = screen.getByRole('heading', { level: 2, name: /Test Heading/i })
    expect(headingElement).toBeInTheDocument()
    
    // Verify default classes are applied
    expect(headingElement).toHaveClass('text-text-strong-950')
    expect(headingElement).toHaveClass('text-4xl')
    expect(headingElement).toHaveClass('md:text-6xl')
  })
  
  // Verify test case 1.02 in PRD.md: Component renders all optional props
  test('renders with all optional props', () => {
    render(
      <SectionTitle 
        tagline="Test Tagline" 
        heading="Test Heading" 
        description="Test Description"
      />
    )
    
    // Verify tagline is rendered with correct styling
    const taglineElement = screen.getByText('Test Tagline')
    expect(taglineElement).toBeInTheDocument()
    expect(taglineElement).toHaveClass('text-text-sub-600')
    expect(taglineElement).toHaveClass('uppercase')
    
    // Verify heading is rendered
    const headingElement = screen.getByRole('heading', { level: 2, name: /Test Heading/i })
    expect(headingElement).toBeInTheDocument()
    
    // Verify description is rendered with correct styling
    const descriptionElement = screen.getByText('Test Description')
    expect(descriptionElement).toBeInTheDocument()
    expect(descriptionElement).toHaveClass('text-text-strong-950')
    expect(descriptionElement).toHaveClass('text-base')
    expect(descriptionElement).toHaveClass('md:text-lg')
  })
  
  // Verify test case 1.03 in PRD.md: Component respects length prop
  test('applies correct heading size based on length prop', () => {
    // Test with 'long' length (default)
    const { rerender } = render(<SectionTitle heading="Long Heading" />)
    let headingElement = screen.getByRole('heading', { level: 2 })
    expect(headingElement).toHaveClass('md:text-6xl')
    
    // Test with 'medium' length
    rerender(<SectionTitle heading="Medium Heading" length="medium" />)
    headingElement = screen.getByRole('heading', { level: 2 })
    expect(headingElement).toHaveClass('md:text-5xl')
  })
  
  // Verify test case 1.04 in PRD.md: Component respects alignment prop
  test('applies correct alignment based on alignment prop', () => {
    // Test with 'center' alignment (default)
    const { rerender, container } = render(<SectionTitle heading="Centered Heading" />)
    let wrapperElement = container.firstChild as HTMLElement
    expect(wrapperElement).toHaveClass('text-center')
    expect(wrapperElement).toHaveClass('mx-auto')
    
    // Test with 'left' alignment
    rerender(<SectionTitle heading="Left Aligned Heading" alignment="left" />)
    wrapperElement = container.firstChild as HTMLElement
    expect(wrapperElement).toHaveClass('text-left')
    expect(wrapperElement).not.toHaveClass('mx-auto')
  })
  
  // Verify test case 1.05 in PRD.md: Component applies custom className
  test('applies custom className when provided', () => {
    const { container } = render(
      <SectionTitle heading="Custom Class Heading" className="custom-test-class" />
    )
    
    const wrapperElement = container.firstChild as HTMLElement
    expect(wrapperElement).toHaveClass('custom-test-class')
  })
  
  // Verify test case 1.06 in PRD.md: Component has correct responsive behavior
  test('has correct responsive gap classes', () => {
    const { container } = render(<SectionTitle heading="Responsive Test" />)
    
    const wrapperElement = container.firstChild as HTMLElement
    expect(wrapperElement).toHaveClass('gap-3')
    expect(wrapperElement).toHaveClass('md:gap-4')
  })
  
  // Verify test case 1.07 in PRD.md: Component handles extreme cases
  test('handles extremely long text content gracefully', () => {
    const longText = 'A'.repeat(200)
    const longTagline = 'Tagline-' + longText
    const longHeading = 'Heading-' + longText
    const longDescription = 'Description-' + longText
    
    const { container } = render(
      <SectionTitle 
        tagline={longTagline} 
        heading={longHeading} 
        description={longDescription}
      />
    )
    
    // Use more specific queries to avoid duplicate text issues
    const taglineElement = container.querySelector('p:first-child')
    expect(taglineElement).toHaveTextContent(longTagline)
    
    const headingElement = container.querySelector('h2')
    expect(headingElement).toHaveTextContent(longHeading)
    
    const descriptionElement = container.querySelector('p:last-child')
    expect(descriptionElement).toHaveTextContent(longDescription)
    
    // Verify all elements are rendered
    expect(taglineElement).toBeInTheDocument()
    expect(headingElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })
})
