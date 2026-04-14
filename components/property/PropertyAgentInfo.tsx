'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScheduleVisitModal } from './ScheduleVisitModal'

interface PropertyAgentInfoProps {
  price: number
  address: string
  type: string
  agent: {
    name: string
    role: string
    photo: string
    phone: string
    email: string
  }
}

export function PropertyAgentInfo({ price, address, type, agent }: PropertyAgentInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)

  const handleContact = (method: string) => {
    alert(`Contacting agent via ${method}... (Simulation)`)
  }

  return (
    <div className="lg:col-span-4 relative">
      <div className="sticky top-28 space-y-6">
        <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-sm border border-mosque/5">
          <div className="mb-4">
            <h1 className="text-4xl font-light text-nordic-dark dark:text-white mb-2">{formattedPrice}</h1>
            <p className="text-nordic-muted font-medium flex items-center gap-1 text-sm">
              <span className="material-symbols-outlined text-mosque text-base">location_on</span>
              {address}
            </p>
          </div>
          
          <div className="h-px bg-slate-100 dark:bg-white/10 my-6"></div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14">
              <Image 
                src={agent.photo} 
                alt={agent.name} 
                fill
                className="rounded-full object-cover border-2 border-white dark:border-white/20 shadow-sm"
              />
            </div>
            <div>
              <h3 className="font-semibold text-nordic-dark dark:text-white">{agent.name}</h3>
              <div className="flex items-center gap-1 text-[10px] text-mosque font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">star</span>
                Top Rated Agent
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              <button 
                onClick={() => handleContact('chat')}
                className="p-2 rounded-full bg-mosque/10 text-mosque hover:bg-mosque hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
              </button>
              <button 
                onClick={() => handleContact('call')}
                className="p-2 rounded-full bg-mosque/10 text-mosque hover:bg-mosque hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">call</span>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-mosque hover:bg-primary-hover text-white py-4 px-6 rounded-lg font-medium transition-all shadow-lg shadow-mosque/20 flex items-center justify-center gap-2 group"
            >
              <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">calendar_today</span>
              Schedule Visit
            </button>
            <button 
              onClick={() => handleContact('email')}
              className="w-full bg-transparent border border-nordic-dark/10 dark:border-white/10 hover:border-mosque dark:hover:border-mosque text-nordic-dark dark:text-white/80 hover:text-mosque dark:hover:text-mosque py-4 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
              Contact Agent
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-white/5 p-2 rounded-xl shadow-sm border border-mosque/5">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 dark:bg-white/5">
            <img 
              alt="Map location" 
              className="w-full h-full object-cover opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAam7l6Iva-Ueed4N1BxrVb5SqFJUVl9pnGf_zDG5JYhZmJCe3hLYttkVA-Jg46VljNevhZK7LCxoMpRmKjS0pT1uk0x_WAT5FFVpphw6yGYjroXFGybUkSYCymind4Z7fzrdob5j_VR4DfhQL6Lej-gMQZCuLjZrOjYt0KN97oLy0gZVOIyV1o7woH1F8aOvLzpKUPzcof0KmZdYl7I1uq25G31zdQYTwnQCXvWAQ0Snu1uEKYLQZg4uV4OsqzeOtSu_KCt36ytmw"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 bg-mosque rounded-full border-4 border-white shadow-lg animate-bounce flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">home</span>
              </div>
            </div>
            <a className="absolute bottom-2 right-2 bg-white/90 dark:bg-black/80 text-[10px] font-bold px-2 py-1 rounded shadow-sm text-nordic-dark dark:text-white hover:text-mosque" href="#">View on Map</a>
          </div>
        </div>
      </div>

      <ScheduleVisitModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        propertyTitle={address} 
      />
    </div>
  )
}
