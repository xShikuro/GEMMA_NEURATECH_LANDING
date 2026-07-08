import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

function LabVisual() {
  return (
    <div className="lab-visual lab-visual--static" aria-hidden="true">
      <div className="lab-grid-plane"></div>
      <div className="lab-static-core">
        <SvgIcon id="i-cpu" />
      </div>
      <div className="lab-orbit lab-orbit--outer"></div>
      <div className="lab-orbit lab-orbit--inner"></div>
      <span className="lab-node lab-node--a"></span>
      <span className="lab-node lab-node--b"></span>
      <span className="lab-node lab-node--c"></span>
      <div className="lab-visual__label">
        <span>Neural Lab</span>
        <strong>Architecture Map</strong>
      </div>
    </div>
  )
}

export default function Lab({ copy }) {
  return (
    <section className="lab-section section-block tech-frame reveal" id="lab">
      <SectionHead title={copy.title} />

      <div className="lab-layout">
        <LabVisual />

        <div className="lab-copy">
          <span className="eyebrow">{copy.eyebrow}</span>
          <p>{copy.text}</p>

          <div className="lab-cards">
            {copy.cards.map((card) => (
              <article className="lab-card" key={card.title}>
                <SvgIcon id={card.icon} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="lab-metrics" aria-label={copy.title}>
            {copy.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
