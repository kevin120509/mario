import { render, screen } from '@testing-library/react'
import NewPropertyPage from '@/app/admin/properties/new/page'

describe('Admin New Property Page', () => {
  it('renders the "Add New Property" heading', () => {
    render(<NewPropertyPage />)
    expect(screen.getByRole('heading', { name: /Add New Property/i })).toBeInTheDocument()
  })

  it('renders basic information fields', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Property Title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument()
  })

  it('renders description textarea', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument()
  })

  it('renders location field', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument()
  })

  it('renders details fields', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Area/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Year Built/i)).toBeInTheDocument()
  })

  it('renders numerical property details', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Bedrooms/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Bathrooms/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Parking/i)).toBeInTheDocument()
  })

  it('renders amenities checkboxes', () => {
    render(<NewPropertyPage />)
    expect(screen.getByLabelText(/Swimming Pool/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Garden/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Air Conditioning/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Smart Home/i)).toBeInTheDocument()
  })

  it('renders save buttons', () => {
    render(<NewPropertyPage />)
    expect(screen.getByRole('button', { name: /Save Property/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Save Draft/i })).toBeInTheDocument()
  })
})
