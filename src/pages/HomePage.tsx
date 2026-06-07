import { AreaPlaceholder } from '../components/dashboard/AreaPlaceholder'
import { dashboardAreas } from '../data/dashboardAreas'

export function HomePage() {
  return (
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Dados para uma ferrovia mais sustentável</p>
          <h1 id="hero-title">
            Informação ferroviária clara para apoiar decisões melhores.
          </h1>
          <p className="hero__description">
            O futuro Dashboard Ferroviário OLSIF reunirá indicadores, gráficos e
            mapas para ampliar o conhecimento sobre a logística ferroviária.
          </p>
          <a className="primary-button" href="#painel">
            Conhecer a estrutura
          </a>
        </div>

        <aside className="hero__summary" aria-label="Resumo do projeto">
          <span>Visão integrada</span>
          <strong>Logística, inovação e sustentabilidade</strong>
          <p>Uma base preparada para receber dados e análises futuras.</p>
        </aside>
      </section>

      <section className="about-section" id="sobre" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">Sobre o observatório</p>
          <h2 id="about-title">Conhecimento a serviço do setor ferroviário</h2>
        </div>
        <p>
          O Observatório de Logística Sustentável e Inovação Ferroviária
          promove a organização e a comunicação de informações relevantes para
          o desenvolvimento do transporte ferroviário.
        </p>
      </section>

      <section className="dashboard-section" id="painel" aria-labelledby="panel-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Estrutura do painel</p>
            <h2 id="panel-title">Espaços preparados para os próximos dados</h2>
          </div>
          <p>
            Os cartões abaixo indicam onde cada tipo de visualização será
            desenvolvido nas próximas etapas.
          </p>
        </div>

        <div className="area-grid">
          {dashboardAreas.map((area) => (
            <AreaPlaceholder area={area} key={area.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

