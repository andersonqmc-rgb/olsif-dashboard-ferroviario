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

export type InformationStatus = 'Confirmado' | 'Hipótese forte' | 'Hipótese fraca' | 'A verificar'

export type BorderRelation = 'Direta' | 'Indireta' | 'A verificar'

export type CargoFlow = {
  traceabilityCode: string
  cargo: string
  probableOrigin: string
  probableDestination: string
  currentMode: string
  terminalOrBorder: string
  borderRelation: BorderRelation
  railPotential: 'Alto' | 'Médio' | 'Baixo'
  confidence: 'Alta' | 'Média' | 'Baixa'
  informationStatus: InformationStatus
  source: string
  lastReview: string
  nextValidationStep: string
  note: string
}

export type Bottleneck = {
  traceabilityCode: string
  title: string
  category: 'Modal' | 'Operacional' | 'Físico' | 'Institucional/binacional' | 'Informacional'
  informationStatus: InformationStatus
  borderRelation: BorderRelation
  description: string
  impact: string
  evidence: string
  nextValidationStep: string
  olsifRelation: string
}

export type IctfDimension = {
  dimension: string
  value: number
  interpretation: string
}

export type SourceType = 'Oficial' | 'Institucional' | 'Empresarial' | 'Acadêmica' | 'Setorial' | 'Hipótese'

export type OlsifSource = {
  source: string
  sourceType: SourceType
  referenceDate: string
  theme: string
  validationStatus: InformationStatus
  olsifUse: string
  note: string
}

export type ExtensionStepStatus = 'Concluído' | 'Em andamento' | 'Pendente'

export type ExtensionStep = {
  title: string
  status: ExtensionStepStatus
  dueDate?: string
}

export type TimelineFront = 'Institucional' | 'Técnica' | 'Editorial' | 'Extensionista' | 'Regulatória' | 'Cooperação' | 'Pesquisa aplicada' | 'Rede técnica'

export type TimelineMilestone = {
  label: string
  category: string
  front: TimelineFront
  referenceDate: string
  status: InformationStatus
  note: string
}
