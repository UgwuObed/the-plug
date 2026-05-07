// components/tools/ToolPageShell.tsx
// Consistent header + shell used by every tool page.

interface ToolPageShellProps {
  label: string
  title: string
  description: string
  note?: string
  children: React.ReactNode
}

export function ToolPageShell({
  label,
  title,
  description,
  note,
  children,
}: ToolPageShellProps) {
  return (
    <div className="px-[5%]">
      <div className="max-w-container mx-auto py-16 pb-24">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="label-mono text-mint mb-3">{label}</p>
          <h1
            className="heading-display text-plug-text-primary mb-4"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
          >
            {title}
          </h1>
          <p className="text-[15px] text-plug-text-secondary leading-[1.72]">
            {description}
          </p>
          {note && (
            <p className="mt-3 text-[13px] text-plug-text-muted leading-[1.6]">
              <span className="font-medium text-coral">*</span> {note}
            </p>
          )}
        </div>

        {/* Page content */}
        {children}

      </div>
    </div>
  )
}
