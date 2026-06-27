import type { TransportComparison } from '../../types/dashboard'

type ComparisonChartProps = {
  data: TransportComparison[]
}

export function ComparisonChart({ data }: ComparisonChartProps) {
  const label = data.map((item) => `${item.mode} ${item.emissions}`).join(' e ')

  return (
    <div className="comparison-chart">
      <div className="comparison-chart__scale" aria-hidden="true">
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>

      <div className="comparison-chart__bars" role="img" aria-label={`Comparação demonstrativa do índice de emissões: ${label}`}>
        {data.map((item) => (
          <div className="comparison-chart__item" key={item.mode}>
            <div className="comparison-chart__bar-area">
              <div className="comparison-chart__bar" style={{ height: `${item.emissions}%`, backgroundColor: item.color }}>
                <strong>{item.emissions}</strong>
              </div>
            </div>
            <span>{item.mode}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
