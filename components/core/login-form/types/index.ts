import { z } from 'zod'

/**
 * Login form schema definition for validation
 */
export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters' }),
  rememberMe: z.boolean().default(false),
})

/**
 * Login form values interface
 */
export type LoginFormValues = z.infer<typeof loginFormSchema>

/**
 * Props for the LoginForm component
 */
export interface LoginFormProps {
  /**
   * Function to handle form submission with validated data
   */
  onSubmit: (values: LoginFormValues) => void
  /**
   * Optional loading state
   */
  isLoading?: boolean
  /**
   * Optional className for additional styling
   */
  className?: string
}
