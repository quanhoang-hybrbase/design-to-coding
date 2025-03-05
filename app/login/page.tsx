'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

import { LoginForm, LoginFormValues } from '@/components/core/login-form'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  // Mock login handler
  const handleLogin = async (values: LoginFormValues) => {
    setIsLoading(true)
    // Simulate API call
    console.log('Login attempt with:', values)
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log('Login successful')
      // Here you would typically:
      // 1. Call your authentication API
      // 2. Store tokens/user data
      // 3. Redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand section */}
      <div className="bg-primary md:w-1/2 p-8 flex flex-col justify-between text-white">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-sm" />
            </div>
            <h1 className="text-2xl font-bold">BrandName</h1>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-bold">Welcome Back</h2>
            <p className="text-primary-foreground/90">
              Login to your account to access your dashboard, manage your projects, and continue your journey with us.
            </p>
            <div className="hidden md:block">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                <p className="text-sm font-medium mb-2">"This platform has completely transformed how we manage our projects!"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden">
                    <Image 
                      src="/assets/avatar-placeholder.png" 
                      width={32} 
                      height={32} 
                      alt="User avatar"
                      className="object-cover"
                      onError={(e) => {
                        // Fallback if image can't be loaded
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Sarah Johnson</p>
                    <p className="text-xs opacity-70">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto text-sm text-primary-foreground/70">
          <p> {new Date().getFullYear()} BrandName. All rights reserved.</p>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="md:w-1/2 p-8 flex items-center justify-center bg-background">
        <div className="w-full max-w-md">
          <LoginForm 
            onSubmit={handleLogin} 
            isLoading={isLoading}
            className="shadow-none border border-border"
          />
          
          <div className="mt-6 text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-background text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <Button variant="outline" size="lg" className="w-full">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link 
                href="/register" 
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
