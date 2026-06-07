import type { DashboardArea } from '../types/dashboard'

// Manter os textos nesta lista facilita futuras alterações sem mexer no visual.
export const dashboardAreas: DashboardArea[] = [
  {
    id: 'indicators',
    label: 'Indicadores',
    title: 'Números estratégicos',
    description: 'Resumo de métricas relevantes para acompanhamento rápido.',
    symbol: '01',
  },
  {
    id: 'charts',
    label: 'Gráficos',
    title: 'Evolução e comparação',
    description: 'Visualizações para compreender tendências ao longo do tempo.',
    symbol: '02',
  },
  {
    id: 'maps',
    label: 'Mapas',
    title: 'Visão territorial',
    description: 'Representação geográfica da infraestrutura e das operações.',
    symbol: '03',
  },
]

