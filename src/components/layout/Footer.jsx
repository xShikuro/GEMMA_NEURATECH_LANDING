import { Link } from 'react-router-dom'
import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

const footerStats = ['AI Research', 'MLOps', 'Edge AI', 'Secure Data']

export default function Footer({ copy, navLinks }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand className="brand--footer" />
            <p>{copy.description}</p>
            <div className="footer-badges" aria-label={copy.directionsLabel}>
              {footerStats.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="footer-cta">
            <span>{copy.cta}</span>
            <Link className="btn btn--outline btn--small" to="/contact">{copy.ctaButton}</Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h3>{copy.navTitle}</h3>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h3>{copy.servicesTitle}</h3>
            {copy.services.map((service) => (
              <Link key={service} to="/services">{service}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h3>{copy.technologiesTitle}</h3>
            {copy.technologies.map((technology) => (
              <Link key={technology} to="/services">{technology}</Link>
            ))}
          </div>

          <div className="footer-col footer-contacts">
            <h3>{copy.contactsTitle}</h3>
            <a href="mailto:info@gemmaneuratech.com">info@gemmaneuratech.com</a>
            <a href="tel:+15551234567">+1 (555) 123-45-67</a>
            <span>{copy.location}</span>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><SvgIcon id="i-linkedin" /></a>
              <a href="#" aria-label="Twitter"><SvgIcon id="i-twitter" /></a>
              <a href="#" aria-label="GitHub"><SvgIcon id="i-github" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{copy.copyright}</span>
          <span>{copy.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
