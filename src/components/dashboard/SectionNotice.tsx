type SectionNoticeProps = {
  title: string
  children: string
}

export function SectionNotice({ title, children }: SectionNoticeProps) {
  return (
    <aside className="section-notice">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  )
}
