import { Link } from 'react-router-dom'

function formatLetters(value) {
  return value.replace(/[^\p{L}\s]/gu, '').replace(/\s{2,}/g, ' ').trimStart()
}

export default function Contact({ copy }) {
  const corporateEmails = copy.corporateEmails ?? []
  const hasEmails = Boolean(copy.directEmail || corporateEmails.length)

  return (
    <section className="contact tech-frame reveal" id="contact">
      <div className="contact-copy">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <Link className="btn btn--primary" to={copy.linkHref || '/contact'}>{copy.link}</Link>
        {hasEmails ? (
          <div className="contact-email-stack">
            {copy.corporateEmailsTitle ? <span className="contact-email-stack__title">{copy.corporateEmailsTitle}</span> : null}
            {copy.directEmail ? (
              <a className="contact-direct" href={`mailto:${copy.directEmail}`}>
                <span>{copy.directEmailLabel}</span>
                <strong>{copy.directEmail}</strong>
              </a>
            ) : null}
            {corporateEmails.map((item) => (
              <a className="contact-direct" href={`mailto:${item.value}`} key={item.value}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                {item.note ? <em>{item.note}</em> : null}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <form className="contact-form">
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
    </section>
  )
}
