export default function BackgroundEffects() {
  return (
    <>
      <canvas id="pageMatrix" aria-hidden="true"></canvas>
      <div className="cursor-glow" aria-hidden="true"></div>
      <div className="site-cursor" aria-hidden="true">
        <span className="site-cursor__dot"></span>
      </div>
    </>
  )
}
