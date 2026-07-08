import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import IconSprite from './components/icons/IconSprite'
import BackgroundEffects from './components/layout/BackgroundEffects'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import WelcomeScreen from './components/sections/WelcomeScreen'
import { content } from './data/landingData'
import { pageContent } from './data/pageData'
import { useLandingRuntime } from './hooks/useLandingRuntime'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'

const languages = ['ru', 'en', 'uz']

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
  const [language, setLanguage] = useState('ru')
  const copy = content[language]
  const pages = pageContent[language]

  useLandingRuntime()

  useEffect(() => {
    document.documentElement.lang = language
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

      <div className="site">
        <Header
          copy={copy.header}
          language={language}
          navLinks={pages.navLinks}
          onLanguageToggle={toggleLanguage}
        />
        <main id="top">
          <Routes>
            <Route path="/" element={<HomePage copy={copy} />} />
            <Route path="/services" element={<ServicesPage copy={pages.servicesPage} />} />
            <Route path="/about" element={<AboutPage copy={pages.aboutPage} />} />
            <Route path="/contact" element={<ContactPage copy={pages.contactPage} />} />
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
