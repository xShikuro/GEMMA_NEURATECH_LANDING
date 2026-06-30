import IconSprite from './components/icons/IconSprite'
import BackgroundEffects from './components/layout/BackgroundEffects'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Cases from './components/sections/Cases'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Solutions from './components/sections/Solutions'
import Stats from './components/sections/Stats'
import TechStack from './components/sections/TechStack'
import WelcomeScreen from './components/sections/WelcomeScreen'
import Why from './components/sections/Why'
import { useLandingRuntime } from './hooks/useLandingRuntime'

function App() {
  useLandingRuntime()

  return (
    <>
      <IconSprite />
      <WelcomeScreen />
      <BackgroundEffects />

      <div className="site">
        <Header />
        <main id="top">
          <Hero />
          <Stats />
          <About />
          <Solutions />
          <TechStack />
          <Cases />
          <Why />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
