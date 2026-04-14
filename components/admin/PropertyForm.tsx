'use client'

import { useState, useEffect } from 'react'
import { PropertyDetails } from '@/lib/services/propertyService'
import { agentService, Agent } from '@/lib/services/agentService'

interface PropertyFormProps {
  initialData?: PropertyDetails
  onSubmit?: (data: any) => void
}

/**
 * A comprehensive form for creating or editing property listings.
 * @param {PropertyFormProps} props The properties for the form.
 * @return {JSX.Element} The rendered form component.
 */
export function PropertyForm({ initialData, onSubmit }: PropertyFormProps) {
  const [agents, setAgents] = useState<Agent[]>([])
  const [selectedAgentId, setSelectedAgentId] = useState(initialData?.agent.email || '')
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    price: initialData?.price.toString() || '',
    status: initialData?.type.includes('RENT') ? 'for-rent' : 'for-sale',
    type: 'apartment',
    description: initialData?.description || '',
    address: initialData?.address || '',
    area: initialData?.area.toString() || '',
    yearBuilt: '2024',
    beds: initialData?.beds || 3,
    baths: initialData?.baths || 2,
    parking: 1,
    amenities: {
      swimmingPool: initialData?.amenities.includes('Swimming Pool') || false,
      garden: initialData?.amenities.includes('Garden') || true,
      airConditioning: initialData?.amenities.includes('Air Conditioning') || false,
      smartHome: initialData?.amenities.includes('Smart Home System') || false
    }
  })

  useEffect(() => {
    setAgents(agentService.getAgents())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit && formData.title && formData.price && formData.address) {
      const selectedAmenities = []
      if (formData.amenities.swimmingPool) selectedAmenities.push('Swimming Pool')
      if (formData.amenities.garden) selectedAmenities.push('Garden')
      if (formData.amenities.airConditioning) selectedAmenities.push('Air Conditioning')
      if (formData.amenities.smartHome) selectedAmenities.push('Smart Home System')

      const selectedAgent = agents.find(a => a.email === selectedAgentId) || agents[0]

      onSubmit({
        title: formData.title,
        price: parseFloat(formData.price),
        address: formData.address,
        beds: formData.beds,
        baths: formData.baths,
        area: parseFloat(formData.area),
        imageUrl: initialData?.imageUrl || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        type: formData.status === 'for-sale' ? 'FOR SALE' : 'FOR RENT',
        tag: 'New',
        description: formData.description,
        images: initialData?.images || ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
        amenities: selectedAmenities,
        agent: {
          name: selectedAgent.name,
          role: selectedAgent.role,
          photo: selectedAgent.photo,
          phone: selectedAgent.phone,
          email: selectedAgent.email
        }
      })
    }
  }

  return (
    <form className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start" onSubmit={handleSubmit}>
      <div className="xl:col-span-8 space-y-8">
        {/* Basic Information */}
        <div className="bg-white dark:bg-nordic-dark/40 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-hint-green/30 flex items-center gap-3 bg-gradient-to-r from-hint-green/10 to-transparent">
            <div className="w-8 h-8 rounded-full bg-hint-green flex items-center justify-center text-nordic">
              <span className="material-icons text-lg">info</span>
            </div>
            <h2 className="text-xl font-bold text-nordic dark:text-white">Basic Information</h2>
          </div>
          <div className="p-8 space-y-6">
            <div className="group">
              <label className="block text-sm font-medium text-nordic dark:text-white/70 mb-1.5" htmlFor="title">
                Property Title <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full text-base px-4 py-2.5 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic placeholder-gray-400 focus:ring-1 focus:ring-mosque focus:border-mosque transition-all"
                id="title"
                placeholder="e.g. Modern Penthouse with Ocean View"
                type="text"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-nordic dark:text-white/70 mb-1.5" htmlFor="price">
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    className="w-full pl-7 pr-4 py-2.5 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic placeholder-gray-400 focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-base font-medium"
                    id="price"
                    placeholder="0.00"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-nordic dark:text-white/70 mb-1.5" htmlFor="status">Status</label>
                <select
                  className="w-full px-4 py-2.5 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-base cursor-pointer"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="for-sale">For Sale</option>
                  <option value="for-rent">For Rent</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-nordic dark:text-white/70 mb-1.5" htmlFor="type">Property Type</label>
                <select
                  className="w-full px-4 py-2.5 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-base cursor-pointer"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-nordic-dark/40 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-hint-green/30 flex items-center gap-3 bg-gradient-to-r from-hint-green/10 to-transparent">
            <div className="w-8 h-8 rounded-full bg-hint-green flex items-center justify-center text-nordic">
              <span className="material-icons text-lg">description</span>
            </div>
            <h2 className="text-xl font-bold text-nordic dark:text-white">Description</h2>
          </div>
          <div className="p-8">
            <label className="sr-only" htmlFor="description">Property Description</label>
            <textarea
              className="w-full px-4 py-3 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic placeholder-gray-400 focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-base leading-relaxed resize-y min-h-[200px]"
              id="description"
              placeholder="Describe the property features, neighborhood, and unique selling points..."
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white dark:bg-nordic-dark/40 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="px-8 py-6 border-b border-hint-green/30 flex justify-between items-center bg-gradient-to-r from-hint-green/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-hint-green flex items-center justify-center text-nordic">
                <span className="material-icons text-lg">image</span>
              </div>
              <h2 className="text-xl font-bold text-nordic dark:text-white">Gallery</h2>
            </div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">JPG, PNG, WEBP</span>
          </div>
          <div className="p-8">
            <div className="relative border-2 border-dashed border-gray-300 dark:border-white/20 rounded-xl bg-gray-50/50 dark:bg-white/5 p-10 text-center hover:bg-hint-green/10 hover:border-mosque/40 transition-colors cursor-pointer group">
              <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" multiple type="file" />
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="w-12 h-12 bg-white dark:bg-nordic-dark rounded-full flex items-center justify-center shadow-sm text-mosque group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons text-2xl">cloud_upload</span>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-medium text-nordic dark:text-white">Click or drag images here</p>
                  <p className="text-xs text-gray-400">Max file size 5MB per image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-4 space-y-8">
        {/* Location */}
        <div className="bg-white dark:bg-nordic-dark/40 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-hint-green/30 flex items-center gap-3 bg-gradient-to-r from-hint-green/10 to-transparent">
            <div className="w-8 h-8 rounded-full bg-hint-green flex items-center justify-center text-nordic">
              <span className="material-icons text-lg">place</span>
            </div>
            <h2 className="text-lg font-bold text-nordic dark:text-white">Location</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-nordic dark:text-white/70 mb-1.5" htmlFor="address">Address</label>
              <input
                className="w-full px-4 py-2.5 rounded-md border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-nordic placeholder-gray-400 focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-sm"
                id="address"
                placeholder="Street Address, City, Zip"
                type="text"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white dark:bg-nordic-dark/40 rounded-xl shadow-soft border border-gray-100 dark:border-white/5 overflow-hidden sticky top-24">
          <div className="px-6 py-4 border-b border-hint-green/30 flex items-center gap-3 bg-gradient-to-r from-hint-green/10 to-transparent">
            <div className="w-8 h-8 rounded-full bg-hint-green flex items-center justify-center text-nordic">
              <span className="material-icons text-lg">straighten</span>
            </div>
            <h2 className="text-lg font-bold text-nordic dark:text-white">Details</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block" htmlFor="area">Area (m²)</label>
                <input
                  className="w-full text-left px-3 py-2 rounded border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-nordic focus:bg-white focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-sm"
                  id="area"
                  placeholder="0"
                  type="number"
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1 block" htmlFor="yearBuilt">Year Built</label>
                <input
                  className="w-full text-left px-3 py-2 rounded border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-nordic focus:bg-white focus:ring-1 focus:ring-mosque focus:border-mosque transition-all text-sm"
                  id="yearBuilt"
                  placeholder="YYYY"
                  type="number"
                  value={formData.yearBuilt}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="border-gray-100 dark:border-white/5" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-nordic dark:text-white/70 flex items-center gap-2" htmlFor="bedrooms">
                  <span className="material-icons text-gray-400 text-sm">bed</span> Bedrooms
                </label>
                <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-white/5 shadow-sm">
                  <button type="button" onClick={() => handleDecrement('bedrooms')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-r border-gray-100 dark:border-white/5">-</button>
                  <input id="bedrooms" className="w-10 text-center border-none bg-transparent text-nordic dark:text-white p-0 focus:ring-0 text-sm font-medium" readOnly type="text" value={formData.bedrooms} />
                  <button type="button" onClick={() => handleIncrement('bedrooms')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-l border-gray-100 dark:border-white/5">+</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-nordic dark:text-white/70 flex items-center gap-2" htmlFor="bathrooms">
                  <span className="material-icons text-gray-400 text-sm">shower</span> Bathrooms
                </label>
                <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-white/5 shadow-sm">
                  <button type="button" onClick={() => handleDecrement('bathrooms')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-r border-gray-100 dark:border-white/5">-</button>
                  <input id="bathrooms" className="w-10 text-center border-none bg-transparent text-nordic dark:text-white p-0 focus:ring-0 text-sm font-medium" readOnly type="text" value={formData.bathrooms} />
                  <button type="button" onClick={() => handleIncrement('bathrooms')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-l border-gray-100 dark:border-white/5">+</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-nordic dark:text-white/70 flex items-center gap-2" htmlFor="parking">
                  <span className="material-icons text-gray-400 text-sm">directions_car</span> Parking
                </label>
                <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-md overflow-hidden bg-white dark:bg-white/5 shadow-sm">
                  <button type="button" onClick={() => handleDecrement('parking')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-r border-gray-100 dark:border-white/5">-</button>
                  <input id="parking" className="w-10 text-center border-none bg-transparent text-nordic dark:text-white p-0 focus:ring-0 text-sm font-medium" readOnly type="text" value={formData.parking} />
                  <button type="button" onClick={() => handleIncrement('parking')} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 text-gray-600 dark:text-white/70 transition-colors border-l border-gray-100 dark:border-white/5">+</button>
                </div>
              </div>
            </div>
            <hr className="border-gray-100 dark:border-white/5" />
            <div>
              <h3 className="text-sm font-bold text-nordic dark:text-white mb-3 uppercase tracking-wider text-xs text-gray-500">Amenities</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 cursor-pointer group" htmlFor="swimmingPool">
                  <input
                    className="w-4 h-4 text-mosque border-gray-300 rounded focus:ring-mosque"
                    id="swimmingPool"
                    type="checkbox"
                    checked={formData.amenities.swimmingPool}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-700 dark:text-white/70 group-hover:text-nordic dark:group-hover:text-white transition-colors">Swimming Pool</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group" htmlFor="garden">
                  <input
                    className="w-4 h-4 text-mosque border-gray-300 rounded focus:ring-mosque"
                    id="garden"
                    type="checkbox"
                    checked={formData.amenities.garden}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-700 dark:text-white/70 group-hover:text-nordic dark:group-hover:text-white transition-colors">Garden</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group" htmlFor="airConditioning">
                  <input
                    className="w-4 h-4 text-mosque border-gray-300 rounded focus:ring-mosque"
                    id="airConditioning"
                    type="checkbox"
                    checked={formData.amenities.airConditioning}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-700 dark:text-white/70 group-hover:text-nordic dark:group-hover:text-white transition-colors">Air Conditioning</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer group" htmlFor="smartHome">
                  <input
                    className="w-4 h-4 text-mosque border-gray-300 rounded focus:ring-mosque"
                    id="smartHome"
                    type="checkbox"
                    checked={formData.amenities.smartHome}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-sm text-gray-700 dark:text-white/70 group-hover:text-nordic dark:group-hover:text-white transition-colors">Smart Home</span>
                </label>
              </div>
            </div>
            <div className="pt-4 flex gap-3">
              <button type="button" className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 text-nordic dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors font-medium text-sm">
                Save Draft
              </button>
              <button type="submit" className="flex-1 px-4 py-2.5 rounded-lg bg-mosque hover:bg-nordic text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm">
                <span className="material-icons text-sm">save</span>
                Save Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
