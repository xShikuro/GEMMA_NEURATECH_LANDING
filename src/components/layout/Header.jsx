import { useEffect, useId, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

export default function Header({ copy, language, navLinks, onLanguageToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navId = useId()

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header${isMenuOpen ? ' is-menu-open' : ''}`}>
      <Brand />

      <button className="nav-backdrop" type="button" aria-label="Close navigation" onClick={closeMenu}></button>

      <nav className="main-nav" id={navId} aria-label={copy.navLabel}>
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            end={link.to === '/'}
            key={link.to}
            onClick={closeMenu}
            to={link.to}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="lang-switch"
          type="button"
          aria-label={copy.switchLabel}
          title={copy.switchLabel}
          onClick={() => {
            onLanguageToggle()
            closeMenu()
          }}
        >
          {language.toUpperCase()}
          <SvgIcon id="i-chevron" />
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-controls={navId}
          aria-expanded={isMenuOpen}
          aria-label={copy.navLabel}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
