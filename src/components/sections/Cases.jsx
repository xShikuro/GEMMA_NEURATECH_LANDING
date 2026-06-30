import { cases } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'
import SliderButtons from '../ui/SliderButtons'

function CaseArt({ type }) {
  if (type === 'brain') {
    return <SvgIcon id="i-brain" className="case-art case-art--brain" />
  }

  if (type === 'chart') {
    return (
      <div className="chart-art" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => (
          <i key={index}></i>
        ))}
      </div>
    )
  }

  return (
    <div className="robot-art" aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}

export default function Cases() {
  return (
    <section className="section-block tech-frame reveal" id="cases">
      <SectionHead
        title="Кейсы"
        actions={<SliderButtons previousLabel="Предыдущие кейсы" nextLabel="Следующие кейсы" />}
      />
      <div className="case-grid" data-scroll-row>
        {cases.map((item) => (
          <article className="case-card" key={item.title}>
            <span className="case-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#contact">
              Смотреть кейс
              <SvgIcon id="i-arrow" />
            </a>
            <CaseArt type={item.art} />
          </article>
        ))}
      </div>
    </section>
  )
}
