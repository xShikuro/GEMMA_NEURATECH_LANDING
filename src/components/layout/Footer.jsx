import { footerServices, navLinks } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'
import Brand from './Brand'

const footerStats = ['AI Research', 'MLOps', 'Edge AI', 'Secure Data']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand className="brand--footer" />
            <p>Проектируем интеллектуальные системы, нейронные архитектуры и надежную инфраструктуру для AI-продуктов.</p>
            <div className="footer-badges" aria-label="Направления">
              {footerStats.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="footer-cta">
            <span>Готовы обсудить пилот?</span>
            <a className="btn btn--outline btn--small" href="#contact">Связаться</a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h3>Навигация</h3>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="footer-col">
            <h3>Услуги</h3>
            {footerServices.map((service) => (
              <a key={service} href="#solutions">{service}</a>
            ))}
          </div>

          <div className="footer-col">
            <h3>Технологии</h3>
            <a href="#tech">Нейронные сети</a>
            <a href="#tech">Компьютерное зрение</a>
            <a href="#tech">Облачные вычисления</a>
            <a href="#tech">MLOps-пайплайны</a>
          </div>

          <div className="footer-col footer-contacts">
            <h3>Контакты</h3>
            <a href="mailto:info@gemmaneuratech.com">info@gemmaneuratech.com</a>
            <a href="tel:+15551234567">+1 (555) 123-45-67</a>
            <span>Лондон, Великобритания</span>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><SvgIcon id="i-linkedin" /></a>
              <a href="#" aria-label="Twitter"><SvgIcon id="i-twitter" /></a>
              <a href="#" aria-label="GitHub"><SvgIcon id="i-github" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Gemma Neuratech. Все права защищены.</span>
          <span>Advanced Neural Architectures</span>
        </div>
      </div>
    </footer>
  )
}
