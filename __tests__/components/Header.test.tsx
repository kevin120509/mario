import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/layout/Header'

describe('Header', () => {
  it('renders the logo and company name', () => {
    render(<Header />)
    expect(screen.getByText('LuxeEstate')).toBeInTheDocument()
    expect(screen.getByText('apartment')).toBeInTheDocument() // The icon text
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getAllByRole('link', { name: /Buy/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Rent/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Sell/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: /Saved Homes/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders search and notification buttons', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notifications_none/i })).toBeInTheDocument()
  })

  it('renders a hamburger button on mobile', () => {
    render(<Header />)
    expect(screen.getByLabelText(/menu/i)).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header />)
    const hamburger = screen.getByLabelText(/menu/i)
    fireEvent.click(hamburger)
    // The menu should be visible now. We can check for a specific class or presence of links in the mobile menu.
    // Based on the HTML, mobile menu links are block elements.
    const mobileLinks = screen.getAllByRole('link', { name: /Buy/i })
    expect(mobileLinks.length).toBeGreaterThan(1) // One in desktop, one in mobile
  })
})
