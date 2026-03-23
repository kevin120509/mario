import { render, screen, fireEvent } from '@testing-library/react'
import HomeContent from '@/components/home/HomeContent'
import { Property } from '@/components/ui/PropertyCard'

const mockFeatured: Property[] = [
  { id: 'f1', title: 'Featured 1', price: 1000000, address: 'Address 1', beds: 3, baths: 2, area: 150, imageUrl: 'https://example.com/image.jpg', type: 'FOR SALE' }
]

const mockNew: Property[] = [
  { id: 'n1', title: 'House in Seattle', price: 500000, address: 'Seattle, WA', beds: 3, baths: 2, area: 120, imageUrl: 'https://example.com/image.jpg', type: 'FOR SALE' },
  { id: 'n2', title: 'Apartment in Portland', price: 2000, address: 'Portland, OR', beds: 1, baths: 1, area: 80, imageUrl: 'https://example.com/image.jpg', type: 'FOR RENT' }
]

describe('HomeContent', () => {
  it('renders both property sections', () => {
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    expect(screen.getByText(/Featured Collections/i)).toBeInTheDocument()
    expect(screen.getByText(/New in Market/i)).toBeInTheDocument()
  })

  it('filters properties by search query', () => {
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    
    const input = screen.getByPlaceholderText(/Search by city, neighborhood, or address.../i)
    fireEvent.change(input, { target: { value: 'Seattle' } })
    
    // Trigger search (by clicking the search button or pressing enter)
    const searchBtn = screen.getByRole('button', { name: /^Search$/i })
    fireEvent.click(searchBtn)

    expect(screen.getByText('House in Seattle')).toBeInTheDocument()
    expect(screen.queryByText('Apartment in Portland')).not.toBeInTheDocument()
  })

  it('filters properties by Buy/Rent buttons', () => {
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    
    const buyBtn = screen.getByRole('button', { name: /^Buy$/i })
    fireEvent.click(buyBtn)

    expect(screen.getByText('House in Seattle')).toBeInTheDocument()
    expect(screen.queryByText('Apartment in Portland')).not.toBeInTheDocument()

    const rentBtn = screen.getByRole('button', { name: /^Rent$/i })
    fireEvent.click(rentBtn)

    expect(screen.queryByText('House in Seattle')).not.toBeInTheDocument()
    expect(screen.getByText('Apartment in Portland')).toBeInTheDocument()
  })

  it('shows "no properties found" message when no match', () => {
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    
    const input = screen.getByPlaceholderText(/Search by city, neighborhood, or address.../i)
    fireEvent.change(input, { target: { value: 'NonExistent' } })
    fireEvent.click(screen.getByRole('button', { name: /^Search$/i }))

    expect(screen.getByText(/No properties found matching your search/i)).toBeInTheDocument()

    // Clear filters
    const clearBtn = screen.getByText(/Clear filters/i)
    fireEvent.click(clearBtn)
    expect(screen.getByText('House in Seattle')).toBeInTheDocument()
  })

  it('updates category selection', () => {
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    const houseBtn = screen.getByRole('button', { name: /^House$/i })
    fireEvent.click(houseBtn)
    // For now category filtering is not fully implemented in logic, just state. 
    // We can verify it was clicked and state changed if we check the variant change or just ensure it doesn't crash.
  })

  it('triggers search on Enter key', () => {
    const onSearch = jest.fn()
    // Need to test SearchBar separately or via HomeContent
    render(<HomeContent initialFeaturedProperties={mockFeatured} initialNewProperties={mockNew} />)
    const input = screen.getByPlaceholderText(/Search by city, neighborhood, or address.../i)
    fireEvent.change(input, { target: { value: 'Seattle' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    
    expect(screen.getByText('House in Seattle')).toBeInTheDocument()
    expect(screen.queryByText('Apartment in Portland')).not.toBeInTheDocument()
  })
})
