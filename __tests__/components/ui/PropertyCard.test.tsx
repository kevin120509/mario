import { render, screen } from '@testing-library/react'
import PropertyCard from '@/components/ui/PropertyCard'

const mockProperty = {
  id: '1',
  title: 'Modern Family Home',
  price: 850000,
  address: '123 Pine St, Seattle',
  beds: 3,
  baths: 2,
  area: 120,
  imageUrl: 'https://example.com/image.jpg',
  type: 'FOR SALE' as const
}

describe('PropertyCard', () => {
  it('renders property details', () => {
    render(<PropertyCard property={mockProperty} />)
    expect(screen.getByText('Modern Family Home')).toBeInTheDocument()
    expect(screen.getByText('$850,000')).toBeInTheDocument()
    expect(screen.getByText('123 Pine St, Seattle')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument() // Beds
    expect(screen.getByText('2')).toBeInTheDocument() // Baths
    expect(screen.getByText('120m²')).toBeInTheDocument() // Area
    expect(screen.getByText('FOR SALE')).toBeInTheDocument()
  })

  it('renders property image', () => {
    render(<PropertyCard property={mockProperty} />)
    const image = screen.getByAltText('Modern Family Home')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', expect.stringContaining('image.jpg'))
  })

  it('renders rent price with /mo suffix', () => {
    const rentProperty = { ...mockProperty, type: 'FOR RENT' as const, price: 3200 }
    render(<PropertyCard property={rentProperty} />)
    expect(screen.getByText('$3,200')).toBeInTheDocument()
    expect(screen.getByText(/\/mo/i)).toBeInTheDocument()
    expect(screen.getByText('FOR RENT')).toBeInTheDocument()
  })
})
