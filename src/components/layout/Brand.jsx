import { Link } from 'react-router-dom'
import LogoLockup from './LogoLockup'

export default function Brand({ className = '', to = '/' }) {
  return (
    <Link className={`brand brand--image ${className}`.trim()} to={to} aria-label="Gemma Neuratech IT">
      <LogoLockup />
    </Link>
  )
}
