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

export default function Solutions({ copy }) {
  return (
    <section className="section-block tech-frame reveal" id="solutions">
      <SectionHead title={copy.title} />

      <div className="solution-grid" data-scroll-row>
        {copy.items.map((solution) => (
          <article className="solution-card" key={solution.title}>
            {solution.neuralIcon ? <NeuralIcon /> : <SvgIcon id={solution.icon} className="card-svg" />}
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <a href="#contact">
              {copy.details}
              <SvgIcon id="i-arrow" />
            </a>
          </article>
        ))}
      </div>

      <SliderButtons previousLabel={copy.previous} nextLabel={copy.next} />
    </section>
  )
}
