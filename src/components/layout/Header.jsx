import { NavLink } from 'react-router-dom'
import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

export default function Header({ copy, language, navLinks, onLanguageToggle }) {
  return (
    <header className="site-header">
      <Brand />

      <nav className="main-nav" aria-label={copy.navLabel}>
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            end={link.to === '/'}
            key={link.to}
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
          onClick={onLanguageToggle}
        >
          {language.toUpperCase()}
          <SvgIcon id="i-chevron" />
        </button>
      </div>
    </header>
  )
}
