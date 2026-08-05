import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import IconSprite from './components/icons/IconSprite'
import BackgroundEffects from './components/layout/BackgroundEffects'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import WelcomeScreen from './components/sections/WelcomeScreen'
import { content } from './data/landingData'
import { legalContent } from './data/legalData'
import { pageContent } from './data/pageData'
import { useLandingRuntime } from './hooks/useLandingRuntime'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'
import PaymentResultPage from './pages/PaymentResultPage'
import ServicesPage from './pages/ServicesPage'

const languages = ['ru', 'en', 'uz']
const legalBackLabels = {
  ru: 'К услугам',
  en: 'Services',
  uz: 'Xizmatlar',
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem('gemma:language')
    return languages.includes(savedLanguage) ? savedLanguage : 'ru'
  } catch {
    return 'ru'
  }
}

function RouteEffects({ language }) {
  const location = useLocation()
  const didInitialRoute = useRef(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const isInitialHome = !didInitialRoute.current && location.pathname === '/'
    didInitialRoute.current = true

    if (isInitialHome) {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach((item) => {
        item.classList.add('is-visible')
      })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, language])

  return null
}

function AppShell() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const copy = content[language]
  const pages = pageContent[language]
  const legal = legalContent[language]

  useLandingRuntime()

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('gemma:language', language)
    } catch {
      // Language persistence is optional.
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => {
      const currentIndex = languages.indexOf(currentLanguage)
      return languages[(currentIndex + 1) % languages.length]
    })
  }

  return (
    <>
      <RouteEffects language={language} />
      <IconSprite />
      <WelcomeScreen />
      <BackgroundEffects />

      <Header
        copy={copy.header}
        language={language}
        navLinks={pages.navLinks}
        onLanguageToggle={toggleLanguage}
      />
      <div className="site">
        <main id="top">
          <Routes>
            <Route path="/" element={<HomePage copy={copy} />} />
            <Route path="/services" element={<ServicesPage copy={pages.servicesPage} language={language} />} />
            <Route path="/about" element={<AboutPage copy={pages.aboutPage} />} />
            <Route path="/contact" element={<ContactPage copy={pages.contactPage} />} />
            <Route path="/offer" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.offer} />} />
            <Route path="/public-offer" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.offer} />} />
            <Route path="/privacy-policy" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.privacy} />} />
            <Route path="/privacy" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.privacy} />} />
            <Route path="/refund-policy" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.refund} />} />
            <Route path="/refund" element={<LegalPage backLabel={legalBackLabels[language]} documentContent={legal.refund} />} />
            <Route path="/payment/result" element={<PaymentResultPage copy={pages.paymentResultPage} language={language} />} />
            <Route path="/payment/success" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="success" language={language} />} />
            <Route path="/payment/failure" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="failed" language={language} />} />
            <Route path="/payment/failed" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="failed" language={language} />} />
            <Route path="/payment/cancel" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="failed" language={language} />} />
            <Route path="/payment/canceled" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="failed" language={language} />} />
            <Route path="/payment/pending" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="pending" language={language} />} />
            <Route path="/payment/error" element={<PaymentResultPage copy={pages.paymentResultPage} defaultStatus="error" language={language} />} />
            <Route path="*" element={<NotFoundPage copy={pages.notFound} />} />
          </Routes>
        </main>
        <Footer copy={copy.footer} navLinks={pages.navLinks} />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
