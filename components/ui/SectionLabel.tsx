interface SectionLabelProps {
  children: React.ReactNode
  color?: 'mint' | 'coral' | 'coral-mid' | 'muted'
}

const colorMap = {
  mint:      'text-mint',
  coral:     'text-coral',
  'coral-mid': 'text-coral-mid',
  muted:     'text-plug-text-muted',
}

export function SectionLabel({ children, color = 'mint' }: SectionLabelProps) {
  return (
    <p
      className={`label-mono mb-3.5 ${colorMap[color]}`}
      aria-hidden="true"
    >
      {children}
    </p>
  )
}
