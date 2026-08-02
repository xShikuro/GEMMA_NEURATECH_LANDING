import SvgIcon from '../components/icons/SvgIcon'
import SectionHead from '../components/ui/SectionHead'

function formatLetters(value) {
  return value.replace(/[^\p{L}\s]/gu, '').replace(/\s{2,}/g, ' ').trimStart()
}

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
        <SectionHead title={copy.supportTitle} />
        <div className="contact-page-grid">
          <div className="contact-methods">
            {copy.methods.map((method) => (
              <a className="contact-method" href={method.href} key={method.title}>
                <SvgIcon id={method.icon} />
                <span>{method.title}</span>
                <strong>{method.value}</strong>
              </a>
            ))}
          </div>

          <div className="contact-detail-stack">
            {copy.corporateEmails?.length ? (
              <div className="corporate-email-panel contact-email-panel">
                <h3>{copy.corporateEmailsTitle}</h3>
                <div className="corporate-email-grid">
                  {copy.corporateEmails.map((item) => (
                    <a className="corporate-email-card" href={`mailto:${item.value}`} key={item.value}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      <em>{item.note}</em>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
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
        </div>
      </section>

      <section className="section-block tech-frame reveal contact-form-section">
        <SectionHead title={copy.formTitle} />
        <div className="contact-form-layout">
          <div className="contact-form-info">
            <span>{copy.eyebrow}</span>
            <h3>{copy.formInfoTitle}</h3>
            <p>{copy.formInfoText}</p>
            <ul>
              {copy.formInfoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <form className="contact-form route-contact-form" id="contact-form">
            <div className="form-row">
              <label>
                <span>{copy.name}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={copy.name}
                  onInput={(event) => {
                    event.currentTarget.value = formatLetters(event.currentTarget.value)
                  }}
                />
              </label>
              <label>
                <span>{copy.email}</span>
                <input type="email" name="email" placeholder={copy.email} />
              </label>
            </div>
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
