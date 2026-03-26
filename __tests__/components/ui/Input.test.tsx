import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '@/components/ui/Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Search..." />)
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument()
  })

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'New Value' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
