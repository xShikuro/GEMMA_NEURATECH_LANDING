import { Link } from 'react-router-dom'
import SvgIcon from '../components/icons/SvgIcon'

export default function LegalPage({ backLabel = 'Services', documentContent }) {
  return (
    <div className="route-page legal-page">
      <section className="page-hero tech-frame reveal legal-hero">
        <div>
          <span className="eyebrow">{documentContent.eyebrow}</span>
          <h1>{documentContent.title}</h1>
          <p>{documentContent.subtitle}</p>
        </div>
        <Link className="btn btn--outline" to="/services">
          {backLabel}
          <SvgIcon id="i-arrow" />
        </Link>
      </section>

      <section className="section-block tech-frame reveal legal-document">
        <div className="legal-document__intro">
          <span>{documentContent.updated}</span>
          {documentContent.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="legal-meta-grid">
          {documentContent.meta.map((item) => (
            <article className="legal-meta-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className="legal-layout">
          <aside className="legal-toc" aria-label={documentContent.title}>
            {documentContent.sections.map((section, index) => (
              <a href={`#section-${index + 1}`} key={section.title}>
                {section.title}
              </a>
            ))}
          </aside>

          <div className="legal-section-stack">
            {documentContent.sections.map((section, index) => (
              <article className="legal-section-card" id={`section-${index + 1}`} key={section.title}>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
