import type { ExecutiveCard as ExecutiveCardType } from '../../types/dashboard'

type ExecutiveCardProps = {
  item: ExecutiveCardType
}

export function ExecutiveCard({ item }: ExecutiveCardProps) {
  return (
    <article className="executive-card">
      <div className="executive-card__header">
        <span className="priority-tag">{item.priority}</span>
        <span>{item.lastUpdate}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="executive-card__status">{item.status}</p>
      <p>{item.note}</p>
    </article>
  )
}
