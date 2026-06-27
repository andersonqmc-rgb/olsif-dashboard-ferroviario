type StatusBadgeProps = {
  value: string
}

export function StatusBadge({ value }: StatusBadgeProps) {
  return <span className="status-badge">{value}</span>
}
