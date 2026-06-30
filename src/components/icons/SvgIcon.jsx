export default function SvgIcon({ id, className }) {
  return (
    <svg className={className}>
      <use href={`#${id}`} />
    </svg>
  )
}
