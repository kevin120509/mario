'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyCard, Property } from '@/components/ui/PropertyCard'
import { favoritesService } from '@/lib/services/favoritesService'
import { propertyService } from '@/lib/services/propertyService'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function FavoritesPage() {
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadFavorites = async () => {
      const favoriteIds = favoritesService.getFavorites()
      const allProperties = await propertyService.getAllProperties()
      const filtered = allProperties.filter(p => favoriteIds.includes(p.id))
      setFavoriteProperties(filtered)
      setIsLoading(false)
    }

    loadFavorites()

    const handleUpdate = () => {
      loadFavorites()
    }

    window.addEventListener('favorites-updated', handleUpdate)
    return () => window.removeEventListener('favorites-updated', handleUpdate)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        <header className="mb-12">
          <h1 className="text-4xl font-light mb-2">Saved Homes</h1>
          <p className="text-nordic-muted">All the properties you've fallen in love with.</p>
        </header>

        {isLoading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-mosque border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-nordic-muted">Loading your favorites...</p>
          </div>
        ) : favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white dark:bg-white/5 rounded-2xl border border-dashed border-nordic-dark/10 dark:border-white/10">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-20 h-20 bg-mosque/10 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl text-mosque">favorite</span>
              </div>
              <h2 className="text-2xl font-medium">No saved homes yet</h2>
              <p className="text-nordic-muted">Explore our exclusive collections and save your favorite properties to see them here later.</p>
              <Link href="/">
                <Button variant="dark" size="lg" className="mt-4">
                  Explore Properties
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
