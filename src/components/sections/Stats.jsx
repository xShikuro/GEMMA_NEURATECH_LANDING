import { useEffect, useMemo, useState } from 'react'
import { stats } from '../../data/landingData'
import SvgIcon from '../icons/SvgIcon'

function getInitialValue(stat) {
  if (stat.values) return stat.values[0]
  if (Number.isFinite(stat.min)) return stat.decimals ? stat.min.toFixed(stat.decimals) : stat.min
  return stat.value
}

function getNextValue(stat, currentValue) {
  if (stat.values) {
    const index = stat.values.findIndex((value) => String(value) === String(currentValue))
    return stat.values[(index + 1) % stat.values.length]
  }

  const min = stat.min ?? 0
  const max = stat.max ?? min
  const value = min + Math.random() * (max - min)

  if (stat.decimals) {
    return value.toFixed(stat.decimals)
  }

  return Math.round(value)
}

export default function Stats() {
  const initialValues = useMemo(() => stats.map(getInitialValue), [])
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValues((currentValues) => stats.map((stat, index) => getNextValue(stat, currentValues[index])))
    }, 1400)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="stats tech-strip reveal">
      {stats.map((stat, index) => (
        <article className="stat-card" key={stat.label}>
          <SvgIcon id={stat.icon} />
          <div>
            <strong className="stat-card__value">{values[index]}{stat.suffix}</strong>
            <span>{stat.label}</span>
          </div>
        </article>
      ))}
    </section>
  )
}
