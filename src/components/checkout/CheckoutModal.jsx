import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SvgIcon from '../icons/SvgIcon'

function formatCardNumber(value) {
  return value.replace(/\D/g, '').slice(0, 19).replace(/(.{4})/g, '$1 ').trim()
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)

  if (digits.length <= 2) {
    return digits
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

export default function CheckoutModal({ copy, onClose, plan }) {
  const [step, setStep] = useState('terms')
  const [accepted, setAccepted] = useState(false)
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const agreement = copy.agreement

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousActiveElement?.focus({ preventScroll: true })
    }
  }, [onClose])

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const handlePaymentSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setStep('success')
  }

  const modal = (
    <div className="checkout-modal" onClick={handleOverlayClick}>
      <div className="checkout-modal__dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="checkout-modal__top">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 id={titleId}>
              {step === 'terms' ? copy.termsTitle : null}
              {step === 'payment' ? copy.paymentTitle : null}
              {step === 'success' ? copy.successTitle : null}
            </h2>
          </div>
          <button ref={closeButtonRef} className="checkout-modal__close" type="button" onClick={onClose} aria-label={copy.closeLabel}>
            <SvgIcon id="i-close" />
          </button>
        </div>

        <div className="checkout-steps" aria-hidden="true">
          <span className={step === 'terms' ? 'is-active' : ''}>01 {copy.stepTerms}</span>
          <span className={step === 'payment' ? 'is-active' : ''}>02 {copy.stepPayment}</span>
        </div>

        <aside className="checkout-summary">
          <span>{copy.summaryLabel}</span>
          <strong>{plan.name}</strong>
          <em>{plan.price}</em>
        </aside>

        {step === 'terms' ? (
          <div className="checkout-terms">
            <div className="checkout-terms__panel">
              {agreement ? (
                <div className="checkout-agreement">
                  <div className="checkout-agreement__hero">
                    <span>{copy.stepTerms}</span>
                    <h3>{agreement.title}</h3>
                    <p>{agreement.intro}</p>
                  </div>

                  <div className="checkout-agreement__grid">
                    {agreement.sections.map((section) => (
                      <section className="checkout-agreement__section" key={section.title}>
                        <h4>{section.title}</h4>
                        <ul>
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>

                  <p className="checkout-agreement__notice">{agreement.notice}</p>
                </div>
              ) : (
                copy.terms.map((item) => (
                  <p key={item}>{item}</p>
                ))
              )}
            </div>
            <label className="checkout-accept">
              <input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} />
              <span>{copy.acceptText}</span>
            </label>
            <button className="btn btn--primary" type="button" disabled={!accepted} onClick={() => setStep('payment')}>
              {copy.continueLabel}
            </button>
          </div>
        ) : null}

        {step === 'payment' ? (
          <form className="checkout-form" onSubmit={handlePaymentSubmit}>
            <div className="form-row">
              <label>
                <span>{copy.fields.name}</span>
                <input name="name" type="text" autoComplete="name" required placeholder={copy.fields.name} />
              </label>
              <label>
                <span>{copy.fields.email}</span>
                <input name="email" type="email" autoComplete="email" required placeholder={copy.fields.email} />
              </label>
            </div>

            <label>
              <span>{copy.fields.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" required placeholder={copy.fields.phone} />
            </label>

            <label>
              <span>{copy.fields.cardName}</span>
              <input name="cc-name" type="text" autoComplete="cc-name" required placeholder={copy.fields.cardName} />
            </label>

            <label>
              <span>{copy.fields.cardNumber}</span>
              <input
                name="cc-number"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                required
                placeholder="0000 0000 0000 0000"
                onInput={(event) => {
                  event.currentTarget.value = formatCardNumber(event.currentTarget.value)
                }}
              />
            </label>

            <div className="form-row form-row--compact">
              <label>
                <span>{copy.fields.expiry}</span>
                <input
                  name="cc-exp"
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  required
                  placeholder="MM/YY"
                  onInput={(event) => {
                    event.currentTarget.value = formatExpiry(event.currentTarget.value)
                  }}
                />
              </label>
              <label>
                <span>{copy.fields.cvc}</span>
                <input name="cc-csc" type="password" inputMode="numeric" autoComplete="cc-csc" required maxLength="4" placeholder="CVC" />
              </label>
            </div>

            <p className="checkout-secure">{copy.secureText}</p>

            <div className="checkout-actions">
              <button className="btn btn--outline" type="button" onClick={() => setStep('terms')}>
                {copy.backLabel}
              </button>
              <button className="btn btn--primary" type="submit">
                {copy.payLabel}
              </button>
            </div>
          </form>
        ) : null}

        {step === 'success' ? (
          <div className="checkout-success">
            <SvgIcon id="i-shield" />
            <p>{copy.successText}</p>
            <button className="btn btn--primary" type="button" onClick={onClose}>
              {copy.doneLabel}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
