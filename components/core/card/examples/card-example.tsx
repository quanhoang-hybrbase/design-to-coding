'use client'

import { Card } from '../src/card'

export function CardExample() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Card Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Variant 1 - Default */}
        <Card 
          variant="v1"
          heading="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
        
        {/* Variant 2 - With link button */}
        <Card 
          variant="v2"
          heading="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
        
        {/* Variant 3 - With icon and button group */}
        <Card 
          variant="v3"
          heading="Medium length section heading goes here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
        />
      </div>
    </div>
  )
}
