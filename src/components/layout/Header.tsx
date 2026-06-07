export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Página inicial do OLSIF">
        <span className="brand__mark" aria-hidden="true">
          O
        </span>
        <span>
          <strong>OLSIF</strong>
          <small>Dashboard Ferroviário</small>
        </span>
      </a>

      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre</a>
        <a href="#painel">Indicadores</a>
        <a href="#comparacao">Comparação</a>
      </nav>
    </header>
  )
}
