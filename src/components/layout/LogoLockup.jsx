import emblem from '../../assets/images/gemma-neuratech-emblem.jpg'

export default function LogoLockup({ className = '' }) {
  return (
    <span className={`logo-lockup ${className}`.trim()} aria-hidden="true">
      <span className="logo-lockup__emblem">
        <img src={emblem} alt="" />
      </span>
      <span className="logo-lockup__wordmark">
        <strong>GEMMA</strong>
        <em>NEURATECH IT</em>
      </span>
    </span>
  )
}
