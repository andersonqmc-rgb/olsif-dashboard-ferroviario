export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Página inicial do OLSIF">
        <span className="brand__mark" aria-hidden="true">
          O
        </span>
        <span>
          <strong>OLSIF</strong>
          <small>Painel de Inteligência Frugal</small>
        </span>
      </a>

      <nav aria-label="Navegação principal">
        <a href="#estado">Estado</a>
        <a href="#radar">Radar</a>
        <a href="#cargas">Cargas</a>
        <a href="#ictf">ICTF</a>
        <a href="#fontes">Fontes</a>
      </nav>
    </header>
  )
}
