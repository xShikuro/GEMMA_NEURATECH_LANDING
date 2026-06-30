import { useEffect, useRef } from 'react'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

export default function Lab({ copy }) {
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaRef.current) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let disposed = false
    let effect

    Promise.all([
      import('three'),
      import('vanta/dist/vanta.globe.min.js'),
    ]).then(([THREE, globeModule]) => {
      if (disposed || !vantaRef.current) return

      const GLOBE = globeModule.default?.default || globeModule.default || window.VANTA?.GLOBE
      if (typeof GLOBE !== 'function') return

      effect = GLOBE({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 260,
        minWidth: 260,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x020b0f,
        color: 0x34edf0,
        color2: 0xf5ffff,
        size: 0.95,
      })
    })

    return () => {
      disposed = true
      effect?.destroy()
    }
  }, [])

  return (
    <section className="lab-section section-block tech-frame reveal" id="lab">
      <SectionHead title={copy.title} />

      <div className="lab-layout">
        <div className="lab-visual lab-visual--vanta">
          <div ref={vantaRef} className="lab-vanta" aria-hidden="true"></div>
          <div className="lab-vanta__overlay" aria-hidden="true">
            <span>Neural Globe</span>
            <strong>Live Architecture Map</strong>
          </div>
        </div>

        <div className="lab-copy">
          <span className="eyebrow">{copy.eyebrow}</span>
          <p>{copy.text}</p>

          <div className="lab-cards">
            {copy.cards.map((card) => (
              <article className="lab-card" key={card.title}>
                <SvgIcon id={card.icon} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="lab-metrics" aria-label={copy.title}>
            {copy.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
