import SvgIcon from '../components/icons/SvgIcon'
import SectionHead from '../components/ui/SectionHead'

export default function ContactPage({ copy }) {
  return (
    <div className="route-page">
      <section className="page-hero tech-frame reveal">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
        </div>
      </section>

      <section className="section-block tech-frame reveal">
        <div className="contact-page-grid">
          <div>
            <SectionHead title={copy.supportTitle} />
            <div className="contact-methods">
              {copy.methods.map((method) => (
                <a className="contact-method" href={method.href} key={method.title}>
                  <SvgIcon id={method.icon} />
                  <span>{method.title}</span>
                  <strong>{method.value}</strong>
                </a>
              ))}
            </div>
            <div className="support-tags">
              {copy.support.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="location-panel">
              <h2>{copy.locationTitle}</h2>
              <p>{copy.location}</p>
            </div>
          </div>

          <form className="contact-form route-contact-form">
            <h2>{copy.formTitle}</h2>
            <label>
              <span>{copy.name}</span>
              <input type="text" name="name" placeholder={copy.name} />
            </label>
            <label>
              <span>{copy.email}</span>
              <input type="email" name="email" placeholder={copy.email} />
            </label>
            <label>
              <span>{copy.message}</span>
              <textarea name="message" placeholder={copy.message}></textarea>
            </label>
            <button className="btn btn--outline" type="submit" data-success-text={copy.success}>
              {copy.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
