import { useEffect, useState } from 'react'
import IconSprite from './components/icons/IconSprite'
import BackgroundEffects from './components/layout/BackgroundEffects'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Cases from './components/sections/Cases'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Lab from './components/sections/Lab'
import Process from './components/sections/Process'
import Solutions from './components/sections/Solutions'
import Stats from './components/sections/Stats'
import TechStack from './components/sections/TechStack'
import WelcomeScreen from './components/sections/WelcomeScreen'
import Why from './components/sections/Why'
import { content } from './data/landingData'
import { useLandingRuntime } from './hooks/useLandingRuntime'

function App() {
  const [language, setLanguage] = useState('ru')
  const copy = content[language]

  useLandingRuntime()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'ru' ? 'en' : 'ru'))
  }

  return (
    <>
      <IconSprite />
      <WelcomeScreen />
      <BackgroundEffects />

      <div className="site">
        <Header
          copy={copy.header}
          language={language}
          navLinks={copy.navLinks}
          onLanguageToggle={toggleLanguage}
        />
        <main id="top">
          <Hero copy={copy.hero} />
          <Stats stats={copy.stats} />
          <About copy={copy.about} />
          <Solutions copy={copy.solutions} />
          <TechStack copy={copy.tech} />
          <Cases copy={copy.cases} />
          <Why copy={copy.why} />
          <Process copy={copy.process} />
          <Lab copy={copy.lab} />
          <Contact copy={copy.contact} />
        </main>
        <Footer copy={copy.footer} navLinks={copy.navLinks} />
      </div>
    </>
  )
}

export default App
