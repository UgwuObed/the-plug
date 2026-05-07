// app/dashboard/registrations/page.tsx
import Link from 'next/link'

const REGISTRATIONS = [
  { org: 'ASCAP',       status: 'registered', date: '2024-03-12', type: 'PRO' },
  { org: 'BMI',         status: 'pending',    date: null,         type: 'PRO' },
  { org: 'The MLC',     status: 'registered', date: '2024-03-15', type: 'Mechanical' },
  { org: 'Harry Fox',   status: 'registered', date: '2024-03-15', type: 'Sync' },
  { org: 'Music Reports', status: 'pending',  date: null,         type: 'Streaming' },
  { org: 'SoundExchange', status: 'not_started', date: null,      type: 'Digital' },
]

const STATUS_STYLES = {
  registered:  { label: 'Registered',   bg: 'bg-mint-pale border-mint-mid',  text: 'text-mint' },
  pending:     { label: 'Pending',       bg: 'bg-amber-50 border-amber-200',  text: 'text-amber-700' },
  not_started: { label: 'Not Started',   bg: 'bg-plug-warm-gray border-plug-border', text: 'text-plug-text-muted' },
} as const

export default function RegistrationsPage() {
  return (
    <div className="max-w-3xl space-y-8">

      <div>
        <p className="label-mono text-mint mb-2">Your Registrations</p>
        <h1 className="heading-display text-[36px] text-plug-text-primary mb-2">Publishing Registrations</h1>
        <p className="text-[14px] text-plug-text-secondary">
          Status of your publishing registrations across all collection societies and licensing organizations.
        </p>
      </div>

      <div className="bg-white border border-plug-border rounded-card divide-y divide-plug-border">
        {REGISTRATIONS.map((reg) => {
          const style = STATUS_STYLES[reg.status as keyof typeof STATUS_STYLES]
          return (
            <div key={reg.org} className="flex items-center justify-between px-6 py-4 hover:bg-plug-off-white transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-plug-warm-gray flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-mono font-medium text-plug-text-muted uppercase">{reg.org.slice(0, 3)}</span>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-plug-text-primary">{reg.org}</p>
                  <p className="text-[12px] text-plug-text-muted">{reg.type} royalties</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {reg.date && (
                  <p className="text-[12px] text-plug-text-muted">{reg.date}</p>
                )}
                <span className={`label-mono text-[9.5px] border rounded px-2.5 py-1 ${style.bg} ${style.text}`}>
                  {style.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-navy rounded-card p-6 flex items-center justify-between gap-6">
        <div>
          <p className="text-[14px] font-medium text-white mb-1">Need to register a new song?</p>
          <p className="text-[13px] text-white/45">Submit your catalog and we&apos;ll handle all registrations.</p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 px-5 py-2.5 text-[13px] font-medium font-body text-white bg-coral rounded-lg no-underline hover:bg-coral-dark transition-colors"
        >
          Contact Us →
        </Link>
      </div>

    </div>
  )
}
