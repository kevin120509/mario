/**
 * Service to manage favorite properties using localStorage.
 */
export const favoritesService = {
  /**
   * Gets all favorite property IDs.
   * @returns {string[]} List of property IDs.
   */
  getFavorites(): string[] {
    if (typeof window === 'undefined') return []
    const stored = localStorage.getItem('luxeestate_favorites')
    return stored ? JSON.parse(stored) : []
  },

  /**
   * Adds a property to favorites.
   * @param {string} id The property ID.
   */
  addFavorite(id: string): void {
    if (typeof window === 'undefined') return
    const favorites = this.getFavorites()
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id]
      localStorage.setItem('luxeestate_favorites', JSON.stringify(newFavorites))
      // Dispatch custom event to notify components
      window.dispatchEvent(new Event('favorites-updated'))
    }
  },

  /**
   * Removes a property from favorites.
   * @param {string} id The property ID.
   */
  removeFavorite(id: string): void {
    if (typeof window === 'undefined') return
    const favorites = this.getFavorites()
    const newFavorites = favorites.filter(f => f !== id)
    localStorage.setItem('luxeestate_favorites', JSON.stringify(newFavorites))
    // Dispatch custom event to notify components
    window.dispatchEvent(new Event('favorites-updated'))
  },

  /**
   * Checks if a property is in favorites.
   * @param {string} id The property ID.
   * @returns {boolean} True if favorite.
   */
  isFavorite(id: string): boolean {
    return this.getFavorites().includes(id)
  },

  /**
   * Toggles a property in favorites.
   * @param {string} id The property ID.
   */
  toggleFavorite(id: string): void {
    if (this.isFavorite(id)) {
      this.removeFavorite(id)
    } else {
      this.addFavorite(id)
    }
  }
}
