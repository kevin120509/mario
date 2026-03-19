import { render, screen } from '@testing-library/react'
import Home from '@/app/page.tsx'

describe('Home Page', () => {
  it('renders the hero section with heading', () => {
    render(<Home />)
    expect(screen.getByText(/Find your/i)).toBeInTheDocument()
    expect(screen.getByText(/sanctuary/i)).toBeInTheDocument()
  })

  it('renders the search bar', () => {
    render(<Home />)
    expect(screen.getByPlaceholderText(/Search by city, neighborhood, or address.../i)).toBeInTheDocument()
    // Specifically look for the search button in the hero section
    const searchButtons = screen.getAllByRole('button', { name: /Search/i })
    expect(searchButtons.some(btn => btn.textContent === 'Search')).toBe(true)
  })

  it('renders category filters', () => {
    render(<Home />)
    expect(screen.getAllByRole('button', { name: /^All$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: /^House$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Apartment$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Villa$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Penthouse$/i })).toBeInTheDocument()
  })

  it('renders featured collections section', () => {
    render(<Home />)
    expect(screen.getByText(/Featured Collections/i)).toBeInTheDocument()
    expect(screen.getByText(/Curated properties for the discerning eye./i)).toBeInTheDocument()
  })

  it('renders new in market section', () => {
    render(<Home />)
    expect(screen.getByText(/New in Market/i)).toBeInTheDocument()
    expect(screen.getByText(/Fresh opportunities added this week./i)).toBeInTheDocument()
  })

  it('renders load more button', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /Load more properties/i })).toBeInTheDocument()
  })
})
