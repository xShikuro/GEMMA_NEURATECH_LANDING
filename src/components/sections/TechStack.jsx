import { techStack } from '../../data/landingData'
import TechIcon from '../icons/TechIcon'
import SectionHead from '../ui/SectionHead'

const scrollingTechStack = [...techStack, ...techStack]

export default function TechStack() {
  return (
    <section className="tech-stack section-block tech-frame reveal" id="tech">
      <SectionHead title="Технологии" />
      <div className="tech-list" aria-label="Технологии">
        <div className="tech-track">
          {scrollingTechStack.map((item, index) => (
            <article className="tech-item" key={`${item.name}-${index}`}>
              <TechIcon icon={item.icon} name={item.name} />
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
      <a className="btn btn--center btn--outline" href="#contact">Все технологии</a>
    </section>
  )
}
