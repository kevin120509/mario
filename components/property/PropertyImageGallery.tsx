'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PropertyImageGalleryProps {
  images: string[]
}

export function PropertyImageGallery({ images }: PropertyImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-sm group">
        <Image 
          src={activeImage} 
          alt="Property" 
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-mosque text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Premium</span>
          <span className="bg-white/90 backdrop-blur text-nordic-dark text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">New</span>
        </div>
        <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-nordic-dark px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">grid_view</span>
          View All Photos
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`flex-none w-48 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all snap-start ${
              activeImage === image ? 'ring-2 ring-mosque ring-offset-2 ring-offset-background-light' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => setActiveImage(image)}
          >
            <Image 
              src={image} 
              alt={`Property view ${index + 1}`} 
              width={192} 
              height={144}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
