import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

export default function Header({ copy, language, navLinks, onLanguageToggle }) {
  return (
    <header className="site-header">
      <Brand />

      <nav className="main-nav" aria-label={copy.navLabel}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="btn btn--ghost btn--small" href="#contact">{copy.contact}</a>
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
