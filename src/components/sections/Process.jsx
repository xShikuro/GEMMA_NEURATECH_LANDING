import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

export default function Process({ copy }) {
  return (
    <section className="process-section section-block tech-frame reveal" id="roadmap">
      <SectionHead title={copy.title} />

      <div className="process-layout">
        <div className="process-intro">
          <span className="eyebrow">{copy.eyebrow}</span>
          <p>{copy.text}</p>
        </div>

        <div className="process-steps">
          {copy.items.map((item) => (
            <article className="process-card" key={item.step}>
              <span className="process-card__step">{item.step}</span>
              <SvgIcon id={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
