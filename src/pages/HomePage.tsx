import { useState } from 'react'
import { ComparisonChart } from '../components/dashboard/ComparisonChart'
import { ExecutiveCard } from '../components/dashboard/ExecutiveCard'
import { IndicatorCard } from '../components/dashboard/IndicatorCard'
import { ModuleNavigation } from '../components/dashboard/ModuleNavigation'
import { SectionNotice } from '../components/dashboard/SectionNotice'
import { StatusBadge } from '../components/dashboard/StatusBadge'
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
  timelineMilestones,
} from '../data/intelligenceData'

const moduleNavigationItems = [
  { id: 'visao-geral', label: 'Visão Geral', description: 'OLSIF, objetivo e limites' },
  { id: 'ictf', label: 'ICTF', description: 'capilaridade conceitual' },
  { id: 'cargas', label: 'Cargas', description: 'matriz preliminar' },
  { id: 'gargalos', label: 'Gargalos', description: 'hipóteses em validação' },
  { id: 'frentes', label: 'Frentes', description: 'radar e extensão' },
  { id: 'fontes', label: 'Fontes', description: 'rastreabilidade' },
  { id: 'demonstrativos', label: 'Demonstrativos', description: 'indicadores e comparação' },
]

export function HomePage() {
  const [activeModule, setActiveModule] = useState(moduleNavigationItems[0].id)

  function renderActiveModule() {
    switch (activeModule) {
      case 'ictf':
        return <IctfPanel />
      case 'cargas':
        return <CargoPanel />
      case 'gargalos':
        return <BottleneckPanel />
      case 'frentes':
        return <FrontsPanel />
      case 'fontes':
        return <SourcesPanel />
      case 'demonstrativos':
        return <DemonstrativePanel />
      default:
        return <OverviewPanel />
    }
  }

  return (
    <main id="inicio">
      <section className="overview-section" aria-labelledby="overview-title">
        <div className="overview-section__content">
          <p className="eyebrow">Dashboard Ferroviário OLSIF · Versão 0.3.0</p>
          <h1 id="overview-title">ICTF Conceitual e Capilaridade Terminal</h1>
          <p>
            Protótipo público e exploratório do OLSIF para organizar hipóteses sobre
            terminais, pátios, porto seco, cargas, gargalos e integração ferroviária
            no Corredor Mercosul.
          </p>
        </div>
        <div className="overview-section__notice">
          <strong>Planejamento metodológico</strong>
          <p>
            A v0.3 estrutura o ICTF como hipótese de pesquisa. Não há cálculo real,
            ranking de terminais, diagnóstico oficial ou decisão operacional nesta versão.
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
          <h2 id="visao-geral-title">O que é o Dashboard OLSIF</h2>
        </div>
        <p>
          O painel organiza informações preliminares para apoiar pesquisa aplicada,
          inovação tecnológica, extensão universitária e comunicação institucional prudente.
        </p>
      </div>

      <SectionNotice title="Uso exploratório">
        O dashboard é um protótipo interno/publicável, com dados simulados, preliminares ou curados manualmente. Ele não substitui relatório oficial, nota técnica protocolada ou validação institucional final.
      </SectionNotice>

      <div className="objective-grid" aria-label="Objetivos e limites da versão 0.3">
        <article>
          <span>01</span>
          <h3>Objetivo da v0.3</h3>
          <p>
            Estruturar o ICTF como linguagem metodológica para observar como terminais
            podem converter carga potencial em fluxo ferroviário real.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>O que a versão não faz</h3>
          <p>
            Não calcula índice oficial, não ranqueia terminais, não usa dados privados
            e não promete gêmeo digital operacional.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Vínculo institucional</h3>
          <p>
            Alinha o Dashboard ao Projeto 5930 e ao Projeto 5789, com relação indireta
            ao Projeto 5740 para futuras validações extensionistas.
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
          <h2>Fontes e Linha do Tempo</h2>
        </div>
        <p>
          Fontes, status de validação e marcos de memória técnica para separar dado,
          hipótese, pista e informação em validação.
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

function DemonstrativePanel() {
  return (
    <>
      <section
        aria-labelledby="demonstrativos-tab"
        className="module-section module-panel"
        id="demonstrativos-panel"
        role="tabpanel"
        tabIndex={0}
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
