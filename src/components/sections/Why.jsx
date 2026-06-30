import { whyItems } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

export default function Why() {
  return (
    <section className="why section-block tech-frame reveal" id="news">
      <SectionHead title="Почему мы" />
      <div className="why-grid">
        {whyItems.map((item) => (
          <article key={item.title}>
            <SvgIcon id={item.icon} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
