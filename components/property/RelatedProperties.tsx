import { Property } from '@/components/ui/PropertyCard'
import { PropertyCard } from '@/components/ui/PropertyCard'

interface RelatedPropertiesProps {
  properties: Property[]
}

export function RelatedProperties({ properties }: RelatedPropertiesProps) {
  if (properties.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-nordic-dark/10 dark:border-white/10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-light text-nordic-dark dark:text-white">Related Properties</h2>
          <p className="text-nordic-muted mt-1 text-sm">Similar listings you might be interested in.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
