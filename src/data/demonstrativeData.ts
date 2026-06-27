import type { Indicator, TransportComparison } from '../types/dashboard'

// Valores fictícios criados somente para demonstrar o funcionamento do painel.
export const indicators: Indicator[] = [
  {
    id: 'cargo',
    label: 'Carga transportada',
    value: '1,25',
    unit: 'milhão t',
    description: 'Volume anual considerado no cenário demonstrativo.',
  },
  {
    id: 'distance',
    label: 'Distância percorrida',
    value: '820',
    unit: 'mil km',
    description: 'Percurso total estimado para a carga analisada.',
  },
  {
    id: 'emissions',
    label: 'Emissões estimadas',
    value: '42,8',
    unit: 'mil tCO₂e',
    description: 'Emissões do cenário ferroviário demonstrativo.',
  },
  {
    id: 'savings',
    label: 'Economia potencial de CO₂',
    value: '67,2',
    unit: 'mil tCO₂e',
    description: 'Redução estimada em relação ao modal rodoviário.',
  },
]

// Índice comparativo fictício de emissões: quanto menor, melhor.
export const transportComparison: TransportComparison[] = [
  { mode: 'Rodoviário', emissions: 100, color: '#a65f32' },
  { mode: 'Ferroviário', emissions: 39, color: '#16715f' },
]
