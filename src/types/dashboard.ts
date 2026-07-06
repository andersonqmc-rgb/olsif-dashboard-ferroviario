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

export type Visibility = 'interno' | 'publicavel'

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

export type MethodologicalStatus =
  | 'Estruturada conceitualmente'
  | 'Hipótese de pesquisa'
  | 'Depende de fonte pública'
  | 'Depende de validação externa'
  | 'Não mensurada nesta versão'

export type ScenarioReadingStatus = 'Maior maturidade' | 'Ponto crítico' | 'Em validação' | 'Não mensurado'

export type IctfDimension = {
  id: string
  dimension: string
  description: string
  guidingQuestion: string
  methodologicalStatus: MethodologicalStatus
  evidenceNeeded: string
  institutionalCare: string
  scenarioReading: ScenarioReadingStatus
}

export type IctfScenarioReading = {
  factor: string
  reading: string
  status: ScenarioReadingStatus
}

export type IctfScenario = {
  title: string
  context: string
  readings: IctfScenarioReading[]
  methodologicalLimit: string
}

export type TerritorialEvidenceClass =
  | 'Dado confirmado'
  | 'Dado parcial'
  | 'Inferência técnica'
  | 'Hipótese OLSIF'
  | 'A verificar'

export type TerritorialCargoResult = {
  cargo: string
  probableOrigin: string
  probableDestination: string
  currentMode: string
  cargoType: string
  terminalOrBorder: string
  railPotential: 'Alto' | 'Médio' | 'Baixo'
  evidenceClass: TerritorialEvidenceClass
  validatingActor: string
  observation: string
}

export type PilotCargoResult = {
  cargo: string
  route: string
  sourceBasis: string
  currentModeStatus: string
  involvedPoints: string
  railPotential: 'Alto' | 'Médio' | 'Baixo'
  associatedBottlenecks: string[]
  openQuestions: string[]
}

export type TerritorialBottleneckResult = {
  bottleneck: string
  location: string
  currentEvidence: string
  missingValidation: string
  validationQuestion: string
  validatingActors: string
}

export type TerritorialMvpResult = {
  version: string
  title: string
  authorContext: string
  referenceDate: string
  objective: string
  methodologicalSequence: string
  methodologicalNote: string
  evidenceClasses: TerritorialEvidenceClass[]
  pilotCargo: PilotCargoResult
  cargoResults: TerritorialCargoResult[]
  bottlenecks: TerritorialBottleneckResult[]
  conclusion: string
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

export type ExtensionEvidenceType = 'Dossiê' | 'Planilha' | 'Questionário' | 'Validação' | 'Formulário' | 'Aplicação' | 'Síntese' | 'Relatório' | 'Devolutiva'

export type ExtensionStep = {
  title: string
  status: ExtensionStepStatus
  evidenceType: ExtensionEvidenceType
  evidenceStatus: InformationStatus
  dueDate?: string
  isCritical?: boolean
  evidence: string
  nextAction: string
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

// InformationStatus qualifica confiabilidade de dados; SubmissionStage qualifica etapa de processo.
export type SubmissionStage = 'Em preparação' | 'Em revisão' | 'Submetida' | 'A verificar'

export type AnttDeadline = {
  label: string
  dueDate: string
  reference: string
  visibility: Visibility
}

export type AnttRisk = {
  id: string
  title: string
  status: string
  lastCheck: string
  nextAction: string
  note: string
  visibility: Visibility
}

export type AnttSubmissionStatus = {
  stage: SubmissionStage
  lastUpdate: string
  note: string
  visibility: Visibility
}

export type AnttContributionAxis = {
  title: string
  description: string
  visibility: Visibility
}

export type AnttArgument = {
  theme: string
  argument: string
  availableEvidence: string
  gap: string
  risk: string
  plannedUse: string
  informationStatus: InformationStatus
  visibility: Visibility
}

export type AnttSource = {
  source: string
  sourceType: SourceType
  referenceDate: string
  theme: string
  validationStatus: InformationStatus
  olsifUse: string
  note: string
  visibility: Visibility
}

export type AnttStrategicRelation = {
  title: string
  description: string
  care: string
  visibility: Visibility
}

export type AnttModuleData = {
  title: string
  version: string
  summary: string
  scopeNote: string
  deadline: AnttDeadline
  submission: AnttSubmissionStatus
  risks: AnttRisk[]
  axes: AnttContributionAxis[]
  argumentMatrix: AnttArgument[]
  sources: AnttSource[]
  strategicRelations: AnttStrategicRelation[]
}

