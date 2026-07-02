import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SvgIcon from '../icons/SvgIcon'

export default function CertificatePanel({ copy, image }) {
  const [isOpen, setIsOpen] = useState(false)
  const titleId = useId()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const scrollY = window.scrollY

    document.body.classList.add('certificate-modal-open')
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus({ preventScroll: true })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('certificate-modal-open')
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
      window.scrollTo(0, scrollY)
      previousActiveElement?.focus({ preventScroll: true })
    }
  }, [isOpen])

  if (!copy) return null

  const modal = isOpen && typeof document !== 'undefined'
    ? createPortal(
        <div
          className="certificate-modal"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          <div
            className="certificate-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="certificate-modal__top">
              <div>
                <span className="eyebrow">{copy.eyebrow}</span>
                <h2 id={titleId}>{copy.title}</h2>
              </div>
              <button
                ref={closeButtonRef}
                className="certificate-modal__close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label={copy.closeLabel}
              >
                <SvgIcon id="i-close" />
              </button>
            </div>
            <div className="certificate-modal__image">
              <img src={image} alt={copy.alt} />
            </div>
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <div className="certificate-panel">
      <div className="certificate-panel__stamp" aria-hidden="true">
        <SvgIcon id="i-shield" />
        <strong>IT Park</strong>
        <span>{copy.meta[0]}</span>
      </div>

      <div className="certificate-panel__copy">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.heading}</h2>
        <p>{copy.text}</p>
        <div className="certificate-panel__meta">
          {copy.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <button className="btn btn--outline certificate-panel__button" type="button" onClick={() => setIsOpen(true)}>
          <SvgIcon id="i-shield" />
          {copy.button}
        </button>
      </div>

      {modal}
    </div>
  )
}
