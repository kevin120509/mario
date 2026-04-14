import { PropertyDetails } from '@/lib/services/propertyService'
import { Property } from '@/components/ui/PropertyCard'
import { PropertyImageGallery } from './PropertyImageGallery'
import { PropertyInfo } from './PropertyInfo'
import { PropertyAgentInfo } from './PropertyAgentInfo'
import { PropertyAmenities } from './PropertyAmenities'
import { RelatedProperties } from './RelatedProperties'

import { MortgageCalculator } from './MortgageCalculator'

interface PropertyPageContentProps {
  property: PropertyDetails
  relatedProperties: Property[]
}

export function PropertyPageContent({ property, relatedProperties }: PropertyPageContentProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
        {/* Left Column: Images & Info */}
        <div className="lg:col-span-8 space-y-8">
          <PropertyImageGallery images={property.images} />
          
          <PropertyInfo 
            title={property.title}
            address={property.address}
            price={property.price}
            description={property.description}
            beds={property.beds}
            baths={property.baths}
            area={property.area}
            type={property.type}
          />

          <PropertyAmenities amenities={property.amenities} />

          {/* Mortgage Calculator */}
          <MortgageCalculator propertyPrice={property.price} />
        </div>

        {/* Right Column: Sidebar */}
        <PropertyAgentInfo 
          price={property.price}
          address={property.address}
          type={property.type}
          agent={property.agent}
        />
      </div>

      <RelatedProperties properties={relatedProperties} />
    </>
  )
}
