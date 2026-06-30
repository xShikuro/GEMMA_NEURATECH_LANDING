export default function Contact() {
  return (
    <section className="contact tech-frame reveal" id="contact">
      <div className="contact-copy">
        <span className="eyebrow">Контакт</span>
        <h2>Готовы обсудить ваш проект?</h2>
        <p>Свяжитесь с нами - мы поможем воплотить ваши идеи в интеллектуальные решения.</p>
        <a className="btn btn--primary" href="mailto:info@gemmaneuratech.com">Связаться с нами</a>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <label>
            <span>Ваше имя</span>
            <input type="text" name="name" placeholder="Ваше имя" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="Email" />
          </label>
        </div>
        <label>
          <span>Сообщение</span>
          <textarea name="message" placeholder="Сообщение"></textarea>
        </label>
        <button className="btn btn--outline" type="submit">Отправить сообщение</button>
      </form>
    </section>
  )
}
