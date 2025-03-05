import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../src/button'

describe('Button Component', () => {
	it('renders a button correctly', () => {
		render(<Button>Click me</Button>)
		const button = screen.getByRole('button', { name: /Click me/i })
		expect(button).toBeInTheDocument()
	})

	it('renders a link when href is provided', () => {
		render(<Button href="/test">Link Button</Button>)
		const link = screen.getByRole('link', { name: /Link Button/i })
		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', '/test')
	})

	it('applies custom className', () => {
		render(<Button className="test-class">Custom Class</Button>)
		const button = screen.getByRole('button', { name: /Custom Class/i })
		expect(button).toHaveClass('test-class')
	})

	it('renders different variants correctly', () => {
		render(<Button variant="secondary">Secondary Button</Button>)
		const button = screen.getByRole('button', { name: /Secondary Button/i })
		expect(button).toHaveClass('bg-secondary')
	})

	it('renders different sizes correctly', () => {
		render(<Button size="sm">Small Button</Button>)
		const button = screen.getByRole('button', { name: /Small Button/i })
		expect(button).toHaveClass('h-10')
	})
})
