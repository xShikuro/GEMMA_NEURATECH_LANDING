export default function Contact({ copy }) {
  return (
    <section className="contact tech-frame reveal" id="contact">
      <div className="contact-copy">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <a className="btn btn--primary" href="mailto:info@gemmaneuratech.com">{copy.link}</a>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <label>
            <span>{copy.name}</span>
            <input type="text" name="name" placeholder={copy.name} />
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
