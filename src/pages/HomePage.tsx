import { useState } from 'react'
import { ComparisonChart } from '../components/dashboard/ComparisonChart'
import { ExecutiveCard } from '../components/dashboard/ExecutiveCard'
import { IndicatorCard } from '../components/dashboard/IndicatorCard'
import { ModuleNavigation } from '../components/dashboard/ModuleNavigation'
import { SectionNotice } from '../components/dashboard/SectionNotice'
import { StatusBadge } from '../components/dashboard/StatusBadge'
import { anttModuleData } from '../data/anttData'
import { indicators, transportComparison } from '../data/demonstrativeData'
import {
  bottlenecks,
  cargoFlows,
  executiveCards,
  extensionSteps,
  ictfDimensions,
  ictfScenario,
  olsifSources,
  strategicEvents,
  territorialMvpResult,
  timelineMilestones,
} from '../data/intelligenceData'

const moduleNavigationItems = [
  { id: 'visao-geral', label: 'Visão Geral', description: 'OLSIF, objetivo e limites' },
  { id: 'ictf', label: 'ICTF', description: 'capilaridade conceitual' },
  { id: 'antt', label: 'ANTT', description: 'Malha Sul e AP 11/2026' },
  { id: 'cargas', label: 'Cargas', description: 'matriz preliminar' },
  { id: 'gargalos', label: 'Gargalos', description: 'hipóteses em validação' },
  { id: 'frentes', label: 'Frentes', description: 'radar e extensão' },
  { id: 'fontes', label: 'Fontes', description: 'rastreabilidade' },
  { id: 'resultados', label: 'Resultados', description: 'MVP v0.2 e cenários' },
]

function getDeadlineStatus(dueDate: string) {
  const [year, month, day] = dueDate.split('-').map(Number)
  const deadline = new Date(year, month - 1, day, 23, 59, 59)
  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const daysUntil = Math.ceil((deadline.getTime() - Date.now()) / millisecondsPerDay)

  if (daysUntil > 21) {
    return { tone: 'green', label: 'Verde', daysUntil }
  }

  if (daysUntil >= 8) {
    return { tone: 'yellow', label: 'Amarelo', daysUntil }
  }

  return { tone: 'red', label: 'Vermelho', daysUntil }
}

export function HomePage() {
  const [activeModule, setActiveModule] = useState(moduleNavigationItems[0].id)

  function renderActiveModule() {
    switch (activeModule) {
      case 'ictf':
        return <IctfPanel />
      case 'antt':
        return <AnttPanel />
      case 'cargas':
        return <CargoPanel />
      case 'gargalos':
        return <BottleneckPanel />
      case 'frentes':
        return <FrontsPanel />
      case 'fontes':
        return <SourcesPanel />
      case 'resultados':
        return <ResultsPanel />
      default:
        return <OverviewPanel />
    }
  }

  return (
    <main id="inicio">
      <section className="overview-section" aria-labelledby="overview-title">
        <div className="overview-section__content">
          <p className="eyebrow">Dashboard Ferroviário OLSIF · Versão 0.4.0</p>
          <h1 id="overview-title">Observatório de Logística Sustentável e Inovação Ferroviária</h1>
          <p>
            O OLSIF/UNIPAMPA é uma iniciativa acadêmica, extensionista e tecnológica
            voltada à produção de inteligência logística aplicada à inovação ferroviária,
            intermodalidade, sustentabilidade e integração Brasil-Argentina.
          </p>
        </div>
        <div className="overview-section__notice">
          <strong>Protótipo interno e exploratório</strong>
          <p>
            O dashboard organiza dados preliminares, hipóteses de pesquisa, marcos de
            acompanhamento e resultados demonstrativos. Ele não representa diagnóstico
            oficial, base consolidada ou decisão operacional.
          </p>
        </div>
      </section>

      <section className="dashboard-tabs" id="modulos" aria-label="Módulos do dashboard">
        <ModuleNavigation
          activeId={activeModule}
          items={moduleNavigationItems}
          onSelect={setActiveModule}
        />
        {renderActiveModule()}
      </section>
    </main>
  )
}

function OverviewPanel() {
  return (
    <section
      aria-labelledby="visao-geral-tab"
      className="module-section module-panel"
      id="visao-geral-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Tela inicial</p>
          <h2 id="visao-geral-title">Apresentação do OLSIF</h2>
        </div>
        <p>
          O painel apresenta o observatório, seus objetivos, estado atual e módulos de
          trabalho antes de aprofundar ICTF, cargas, gargalos, fontes e resultados territoriais.
        </p>
      </div>

      <SectionNotice title="Uso exploratório">
        O dashboard é um protótipo interno, com possibilidade futura de publicação controlada, e usa dados simulados, preliminares, parciais ou curados manualmente. Ele não substitui relatório oficial, nota técnica protocolada ou validação institucional final.
      </SectionNotice>

      <div className="objective-grid" aria-label="Objetivos e limites da versão 0.3">
        <article>
          <span>01</span>
          <h3>O que é o OLSIF</h3>
          <p>
            Um observatório universitário para organizar inteligência logística,
            pesquisa aplicada, extensão, inovação e leitura territorial sobre integração ferroviária.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Objetivo do dashboard</h3>
          <p>
            Reunir frentes, fontes, cargas, gargalos, ICTF conceitual e resultados
            preliminares em uma interface simples, auditável e de baixo custo.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Limites da versão</h3>
          <p>
            Não calcula índice oficial, não ranqueia terminais, não usa dados privados
            e não apresenta diagnóstico consolidado sobre operadores, órgãos ou infraestrutura.
          </p>
        </article>
      </div>

      <div className="executive-grid">
        {executiveCards.map((item) => (
          <ExecutiveCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

function IctfPanel() {
  return (
    <section
      aria-labelledby="ictf-tab"
      className="module-section module-panel ictf-section"
      id="ictf-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Indicador conceitual</p>
          <h2>ICTF — Capilaridade Terminal Ferroviária</h2>
        </div>
        <p>
          O ICTF é tratado como hipótese metodológica para observar terminais,
          pátios, porto seco, retroáreas, cargas potenciais, dados e governança.
        </p>
      </div>

      <SectionNotice title="Sem cálculo oficial">
        A v0.3 não calcula ICTF. Os status e cenários são placeholders metodológicos para testar estrutura, linguagem e prudência institucional.
      </SectionNotice>

      <div className="ictf-concept-grid">
        <article>
          <h3>Problema observado</h3>
          <p>
            A ferrovia só se torna sistema quando seus terminais conseguem converter
            carga potencial em fluxo ferroviário real, com acesso, operação, dados e governança.
          </p>
        </article>
        <article>
          <h3>Relação com a NT nº 002</h3>
          <p>
            O módulo dialoga com o Custo da Baixa Capilaridade Terminal Ferroviária
            e com a tese de que a concessão da ferrovia não é, por si só, a concessão da logística.
          </p>
        </article>
        <article>
          <h3>Leitura correta</h3>
          <p>
            Cada dimensão é uma pergunta de pesquisa. O painel separa hipótese,
            evidência desejada, cuidado institucional e status metodológico.
          </p>
        </article>
      </div>

      <div className="ictf-dimension-grid">
        {ictfDimensions.map((item) => (
          <article className="ictf-dimension-card" key={item.id}>
            <div className="ictf-dimension-card__header">
              <h3>{item.dimension}</h3>
              <div>
                <StatusBadge value={item.methodologicalStatus} />
                <StatusBadge value={item.scenarioReading} />
              </div>
            </div>
            <p>{item.description}</p>
            <dl>
              <dt>Pergunta orientadora</dt>
              <dd>{item.guidingQuestion}</dd>
              <dt>Evidência desejada</dt>
              <dd>{item.evidenceNeeded}</dd>
              <dt>Cuidado institucional</dt>
              <dd>{item.institutionalCare}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="scenario-section" aria-label="Cenário demonstrativo do ICTF">
        <div>
          <p className="eyebrow">Exemplo de leitura</p>
          <h3>{ictfScenario.title}</h3>
          <p>{ictfScenario.context}</p>
        </div>
        <div className="scenario-list">
          {ictfScenario.readings.map((item) => (
            <article className="scenario-item" key={item.factor}>
              <StatusBadge value={item.status} />
              <h4>{item.factor}</h4>
              <p>{item.reading}</p>
            </article>
          ))}
        </div>
        <SectionNotice title="Limite do cenário">
          {ictfScenario.methodologicalLimit}
        </SectionNotice>
      </div>
    </section>
  )
}

function AnttPanel() {
  const deadlineStatus = getDeadlineStatus(anttModuleData.deadline.dueDate)
  const deadlineText =
    deadlineStatus.daysUntil >= 0
      ? `${deadlineStatus.daysUntil} dia(s) até o prazo`
      : `Prazo vencido há ${Math.abs(deadlineStatus.daysUntil)} dia(s)`

  return (
    <section
      aria-labelledby="antt-tab"
      className="module-section module-panel antt-panel"
      id="antt-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Acompanhamento interno</p>
          <h2>{anttModuleData.title}</h2>
        </div>
        <p>
          Módulo de memória técnica para a frente ANTT / Malha Sul, vinculado à AP nº
          11/2026 e à preparação interna de contribuição técnica do OLSIF.
        </p>
      </div>

      <SectionNotice title="Uso interno e exploratório">
        {anttModuleData.scopeNote}
      </SectionNotice>

      <div className="antt-summary-grid">
        <article>
          <span>Resumo da frente</span>
          <p>{anttModuleData.summary}</p>
        </article>
        <article className={`antt-deadline antt-deadline--${deadlineStatus.tone}`}>
          <span>{anttModuleData.deadline.label}</span>
          <strong>{anttModuleData.deadline.reference}</strong>
          <p>{deadlineText}</p>
          <div>
            <StatusBadge value={`Semáforo ${deadlineStatus.label}`} />
            <StatusBadge value={anttModuleData.deadline.visibility} />
          </div>
        </article>
        <article>
          <span>Status da submissão</span>
          <strong>{anttModuleData.submission.stage}</strong>
          <p>Atualização: {anttModuleData.submission.lastUpdate}</p>
          <p className="validation-note">{anttModuleData.submission.note}</p>
          <StatusBadge value={anttModuleData.submission.visibility} />
        </article>
      </div>

      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Riscos da frente</p>
          <h3>Rastreio operacional</h3>
        </div>
        <p>
          Riscos acompanham pendências e bloqueios sem atribuir responsabilidade externa
          sem evidência formal.
        </p>
      </div>
      <div className="antt-risk-grid">
        {anttModuleData.risks.map((risk, index) => (
          <article className={index === 0 ? 'antt-risk-card antt-risk-card--critical' : 'antt-risk-card'} key={risk.id}>
            <div className="bottleneck-card__meta">
              <span className="traceability-code">R{String(index + 1).padStart(2, '0')}</span>
              <StatusBadge value={risk.status} />
              <StatusBadge value={risk.visibility} />
            </div>
            <h3>{risk.title}</h3>
            <dl>
              <dt>Última verificação</dt>
              <dd>{risk.lastCheck}</dd>
              <dt>Próxima ação</dt>
              <dd>{risk.nextAction}</dd>
              <dt>Cuidado institucional</dt>
              <dd>{risk.note}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Contribuição técnica</p>
          <h3>Eixos de contribuição</h3>
        </div>
        <p>
          Agrupamentos temáticos preliminares para organizar leitura técnica, sem
          converter hipóteses em posição oficial.
        </p>
      </div>
      <div className="antt-axis-grid">
        {anttModuleData.axes.map((axis) => (
          <article className="scenario-item" key={axis.title}>
            <StatusBadge value={axis.visibility} />
            <h4>{axis.title}</h4>
            <p>{axis.description}</p>
          </article>
        ))}
      </div>

      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Matriz de argumentos</p>
          <h3>Conteúdo validado pela coordenação</h3>
        </div>
        <p>
          A tabela espelha apenas argumentos validados no documento-fonte da contribuição.
          Enquanto não houver validação, permanece sem linhas analíticas.
        </p>
      </div>
      <div className="table-wrap antt-argument-table" role="region" aria-label="Matriz de argumentos ANTT" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Argumento</th>
              <th>Evidência disponível</th>
              <th>Lacuna</th>
              <th>Risco</th>
              <th>Uso previsto</th>
              <th>Status</th>
              <th>Visibilidade</th>
            </tr>
          </thead>
          <tbody>
            {anttModuleData.argumentMatrix.length > 0 ? (
              anttModuleData.argumentMatrix.map((item) => (
                <tr key={`${item.theme}-${item.argument}`}>
                  <th scope="row">{item.theme}</th>
                  <td>{item.argument}</td>
                  <td>{item.availableEvidence}</td>
                  <td>{item.gap}</td>
                  <td>{item.risk}</td>
                  <td>{item.plannedUse}</td>
                  <td><StatusBadge value={item.informationStatus} /></td>
                  <td><StatusBadge value={item.visibility} /></td>
                </tr>
              ))
            ) : (
              <tr>
                <th scope="row">Aguardando validação</th>
                <td colSpan={7}>
                  Nenhum argumento foi inserido nesta versão. O conteúdo deve vir da
                  coordenação OLSIF e do documento-fonte da contribuição ANTT.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Fontes ANTT</p>
          <h3>Referências em validação</h3>
        </div>
        <p>
          Fontes de referência para uso interno, sempre sujeitas à conferência antes de
          entrar em contribuição técnica.
        </p>
      </div>
      <div className="table-wrap" role="region" aria-label="Fontes ANTT" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Fonte</th>
              <th>Tipo</th>
              <th>Referência</th>
              <th>Tema</th>
              <th>Status</th>
              <th>Uso no OLSIF</th>
              <th>Observação</th>
              <th>Visibilidade</th>
            </tr>
          </thead>
          <tbody>
            {anttModuleData.sources.map((source) => (
              <tr key={source.source}>
                <th scope="row">{source.source}</th>
                <td><StatusBadge value={source.sourceType} /></td>
                <td>{source.referenceDate}</td>
                <td>{source.theme}</td>
                <td><StatusBadge value={source.validationStatus} /></td>
                <td>{source.olsifUse}</td>
                <td>{source.note}</td>
                <td><StatusBadge value={source.visibility} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section-heading section-heading--compact">
        <div>
          <p className="eyebrow">Relações estratégicas</p>
          <h3>Conexões territoriais</h3>
        </div>
        <p>
          Relações de leitura para conectar Malha Sul, Corredor Mercosul e fronteira,
          mantendo linguagem de hipótese e validação.
        </p>
      </div>
      <div className="antt-relation-grid">
        {anttModuleData.strategicRelations.map((relation) => (
          <article className="territorial-bottleneck-card" key={relation.title}>
            <div className="bottleneck-card__meta">
              <StatusBadge value={relation.visibility} />
            </div>
            <h3>{relation.title}</h3>
            <p>{relation.description}</p>
            <p className="validation-note">Cuidado: {relation.care}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CargoPanel() {
  return (
    <section
      aria-labelledby="cargas-tab"
      className="module-section module-panel"
      id="cargas-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Matriz territorial</p>
          <h2>Cargas e Fluxos</h2>
        </div>
        <p>
          Dados preliminares para pesquisa. A leitura passa a dialogar com a pergunta
          central do ICTF: onde existe carga potencial e o que falta para virar fluxo ferroviário real?
        </p>
      </div>
      <SectionNotice title="Uso exploratório">
        Matriz baseada em informações preliminares, hipóteses de pesquisa e fontes a validar. Os códigos de rastreabilidade servem para curadoria interna, não como confirmação oficial.
      </SectionNotice>
      <div className="table-wrap" role="region" aria-label="Tabela de cargas e fluxos" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Carga</th>
              <th>Status</th>
              <th>Relação Uruguaiana-Paso</th>
              <th>Origem provável</th>
              <th>Destino provável</th>
              <th>Modal atual</th>
              <th>Terminal/fronteira</th>
              <th>Potencial</th>
              <th>Confiança</th>
              <th>Última revisão</th>
              <th>Fonte</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            {cargoFlows.map((flow) => (
              <tr key={flow.cargo}>
                <td className="traceability-code">{flow.traceabilityCode}</td>
                <th scope="row">{flow.cargo}</th>
                <td><StatusBadge value={flow.informationStatus} /></td>
                <td><StatusBadge value={flow.borderRelation} /></td>
                <td>{flow.probableOrigin}</td>
                <td>{flow.probableDestination}</td>
                <td>{flow.currentMode}</td>
                <td>{flow.terminalOrBorder}</td>
                <td><StatusBadge value={flow.railPotential} /></td>
                <td><StatusBadge value={flow.confidence} /></td>
                <td>{flow.lastReview}</td>
                <td>{flow.source}</td>
                <td>{flow.note} <span className="validation-note">Próxima validação: {flow.nextValidationStep}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function BottleneckPanel() {
  return (
    <section
      aria-labelledby="gargalos-tab"
      className="module-section module-panel"
      id="gargalos-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Corredor Mercosul</p>
          <h2>Gargalos Prioritários</h2>
        </div>
        <p>
          Gargalos são apresentados como hipóteses de trabalho que podem reduzir
          capilaridade terminal, previsibilidade e conversão de carga potencial em fluxo ferroviário.
        </p>
      </div>
      <SectionNotice title="Hipóteses em validação">
        Os gargalos listados são categorias analíticas preliminares. Status, relação fronteiriça e códigos indicam rastreabilidade interna, não conclusão oficial consolidada.
      </SectionNotice>
      <div className="bottleneck-grid">
        {bottlenecks.map((item) => (
          <article className="bottleneck-card" key={item.title}>
            <div className="bottleneck-card__meta">
              <span className="traceability-code">{item.traceabilityCode}</span>
              <StatusBadge value={item.category} />
              <StatusBadge value={item.informationStatus} />
              <StatusBadge value={item.borderRelation} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <dl>
              <dt>Impacto</dt>
              <dd>{item.impact}</dd>
              <dt>Fonte/evidência</dt>
              <dd>{item.evidence}</dd>
              <dt>Próxima validação</dt>
              <dd>{item.nextValidationStep}</dd>
              <dt>Relação com OLSIF</dt>
              <dd>{item.olsifRelation}</dd>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}

function FrontsPanel() {
  return (
    <section
      aria-labelledby="frentes-tab"
      className="module-section module-panel"
      id="frentes-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Gestão exploratória</p>
          <h2>Frentes OLSIF</h2>
        </div>
        <p>
          Radar estratégico, extensão universitária e marcos de acompanhamento interno,
          sempre sem tratar contatos exploratórios como parceria formal.
        </p>
      </div>

      <div className="fronts-layout">
        <div>
          <h3>Radar Estratégico</h3>
          <div className="timeline-list">
            {strategicEvents.map((event) => (
              <article className="timeline-item" key={`${event.date}-${event.summary}`}>
                <div>
                  <span className="timeline-item__date">{event.date}</span>
                  <StatusBadge value={event.status} />
                </div>
                <div>
                  <h4>{event.front}</h4>
                  <p className="timeline-item__type">{event.type}</p>
                  <p>{event.summary}</p>
                  <strong>Próxima ação: {event.nextAction}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3>Projeto 5740</h3>
          <SectionNotice title="Acompanhamento interno">
            O módulo registra evidências extensionistas preliminares. Ele não substitui relatório oficial, prestação de contas ou validação institucional final.
          </SectionNotice>
          <div className="step-list extension-step-list">
            {extensionSteps.map((step) => (
              <article className={step.isCritical ? 'step-item step-item--critical' : 'step-item'} key={step.title}>
                <div>
                  <div className="step-item__meta">
                    <StatusBadge value={step.status} />
                    <StatusBadge value={step.evidenceType} />
                    <StatusBadge value={step.evidenceStatus} />
                  </div>
                  <h4>{step.title}</h4>
                  {step.dueDate ? <p className="step-item__deadline">Prazo: {step.dueDate}</p> : null}
                  <p>{step.evidence}</p>
                  <p className="validation-note">Próxima ação: {step.nextAction}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SourcesPanel() {
  return (
    <section
      aria-labelledby="fontes-tab"
      className="module-section module-panel"
      id="fontes-panel"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Auditabilidade</p>
          <h2>Fontes, Estado Atual e Linha do Tempo</h2>
        </div>
        <p>
          Fontes, status de validação, marcos consolidados e memória técnica para separar
          dado, hipótese, pista e informação em validação.
        </p>
      </div>
      <SectionNotice title="Curadoria preliminar">
        A classificação das fontes organiza o trabalho interno do OLSIF. Ela não confirma parceria, chancela institucional ou validação final dos dados.
      </SectionNotice>

      <div className="table-wrap" role="region" aria-label="Tabela de fontes e confiabilidade" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th>Fonte</th>
              <th>Tipo de fonte</th>
              <th>Referência</th>
              <th>Tema</th>
              <th>Status de validação</th>
              <th>Uso no OLSIF</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            {olsifSources.map((source) => (
              <tr key={source.source}>
                <th scope="row">{source.source}</th>
                <td><StatusBadge value={source.sourceType} /></td>
                <td>{source.referenceDate}</td>
                <td>{source.theme}</td>
                <td><StatusBadge value={source.validationStatus} /></td>
                <td>{source.olsifUse}</td>
                <td>{source.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionNotice title="Memória em validação">
        A linha do tempo organiza marcos de trabalho e pistas documentais. Ela não substitui relatório oficial nem comprova parceria formal.
      </SectionNotice>
      <div className="milestone-grid">
        {timelineMilestones.map((milestone, index) => (
          <article className="milestone-card" key={milestone.label}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div className="milestone-card__meta">
              <StatusBadge value={milestone.front} />
              <StatusBadge value={milestone.status} />
            </div>
            <h3>{milestone.label}</h3>
            <p>{milestone.category} · Referência: {milestone.referenceDate}</p>
            <p className="validation-note">{milestone.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ResultsPanel() {
  return (
    <>
      <section
        aria-labelledby="resultados-tab"
        className="module-section module-panel results-panel"
        id="resultados-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Resultados territoriais</p>
            <h2>{territorialMvpResult.title}</h2>
          </div>
          <p>
            Síntese operacional do {territorialMvpResult.version}, incorporada ao
            dashboard como resultado preliminar da frente territorial-logística.
          </p>
        </div>

        <SectionNotice title="Resultado preliminar">
          {territorialMvpResult.methodologicalNote}
        </SectionNotice>

        <div className="territorial-summary">
          <article>
            <span>Versão</span>
            <strong>{territorialMvpResult.version}</strong>
            <p>{territorialMvpResult.referenceDate}</p>
          </article>
          <article>
            <span>Sequência metodológica</span>
            <strong>{territorialMvpResult.methodologicalSequence}</strong>
            <p>Estrutura usada para testar a leitura territorial do corredor.</p>
          </article>
          <article>
            <span>Classes de evidência</span>
            <div className="badge-list">
              {territorialMvpResult.evidenceClasses.map((item) => (
                <StatusBadge value={item} key={item} />
              ))}
            </div>
          </article>
        </div>

        <div className="pilot-cargo-card">
          <div>
            <p className="eyebrow">Carga-piloto</p>
            <h3>{territorialMvpResult.pilotCargo.cargo}</h3>
            <p>{territorialMvpResult.objective}</p>
            <dl>
              <dt>Rota provável</dt>
              <dd>{territorialMvpResult.pilotCargo.route}</dd>
              <dt>Base de fontes</dt>
              <dd>{territorialMvpResult.pilotCargo.sourceBasis}</dd>
              <dt>Modal atual</dt>
              <dd>{territorialMvpResult.pilotCargo.currentModeStatus}</dd>
              <dt>Pontos envolvidos</dt>
              <dd>{territorialMvpResult.pilotCargo.involvedPoints}</dd>
            </dl>
          </div>
          <div>
            <StatusBadge value={`Potencial ${territorialMvpResult.pilotCargo.railPotential}`} />
            <h4>Gargalos associados</h4>
            <ul>
              {territorialMvpResult.pilotCargo.associatedBottlenecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Perguntas em aberto</h4>
            <ul>
              {territorialMvpResult.pilotCargo.openQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="table-wrap" role="region" aria-label="Tabela de resultados territoriais v0.2" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Carga</th>
                <th>Origem provável</th>
                <th>Destino provável</th>
                <th>Modal atual</th>
                <th>Tipo</th>
                <th>Terminal/fronteira</th>
                <th>Potencial</th>
                <th>Classe</th>
                <th>Ator que valida</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              {territorialMvpResult.cargoResults.map((item) => (
                <tr key={item.cargo}>
                  <th scope="row">{item.cargo}</th>
                  <td>{item.probableOrigin}</td>
                  <td>{item.probableDestination}</td>
                  <td>{item.currentMode}</td>
                  <td>{item.cargoType}</td>
                  <td>{item.terminalOrBorder}</td>
                  <td><StatusBadge value={item.railPotential} /></td>
                  <td><StatusBadge value={item.evidenceClass} /></td>
                  <td>{item.validatingActor}</td>
                  <td>{item.observation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="territorial-bottleneck-list">
          {territorialMvpResult.bottlenecks.map((item) => (
            <article className="territorial-bottleneck-card" key={item.bottleneck}>
              <h3>{item.bottleneck}</h3>
              <dl>
                <dt>Onde aparece</dt>
                <dd>{item.location}</dd>
                <dt>Evidência atual</dt>
                <dd>{item.currentEvidence}</dd>
                <dt>O que falta confirmar</dt>
                <dd>{item.missingValidation}</dd>
                <dt>Pergunta de validação</dt>
                <dd>{item.validationQuestion}</dd>
                <dt>Atores possíveis</dt>
                <dd>{item.validatingActors}</dd>
              </dl>
            </article>
          ))}
        </div>

        <SectionNotice title="Conclusão do MVP v0.2">
          {territorialMvpResult.conclusion}
        </SectionNotice>
      </section>

      <section
        aria-label="Indicadores demonstrativos"
        className="module-section module-panel"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cenário demonstrativo</p>
            <h2>Indicadores ferroviários iniciais</h2>
          </div>
          <p>
            Bloco herdado da v0.1 para manter a comparação ambiental como eixo
            futuro do OLSIF-CALC, ainda com valores fictícios.
          </p>
        </div>
        <SectionNotice title="Indicadores demonstrativos">
          Os valores dos cards são fictícios e servem apenas para prototipar a experiência de leitura executiva do dashboard.
        </SectionNotice>

        <div className="indicator-grid">
          {indicators.map((indicator) => (
            <IndicatorCard indicator={indicator} key={indicator.id} />
          ))}
        </div>
      </section>

      <section className="comparison-section" aria-labelledby="comparison-title">
        <div className="comparison-section__content">
          <p className="eyebrow">Comparação entre modais</p>
          <h2 id="comparison-title">Potencial de redução das emissões</h2>
          <p>
            Neste cenário demonstrativo, o transporte ferroviário apresenta um
            índice estimado de emissões inferior ao transporte rodoviário para
            uma operação logística equivalente.
          </p>
          <div className="data-notice">
            <strong>Importante:</strong> índice ilustrativo e demonstrativo, sem vínculo com uma
            operação real, inventário oficial de emissões ou diagnóstico consolidado. Rodoviário = base 100.
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-card__header">
            <div>
              <span>Índice de emissões estimadas</span>
              <strong>Menor índice indica menor emissão</strong>
            </div>
            <span className="status-tag">Dados demonstrativos</span>
          </div>
          <ComparisonChart data={transportComparison} />
        </div>
      </section>
    </>
  )
}
