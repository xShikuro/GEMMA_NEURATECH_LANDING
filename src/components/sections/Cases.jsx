import { useState } from 'react'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'
import InfoModal from '../ui/InfoModal'
import SliderButtons from '../ui/SliderButtons'

function CaseArt({ type }) {
  if (type === 'brain') {
    return <SvgIcon id="i-brain" className="case-art case-art--brain" />
  }

  if (type === 'chart') {
    return (
      <div className="chart-art" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <i key={index}></i>
        ))}
      </div>
    )
  }

  if (['network', 'shield', 'cube'].includes(type)) {
    const iconByType = {
      network: 'i-network',
      shield: 'i-shield',
      cube: 'i-cube',
    }

    return <SvgIcon id={iconByType[type]} className={`case-art case-art--${type}`} />
  }

  return (
    <div className="robot-art" aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}

function CaseModalIcon({ type }) {
  const iconByType = {
    brain: 'i-brain',
    chart: 'i-crown',
    robot: 'i-chip',
    network: 'i-network',
    shield: 'i-shield',
    cube: 'i-cube',
  }

  return <SvgIcon id={iconByType[type] || 'i-info'} className="case-modal-icon" />
}

export default function Cases({ copy }) {
  const [activeCase, setActiveCase] = useState(null)
  const modal = copy.modal

  return (
    <section className="section-block tech-frame reveal" id="cases">
      <SectionHead title={copy.title} />
      <div className="case-grid" data-scroll-row>
        {copy.items.map((item) => (
          <article className="case-card" key={item.title}>
            <span className="case-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="case-card__link" type="button" onClick={() => setActiveCase(item)}>
              {copy.details}
              <SvgIcon id="i-arrow" />
            </button>
            <CaseArt type={item.art} />
          </article>
        ))}
      </div>
      <SliderButtons previousLabel={copy.previous} nextLabel={copy.next} />

      {activeCase && modal ? (
        <InfoModal
          className="info-modal__dialog--case"
          closeLabel={modal.closeLabel}
          eyebrow={modal.eyebrow}
          intro={activeCase.text}
          onClose={() => setActiveCase(null)}
          title={activeCase.title}
        >
          <div className="case-modal-layout">
            <aside className="case-modal-visual">
              <span className="case-tag">{activeCase.tag}</span>
              <CaseModalIcon type={activeCase.art} />
              <h3>{activeCase.title}</h3>
              <p>{activeCase.text}</p>
            </aside>

            <div className="case-modal-content">
              <section>
                <h3>{modal.whatTitle}</h3>
                <p>{activeCase.meaning}</p>
              </section>

              <section>
                <h3>{modal.includesTitle}</h3>
                <ul>
                  {activeCase.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3>{modal.processTitle}</h3>
                <ol>
                  {activeCase.process.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>

              <section>
                <h3>{modal.resultTitle}</h3>
                <ul>
                  {activeCase.result.map((item) => (
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
            <a className="btn btn--primary" href="#contact" onClick={() => setActiveCase(null)}>
              {modal.cta}
            </a>
          </div>
        </InfoModal>
      ) : null}
    </section>
  )
}
