import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Welcome to <span className="text-primary">BrandName</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive solution for project management, team collaboration, and productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/login">
              Sign In
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/register">
              Create Account
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}