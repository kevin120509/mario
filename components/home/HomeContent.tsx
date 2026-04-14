'use client'

import { useState, useMemo } from 'react'
import { SearchBar } from '@/components/ui/SearchBar'
import { Button } from '@/components/ui/Button'
import { PropertyCard, Property } from '@/components/ui/PropertyCard'
import { FilterModal, FilterState } from '@/components/ui/FilterModal'

interface HomeContentProps {
  initialFeaturedProperties: Property[]
  initialNewProperties: Property[]
}

export function HomeContent({ 
  initialFeaturedProperties, 
  initialNewProperties 
}: HomeContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeType, setActiveType] = useState<'All' | 'Buy' | 'Rent'>('All')
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    minPrice: 0,
    maxPrice: 10000000,
    beds: 0,
    baths: 0,
    amenities: []
  })

  const categories = ['All', 'House', 'Apartment', 'Villa', 'Penthouse']

  const filteredNewProperties = useMemo(() => {
    return initialNewProperties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           property.address.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesType = activeType === 'All' || 
                         (activeType === 'Buy' && property.type === 'FOR SALE') ||
                         (activeType === 'Rent' && property.type === 'FOR RENT')

      const matchesCategory = filters.category === 'All' || property.title.toLowerCase().includes(filters.category.toLowerCase())
      
      const matchesPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice
      
      const matchesBeds = property.beds >= filters.beds
      const matchesBaths = property.baths >= filters.baths

      return matchesSearch && matchesType && matchesCategory && matchesPrice && matchesBeds && matchesBaths
    })
  }, [initialNewProperties, searchQuery, activeType, filters])

  const handleApplyFilters = (newFilters: FilterState) => {
    setFilters(newFilters)
    setIsFilterModalOpen(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-nordic-dark dark:text-white leading-tight">
            Find your <span className="relative inline-block">
              <span className="relative z-10 font-medium">sanctuary</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-mosque/20 -rotate-1 z-0"></span>
            </span>.
          </h1>
          
          <SearchBar onSearch={setSearchQuery} />

          <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
            {categories.map(category => (
              <Button 
                key={category}
                variant={filters.category === category ? 'dark' : 'outline'} 
                size="sm" 
                className={`whitespace-nowrap ${filters.category !== category ? 'bg-white dark:bg-white/5' : ''}`}
                onClick={() => setFilters(prev => ({ ...prev, category }))}
              >
                {category}
              </Button>
            ))}
            <div className="w-px h-6 bg-nordic-dark/10 mx-2"></div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => setIsFilterModalOpen(true)}
            >
              <span className="material-symbols-outlined text-base">tune</span> Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-light text-nordic-dark dark:text-white">Featured Collections</h2>
            <p className="text-nordic-muted mt-1 text-sm">Curated properties for the discerning eye.</p>
          </div>
          <a className="hidden sm:flex items-center gap-1 text-sm font-medium text-mosque hover:opacity-70 transition-opacity" href="#">
            View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {initialFeaturedProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* New in Market */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-light text-nordic-dark dark:text-white">New in Market</h2>
            <p className="text-nordic-muted mt-1 text-sm">Fresh opportunities added this week.</p>
          </div>
          <div className="hidden md:flex bg-white dark:bg-white/5 p-1 rounded-lg">
            <Button 
              variant={activeType === 'All' ? 'dark' : 'ghost'} 
              size="sm"
              onClick={() => setActiveType('All')}
            >
              All
            </Button>
            <Button 
              variant={activeType === 'Buy' ? 'dark' : 'ghost'} 
              size="sm"
              onClick={() => setActiveType('Buy')}
            >
              Buy
            </Button>
            <Button 
              variant={activeType === 'Rent' ? 'dark' : 'ghost'} 
              size="sm"
              onClick={() => setActiveType('Rent')}
            >
              Rent
            </Button>
          </div>
        </div>

        {filteredNewProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNewProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-nordic-muted">No properties found matching your search.</p>
            <Button variant="ghost" className="mt-4" onClick={() => {setSearchQuery(''); setActiveType('All'); setFilters({category: 'All', minPrice: 0, maxPrice: 10000000, beds: 0, baths: 0, amenities: []});}}>
              Clear filters
            </Button>
          </div>
        )}

        {filteredNewProperties.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="bg-white dark:bg-white/5">
              Load more properties
            </Button>
          </div>
        )}
      </section>

      <FilterModal 
        isOpen={isFilterModalOpen} 
        onClose={() => setIsFilterModalOpen(false)}
        initialFilters={filters}
        onApply={handleApplyFilters}
      />
    </>
  )
}
