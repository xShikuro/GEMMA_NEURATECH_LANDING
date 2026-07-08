import { useState } from 'react'
import { techStack } from '../../data/landingData'
import TechIcon from '../icons/TechIcon'
import SectionHead from '../ui/SectionHead'

const scrollingTechStack = [...techStack, ...techStack]
const previewTechStack = techStack.slice(0, 8)

export default function TechStack({ copy }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const mobileTechStack = isExpanded ? techStack : previewTechStack
  const collapseLabel = copy.title === 'Technologies' ? 'Hide' : 'Скрыть'

  return (
    <section className={`tech-stack section-block tech-frame reveal${isExpanded ? ' is-expanded' : ''}`} id="tech">
      <SectionHead title={copy.title} />
      <div className="tech-list" aria-label={copy.title}>
        <div className="tech-track tech-track--desktop">
          {scrollingTechStack.map((item, index) => (
            <article className="tech-item" key={`${item.name}-${index}`}>
              <TechIcon icon={item.icon} name={item.name} />
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
        <div className="tech-track tech-track--mobile">
          {mobileTechStack.map((item) => (
            <article className="tech-item" key={item.name}>
              <TechIcon icon={item.icon} name={item.name} />
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
      <a className="btn btn--center btn--outline tech-contact" href="#contact">{copy.all}</a>
      <button className="btn btn--center btn--outline tech-toggle" type="button" onClick={() => setIsExpanded((current) => !current)}>
        {isExpanded ? collapseLabel : copy.all}
      </button>
    </section>
  )
}
