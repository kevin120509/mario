'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StatsCard } from '@/components/admin/StatsCard'
import { PropertyTable } from '@/components/admin/PropertyTable'
import { propertyService } from '@/lib/services/propertyService'
import { Property } from '@/components/ui/PropertyCard'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminDashboard() {
  const [properties, setProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const loadProperties = async () => {
    setIsLoading(true)
    const all = await propertyService.getAllProperties()
    setProperties(all)
    setIsLoading(false)
  }

  useEffect(() => {
    loadProperties()
    
    // Listen for updates from other pages
    const handleUpdate = () => loadProperties()
    window.addEventListener('properties-updated', handleUpdate)
    return () => window.removeEventListener('properties-updated', handleUpdate)
  }, [])

  const handleEdit = (id: string) => {
    router.push(`/admin/properties/${id}/edit`)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      const success = await propertyService.deleteProperty(id)
      if (success) {
        setProperties(prev => prev.filter(p => p.id !== id))
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-nordic-muted mt-1 text-sm">Manage your property portfolio and track performance.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="bg-white dark:bg-white/5" onClick={loadProperties}>
              <span className="material-symbols-outlined text-base mr-2">refresh</span> Refresh
            </Button>
            <Link href="/admin/properties/new">
              <Button variant="dark" size="sm">
                <span className="material-symbols-outlined text-base mr-2">add</span> Add Property
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <StatsCard label="Total Listings" value={properties.length} icon="apartment" trend="+2 this month" />
          <StatsCard label="Active Properties" value={properties.length} icon="check_circle" trend="100% Active" color="mosque" />
          <StatsCard label="Pending Sale" value="0" icon="pending" trend="Stable" color="nordic-muted" />
        </div>

        {/* Property List */}
        {isLoading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-mosque border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        ) : (
          <PropertyTable 
            properties={properties} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        )}
      </main>

      <Footer />
    </div>
  )
}
