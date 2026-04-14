import { Property } from '@/components/ui/PropertyCard'

/**
 * Detailed property information extending the basic Property type.
 */
export interface PropertyDetails extends Property {
  description: string
  images: string[]
  amenities: string[]
  agent: {
    name: string
    role: string
    photo: string
    phone: string
    email: string
  }
}

const STORAGE_KEY = 'luxeestate_properties'

// Initial mock data
const initialProperties: PropertyDetails[] = [
  {
    id: 'f1',
    title: 'The Glass Pavilion',
    price: 5250000,
    address: 'Beverly Hills, California',
    beds: 5,
    baths: 4.5,
    area: 4200,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
    type: 'FOR SALE',
    tag: 'Exclusive',
    description: 'A masterpiece of modern architecture, The Glass Pavilion offers unparalleled luxury and privacy. Featuring floor-to-ceiling windows, an infinity pool, and a private vineyard, this estate is designed for those who appreciate the finer things in life.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNDU9iE4zwPuWeg-CjIrLI-87GF24_LgOggcXT0vmUYfMx2q1dJAheiqWqVN-39uiwyLKEfP18FsG1vtUyAPX902OhGEfM4clcQiDsJW7MBbc_BoMtZXtqIeFKIfkHnkIPwmFbQg8Eaan6ULV99T8AUVUuKsro0HoTMrIaxw5pp1uSuQlF8X5Dait4US1W4vmyZnVioXbFnCoaOOZ0LPorb0rVGAIQd9reWcpqq27C0oO4ltnsCTHIcjIm0xp-2qVbRJSIZzWPv0'
    ],
    amenities: ['Infinity Pool', 'Private Vineyard', 'Smart Home System', 'Home Cinema', 'Gym'],
    agent: {
      name: 'Eleanor Vance',
      role: 'Luxury Real Estate Specialist',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns',
      phone: '+1 (555) 123-4567',
      email: 'eleanor@luxeestate.com'
    }
  },
  {
    id: 'f2',
    title: 'Azure Heights Penthouse',
    price: 3800000,
    address: 'Downtown, Vancouver',
    beds: 3,
    baths: 3,
    area: 2100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s',
    type: 'FOR SALE',
    tag: 'New Arrival',
    description: 'Breathtaking 360-degree views of the city and mountains. This penthouse at Azure Heights features premium finishes, an expansive terrace, and access to world-class building amenities.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDurAGHzg_fpQxFal-obkFVy1Q3WLPdueAQpz0itcQiRV-WfvulnBEDJbNeV8J06q4mX7PTtXYVJjX4-mHVr_khZLZxQ_s8f6fruGqzeqALyMu8wEHRK1EsOs9f4_jPmS7FxcdzrDkR88Wz0GjaPLXkTZRoJQfur59rxYRLi-WYcW-VU_gKS39CPLOMlftvqGvW0IOk5tXgst5mJ4WQM-ICN4vkdel9ido9YFUQga0OI10i6NSe5W4owt33-2YRi_b_ltdZW2QZC5s'
    ],
    amenities: ['Private Elevator', 'Roof Terrace', '24/7 Concierge', 'Spa & Sauna', 'Wine Cellar'],
    agent: {
      name: 'Marcus Thorne',
      role: 'Global Property Advisor',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns',
      phone: '+1 (555) 987-6543',
      email: 'marcus@luxeestate.com'
    }
  }
]

/**
 * Service to manage property data with localStorage persistence.
 */
export const propertyService = {
  getRawProperties(): PropertyDetails[] {
    if (typeof window === 'undefined') return initialProperties
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProperties))
      return initialProperties
    }
    return JSON.parse(stored)
  },

  saveProperties(properties: PropertyDetails[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(properties))
      window.dispatchEvent(new Event('properties-updated'))
    }
  },

  /**
   * Fetches all properties.
   * @returns {Promise<Property[]>} List of basic property info.
   */
  async getAllProperties(): Promise<Property[]> {
    const props = this.getRawProperties()
    return props.map(({ description, images, amenities, agent, ...basicInfo }) => basicInfo)
  },

  /**
   * Fetches a property by its ID.
   * @param {string} id The property ID.
   * @returns {Promise<PropertyDetails | undefined>} Detailed property info or undefined.
   */
  async getPropertyById(id: string): Promise<PropertyDetails | undefined> {
    const props = this.getRawProperties()
    return props.find(p => p.id === id)
  },

  /**
   * Adds a new property.
   */
  async addProperty(property: Omit<PropertyDetails, 'id'>): Promise<PropertyDetails> {
    const props = this.getRawProperties()
    const newProperty = {
      ...property,
      id: Math.random().toString(36).substring(2, 9)
    }
    this.saveProperties([...props, newProperty])
    return newProperty
  },

  /**
   * Updates an existing property.
   */
  async updateProperty(id: string, updates: Partial<PropertyDetails>): Promise<PropertyDetails | undefined> {
    const props = this.getRawProperties()
    const index = props.findIndex(p => p.id === id)
    if (index === -1) return undefined
    
    const updated = { ...props[index], ...updates }
    const newProps = [...props]
    newProps[index] = updated
    this.saveProperties(newProps)
    return updated
  },

  /**
   * Deletes a property.
   */
  async deleteProperty(id: string): Promise<boolean> {
    const props = this.getRawProperties()
    const filtered = props.filter(p => p.id !== id)
    if (filtered.length === props.length) return false
    this.saveProperties(filtered)
    return true
  }
}

