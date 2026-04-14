import { authService } from '@/lib/services/authService'

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
    window.dispatchEvent = jest.fn()
  })

  it('starts with no user logged in', () => {
    expect(authService.isLoggedIn()).toBe(false)
    expect(authService.getCurrentUser()).toBeNull()
  })

  it('logs in a user and persists to localStorage', () => {
    authService.login('test@example.com', 'Test User')
    expect(authService.isLoggedIn()).toBe(true)
    const user = authService.getCurrentUser()
    expect(user?.email).toBe('test@example.com')
    expect(user?.name).toBe('Test User')
    expect(window.dispatchEvent).toHaveBeenCalled()
  })

  it('logs out a user', () => {
    authService.login('test@example.com', 'Test User')
    authService.logout()
    expect(authService.isLoggedIn()).toBe(false)
    expect(authService.getCurrentUser()).toBeNull()
  })
})
