'use client'

interface PropertyAmenitiesProps {
  amenities: string[]
}

export function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
  return (
    <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-mosque/5">
      <h2 className="text-lg font-semibold mb-6 text-nordic-dark dark:text-white">Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center gap-3 text-nordic-muted">
            <span className="material-symbols-outlined text-mosque/60 text-sm">check_circle</span>
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
