type ModuleNavigationItem = {
  id: string
  label: string
  description: string
}

type ModuleNavigationProps = {
  activeId: string
  items: ModuleNavigationItem[]
  onSelect: (id: string) => void
}

export function ModuleNavigation({ activeId, items, onSelect }: ModuleNavigationProps) {
  return (
    <div className="module-navigation" role="tablist" aria-label="Navegação pelos módulos do painel">
      {items.map((item) => (
        <button
          aria-controls={`${item.id}-panel`}
          aria-selected={activeId === item.id}
          id={`${item.id}-tab`}
          key={item.id}
          onClick={() => onSelect(item.id)}
          role="tab"
          type="button"
        >
          <strong>{item.label}</strong>
          <span>{item.description}</span>
        </button>
      ))}
    </div>
  )
}
