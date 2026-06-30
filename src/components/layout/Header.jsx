import { navLinks } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

export default function Header() {
  return (
    <header className="site-header">
      <Brand />

      <nav className="main-nav" aria-label="Основная навигация">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="btn btn--ghost btn--small" href="#contact">Связаться с нами</a>
        <button className="lang-switch" type="button">
          RU
          <SvgIcon id="i-chevron" />
        </button>
      </div>
    </header>
  )
}
