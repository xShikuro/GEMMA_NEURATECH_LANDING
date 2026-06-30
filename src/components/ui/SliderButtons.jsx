import SvgIcon from '../icons/SvgIcon'

export default function SliderButtons({ previousLabel, nextLabel }) {
  return (
    <div className="slider-buttons">
      <button type="button" data-nudge="left" aria-label={previousLabel}>
        <SvgIcon id="i-chevron" />
      </button>
      <button type="button" data-nudge="right" aria-label={nextLabel}>
        <SvgIcon id="i-chevron" />
      </button>
    </div>
  )
}
