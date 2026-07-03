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
        <a href="#inicio">Início</a>
        <a href="#modulos">Módulos</a>
        <a href="#modulos">ICTF</a>
      </nav>
    </header>
  )
}
