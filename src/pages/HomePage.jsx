import About from '../components/sections/About'
import Cases from '../components/sections/Cases'
import Contact from '../components/sections/Contact'
import Hero from '../components/sections/Hero'
import Lab from '../components/sections/Lab'
import Process from '../components/sections/Process'
import Solutions from '../components/sections/Solutions'
import TechStack from '../components/sections/TechStack'
import Why from '../components/sections/Why'

export default function HomePage({ copy }) {
  return (
    <div className="home-page">
      <Hero copy={copy.hero} />
      <About copy={copy.about} />
      <Solutions copy={copy.solutions} />
      <TechStack copy={copy.tech} />
      <Cases copy={copy.cases} />
      <Why copy={copy.why} />
      <Process copy={copy.process} />
      <Lab copy={copy.lab} />
      <Contact copy={copy.contact} />
    </div>
  )
}
