'use client'

import { useState } from 'react'
import Input from './Input'
import Button from './Button'

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative group max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
        <span className="material-icons text-nordic-muted text-2xl group-focus-within:text-mosque transition-colors">search</span>
      </div>
      <Input 
        className="pl-12 pr-4 py-4 text-lg" 
        placeholder="Search by city, neighborhood, or address..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button 
        className="absolute inset-y-2 right-2 shadow-lg shadow-mosque/20"
        size="md"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  )
}
