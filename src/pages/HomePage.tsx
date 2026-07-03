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
  olsifSources,
  strategicEvents,
  timelineMilestones,
} from '../data/intelligenceData'

const moduleNavigationItems = [
  { href: '#estado', label: 'Estado', description: 'frentes prioritárias' },
  { href: '#radar', label: 'Radar', description: 'eventos monitorados' },
  { href: '#cargas', label: 'Cargas', description: 'matriz preliminar' },
  { href: '#gargalos', label: 'Gargalos', description: 'hipóteses em validação' },
  { href: '#ictf', label: 'ICTF', description: 'indicador conceitual' },
  { href: '#fontes', label: 'Fontes', description: 'rastreabilidade' },
  { href: '#extensao', label: 'Extensão', description: 'Projeto 5740' },
  { href: '#linha-do-tempo', label: 'Linha do Tempo', description: 'memória técnica' },
  { href: '#indicadores', label: 'Indicadores', description: 'valores demonstrativos' },
]

export function HomePage() {
  return (
    <main id="inicio">
      <section className="overview-section" aria-labelledby="overview-title">
        <div className="overview-section__content">
          <p className="eyebrow">Dashboard Ferroviário OLSIF · Versão 0.2.2</p>
          <h1 id="overview-title">Painel de Inteligência Frugal do OLSIF</h1>
          <p>
            Protótipo interno para acompanhar frentes estratégicas, cargas,
            fluxos, gargalos, fontes e marcos técnicos ligados à Malha Sul, ao
            Corredor Mercosul e à integração Brasil-Argentina.
          </p>
        </div>
        <div className="overview-section__notice">
          <strong>Dados preliminares</strong>
          <p>
            Informações simuladas ou curadas manualmente para pesquisa. Não
            representam diagnóstico final nem base oficial consolidada.
          </p>
        </div>
      </section>

      <ModuleNavigation items={moduleNavigationItems} />

      <section className="module-section" id="estado" aria-labelledby="estado-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Tela inicial</p>
            <h2 id="estado-title">Estado do OLSIF</h2>
          </div>
          <p>
            Cards executivos para leitura rápida das frentes prioritárias do
            observatório.
          </p>
        </div>
        <div className="executive-grid">
          {executiveCards.map((item) => (
            <ExecutiveCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className="module-section" id="radar" aria-labelledby="radar-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Monitoramento</p>
            <h2 id="radar-title">Radar Estratégico</h2>
          </div>
          <p>
            Eventos, pistas e temas que precisam de acompanhamento, validação ou
            registro documental.
          </p>
        </div>
        <div className="timeline-list">
          {strategicEvents.map((event) => (
            <article className="timeline-item" key={`${event.date}-${event.summary}`}>
              <div>
                <span className="timeline-item__date">{event.date}</span>
                <StatusBadge value={event.status} />
              </div>
              <div>
                <h3>{event.front}</h3>
                <p className="timeline-item__type">{event.type}</p>
                <p>{event.summary}</p>
                <strong>Próxima ação: {event.nextAction}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="module-section" id="cargas" aria-labelledby="cargas-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Matriz territorial</p>
            <h2 id="cargas-title">Cargas e Fluxos</h2>
          </div>
          <p>
            Dados preliminares para pesquisa. Não representam diagnóstico final.
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

      <section className="module-section" id="gargalos" aria-labelledby="gargalos-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Corredor Mercosul</p>
            <h2 id="gargalos-title">Gargalos Prioritários</h2>
          </div>
          <p>
            Problemas estruturados como hipóteses de trabalho para validação com
            fontes e atores externos.
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

      <section className="module-section ictf-section" id="ictf" aria-labelledby="ictf-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Indicador conceitual</p>
            <h2 id="ictf-title">ICTF — Capilaridade Terminal Ferroviária</h2>
          </div>
          <p>
            Indicador conceitual em desenvolvimento. Valores demonstrativos para
            fins de prototipagem.
          </p>
        </div>
        <SectionNotice title="Valores simulados">
          As pontuações do ICTF são placeholders metodológicos para testar leitura visual e estrutura de dados. A escala ainda precisa de validação técnica.
        </SectionNotice>
        <div className="ictf-grid">
          {ictfDimensions.map((item) => (
            <article className="metric-row" key={item.dimension}>
              <div>
                <h3>{item.dimension}</h3>
                <p>{item.interpretation}</p>
              </div>
              <div className="metric-row__score" aria-label={`Valor demonstrativo ${item.value} de 100`}>
                <span style={{ width: `${item.value}%` }} />
              </div>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="module-section" id="fontes" aria-labelledby="fontes-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Auditabilidade</p>
            <h2 id="fontes-title">Fontes e Confiabilidade</h2>
          </div>
          <p>
            Registro de fontes candidatas e seu papel previsto na curadoria do
            observatório.
          </p>
        </div>
        <div className="table-wrap" role="region" aria-label="Tabela de fontes e confiabilidade" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Fonte</th>
                <th>Tipo</th>
                <th>Tema</th>
                <th>Status de validação</th>
                <th>Uso no OLSIF</th>
              </tr>
            </thead>
            <tbody>
              {olsifSources.map((source) => (
                <tr key={source.source}>
                  <th scope="row">{source.source}</th>
                  <td>{source.type}</td>
                  <td>{source.theme}</td>
                  <td>{source.validationStatus}</td>
                  <td>{source.olsifUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="module-section split-section" id="extensao" aria-labelledby="extensao-title">
        <div>
          <p className="eyebrow">Extensão universitária</p>
          <h2 id="extensao-title">Projeto 5740</h2>
          <p>
            Etapas operacionais para transformar evidências, escutas e produtos
            técnicos em entregas acompanháveis.
          </p>
        </div>
        <div className="step-list">
          {extensionSteps.map((step) => (
            <article className="step-item" key={step.title}>
              <div>
                <h3>{step.title}</h3>
                {step.dueDate ? <p>Prazo: {step.dueDate}</p> : null}
              </div>
              <StatusBadge value={step.status} />
            </article>
          ))}
        </div>
      </section>

      <section className="module-section" id="linha-do-tempo" aria-labelledby="linha-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Memória técnica</p>
            <h2 id="linha-title">Linha do Tempo OLSIF</h2>
          </div>
          <p>
            Marcos institucionais e técnicos que ajudam a explicar a evolução do
            observatório.
          </p>
        </div>
        <div className="milestone-grid">
          {timelineMilestones.map((milestone, index) => (
            <article className="milestone-card" key={milestone.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{milestone.label}</h3>
              <p>{milestone.category}</p>
              <StatusBadge value={milestone.status} />
            </article>
          ))}
        </div>
      </section>

      <section className="module-section" id="indicadores" aria-labelledby="indicadores-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cenário demonstrativo</p>
            <h2 id="indicadores-title">Indicadores ferroviários iniciais</h2>
          </div>
          <p>
            Bloco herdado da v0.1 para manter a comparação ambiental como eixo
            futuro do OLSIF-CALC.
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

      <section className="comparison-section" id="comparacao" aria-labelledby="comparison-title">
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
    </main>
  )
}





