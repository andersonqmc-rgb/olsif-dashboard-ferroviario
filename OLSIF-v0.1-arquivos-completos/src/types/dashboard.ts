export type Indicator = {
  id: 'cargo' | 'distance' | 'emissions' | 'savings'
  label: string
  value: string
  unit: string
  description: string
}

export type TransportComparison = {
  mode: 'Rodoviário' | 'Ferroviário'
  emissions: number
  color: string
}
