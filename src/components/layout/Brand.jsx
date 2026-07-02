import { Link } from 'react-router-dom'
import logo from '../../assets/images/gemma_neuratech_logo.svg'

export default function Brand({ className = '', to = '/' }) {
  return (
    <Link className={`brand brand--image ${className}`.trim()} to={to} aria-label="Gemma Neuratech IT">
      <img className="brand__logo" src={logo} alt="" />
    </Link>
  )
}
