import { render, screen } from '@testing-library/react'
import Header from '@/components/layout/Header'

describe('Header', () => {
  it('renders the logo and company name', () => {
    render(<Header />)
    expect(screen.getByText('LuxeEstate')).toBeInTheDocument()
    expect(screen.getByText('apartment')).toBeInTheDocument() // The icon text
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /Buy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Rent/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sell/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Saved Homes/i })).toBeInTheDocument()
  })

  it('renders search and notification buttons', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notifications_none/i })).toBeInTheDocument()
  })
})
