// app/dashboard/page.tsx
import Link from 'next/link'

// ── Mock data — replace with real API calls ───────────────────────────
const STATS = [
  { label: 'ISRCs Found',     value: '26',  sub: 'across all searches' },
  { label: 'UPCs Found',      value: '2',   sub: 'albums looked up' },
  { label: 'Splits Created',  value: '1',   sub: 'publishing splits' },
  { label: 'Tracks Assigned', value: '0',   sub: 'pending assignment' },
]

const RECENT_SEARCHES = [
  {
    id: '1',
    isrc: 'QZES62114041',
    track: 'Just Keep Swimming',
    artist: 'Davey In Technicolor',
    album: 'DEEP BLUE',
    albumType: 'album',
    releaseDate: '10/15/2021',
    tracks: 9,
    explicit: false,
    popularity: 0,
  },
  {
    id: '2',
    isrc: 'QZES62114042',
    track: 'Ultraviolet',
    artist: 'Davey In Technicolor',
    album: 'DEEP BLUE',
    albumType: 'album',
    releaseDate: '10/15/2021',
    tracks: 9,
    explicit: false,
    popularity: 2,
  },
  {
    id: '3',
    isrc: 'QZES62114043',
    track: 'Glass Half Full',
    artist: 'Davey In Technicolor',
    album: 'DEEP BLUE',
    albumType: 'album',
    releaseDate: '10/15/2021',
    tracks: 9,
    explicit: false,
    popularity: 1,
  },
]

const WRITER_PROFILE = {
  name: 'Davis Warner Natzle',
  email: 'dnatzle.theplug@gmail.com',
  affiliation: 'ASCAP',
  writerIpi: '841550059',
  publisher: 'The Plug Music Administration',
  publisherIpi: '898113401',
}

// ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  return (
    <div className="max-w-[1100px] space-y-8">

      {/* Writer profile card */}
      <div className="bg-white border border-plug-border rounded-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
            <span className="font-mono text-[13px] font-medium text-white">DN</span>
          </div>
          <div>
            <h2 className="heading-display text-[20px] font-normal text-plug-text-primary">
              {WRITER_PROFILE.name}
            </h2>
            <p className="text-[12.5px] text-plug-text-muted mt-0.5">{WRITER_PROFILE.email}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-[12.5px]">
          {[
            { label: 'Affiliation', value: WRITER_PROFILE.affiliation },
            { label: 'Writer IPI',  value: WRITER_PROFILE.writerIpi },
            { label: 'Publisher',   value: WRITER_PROFILE.publisher },
            { label: 'Pub. IPI',    value: WRITER_PROFILE.publisherIpi },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-plug-text-muted mb-0.5 uppercase tracking-wider text-[10px]">{label}</p>
              <p className="font-mono font-medium text-plug-text-primary">{value}</p>
            </div>
          ))}
        </div>
        <button className="flex-shrink-0 px-4 py-2 text-[12.5px] font-medium font-body text-plug-text-secondary border border-plug-border rounded-lg hover:bg-plug-warm-gray transition-colors">
          Edit Profile
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white border border-plug-border rounded-card p-5">
            <p className="label-mono text-plug-text-muted mb-2">{stat.label}</p>
            <p className="num-display text-[32px] text-plug-text-primary mb-1">{stat.value}</p>
            <p className="text-[12px] text-plug-text-muted">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ISRC searches — spans 2 cols */}
        <div className="lg:col-span-2 bg-white border border-plug-border rounded-card">
          <div className="flex items-center justify-between px-6 py-4 border-b border-plug-border">
            <h3 className="text-[14px] font-medium text-plug-text-primary">Your ISRC Searches</h3>
            <Link
              href="/tools/find-my-isrc"
              className="text-[12.5px] text-mint font-medium hover:underline no-underline"
            >
              Find an ISRC →
            </Link>
          </div>

          <div className="divide-y divide-plug-border">
            {RECENT_SEARCHES.map((item) => (
              <div key={item.id} className="flex items-center gap-4 px-6 py-4 hover:bg-plug-off-white transition-colors">
                {/* Album art placeholder */}
                <div className="w-10 h-10 rounded bg-plug-warm-gray flex-shrink-0 flex items-center justify-center">
                  <span className="text-[8px] font-mono text-plug-text-muted uppercase">
                    {item.albumType === 'album' ? 'ALB' : 'EP'}
                  </span>
                </div>

                {/* Track info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-medium text-plug-text-primary truncate">{item.track}</p>
                  <p className="text-[12px] text-plug-text-muted truncate">{item.artist} · {item.album}</p>
                </div>

                {/* ISRC */}
                <div className="text-right flex-shrink-0">
                  <p className="font-mono text-[12px] font-medium text-plug-text-primary tracking-wider">{item.isrc}</p>
                  <p className="text-[11px] text-plug-text-muted mt-0.5">{item.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions panel */}
        <div className="space-y-4">

          {/* Quick actions */}
          <div className="bg-white border border-plug-border rounded-card p-5">
            <h3 className="label-mono text-plug-text-muted mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <ActionButton
                label="Publishing Registrations"
                href="/dashboard/registrations"
                accent
              />
              <ActionButton label="Find My ISRC"   href="/tools/find-my-isrc" />
              <ActionButton label="Find My UPC"    href="/tools/find-my-upc" />
              <ActionButton label="Royalty Calc"   href="/tools/royalty-calculator" />
            </div>
          </div>

          {/* Splits */}
          <div className="bg-white border border-plug-border rounded-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="label-mono text-plug-text-muted">Splits</h3>
              <span className="label-mono text-[9px] text-coral bg-coral-pale border border-coral/20 rounded px-2 py-0.5">
                1 created
              </span>
            </div>
            <p className="text-[13px] text-plug-text-secondary leading-relaxed">
              You have 1 publishing split created. 0 tracks currently assigned.
            </p>
            <Link
              href="/dashboard/catalog"
              className="inline-block mt-4 text-[12.5px] text-mint font-medium hover:underline no-underline"
            >
              View catalog →
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

function ActionButton({ label, href, accent = false }: { label: string; href: string; accent?: boolean }) {
  return (
    <Link
      href={href}
      className={`
        flex items-center justify-between w-full px-4 py-2.5 rounded-lg
        text-[13px] font-medium no-underline transition-all duration-150
        ${accent
          ? 'bg-coral text-white hover:bg-coral-dark'
          : 'bg-plug-off-white text-plug-text-secondary hover:bg-plug-warm-gray hover:text-plug-text-primary border border-plug-border'
        }
      `}
    >
      {label}
      <span className="text-[11px] opacity-60">→</span>
    </Link>
  )
}
