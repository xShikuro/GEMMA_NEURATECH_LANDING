import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { createPaymentLink } from '../../api/paymentsApi'
import SvgIcon from '../icons/SvgIcon'

function formatDigits(value, maxLength) {
  return value.replace(/\D/g, '').slice(0, maxLength)
}

function formatLetters(value) {
  return value.replace(/[^\p{L}\s]/gu, '').replace(/\s{2,}/g, ' ').trimStart()
}

const fallbackBanks = [
  {
    id: 'hamkor',
    name: 'Hamkor Bank',
    shortName: 'HB',
    acquiringId: 'hamkor-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/hamkorbank/create',
  },
  {
    id: 'orient-finans',
    name: 'Orient Finans Bank',
    shortName: 'OF',
    acquiringId: 'orient-finans-bank-acquiring',
    paymentCreatePath: '/api/v1/payments/orientfinansbank/create',
  },
  {
    id: 'kapital',
    name: 'Kapital Bank',
    shortName: 'KB',
    acquiringId: 'multicard-kapital-acquiring',
    paymentCreatePath: '/api/v1/payments/multicard/create',
  },
  {
    id: 'sqb',
    name: 'SQB',
    shortName: 'SQB',
    acquiringId: 'sqb-acquiring',
    paymentCreatePath: '/api/v1/payments/sqb/create',
  },
]

const checkoutSteps = ['terms', 'details', 'bank', 'redirect']

export default function CheckoutModal({ copy, onClose, plan }) {
  const [step, setStep] = useState('terms')
  const [accepted, setAccepted] = useState(false)
  const [draft, setDraft] = useState({})
  const [isCreatingPaymentLink, setIsCreatingPaymentLink] = useState(false)
  const [paymentLinkError, setPaymentLinkError] = useState('')
  const titleId = useId()
  const closeButtonRef = useRef(null)
  const agreement = copy.agreement
  const fields = copy.fields || {}
  const paymentLinkLoadingText = copy.paymentLinkLoading || 'Создаем платежную ссылку...'
  const paymentLinkErrorText = copy.paymentLinkError || 'Не удалось создать платежную ссылку.'
  const paymentLinkMissingUrlText = copy.paymentLinkMissingUrl || 'Backend ответил без платежной ссылки.'
  const banks = Array.isArray(copy.banks) && copy.banks.length ? copy.banks : fallbackBanks
  const steps = [
    { id: 'terms', label: copy.stepTerms || 'Условия' },
    { id: 'details', label: copy.stepDetails || 'Заявка' },
    { id: 'bank', label: copy.stepBank || 'Банк' },
    { id: 'redirect', label: copy.stepRedirect || 'Оплата' },
  ]

  const stepTitle = {
    terms: copy.termsTitle,
    details: copy.detailsTitle || copy.stepDetails || 'Данные заявки',
    bank: copy.bankTitle || copy.stepBank || 'Выбор банка',
    redirect: copy.redirectTitle || copy.stepRedirect || 'Переход к оплате',
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
    setDraft((currentDraft) => ({ ...currentDraft, ...Object.fromEntries(formData.entries()) }))
    setPaymentLinkError('')
    setStep('bank')
  }

  const handleBankSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const bankId = formData.get('bankId')
    const selectedBank = banks.find((bank) => bank.id === bankId)
    const nextDraft = {
      ...draft,
      bankId,
      bankName: selectedBank?.name || '',
      acquiringId: selectedBank?.acquiringId || '',
      paymentCreatePath: selectedBank?.paymentCreatePath || '',
    }

    setDraft(nextDraft)
    setPaymentLinkError('')
    setIsCreatingPaymentLink(true)
    setStep('redirect')

    try {
      const { paymentUrl } = await createPaymentLink({
        bank: selectedBank,
        draft: nextDraft,
        messages: {
          bankUnavailable: copy.paymentLinkBankUnavailable,
          error: paymentLinkErrorText,
          missingAmount: copy.paymentLinkMissingAmount,
          missingServiceId: copy.paymentLinkMissingServiceId,
          missingUrl: paymentLinkMissingUrlText,
          network: copy.paymentLinkNetworkError,
        },
        plan,
      })

      window.location.assign(paymentUrl)
    } catch (error) {
      setPaymentLinkError(error instanceof Error ? error.message : paymentLinkErrorText)
      setStep('bank')
    } finally {
      setIsCreatingPaymentLink(false)
    }
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
            <div className="checkout-accept-links">
              <a href="/offer" target="_blank" rel="noreferrer">{copy.offerLinkLabel || 'Публичная оферта'}</a>
              <a href="/privacy-policy" target="_blank" rel="noreferrer">{copy.privacyLinkLabel || 'Политика конфиденциальности'}</a>
              <a href="/refund-policy" target="_blank" rel="noreferrer">{copy.refundLinkLabel || 'Возврат средств'}</a>
            </div>
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

        {step === 'bank' ? (
          <form className="checkout-form checkout-form--bank" onSubmit={handleBankSubmit}>
            <div className="checkout-bank-panel">
              <div className="checkout-bank-panel__top">
                <div>
                  <span>{copy.bankAcquiringLabel || 'Acquiring'}</span>
                  {copy.bankIntro ? <p>{copy.bankIntro}</p> : null}
                  {copy.paymentLinkIntro ? <p>{copy.paymentLinkIntro}</p> : null}
                </div>
                <strong>{banks.length}</strong>
              </div>

              <div className="checkout-bank-grid">
                {banks.map((bank) => (
                  <label className="checkout-bank-card" key={bank.id}>
                    <input name="bankId" type="radio" value={bank.id} required defaultChecked={draft.bankId ? draft.bankId === bank.id : bank.id === 'hamkor'} />
                    <div className="checkout-bank-card__mark">{bank.shortName || bank.name.slice(0, 2)}</div>
                    <div className="checkout-bank-card__content">
                      <strong>{bank.name}</strong>
                      <small>{copy.bankNote}</small>
                    </div>
                    <div className="checkout-bank-card__check" aria-hidden="true"></div>
                  </label>
                ))}
              </div>

              {paymentLinkError ? (
                <p className="checkout-step-note checkout-step-note--error">{paymentLinkError}</p>
              ) : null}
            </div>

            <div className="checkout-actions">
              <button className="btn btn--outline" type="button" disabled={isCreatingPaymentLink} onClick={() => setStep('details')}>
                {copy.backLabel}
              </button>
              <button className="btn btn--primary" type="submit" disabled={isCreatingPaymentLink}>
                {isCreatingPaymentLink ? paymentLinkLoadingText : copy.paymentLinkContinueLabel || copy.bankContinueLabel}
              </button>
            </div>
          </form>
        ) : null}

        {step === 'redirect' ? (
          <div className="checkout-redirect">
            <div className="checkout-status checkout-status--pending">
              <div className="checkout-status__signal" aria-hidden="true">
                <SvgIcon id="i-chip" />
              </div>
              <div className="checkout-status__content">
                <span className="checkout-status__eyebrow">{copy.stepRedirect || 'Оплата'}</span>
                <h3>{copy.redirectTitle}</h3>
                <p>{paymentLinkLoadingText}</p>
                {draft.bankName ? (
                  <div className="checkout-status__meta">
                    <span>
                      <em>{copy.bankSelectedLabel}</em>
                      <strong>{draft.bankName}</strong>
                      <small>{draft.acquiringId}</small>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
