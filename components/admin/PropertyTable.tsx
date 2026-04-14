'use client'

import Image from 'next/image'
import { Property } from '@/components/ui/PropertyCard'

interface PropertyTableProps {
  properties: Property[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function PropertyTable({ properties, onEdit, onDelete }: PropertyTableProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="bg-white dark:bg-neutral-dark-surface rounded-xl shadow-sm border border-nordic-dark/10 dark:border-white/10 overflow-hidden">
      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50/50 dark:bg-white/5 border-b border-nordic-dark/5 dark:border-white/5 text-[10px] font-bold text-nordic-muted uppercase tracking-widest">
        <div className="col-span-6">Property Details</div>
        <div className="col-span-2">Price</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-nordic-dark/5 dark:divide-white/5">
        {properties.map((property) => (
          <div key={property.id} className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-mosque/5 dark:hover:bg-white/5 transition-colors items-center">
            {/* Property Details */}
            <div className="col-span-12 md:col-span-6 flex gap-4 items-center">
              <div className="relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <Image 
                  src={property.imageUrl} 
                  alt={property.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-nordic-dark dark:text-white group-hover:text-mosque transition-colors cursor-pointer">{property.title}</h3>
                <p className="text-xs text-nordic-muted">{property.address}</p>
                <div className="flex items-center gap-3 mt-1.5 text-[10px] text-nordic-muted/80">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">king_bed</span> {property.beds} Beds</span>
                  <span className="w-1 h-1 rounded-full bg-nordic-dark/10 dark:bg-white/10"></span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">bathtub</span> {property.baths} Baths</span>
                  <span className="w-1 h-1 rounded-full bg-nordic-dark/10 dark:bg-white/10"></span>
                  <span>{property.area} m²</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-6 md:col-span-2">
              <div className="text-sm font-bold text-nordic-dark dark:text-white">{formatCurrency(property.price)}</div>
              <div className="text-[10px] text-nordic-muted">{property.type === 'FOR RENT' ? 'Monthly Rent' : 'Selling Price'}</div>
            </div>

            {/* Status */}
            <div className="col-span-6 md:col-span-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-mosque/10 text-mosque border border-mosque/10">
                <span className="w-1.5 h-1.5 rounded-full bg-mosque mr-1.5"></span>
                Active
              </span>
            </div>

            {/* Actions */}
            <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-2">
              <button 
                className="p-2 rounded-lg text-nordic-muted hover:text-mosque hover:bg-mosque/10 transition-all"
                onClick={() => onEdit(property.id)}
              >
                <span className="material-symbols-outlined text-xl">edit</span>
              </button>
              <button 
                className="p-2 rounded-lg text-nordic-muted hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
                onClick={() => onDelete(property.id)}
              >
                <span className="material-symbols-outlined text-xl">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {properties.length === 0 && (
        <div className="py-12 text-center text-nordic-muted">
          No properties found.
        </div>
      )}
    </div>
  )
}
