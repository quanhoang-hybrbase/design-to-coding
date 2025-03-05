import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '../src/login-form'

describe('LoginForm', () => {
  const mockSubmit = jest.fn()

  beforeEach(() => {
    mockSubmit.mockClear()
  })

  it('renders the login form correctly', () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    // Check if important elements are rendered
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/forgot password/i)).toBeInTheDocument()
  })

  it('displays validation errors for empty fields', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    // Submit the form without filling any fields
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Check if validation errors are displayed
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/password is required/i)).toBeInTheDocument()
    })

    // Ensure the onSubmit callback was not called
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('displays validation error for invalid email', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    // Fill in an invalid email
    await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Check if validation error is displayed
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
    })

    // Ensure the onSubmit callback was not called
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('displays validation error for short password', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    // Fill in a valid email but short password
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'short')
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Check if validation error is displayed
    await waitFor(() => {
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument()
    })

    // Ensure the onSubmit callback was not called
    expect(mockSubmit).not.toHaveBeenCalled()
  })

  it('submits the form with valid data', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    // Fill in valid data
    await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')
    
    // Check the remember me checkbox
    fireEvent.click(screen.getByLabelText(/remember me/i))
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Check if the onSubmit callback was called with the correct data
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true,
      })
    })
  })

  it('toggles password visibility when clicking the eye icon', async () => {
    render(<LoginForm onSubmit={mockSubmit} />)
    
    const passwordInput = screen.getByLabelText(/password/i)
    
    // Password should be hidden initially
    expect(passwordInput).toHaveAttribute('type', 'password')
    
    // Click the show password button
    const toggleButton = screen.getByRole('button', { name: /show password/i })
    fireEvent.click(toggleButton)
    
    // Password should now be visible
    expect(passwordInput).toHaveAttribute('type', 'text')
    
    // Click the hide password button
    const toggleButtonAgain = screen.getByRole('button', { name: /hide password/i })
    fireEvent.click(toggleButtonAgain)
    
    // Password should be hidden again
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('shows loading state when isLoading prop is true', () => {
    render(<LoginForm onSubmit={mockSubmit} isLoading={true} />)
    
    // Check if loading state is displayed
    expect(screen.getByText(/please wait/i)).toBeInTheDocument()
    
    // Check if button is disabled
    const submitButton = screen.getByRole('button', { name: /please wait/i })
    expect(submitButton).toBeDisabled()
  })
})
