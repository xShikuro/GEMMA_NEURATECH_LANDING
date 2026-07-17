import { useState } from 'react'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'
import InfoModal from '../ui/InfoModal'
import SliderButtons from '../ui/SliderButtons'

function NeuralIcon() {
  return (
    <div className="solution-icon neural-icon" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}

export default function Solutions({ copy }) {
  const [activeSolution, setActiveSolution] = useState(null)
  const modal = copy.modal

  return (
    <section className="section-block tech-frame reveal" id="solutions">
      <SectionHead title={copy.title} />

      <div className="solution-grid" data-scroll-row>
        {copy.items.map((solution) => (
          <article className="solution-card" key={solution.title}>
            {solution.neuralIcon ? <NeuralIcon /> : <SvgIcon id={solution.icon} className="card-svg" />}
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <button className="solution-card__link" type="button" onClick={() => setActiveSolution(solution)}>
              {copy.details}
              <SvgIcon id="i-arrow" />
            </button>
          </article>
        ))}
      </div>

      <SliderButtons previousLabel={copy.previous} nextLabel={copy.next} />

      {activeSolution && modal ? (
        <InfoModal
          className="info-modal__dialog--solution"
          closeLabel={modal.closeLabel}
          eyebrow={modal.eyebrow}
          intro={activeSolution.text}
          onClose={() => setActiveSolution(null)}
          title={activeSolution.title}
        >
          <div className="solution-modal-layout">
            <aside className="solution-modal-visual">
              {activeSolution.neuralIcon ? <NeuralIcon /> : <SvgIcon id={activeSolution.icon} className="card-svg" />}
              <h3>{activeSolution.title}</h3>
              <p>{activeSolution.text}</p>
            </aside>

            <div className="solution-modal-content">
              <section>
                <h3>{modal.scopeTitle}</h3>
                <ul>
                  {modal.scopeItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>{modal.workflowTitle}</h3>
                <ol>
                  {modal.workflowItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <section>
                <h3>{modal.resultTitle}</h3>
                <ul>
                  {modal.resultItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="info-modal-cta">
            <div>
              <h3>{modal.ctaTitle}</h3>
              <p>{modal.ctaText}</p>
            </div>
            <a className="btn btn--primary" href="#contact" onClick={() => setActiveSolution(null)}>
              {modal.cta}
            </a>
          </div>
        </InfoModal>
      ) : null}
    </section>
  )
}
