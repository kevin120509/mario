'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'

export interface FilterState {
  category: string
  minPrice: number
  maxPrice: number
  beds: number
  baths: number
  amenities: string[]
}

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  initialFilters: FilterState
  onApply: (filters: FilterState) => void
}

export function FilterModal({ isOpen, onClose, initialFilters, onApply }: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(initialFilters)

  useEffect(() => {
    if (isOpen) {
      setLocalFilters(initialFilters)
    }
  }, [isOpen, initialFilters])

  if (!isOpen) return null

  const handleReset = () => {
    setLocalFilters({
      category: 'All',
      minPrice: 0,
      maxPrice: 10000000,
      beds: 0,
      baths: 0,
      amenities: []
    })
  }

  const amenitiesOptions = ['Swimming Pool', 'Gym', 'Parking', 'Smart Home', 'Wine Cellar']

  const toggleAmenity = (amenity: string) => {
    setLocalFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <main className="relative z-20 w-full max-w-2xl bg-white dark:bg-neutral-dark-surface rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-center bg-white dark:bg-neutral-dark-surface sticky top-0 z-30">
          <h1 className="text-2xl font-semibold tracking-tight text-nordic-dark dark:text-white">Filters</h1>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-nordic-muted"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-8 space-y-10">
          {/* Section: Category */}
          <section>
            <label className="block text-xs font-semibold text-nordic-muted uppercase tracking-wider mb-3">Property Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {['All', 'House', 'Apartment', 'Villa', 'Penthouse'].map(cat => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    localFilters.category === cat
                      ? 'bg-mosque border-mosque text-white'
                      : 'border-nordic-dark/10 dark:border-white/10 text-nordic-dark dark:text-white/70 hover:border-mosque'
                  }`}
                  onClick={() => setLocalFilters(prev => ({ ...prev, category: cat }))}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Section: Price Range */}
          <section>
            <div className="flex justify-between items-end mb-4">
              <label className="block text-xs font-semibold text-nordic-muted uppercase tracking-wider">Price Range</label>
              <span className="text-sm font-medium text-mosque">
                ${(localFilters.minPrice / 1000000).toFixed(1)}M – ${(localFilters.maxPrice / 1000000).toFixed(1)}M
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background-light dark:bg-white/5 p-3 rounded-lg border border-transparent focus-within:border-mosque/30 transition-colors">
                <label className="block text-[10px] text-nordic-muted uppercase font-medium mb-1">Min Price</label>
                <div className="flex items-center">
                  <span className="text-nordic-muted mr-1">$</span>
                  <input 
                    className="w-full bg-transparent border-0 p-0 text-nordic-dark dark:text-white font-medium focus:ring-0 text-sm" 
                    type="number" 
                    value={localFilters.minPrice}
                    onChange={(e) => setLocalFilters(prev => ({ ...prev, minPrice: Number(e.target.value) }))}
                  />
                </div>
              </div>
              <div className="bg-background-light dark:bg-white/5 p-3 rounded-lg border border-transparent focus-within:border-mosque/30 transition-colors">
                <label className="block text-[10px] text-nordic-muted uppercase font-medium mb-1">Max Price</label>
                <div className="flex items-center">
                  <span className="text-nordic-muted mr-1">$</span>
                  <input 
                    className="w-full bg-transparent border-0 p-0 text-nordic-dark dark:text-white font-medium focus:ring-0 text-sm" 
                    type="number" 
                    value={localFilters.maxPrice}
                    onChange={(e) => setLocalFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section: Rooms */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-nordic-muted uppercase tracking-wider">Bedrooms</label>
              <div className="flex items-center space-x-3 bg-background-light dark:bg-white/5 rounded-full p-1 w-fit">
                <button 
                  className="w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-nordic-muted hover:text-mosque transition-colors"
                  onClick={() => setLocalFilters(prev => ({ ...prev, beds: Math.max(0, prev.beds - 1) }))}
                >
                  <span className="material-symbols-outlined text-base">remove</span>
                </button>
                <span className="text-sm font-semibold w-8 text-center text-nordic-dark dark:text-white">{localFilters.beds}+</span>
                <button 
                  className="w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white transition-colors"
                  onClick={() => setLocalFilters(prev => ({ ...prev, beds: prev.beds + 1 }))}
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-nordic-muted uppercase tracking-wider">Bathrooms</label>
              <div className="flex items-center space-x-3 bg-background-light dark:bg-white/5 rounded-full p-1 w-fit">
                <button 
                  className="w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-nordic-muted hover:text-mosque transition-colors"
                  onClick={() => setLocalFilters(prev => ({ ...prev, baths: Math.max(0, prev.baths - 1) }))}
                >
                  <span className="material-symbols-outlined text-base">remove</span>
                </button>
                <span className="text-sm font-semibold w-8 text-center text-nordic-dark dark:text-white">{localFilters.baths}+</span>
                <button 
                  className="w-8 h-8 rounded-full bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white transition-colors"
                  onClick={() => setLocalFilters(prev => ({ ...prev, baths: prev.baths + 1 }))}
                >
                  <span className="material-symbols-outlined text-base">add</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section: Amenities */}
          <section>
            <label className="block text-xs font-semibold text-nordic-muted uppercase tracking-wider mb-4">Amenities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenitiesOptions.map(amenity => (
                <label key={amenity} className="cursor-pointer group relative">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={localFilters.amenities.includes(amenity)}
                    onChange={() => toggleAmenity(amenity)}
                  />
                  <div className="h-full px-4 py-3 rounded-lg border border-nordic-dark/10 dark:border-white/10 bg-white dark:bg-white/5 text-nordic-dark dark:text-white/70 text-sm flex items-center justify-center text-center transition-all hover:border-mosque peer-checked:border-mosque peer-checked:bg-mosque/5 peer-checked:text-mosque">
                    {amenity}
                  </div>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between bg-white dark:bg-neutral-dark-surface sticky bottom-0 z-30">
          <button 
            className="text-sm font-semibold text-nordic-muted hover:text-nordic-dark dark:hover:text-white transition-colors"
            onClick={handleReset}
          >
            Reset all
          </button>
          <Button 
            variant="dark" 
            size="lg"
            onClick={() => onApply(localFilters)}
          >
            Apply Filters
          </Button>
        </footer>
      </main>
    </div>
  )
}
