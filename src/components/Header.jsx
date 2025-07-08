import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '../utils/constants'
import myLogo from '../assets/my-logo.svg'

const Header = () => {
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
      <header className="header sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="header__container container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header__content flex items-center justify-between h-16">
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
                className="header__logo h-10 w-auto" 
             />
          </button>
          </div>

            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="header__link text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="header__menu-toggle md:hidden">
              <button
                className="header__menu-button text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Open navigation"
                onClick={() => setSidebarOpen(true)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
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
        className={`sidebar fixed top-0 right-0 h-full w-64 bg-white/20 dark:bg-gray-900/40 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-l-lg shadow-xl z-50 p-6 flex flex-col transition-transform duration-300 ease-in-out md:hidden
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
        style={{ willChange: 'transform' }}
      >
        <button
          className="sidebar__close absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
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
              className="sidebar__link text-lg text-white dark:text-gray-100 hover:text-blue-400 transition-colors"
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