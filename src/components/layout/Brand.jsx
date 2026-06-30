import logo from '../../assets/images/gemma_neuratech_logo.svg'

export default function Brand({ className = '', href = '#top' }) {
  return (
    <a className={`brand brand--image ${className}`.trim()} href={href} aria-label="Gemma Neuratech">
      <img className="brand__logo" src={logo} alt="" />
    </a>
  )
}
