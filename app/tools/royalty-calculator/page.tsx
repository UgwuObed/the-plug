'use client'
// app/tools/royalty-calculator/page.tsx

import { useState, useMemo } from 'react'
import { ToolPageShell } from '@/components/tools/ToolPageShell'

// ── Rate tables ($ per stream) ────────────────────────────────────────
// Publishing side only (what The Plug handles).
// streaming = mechanical + sync-adjacent
// pro       = performance royalties (ASCAP/BMI)
// mlc       = MLC mechanical
const PLATFORM_RATES: Record<string, { streaming: number; pro: number; mlc: number }> = {
  spotify:      { streaming: 0.002861, pro: 0.000564, mlc: 0.000520 },
  apple_music:  { streaming: 0.004800, pro: 0.000900, mlc: 0.000720 },
  youtube_music:{ streaming: 0.001200, pro: 0.000320, mlc: 0.000210 },
  amazon_music: { streaming: 0.003500, pro: 0.000640, mlc: 0.000580 },
  tidal:        { streaming: 0.007000, pro: 0.001100, mlc: 0.000900 },
  deezer:       { streaming: 0.001900, pro: 0.000410, mlc: 0.000350 },
}

const PLATFORMS = [
  { id: 'spotify',       label: 'Spotify' },
  { id: 'apple_music',   label: 'Apple Music' },
  { id: 'youtube_music', label: 'YouTube Music' },
  { id: 'amazon_music',  label: 'Amazon Music' },
  { id: 'tidal',         label: 'TIDAL' },
  { id: 'deezer',        label: 'Deezer' },
]

const ROYALTY_TYPES = [
  { id: 'all',       label: 'All Royalties' },
  { id: 'streaming', label: 'Streaming Only' },
  { id: 'pro',       label: 'PRO Only (ASCAP/BMI)' },
  { id: 'mlc',       label: 'MLC Only' },
]

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function parseStreams(raw: string): number {
  const clean = raw.replace(/[^0-9]/g, '')
  return Math.max(0, parseInt(clean || '0', 10))
}

// ── Donut Chart (pure SVG, no library dep) ───────────────────────────
function DonutChart({ streaming, pro, mlc }: { streaming: number; pro: number; mlc: number }) {
  const total = streaming + pro + mlc
  if (total === 0) return null

  const cx = 80; const cy = 80; const r = 60; const stroke = 18
  const circumference = 2 * Math.PI * r

  const segments = [
    { value: streaming, color: 'var(--mint)',     label: 'Streaming' },
    { value: pro,       color: 'var(--mint-mid)', label: 'PRO' },
    { value: mlc,       color: 'var(--coral-mid)',label: 'MLC' },
  ]

  let offset = circumference * 0.25 // start at top
  const slices = segments.map((seg) => {
    const pct = seg.value / total
    const dasharray = `${pct * circumference} ${circumference}`
    const dashoffset = -offset
    offset += pct * circumference
    return { ...seg, dasharray, dashoffset: -dashoffset, pct }
  })

  return (
    <div className="flex items-center gap-8 flex-wrap">
      <svg width="160" height="160" viewBox="0 0 160 160" className="flex-shrink-0">
        {/* Track */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--warm-gray)" strokeWidth={stroke} />
        {/* Segments */}
        {slices.map((s) => (
          <circle
            key={s.label}
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={s.dasharray}
            strokeDashoffset={s.dashoffset}
            strokeLinecap="butt"
          />
        ))}
        {/* Center total */}
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize="11" fill="var(--text-muted)" fontFamily="var(--font-mono)">TOTAL</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="16" fontWeight="500" fill="var(--text-primary)" fontFamily="var(--font-display)">{fmt(total)}</text>
      </svg>

      {/* Legend */}
      <div className="flex flex-col gap-3">
        {slices.map((s) => (
          <div key={s.label} className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
            <span className="text-[13px] text-plug-text-secondary">{s.label}</span>
            <span className="ml-auto pl-4 font-mono text-[13px] font-medium text-plug-text-primary">
              {fmt(s.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function RoyaltyCalculatorPage() {
  const [streamsRaw, setStreamsRaw] = useState('10,000')
  const [platform, setPlatform]   = useState('spotify')
  const [royaltyType, setRoyaltyType] = useState('all')

  const streams = useMemo(() => parseStreams(streamsRaw), [streamsRaw])
  const rates   = PLATFORM_RATES[platform]

  const streaming = +(streams * rates.streaming).toFixed(2)
  const pro       = +(streams * rates.pro).toFixed(2)
  const mlc       = +(streams * rates.mlc).toFixed(2)
  const total     = +(streaming + pro + mlc).toFixed(2)

  const displayed =
    royaltyType === 'streaming' ? streaming :
    royaltyType === 'pro'       ? pro :
    royaltyType === 'mlc'       ? mlc :
    total

  return (
    <ToolPageShell
      label="Free Tool"
      title="Royalty Calculator"
      description="Estimate your publishing royalties from streaming. Enter your stream count, pick a platform, and see the breakdown across streaming, PRO, and MLC royalties."
      note="Rates are estimates based on industry averages. Actual payouts vary. This covers the publishing side only — master recording royalties are separate."
    >
      <div className="max-w-3xl space-y-8">

        {/* Controls */}
        <div className="bg-white border border-plug-border rounded-card p-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            {/* Stream count */}
            <div>
              <label className="label-mono text-plug-text-muted block mb-2">
                Number of Streams
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={streamsRaw}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9]/g, '')
                  setStreamsRaw(raw ? Number(raw).toLocaleString() : '')
                }}
                className="
                  w-full px-4 py-3 text-[14px] font-body
                  bg-plug-off-white border border-plug-border rounded-lg
                  text-plug-text-primary placeholder:text-plug-text-muted
                  focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                  transition-colors
                "
              />
            </div>

            {/* Platform */}
            <div>
              <label className="label-mono text-plug-text-muted block mb-2">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="
                  w-full px-4 py-3 text-[14px] font-body
                  bg-plug-off-white border border-plug-border rounded-lg
                  text-plug-text-primary
                  focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                  transition-colors appearance-none cursor-pointer
                "
              >
                {PLATFORMS.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </div>

            {/* Royalty type */}
            <div>
              <label className="label-mono text-plug-text-muted block mb-2">
                Royalty Type
              </label>
              <select
                value={royaltyType}
                onChange={(e) => setRoyaltyType(e.target.value)}
                className="
                  w-full px-4 py-3 text-[14px] font-body
                  bg-plug-off-white border border-plug-border rounded-lg
                  text-plug-text-primary
                  focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                  transition-colors appearance-none cursor-pointer
                "
              >
                {ROYALTY_TYPES.map((rt) => (
                  <option key={rt.id} value={rt.id}>{rt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Total Royalties',       value: fmt(total),     highlight: royaltyType === 'all' },
            { label: 'Streaming Royalties',   value: fmt(streaming), highlight: royaltyType === 'streaming' },
            { label: 'PRO Royalties (ASCAP/BMI)', value: fmt(pro),   highlight: royaltyType === 'pro' },
            { label: 'MLC Royalties',         value: fmt(mlc),       highlight: royaltyType === 'mlc' },
          ].map(({ label, value, highlight }) => (
            <div
              key={label}
              className={`
                rounded-card p-5 border transition-all
                ${highlight
                  ? 'bg-navy border-navy/0'
                  : 'bg-white border-plug-border'
                }
              `}
            >
              <p className={`text-[11px] uppercase tracking-wider mb-2 font-mono ${highlight ? 'text-white/50' : 'text-plug-text-muted'}`}>
                {label}
              </p>
              <p
                className={`num-display text-[22px] ${highlight ? 'text-white' : 'text-plug-text-primary'}`}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Donut chart — only show for "All Royalties" */}
        {royaltyType === 'all' && streams > 0 && (
          <div className="bg-white border border-plug-border rounded-card p-7">
            <p className="label-mono text-plug-text-muted mb-5">Breakdown</p>
            <DonutChart streaming={streaming} pro={pro} mlc={mlc} />
          </div>
        )}

        {/* Context note */}
        <p className="text-[13px] text-plug-text-muted leading-relaxed">
          Rates used: {PLATFORMS.find(p => p.id === platform)?.label} publishing rates as of 2025.
          Streaming: {fmt(rates.streaming * 10000)} / 10k streams · PRO: {fmt(rates.pro * 10000)} / 10k streams · MLC: {fmt(rates.mlc * 10000)} / 10k streams.
        </p>

      </div>
    </ToolPageShell>
  )
}
