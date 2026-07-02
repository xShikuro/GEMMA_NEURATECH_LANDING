import { Link } from 'react-router-dom'
import SvgIcon from '../components/icons/SvgIcon'
import SectionHead from '../components/ui/SectionHead'

export default function ServicesPage({ copy }) {
  return (
    <div className="route-page">
      <section className="page-hero tech-frame reveal">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
        </div>
        <Link className="btn btn--primary" to="/contact">
          {copy.cta}
          <SvgIcon id="i-arrow" />
        </Link>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.pricingTitle} />
        <div className="pricing-grid">
          {copy.pricing.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <span>{plan.period}</span>
              <h2>{plan.name}</h2>
              <strong>{plan.price}</strong>
              <p>{plan.text}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="page-note">{copy.note}</p>
      </section>

      <section className="section-block tech-frame reveal">
        <SectionHead title={copy.servicesTitle} />
        <div className="page-card-grid">
          {copy.services.map((service) => (
            <article className="page-card" key={service.title}>
              <SvgIcon id={service.icon} />
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
