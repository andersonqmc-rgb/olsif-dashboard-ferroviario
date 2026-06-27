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

export type Priority = 'Alta' | 'Média' | 'Baixa'

export type ExecutiveCard = {
  id: string
  title: string
  status: string
  priority: Priority
  lastUpdate: string
  note: string
}

export type StrategicEventStatus = 'Confirmado' | 'Monitorar' | 'Pista a verificar'

export type StrategicEvent = {
  date: string
  front: string
  type: string
  status: StrategicEventStatus
  summary: string
  nextAction: string
}

export type CargoFlow = {
  cargo: string
  probableOrigin: string
  probableDestination: string
  currentMode: string
  terminalOrBorder: string
  railPotential: 'Alto' | 'Médio' | 'Baixo'
  confidence: 'Alta' | 'Média' | 'Baixa'
  informationStatus: string
  source: string
  note: string
}

export type Bottleneck = {
  title: string
  category: 'Modal' | 'Operacional' | 'Físico' | 'Institucional/binacional' | 'Informacional'
  description: string
  impact: string
  evidence: string
  olsifRelation: string
}

export type IctfDimension = {
  dimension: string
  value: number
  interpretation: string
}

export type OlsifSource = {
  source: string
  type: string
  theme: string
  validationStatus: string
  olsifUse: string
}

export type ExtensionStepStatus = 'Concluído' | 'Em andamento' | 'Pendente'

export type ExtensionStep = {
  title: string
  status: ExtensionStepStatus
  dueDate?: string
}

export type TimelineMilestone = {
  label: string
  category: string
  status: string
}
