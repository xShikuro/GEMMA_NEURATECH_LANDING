export default function SectionHead({ title, actions }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {actions}
    </div>
  )
}
