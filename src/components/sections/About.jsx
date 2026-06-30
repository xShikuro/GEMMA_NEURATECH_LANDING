import SvgIcon from '../icons/SvgIcon'

const roomLines = ['line-1', 'line-2', 'line-3']
const floorLines = ['floor-1', 'floor-2', 'floor-3']

export default function About() {
  return (
    <section className="about section-grid reveal" id="about">
      <div className="lab-panel tech-frame">
        <div className="server-room" aria-hidden="true">
          {roomLines.map((line) => (
            <span key={line} className={`ceiling-line ${line}`}></span>
          ))}
          {floorLines.map((line) => (
            <span key={line} className={`floor-line ${line}`}></span>
          ))}
          <span className="rack rack--left rack--1"></span>
          <span className="rack rack--left rack--2"></span>
          <span className="rack rack--right rack--1"></span>
          <span className="rack rack--right rack--2"></span>
          <div className="hologram">
            <span className="hologram__base"></span>
            <span className="hologram__shape"></span>
          </div>
        </div>
      </div>

      <div className="about-copy">
        <span className="eyebrow">О нас</span>
        <h2>Инновации, которые формируют <span>будущее</span></h2>
        <p>Gemma Neuratech - международная IT-компания и исследовательский центр, специализирующийся на разработке передовых нейронных архитектур и интеллектуальных систем.</p>
        <p>Мы объединяем науку, технологии и инженерное мастерство для решения самых сложных задач нашего времени.</p>
        <a className="btn btn--outline" href="#contact">
          Подробнее о компании
          <SvgIcon id="i-arrow" />
        </a>
      </div>
    </section>
  )
}
