import type { DashboardArea } from '../../types/dashboard'

type AreaPlaceholderProps = {
  area: DashboardArea
}

// Este componente é um espaço reservado. No futuro, seu conteúdo poderá ser
// trocado por uma biblioteca de gráficos ou mapas sem alterar a página inteira.
export function AreaPlaceholder({ area }: AreaPlaceholderProps) {
  return (
    <article className="area-card">
      <span className="area-card__icon" aria-hidden="true">
        {area.symbol}
      </span>
      <div>
        <p className="eyebrow">{area.label}</p>
        <h3>{area.title}</h3>
        <p>{area.description}</p>
      </div>
      <span className="status-tag">Em preparação</span>
    </article>
  )
}

