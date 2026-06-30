import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

const traceLines = Array.from({ length: 8 }, (_, index) => index + 1)
const signalPackets = Array.from({ length: 6 }, (_, index) => index + 1)
const readoutBars = Array.from({ length: 12 }, (_, index) => index + 1)

export default function Lab({ copy }) {
  return (
    <section className="lab-section section-block tech-frame reveal" id="lab">
      <SectionHead title={copy.title} />

      <div className="lab-layout">
        <div className="lab-visual" aria-hidden="true">
          <span className="lab-scan"></span>
          <div className="lab-core">
            <span className="lab-core__ring lab-core__ring--outer"></span>
            <span className="lab-core__ring lab-core__ring--inner"></span>
            <SvgIcon id="i-chip" />
          </div>
          {traceLines.map((line) => (
            <span key={line} className={`lab-trace lab-trace--${line}`}></span>
          ))}
          {signalPackets.map((packet) => (
            <span key={packet} className={`lab-packet lab-packet--${packet}`}></span>
          ))}
          <span className="lab-pulse lab-pulse--a"></span>
          <span className="lab-pulse lab-pulse--b"></span>
          <span className="lab-pulse lab-pulse--c"></span>
          <div className="lab-readout">
            {readoutBars.map((bar) => (
              <span key={bar}></span>
            ))}
          </div>
        </div>

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
