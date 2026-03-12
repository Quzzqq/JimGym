import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { User } from '../types'
import { USERS } from '../data/mockData'

interface AuthContextType {
  user: User | null
  login: (login: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const STORAGE_KEY = 'jimgym_user'

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as User
        const found = USERS.find(u => u.login === parsed.login)
        if (found) setUser(found)
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    setInitialized(true)
  }, [])

  const login = useCallback((loginName: string, password: string): boolean => {
    const found = USERS.find(u => u.login === loginName && u.password === password)
    if (found) {
      setUser(found)
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ login: found.login }))
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  if (!initialized) return null

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
