import { propertyService } from '@/lib/services/propertyService'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyPageContent } from '@/components/property/PropertyPageContent'
import { notFound } from 'next/navigation'

interface PropertyPageProps {
  params: Promise<{ id: string }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params
  const property = await propertyService.getPropertyById(id)

  if (!property) {
    notFound()
  }

  // Fetch some related properties (mocked for now)
  const allProperties = await propertyService.getAllProperties()
  const relatedProperties = allProperties.filter(p => p.id !== id).slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <PropertyPageContent 
          property={property} 
          relatedProperties={relatedProperties}
        />
      </main>

      <Footer />
    </div>
  )
}
