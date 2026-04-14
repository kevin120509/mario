'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { authService, User } from '@/lib/services/authService'
import { favoritesService } from '@/lib/services/favoritesService'
import { PropertyCard, Property } from '@/components/ui/PropertyCard'
import { propertyService } from '@/lib/services/propertyService'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([])
  const [activeTab, setActiveTab] = useState<'saved' | 'settings'>('saved')
  const router = useRouter()

  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    if (!currentUser) {
      router.push('/')
      return
    }
    setUser(currentUser)

    const loadFavorites = async () => {
      const favoriteIds = favoritesService.getFavorites()
      const allProperties = await propertyService.getAllProperties()
      const filtered = allProperties.filter(p => favoriteIds.includes(p.id))
      setFavoriteProperties(filtered)
    }

    loadFavorites()

    const handleAuthChange = () => {
      const updatedUser = authService.getCurrentUser()
      if (!updatedUser) {
        router.push('/')
      } else {
        setUser(updatedUser)
      }
    }

    window.addEventListener('auth-state-changed', handleAuthChange)
    return () => window.removeEventListener('auth-state-changed', handleAuthChange)
  }, [router])

  const handleLogout = () => {
    authService.logout()
  }

  if (!user) return null

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-nordic-dark dark:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full">
        {/* Profile Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 bg-mosque/5 dark:bg-mosque/10 p-8 rounded-3xl border border-mosque/10 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32">
              <Image 
                src={user.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns"} 
                alt={user.name} 
                fill
                className="rounded-full object-cover border-4 border-white dark:border-white/10 shadow-lg"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 lg:w-10 lg:h-10 bg-mosque text-white rounded-full flex items-center justify-center hover:bg-nordic-dark transition-colors shadow-md">
                <span className="material-symbols-outlined text-sm lg:text-base">edit</span>
              </button>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-nordic-dark dark:text-white mb-2">{user.name}</h1>
              <p className="text-nordic-muted font-light flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-mosque">location_on</span>
                {user.email}
              </p>
              <p className="text-nordic-muted text-xs mt-1">Member since 2026</p>
            </div>
          </div>
          
          <div className="flex gap-6 lg:gap-12 bg-white dark:bg-white/5 px-8 py-4 rounded-xl shadow-sm border border-nordic-dark/5 dark:border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-nordic-dark dark:text-white">{favoriteProperties.length}</div>
              <div className="text-[10px] uppercase tracking-wider text-nordic-muted font-bold">Saved</div>
            </div>
            <div className="w-px bg-nordic-dark/10 dark:bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-mosque">0</div>
              <div className="text-[10px] uppercase tracking-wider text-nordic-muted font-bold">Visits</div>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-nordic-dark/10 dark:border-white/10 mb-10 overflow-x-auto no-scrollbar">
          <button 
            className={`pb-4 px-2 font-bold transition-colors whitespace-nowrap ${
              activeTab === 'saved' 
                ? 'text-mosque border-b-2 border-mosque' 
                : 'text-nordic-muted hover:text-nordic-dark dark:hover:text-white border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('saved')}
          >
            Saved Properties
          </button>
          <button 
            className={`pb-4 px-2 font-bold transition-colors whitespace-nowrap ${
              activeTab === 'settings' 
                ? 'text-mosque border-b-2 border-mosque' 
                : 'text-nordic-muted hover:text-nordic-dark dark:hover:text-white border-b-2 border-transparent'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings & Account
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'saved' ? (
          favoriteProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favoriteProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white dark:bg-white/5 rounded-2xl border border-dashed border-nordic-dark/10 dark:border-white/10">
              <p className="text-nordic-muted">No saved properties yet.</p>
            </div>
          )
        ) : (
          <div className="max-w-2xl bg-white dark:bg-white/5 p-8 rounded-2xl border border-nordic-dark/5 dark:border-white/10 space-y-8">
            <section className="space-y-4">
              <h3 className="text-lg font-bold">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-nordic-muted uppercase tracking-wider ml-1">Display Name</label>
                  <input type="text" value={user.name} readOnly className="w-full px-4 py-3 bg-background-light dark:bg-white/5 border-0 rounded-lg text-nordic-dark dark:text-white opacity-70" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-nordic-muted uppercase tracking-wider ml-1">Email</label>
                  <input type="text" value={user.email} readOnly className="w-full px-4 py-3 bg-background-light dark:bg-white/5 border-0 rounded-lg text-nordic-dark dark:text-white opacity-70" />
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-nordic-dark/10 dark:border-white/10">
              <h3 className="text-lg font-bold text-red-500">Danger Zone</h3>
              <p className="text-sm text-nordic-muted mb-4">Once you sign out, you will need to log back in to access your saved properties.</p>
              <Button variant="outline" className="border-red-500/20 text-red-500 hover:bg-red-500/5" onClick={handleLogout}>
                Log Out
              </Button>
            </section>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
