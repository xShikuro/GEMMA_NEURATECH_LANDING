import { Link } from 'react-router-dom'
import SvgIcon from '../components/icons/SvgIcon'

export default function NotFoundPage({ copy }) {
  return (
    <div className="route-page">
      <section className="page-hero tech-frame reveal">
        <div>
          <span className="eyebrow">404</span>
          <h1>{copy.title}</h1>
          <p>{copy.text}</p>
        </div>
        <Link className="btn btn--primary" to="/">
          {copy.action}
          <SvgIcon id="i-arrow" />
        </Link>
      </section>
    </div>
  )
}
