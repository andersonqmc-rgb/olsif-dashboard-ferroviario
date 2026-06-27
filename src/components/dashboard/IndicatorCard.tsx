import type { Indicator } from '../../types/dashboard'

type IndicatorCardProps = {
  indicator: Indicator
}

export function IndicatorCard({ indicator }: IndicatorCardProps) {
  return (
    <article className={`indicator-card indicator-card--${indicator.id}`}>
      <div className="indicator-card__top">
        <p>{indicator.label}</p>
        <span aria-label="Dado demonstrativo">Demo</span>
      </div>
      <p className="indicator-card__value">
        {indicator.value} <small>{indicator.unit}</small>
      </p>
      <p className="indicator-card__description">{indicator.description}</p>
    </article>
  )
}
