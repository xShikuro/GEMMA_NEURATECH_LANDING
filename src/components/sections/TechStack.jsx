import { useState } from 'react'
import { techStack } from '../../data/landingData'
import TechIcon from '../icons/TechIcon'
import SectionHead from '../ui/SectionHead'
import InfoModal from '../ui/InfoModal'

const scrollingTechStack = [...techStack, ...techStack]
const techByName = new Map(techStack.map((item) => [item.name, item]))

export default function TechStack({ copy }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modal = copy.modal

  return (
    <section className="tech-stack section-block tech-frame reveal" id="tech">
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
      </div>
      <button className="btn btn--center btn--outline tech-contact" type="button" onClick={() => setIsModalOpen(true)}>{copy.all}</button>

      {isModalOpen && modal ? (
        <InfoModal
          className="info-modal__dialog--wide"
          closeLabel={modal.closeLabel}
          eyebrow={modal.eyebrow}
          intro={modal.intro}
          onClose={() => setIsModalOpen(false)}
          title={modal.title}
        >
          <div className="tech-modal-grid">
            {modal.categories.map((category) => (
              <article className="tech-modal-card" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <div className="tech-modal-tags">
                  {category.technologies.map((technologyName) => {
                    const technology = techByName.get(technologyName) || { name: technologyName }

                    return (
                      <span className="tech-modal-tag" key={`${category.title}-${technologyName}`}>
                        <TechIcon icon={technology.icon} name={technology.name} />
                        <span>{technology.name}</span>
                      </span>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
          <div className="info-modal-cta">
            <p>{modal.ctaText}</p>
            <a className="btn btn--primary" href="#contact" onClick={() => setIsModalOpen(false)}>
              {modal.cta}
            </a>
          </div>
        </InfoModal>
      ) : null}
    </section>
  )
}
