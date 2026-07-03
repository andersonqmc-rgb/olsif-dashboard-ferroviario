type ModuleNavigationItem = {
  href: string
  label: string
  description: string
}

type ModuleNavigationProps = {
  items: ModuleNavigationItem[]
}

export function ModuleNavigation({ items }: ModuleNavigationProps) {
  return (
    <nav className="module-navigation" aria-label="Navegação pelos módulos do painel">
      {items.map((item) => (
        <a href={item.href} key={item.href}>
          <strong>{item.label}</strong>
          <span>{item.description}</span>
        </a>
      ))}
    </nav>
  )
}
