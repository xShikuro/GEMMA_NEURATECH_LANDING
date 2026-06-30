import SvgIcon from '../icons/SvgIcon'

const visualItems = Array.from({ length: 6 }, (_, index) => index + 1)

export default function Hero() {
  return (
    <section className="hero tech-frame reveal">
      <canvas id="heroParticles" aria-hidden="true"></canvas>
      <span className="micro-dots micro-dots--hero" aria-hidden="true"></span>
      <div className="hero__copy">
        <h1>
          <span>Advanced</span>
          <span className="text-cyan">Neural</span>
          <span>Architectures</span>
        </h1>
        <p>Создаём интеллектуальные системы нового поколения на базе передовых нейронных архитектур</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#about">
            Узнать больше
            <SvgIcon id="i-arrow" />
          </a>
          <a className="btn btn--ghost" href="#contact">Связаться с нами</a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="orbit-dot orbit-dot--a"></div>
        <div className="orbit-dot orbit-dot--b"></div>
        <div className="circuit-field">
          {visualItems.map((item) => (
            <span key={`trace-${item}`} className={`trace trace--${item}`}></span>
          ))}
          {visualItems.map((item) => (
            <span key={`node-${item}`} className={`node node--${item}`}></span>
          ))}
        </div>
        <div className="chip-scene" data-parallax>
          <div className="chip-stack">
            <span className="chip-layer chip-layer--base"></span>
            <span className="chip-layer chip-layer--mid"></span>
            <span className="chip-layer chip-layer--top"></span>
            <span className="chip-core">
              <span></span>
            </span>
          </div>
          <span className="chip-glow"></span>
        </div>
      </div>
    </section>
  )
}
