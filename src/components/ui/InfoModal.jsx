import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import SvgIcon from '../icons/SvgIcon'

export default function InfoModal({ children, className = '', closeLabel = 'Close', eyebrow, intro, onClose, title }) {
  const titleId = useId()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousHtmlOverflow = document.documentElement.style.overflow
    const previousBodyOverflow = document.body.style.overflow
    const scrollY = window.scrollY

    document.body.classList.add('info-modal-open')
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
      document.body.classList.remove('info-modal-open')
      document.documentElement.style.overflow = previousHtmlOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
      window.scrollTo(0, scrollY)
      previousActiveElement?.focus({ preventScroll: true })
    }
  }, [onClose])

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div className="info-modal" onClick={handleOverlayClick}>
      <div className={`info-modal__dialog ${className}`.trim()} role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="info-modal__top">
          <div>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h2 id={titleId}>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>
          <button ref={closeButtonRef} className="info-modal__close" type="button" onClick={onClose} aria-label={closeLabel}>
            <SvgIcon id="i-close" />
          </button>
        </div>
        <div className="info-modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
