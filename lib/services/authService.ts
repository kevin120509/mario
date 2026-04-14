export interface User {
  id: string
  name: string
  email: string
  photo?: string
}

/**
 * Service to manage user authentication (mocked).
 */
export const authService = {
  /**
   * Gets the current user.
   * @returns {User | null} The user or null.
   */
  getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem('luxeestate_user')
    return stored ? JSON.parse(stored) : null
  },

  /**
   * Logs in a user.
   * @param {string} email User email.
   * @param {string} name User name.
   */
  login(email: string, name: string): void {
    if (typeof window === 'undefined') return
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns'
    }
    localStorage.setItem('luxeestate_user', JSON.stringify(user))
    window.dispatchEvent(new Event('auth-state-changed'))
  },

  /**
   * Logs out the current user.
   */
  logout(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem('luxeestate_user')
    window.dispatchEvent(new Event('auth-state-changed'))
  },

  /**
   * Checks if user is logged in.
   * @returns {boolean} True if logged in.
   */
  isLoggedIn(): boolean {
    return !!this.getCurrentUser()
  }
}
