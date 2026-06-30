import SvgIcon from '../icons/SvgIcon'
import SectionHead from '../ui/SectionHead'

export default function Why({ copy }) {
  return (
    <section className="why section-block tech-frame reveal" id="news">
      <SectionHead title={copy.title} />
      <div className="why-grid">
        {copy.items.map((item) => (
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
