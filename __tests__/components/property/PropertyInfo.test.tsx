import { render, screen } from '@testing-library/react'
import { PropertyInfo } from '@/components/property/PropertyInfo'

describe('PropertyInfo', () => {
  const mockProps = {
    title: 'Modern Villa',
    address: '123 Luxury Ln',
    price: 1500000,
    description: 'A beautiful villa.',
    beds: 4,
    baths: 3,
    area: 250,
    type: 'FOR SALE'
  }

  it('renders property features correctly', () => {
    render(<PropertyInfo {...mockProps} />)
    
    expect(screen.getByText('250')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('About this home')).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })

  it('has read more button', () => {
    render(<PropertyInfo {...mockProps} />)
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
  })
})
