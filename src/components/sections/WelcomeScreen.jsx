import logo from '../../assets/images/gemma_neuratech_logo.svg'

export default function WelcomeScreen() {
  return (
    <section className="welcome-screen" aria-label="Loading">
      <div className="welcome-grid" aria-hidden="true"></div>
      <div className="welcome-scan" aria-hidden="true"></div>
      <div className="welcome-core" aria-hidden="true">
        <span className="welcome-core__ring welcome-core__ring--outer"></span>
        <span className="welcome-core__ring welcome-core__ring--mid"></span>
        <span className="welcome-core__ring welcome-core__ring--inner"></span>
        <span className="welcome-core__chip"></span>
      </div>
      <div className="welcome-panel">
        <div className="welcome-brand">
          <img className="welcome-brand__logo" src={logo} alt="Gemma Neuratech IT" />
        </div>
        <p className="welcome-kicker">Neural systems boot sequence</p>
        <h1>Initializing intelligence layer</h1>
        <div
          className="welcome-progress"
          role="progressbar"
          aria-label="Loading progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="0"
        >
          <span className="welcome-progress__bar"></span>
        </div>
        <div className="welcome-meta">
          <span className="welcome-status">Loading neural modules</span>
          <span className="welcome-percent">0%</span>
        </div>
      </div>
    </section>
  )
}
