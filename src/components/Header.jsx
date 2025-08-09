import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '../utils/constants'
import myLogo from '../assets/my-logo.svg'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    if (sidebarOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [sidebarOpen])

  // Optional: Focus first link when sidebar opens
  useEffect(() => {
    if (!sidebarOpen) return
    const focusable = sidebarRef.current?.querySelectorAll('a,button')
    focusable?.[0]?.focus()
  }, [sidebarOpen])

  return (
    <>
      <header className="header fixed top-0 left-0 right-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="header__container container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="header__content flex items-center justify-between h-14 sm:h-16">
            {/* Logo/Brand */}
            <div className="header__brand flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
              className="header__logo-button hover:scale-105 transition-transform cursor-pointer"
             >
              <img 
                src={myLogo} 
                alt="Majestyk Vaughns logo" 
                className="header__logo h-8 sm:h-10 w-auto" 
             />
          </button>
          </div>

            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="header__link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: theme toggle + mobile menu */}
            <div className="header__actions flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="header__theme-toggle p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {isDark ? (
                  // Moon icon
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                ) : (
                  // Sun icon
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-20a1 1 0 01-1-1V0a1 1 0 112 0v1a1 1 0 01-1 1zm10 10a1 1 0 011 1h1a1 1 0 110 2h-1a1 1 0 01-1-1 1 1 0 011-1zM1 12a1 1 0 011-1H1a1 1 0 110 2h1a1 1 0 01-1-1zm16.95 6.95a1 1 0 011.41 0l.71.71a1 1 0 11-1.41 1.41l-.71-.71a1 1 0 010-1.41zM3.93 4.22a1 1 0 000 1.41l.71.71A1 1 0 006.05 5l-.71-.71a1 1 0 00-1.41 0zM19.66 4.22a1 1 0 00-1.41 0L17.54 5a1 1 0 001.41 1.41l.71-.71a1 1 0 000-1.41zM4.22 17.66a1 1 0 011.41 0l.71.71A1 1 0 015 19.78l-.71-.71a1 1 0 010-1.41z" />
                  </svg>
                )}
              </button>
              {/* Mobile menu button */}
              <div className="header__menu-toggle md:hidden">
                <button
                  className="header__menu-button text-blue-400 cursor-pointer hover:scale-105 transition-transform p-1"
                  aria-label="Open navigation"
                  onClick={() => setSidebarOpen(true)}
                >
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay - only on mobile */}
      {sidebarOpen && (
        <div
          className="sidebar__overlay fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        ></div>
      )}

      {/* Sidebar Drawer - slides in from right, glassmorphic, full height */}
      <nav
        ref={sidebarRef}
        className={`sidebar fixed top-0 h-full bg-white/80 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-l-lg shadow-xl z-50 p-6 flex flex-col transition-all duration-300 ease-in-out md:hidden
          ${sidebarOpen ? 'sidebar--open' : 'sidebar--closed'}`}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <button
          className="sidebar__close absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <div className="sidebar__menu flex flex-col mt-12 space-y-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sidebar__link text-lg text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header