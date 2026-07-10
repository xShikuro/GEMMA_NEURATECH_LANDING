import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import SvgIcon from '../icons/SvgIcon'

export default function CertificatePanel({ copy, image, file }) {
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

  const documentUrl = file || image
  const isPdf = copy.type === 'pdf' || documentUrl?.toLowerCase().includes('.pdf')
  const panelClassName = `certificate-panel${isPdf ? ' certificate-panel--pdf' : ''}`
  const modalTitle = copy.alt || copy.heading || copy.title
  const stampIcon = copy.stampIcon || 'i-shield'
  const stampTitle = copy.stampTitle || 'IT Park'
  const downloadLabel = copy.downloadLabel || 'Download file'

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
              <div className="certificate-modal__actions">
                <a className="certificate-modal__download" href={documentUrl} download={copy.downloadName || undefined}>
                  <SvgIcon id="i-arrow" />
                  {downloadLabel}
                </a>
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
            </div>
            <div className="certificate-modal__image">
              {isPdf ? (
                <iframe src={`${documentUrl}#toolbar=0&navpanes=0&view=FitH`} title={modalTitle}></iframe>
              ) : (
                <img src={documentUrl} alt={copy.alt} />
              )}
            </div>
          </div>
        </div>,
        document.body,
      )
    : null

  return (
    <div className={panelClassName}>
      <div className="certificate-panel__stamp" aria-hidden="true">
        {isPdf ? (
          <object className="certificate-panel__pdf-preview" data={`${documentUrl}#toolbar=0&navpanes=0&view=FitH`} type="application/pdf">
            <span>{copy.heading}</span>
          </object>
        ) : documentUrl ? (
          <img className="certificate-panel__background" src={documentUrl} alt="" />
        ) : null}
        <SvgIcon id={stampIcon} />
        <strong>{stampTitle}</strong>
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
        <div className="certificate-panel__actions">
          <button className="btn btn--outline certificate-panel__button" type="button" onClick={() => setIsOpen(true)}>
            <SvgIcon id={stampIcon} />
            {copy.button}
          </button>
          <a className="btn btn--outline certificate-panel__button certificate-panel__button--download" href={documentUrl} download={copy.downloadName || undefined}>
            <SvgIcon id="i-arrow" />
            {downloadLabel}
          </a>
        </div>
      </div>

      {modal}
    </div>
  )
}
