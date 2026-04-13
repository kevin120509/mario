import { render, screen, fireEvent } from '@testing-library/react'
import { PropertyForm } from '@/components/admin/PropertyForm'

describe('PropertyForm', () => {
  it('renders all form sections', () => {
    render(<PropertyForm />)
    expect(screen.getByText(/Basic Information/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Description/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Location/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Details/i })).toBeInTheDocument()
  })

  it('renders required input fields', () => {
    render(<PropertyForm />)
    expect(screen.getByLabelText(/Property Title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument()
  })

  it('updates input values when changed', () => {
    render(<PropertyForm />)
    const titleInput = screen.getByLabelText(/Property Title/i) as HTMLInputElement
    fireEvent.change(titleInput, { target: { value: 'New Property' } })
    expect(titleInput.value).toBe('New Property')
  })

  it('validates required fields on submit', async () => {
    const handleSubmit = jest.fn()
    render(<PropertyForm onSubmit={handleSubmit} />)
    
    const saveButton = screen.getByRole('button', { name: /Save Property/i })
    fireEvent.click(saveButton)
    
    // Should not call handleSubmit if required fields are empty
    // Depending on implementation (HTML5 validation or custom)
    // For now, I'll check if the function is NOT called
    expect(handleSubmit).not.toHaveBeenCalled()
  })
})
