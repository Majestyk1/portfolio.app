import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    } catch (_) {}
    return false
  })

  // Keep theme in sync with system preference when there is no stored preference
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setIsDark(e.matches)
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Update HTML/body classes and localStorage
    const html = document.documentElement
    const body = document.body
    html.classList.toggle('dark', isDark)
    body.classList.toggle('dark', isDark)
    html.setAttribute('data-theme', isDark ? 'dark' : 'light')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch (_) {}
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
} 