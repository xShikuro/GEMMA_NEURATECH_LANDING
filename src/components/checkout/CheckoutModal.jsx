import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SvgIcon from '../icons/SvgIcon'

function formatCardNumber(value) {
  return value.replace(/\D/g, '').slice(0, 19).replace(/(.{4})/g, '$1 ').trim()
}

function formatDigits(value, maxLength) {
  return value.replace(/\D/g, '').slice(0, maxLength)
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)

  if (digits.length <= 2) {
    return digits
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

function formatLetters(value) {
  return value.replace(/[^\p{L}\s]/gu, '').replace(/\s{2,}/g, ' ').trimStart()
}

const checkoutSteps = ['terms', 'details', 'payment', 'confirm']

export default function CheckoutModal({ copy, onClose, plan }) {
  const [step, setStep] = useState('terms')
  const [accepted, setAccepted] = useState(false)
  const [draft, setDraft] = useState({})
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const agreement = copy.agreement
  const fields = copy.fields || {}
  const steps = [
    { id: 'terms', label: copy.stepTerms || 'Условия' },
    { id: 'details', label: copy.stepDetails || 'Заявка' },
    { id: 'payment', label: copy.stepPayment || 'Карта' },
    { id: 'confirm', label: copy.stepConfirm || 'SMS' },
  ]

  const stepTitle = {
    terms: copy.termsTitle,
    details: copy.detailsTitle || copy.stepDetails || 'Данные заявки',
    payment: copy.paymentTitle,
    confirm: copy.confirmTitle || copy.stepConfirm || 'SMS-подтверждение',
    success: copy.successTitle,
  }[step]

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

  const handleDetailsSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setDraft(Object.fromEntries(formData.entries()))
    setStep('payment')
  }

  const handlePaymentSubmit = (event) => {
    event.preventDefault()
    setStep('confirm')
  }

  const handleConfirmSubmit = (event) => {
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
            <h2 id={titleId}>{stepTitle}</h2>
          </div>
          <button ref={closeButtonRef} className="checkout-modal__close" type="button" onClick={onClose} aria-label={copy.closeLabel}>
            <SvgIcon id="i-close" />
          </button>
        </div>

        <div className="checkout-steps" aria-hidden="true">
          {steps.map((item, index) => {
            const currentIndex = checkoutSteps.indexOf(step)
            const itemIndex = checkoutSteps.indexOf(item.id)
            const className = [
              step === item.id ? 'is-active' : '',
              itemIndex < currentIndex ? 'is-complete' : '',
            ].filter(Boolean).join(' ')

            return (
              <span className={className} key={item.id}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <em>{item.label}</em>
              </span>
            )
          })}
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
            <button className="btn btn--primary" type="button" disabled={!accepted} onClick={() => setStep('details')}>
              {copy.continueLabel}
            </button>
          </div>
        ) : null}

        {step === 'details' ? (
          <form className="checkout-form checkout-form--details" onSubmit={handleDetailsSubmit}>
            {copy.detailsIntro ? <p className="checkout-step-note">{copy.detailsIntro}</p> : null}

            <div className="form-row">
              <label>
                <span>{fields.name}</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder={fields.name}
                  defaultValue={draft.name || ''}
                  onInput={(event) => {
                    event.currentTarget.value = formatLetters(event.currentTarget.value)
                  }}
                />
              </label>
              <label>
                <span>{fields.email}</span>
                <input name="email" type="email" autoComplete="email" required placeholder={fields.email} defaultValue={draft.email || ''} />
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>{fields.phone}</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  maxLength="15"
                  placeholder={fields.phone}
                  defaultValue={draft.phone || ''}
                  onInput={(event) => {
                    event.currentTarget.value = formatDigits(event.currentTarget.value, 15)
                  }}
                />
              </label>
              <label>
                <span>{fields.projectName}</span>
                <input name="projectName" type="text" required placeholder={fields.projectName} defaultValue={draft.projectName || ''} />
              </label>
            </div>

            <label>
              <span>{fields.projectType}</span>
              <input name="projectType" type="text" required placeholder={fields.projectType} defaultValue={draft.projectType || ''} />
            </label>

            <label>
              <span>{fields.description}</span>
              <textarea name="description" required placeholder={fields.description} defaultValue={draft.description || ''}></textarea>
            </label>

            <div className="checkout-actions">
              <button className="btn btn--outline" type="button" onClick={() => setStep('terms')}>
                {copy.backLabel}
              </button>
              <button className="btn btn--primary" type="submit">
                {copy.detailsContinueLabel}
              </button>
            </div>
          </form>
        ) : null}

        {step === 'payment' ? (
          <form className="checkout-form" onSubmit={handlePaymentSubmit}>
            {copy.paymentIntro ? <p className="checkout-step-note">{copy.paymentIntro}</p> : null}

            <label>
              <span>{fields.cardName}</span>
              <input
                name="cardName"
                type="text"
                autoComplete="cc-name"
                required
                placeholder={fields.cardName}
                onInput={(event) => {
                  event.currentTarget.value = formatLetters(event.currentTarget.value)
                }}
              />
            </label>

            <label>
              <span>{fields.cardNumber}</span>
              <input
                name="cardNumber"
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
                <span>{fields.expiry}</span>
                <input
                  name="cardExpiry"
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
                <span>{fields.cvc}</span>
                <input
                  name="cardCvc"
                  type="password"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  required
                  maxLength="4"
                  placeholder="CVC"
                  onInput={(event) => {
                    event.currentTarget.value = formatDigits(event.currentTarget.value, 4)
                  }}
                />
              </label>
            </div>

            <p className="checkout-secure">{copy.secureText}</p>

            <div className="checkout-actions">
              <button className="btn btn--outline" type="button" onClick={() => setStep('details')}>
                {copy.backLabel}
              </button>
              <button className="btn btn--primary" type="submit">
                {copy.cardContinueLabel}
              </button>
            </div>
          </form>
        ) : null}

        {step === 'confirm' ? (
          <form className="checkout-form checkout-form--confirm" onSubmit={handleConfirmSubmit}>
            <div className="checkout-confirm-panel">
              <SvgIcon id="i-shield" />
              <div>
                <h3>{copy.confirmTitle}</h3>
                <p>{copy.confirmText}</p>
                {draft.phone ? <strong>{draft.phone}</strong> : null}
              </div>
            </div>

            <label>
              <span>{fields.smsCode}</span>
              <input
                className="checkout-code-input"
                name="smsCode"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
                maxLength="8"
                placeholder="000000"
                onInput={(event) => {
                  event.currentTarget.value = formatDigits(event.currentTarget.value, 8)
                }}
              />
            </label>

            <p className="checkout-secure">{copy.smsHint}</p>

            <div className="checkout-actions">
              <button className="btn btn--outline" type="button" onClick={() => setStep('payment')}>
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
