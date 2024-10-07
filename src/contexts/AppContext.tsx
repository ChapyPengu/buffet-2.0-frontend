import { useState, useEffect, useContext, createContext, ReactNode } from 'react'
import Service from '../services/service'
import { User } from '../types'

interface AppContextInterface {
  user: User | null
  isAuthtenticated: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AppContext = createContext<AppContextInterface | null>(null)

export function useApp() {
  const context = useContext(AppContext)
  if (!context)
    throw new Error('Context not found')
  return context
}

export function AppProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState(null)
  const [isAuthtenticated, setIsAuthtenticated] = useState(false)

  async function login(username: string, password: string) {
    const response = await Service.postLogin(username, password)
    setUser(response.data)
    setIsAuthtenticated(true)
  }

  async function register(username: string, password: string) {
    const response = await Service.postRegister(username, password)
    setUser(response.data)
    setIsAuthtenticated(true)
  }

  async function logout() {
    await Service.postLogout()
    setUser(null)
    setIsAuthtenticated(false)
  }

  async function verify() {
    try {
      const response = await Service.postVerify()
      setUser(response.data)
      setIsAuthtenticated(true)
    } catch (error) {
      console.log('No authtenticated')
    }
  }

  useEffect(() => {
    verify()
  }, [])

  return (
    <AppContext.Provider value={{
      user,
      isAuthtenticated,
      login,
      register,
      logout
    }}>
      {children}
    </AppContext.Provider>
  )
}