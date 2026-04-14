'use client'

interface PropertyInfoProps {
  title: string
  address: string
  price: number
  description: string
  beds: number
  baths: number
  area: number
  type: string
}

export function PropertyInfo({ 
  title, 
  address, 
  price, 
  description, 
  beds, 
  baths, 
  area, 
  type 
}: PropertyInfoProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)

  return (
    <div className="lg:col-span-8 lg:row-start-2 -mt-8 space-y-8">
      <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-mosque/5">
        <h2 className="text-lg font-semibold mb-6 text-nordic-dark dark:text-white">Property Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center p-4 bg-mosque/5 rounded-lg border border-mosque/10">
            <span className="material-symbols-outlined text-mosque text-2xl mb-2">square_foot</span>
            <span className="text-xl font-bold text-nordic-dark dark:text-white">{area}</span>
            <span className="text-[10px] uppercase tracking-wider text-nordic-muted">m² Area</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-mosque/5 rounded-lg border border-mosque/10">
            <span className="material-symbols-outlined text-mosque text-2xl mb-2">king_bed</span>
            <span className="text-xl font-bold text-nordic-dark dark:text-white">{beds}</span>
            <span className="text-[10px] uppercase tracking-wider text-nordic-muted">Bedrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-mosque/5 rounded-lg border border-mosque/10">
            <span className="material-symbols-outlined text-mosque text-2xl mb-2">bathtub</span>
            <span className="text-xl font-bold text-nordic-dark dark:text-white">{baths}</span>
            <span className="text-[10px] uppercase tracking-wider text-nordic-muted">Bathrooms</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 bg-mosque/5 rounded-lg border border-mosque/10">
            <span className="material-symbols-outlined text-mosque text-2xl mb-2">directions_car</span>
            <span className="text-xl font-bold text-nordic-dark dark:text-white">2</span>
            <span className="text-[10px] uppercase tracking-wider text-nordic-muted">Garage</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-mosque/5">
        <h2 className="text-lg font-semibold mb-4 text-nordic-dark dark:text-white">About this home</h2>
        <div className="prose dark:prose-invert prose-slate max-w-none text-nordic-muted leading-relaxed">
          <p className="mb-4">{description}</p>
        </div>
        <button className="mt-4 text-mosque font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
          Read more
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
