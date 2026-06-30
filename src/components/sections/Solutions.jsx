import { solutions } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'
import SliderButtons from '../ui/SliderButtons'

function NeuralIcon() {
  return (
    <div className="solution-icon neural-icon" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <span key={index}></span>
      ))}
    </div>
  )
}

export default function Solutions() {
  return (
    <section className="section-block tech-frame reveal" id="solutions">
      <SectionHead
        title="Наши решения"
        actions={<SliderButtons previousLabel="Предыдущие решения" nextLabel="Следующие решения" />}
      />

      <div className="solution-grid" data-scroll-row>
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.title}>
            {solution.neuralIcon ? <NeuralIcon /> : <SvgIcon id={solution.icon} className="card-svg" />}
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <a href="#contact">
              Подробнее
              <SvgIcon id="i-arrow" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
