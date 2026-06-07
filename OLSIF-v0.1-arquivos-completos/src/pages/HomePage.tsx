import { ComparisonChart } from '../components/dashboard/ComparisonChart'
import { IndicatorCard } from '../components/dashboard/IndicatorCard'
import { indicators, transportComparison } from '../data/demonstrativeData'

export function HomePage() {
  return (
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Dashboard Ferroviário OLSIF · Versão 0.1</p>
          <h1 id="hero-title">
            Logística sustentável orientada por dados.
          </h1>
          <p className="hero__description">
            Uma visão integrada da logística ferroviária, da intermodalidade e
            de seus potenciais benefícios ambientais.
          </p>
          <a className="primary-button" href="#painel">
            Explorar painel demonstrativo
          </a>
        </div>

        <aside className="hero__summary" aria-label="Resumo do projeto">
          <span>Observatório de Logística Sustentável e Inovação Ferroviária</span>
          <strong>Conhecimento para conectar territórios e modais</strong>
          <p>
            Apoio a análises acadêmicas e institucionais sobre transporte,
            eficiência logística e sustentabilidade.
          </p>
        </aside>
      </section>

      <section className="about-section" id="sobre" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Sobre o observatório</p>
          <h2 id="about-title">Informação a serviço da integração logística</h2>
        </div>
        <p>
          O Observatório de Logística Sustentável e Inovação Ferroviária
          organiza e comunica informações para apoiar o desenvolvimento
          ferroviário, a intermodalidade, a sustentabilidade e a integração
          regional.
        </p>
      </section>

      <section className="dashboard-section" id="painel" aria-labelledby="panel-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cenário demonstrativo</p>
            <h2 id="panel-title">Indicadores ferroviários em destaque</h2>
          </div>
          <p>
            Os valores abaixo são fictícios e servem exclusivamente para
            apresentar as possibilidades do Dashboard Ferroviário OLSIF.
          </p>
        </div>

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
            <strong>Importante:</strong> índice ilustrativo, sem vínculo com uma
            operação real. Rodoviário = base 100.
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
