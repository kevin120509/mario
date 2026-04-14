'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PropertyForm } from '@/components/admin/PropertyForm'
import { propertyService } from '@/lib/services/propertyService'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

/**
 * Page for adding a new property listing.
 * @return {JSX.Element} The rendered new property page.
 */
export default function NewPropertyPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(isSubmitting)
    setIsSubmitting(true)
    try {
      await propertyService.addProperty(formData)
      router.push('/admin')
      router.refresh()
    } catch (error) {
      console.error('Error adding property:', error)
      alert('Failed to add property')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="space-y-4">
            <nav aria-label="Breadcrumb" className="flex">
              <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                <li>
                  <Link href="/admin" className="hover:text-mosque transition-colors">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <span className="material-icons text-xs text-gray-400">chevron_right</span>
                </li>
                <li aria-current="page" className="text-nordic dark:text-white">
                  Add New Property
                </li>
              </ol>
            </nav>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-nordic dark:text-white tracking-tight mb-2">
                Add New Property
              </h1>
              <p className="text-base text-gray-500 max-w-2xl font-normal">
                Fill in the details below to create a new listing. Fields marked with * are mandatory.
              </p>
            </div>
          </div>
          <Link 
            href="/admin" 
            className="inline-flex items-center justify-center px-4 py-2 border border-nordic-dark/10 dark:border-white/10 rounded-lg text-sm font-medium hover:bg-white dark:hover:bg-white/5 transition-colors"
          >
            Cancel
          </Link>
        </header>

        <div className={isSubmitting ? 'opacity-50 pointer-events-none transition-opacity' : ''}>
          <PropertyForm onSubmit={handleSubmit} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
