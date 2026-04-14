import { favoritesService } from '@/lib/services/favoritesService'

describe('favoritesService', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
    // Mock dispatchEvent
    window.dispatchEvent = jest.fn()
  })

  it('starts with an empty list of favorites', () => {
    expect(favoritesService.getFavorites()).toEqual([])
  })

  it('adds a favorite and persists to localStorage', () => {
    favoritesService.addFavorite('p1')
    expect(favoritesService.getFavorites()).toContain('p1')
    expect(localStorage.getItem('luxeestate_favorites')).toContain('p1')
    expect(window.dispatchEvent).toHaveBeenCalled()
  })

  it('removes a favorite', () => {
    favoritesService.addFavorite('p1')
    favoritesService.removeFavorite('p1')
    expect(favoritesService.getFavorites()).not.toContain('p1')
  })

  it('checks if a property is favorite', () => {
    favoritesService.addFavorite('p1')
    expect(favoritesService.isFavorite('p1')).toBe(true)
    expect(favoritesService.isFavorite('p2')).toBe(false)
  })

  it('toggles favorite', () => {
    favoritesService.toggleFavorite('p1')
    expect(favoritesService.isFavorite('p1')).toBe(true)
    favoritesService.toggleFavorite('p1')
    expect(favoritesService.isFavorite('p1')).toBe(false)
  })
})
