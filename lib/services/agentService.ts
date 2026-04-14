export interface Agent {
  id: string
  name: string
  role: string
  photo: string
  phone: string
  email: string
  rating: number
}

const STORAGE_KEY = 'luxeestate_agents'

const initialAgents: Agent[] = [
  {
    id: 'a1',
    name: 'Eleanor Vance',
    role: 'Luxury Real Estate Specialist',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns',
    phone: '+1 (555) 123-4567',
    email: 'eleanor@luxeestate.com',
    rating: 4.9
  },
  {
    id: 'a2',
    name: 'Marcus Thorne',
    role: 'Global Property Advisor',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLuM9qNltZNxgIWPtC3dVxQ_JLFKXYB9d_klGFux_2JVOGtRlbV4GvpvdT4wqpsueZnXFQhKJe9MGGvM6rXQX15iv80mbEKxjmy4X14AZRqvp573ZlKYDN9bAb0ka7B-g5mkOCP6nRuKC9QsO02JVq6gqZeAo3-7dUurVhhgPJGeuL0Gk2Cp3Wnu5mVlUtpajB2wtx8uMoytbh78i9RmHYtJg52ZELl9XdIC9f5Kix_lFMFoi6Ru61ARrEGIrvgvz4ViiKhufTns',
    phone: '+1 (555) 987-6543',
    email: 'marcus@luxeestate.com',
    rating: 4.8
  }
]

export const agentService = {
  getAgents(): Agent[] {
    if (typeof window === 'undefined') return initialAgents
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialAgents))
      return initialAgents
    }
    return JSON.parse(stored)
  },

  addAgent(agent: Omit<Agent, 'id'>): Agent {
    const agents = this.getAgents()
    const newAgent = { ...agent, id: Math.random().toString(36).substring(2, 9) }
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...agents, newAgent]))
    return newAgent
  }
}
