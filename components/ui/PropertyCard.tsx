import Image from 'next/image'

/**
 * Represents a property listing.
 */
export interface Property {
  id: string
  title: string
  price: number
  address: string
  beds: number
  baths: number
  area: number
  imageUrl: string
  type: 'FOR SALE' | 'FOR RENT'
  tag?: string
}

interface PropertyCardProps {
  property: Property
}

/**
 * A card component that displays property details.
 * @param {PropertyCardProps} props The properties for the card.
 * @return {JSX.Element} The rendered property card component.
 */
export function PropertyCard({ property }: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(property.price)

  return (
    <article className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 group cursor-pointer h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {property.tag && (
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-nordic-dark dark:text-white">
            {property.tag}
          </div>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/50 rounded-full hover:bg-mosque hover:text-white transition-colors text-nordic-dark">
          <span className="material-symbols-outlined text-lg">favorite_border</span>
        </button>
        <div className={`absolute bottom-3 left-3 ${property.type === 'FOR SALE' ? 'bg-nordic-dark/90' : 'bg-mosque/90'} text-white text-xs font-bold px-2 py-1 rounded`}>
          {property.type}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-bold text-lg text-nordic-dark dark:text-white">
            {formattedPrice}
            {property.type === 'FOR RENT' && <span className="text-sm font-normal text-nordic-muted">/mo</span>}
          </h3>
        </div>
        <h4 className="text-nordic-dark dark:text-gray-200 font-medium truncate mb-1">{property.title}</h4>
        <p className="text-nordic-muted text-xs mb-4">{property.address}</p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-symbols-outlined text-sm text-mosque/80">king_bed</span> {property.beds}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-symbols-outlined text-sm text-mosque/80">bathtub</span> {property.baths}
          </div>
          <div className="flex items-center gap-1 text-nordic-muted text-xs">
            <span className="material-symbols-outlined text-sm text-mosque/80">square_foot</span> {property.area}m²
          </div>
        </div>
      </div>
    </article>
  )
}
