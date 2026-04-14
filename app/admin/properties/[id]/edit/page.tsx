'use client'

import { useState, useEffect, use } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyForm } from '@/components/admin/PropertyForm'
import { propertyService, PropertyDetails } from '@/lib/services/propertyService'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface EditPropertyPageProps {
  params: Promise<{ id: string }>
}

export default function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = use(params)
  const [property, setProperty] = useState<PropertyDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await propertyService.getPropertyById(id)
      if (data) {
        setProperty(data)
      } else {
        router.push('/admin')
      }
      setLoading(false)
    }
    fetchProperty()
  }, [id, router])

  const handleSubmit = async (formData: any) => {
    setSaving(true)
    try {
      await propertyService.updateProperty(id, formData)
      router.push('/admin')
      router.refresh()
    } catch (error) {
      console.error('Error updating property:', error)
      alert('Failed to update property')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-mosque/20 rounded-full"></div>
          <p>Loading property details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-sm text-nordic-muted mb-2">
              <Link href="/admin" className="hover:text-mosque transition-colors">Admin Dashboard</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span>Edit Property</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-nordic-dark dark:text-white">Edit Property</h1>
          </div>
          <Link 
            href="/admin" 
            className="inline-flex items-center justify-center px-4 py-2 border border-nordic-dark/10 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-white/5 transition-colors"
          >
            Cancel
          </Link>
        </div>

        {property && (
          <div className={saving ? 'opacity-50 pointer-events-none transition-opacity' : ''}>
            <PropertyForm initialData={property} onSubmit={handleSubmit} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
