import { NAV_LINKS } from '../utils/constants'

const Header = () => {
  return (
    <header className="header sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="header__container container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header__content flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="header__brand flex-shrink-0">
            <h1 className="header__logo text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </h1>
          </div>

          {/* Navigation */}
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
            <button className="header__menu-button text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 