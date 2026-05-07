'use client'
// app/writer-search/page.tsx

import { useState } from 'react'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ToolPageShell } from '@/components/tools/ToolPageShell'

type Writer = {
  id: string
  name: string
  ipi: string
  affiliation: string
  email?: string
  publisher?: string
  publisherIpi?: string
  worksCount: number
}

type SearchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'empty'; query: string }
  | { status: 'results'; writers: Writer[]; query: string }

// Mock writers for UI dev — replace with real API call
const MOCK_WRITERS: Writer[] = [
  {
    id: '1',
    name: 'Davis Warner Natzle',
    ipi: '841550059',
    affiliation: 'ASCAP',
    email: 'dnatzle.theplug@gmail.com',
    publisher: 'The Plug Music Administration',
    publisherIpi: '898113401',
    worksCount: 26,
  },
]

export default function WriterSearchPage() {
  const [query, setQuery]   = useState('')
  const [state, setState]   = useState<SearchState>({ status: 'idle' })

  async function handleSearch() {
    if (!query.trim()) return

    setState({ status: 'loading' })

    try {
      // TODO: replace with real API call
      // const res = await fetch(`/api/writer-search?q=${encodeURIComponent(query)}`)
      // const data = await res.json()

      await new Promise((r) => setTimeout(r, 700))
      const results = MOCK_WRITERS.filter(
        (w) =>
          w.name.toLowerCase().includes(query.toLowerCase()) ||
          w.ipi.includes(query) ||
          (w.email?.toLowerCase().includes(query.toLowerCase()) ?? false)
      )

      if (results.length === 0) {
        setState({ status: 'empty', query })
      } else {
        setState({ status: 'results', writers: results, query })
      }
    } catch {
      setState({ status: 'empty', query })
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-plug-off-white">
        <ToolPageShell
          label="Free Tool"
          title="Writer Search"
          description="Search any songwriter by name, email address, or IPI number to find their catalog and publishing information."
        >
          <div className="max-w-2xl">

            {/* Search input */}
            <div className="flex gap-3 mb-8">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Writer's Name, Email, or IPI Number"
                className="
                  flex-1 px-4 py-3 text-[14px] font-body
                  bg-white border border-plug-border rounded-lg
                  text-plug-text-primary placeholder:text-plug-text-muted
                  focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint
                  transition-colors
                "
              />
              <button
                onClick={handleSearch}
                disabled={state.status === 'loading' || !query.trim()}
                className="
                  px-6 py-3 text-[14px] font-medium font-body
                  text-white bg-coral rounded-lg
                  hover:bg-coral-dark disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-200 flex-shrink-0
                "
              >
                {state.status === 'loading' ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Loading */}
            {state.status === 'loading' && (
              <div className="flex items-center gap-3 text-[13.5px] text-plug-text-muted">
                <span className="inline-block w-4 h-4 border-2 border-mint/40 border-t-mint rounded-full animate-spin" />
                Searching writer database...
              </div>
            )}

            {/* Empty state */}
            {state.status === 'empty' && (
              <div className="text-center py-16 text-plug-text-muted">
                <p className="text-[32px] mb-3">—</p>
                <p className="text-[14px]">No writers found for &ldquo;{state.query}&rdquo;</p>
                <p className="text-[13px] mt-1">Try a different name, email, or IPI number</p>
              </div>
            )}

            {/* Results */}
            {state.status === 'results' && (
              <div>
                <p className="label-mono text-plug-text-muted mb-4">
                  {state.writers.length} result{state.writers.length !== 1 ? 's' : ''} for &ldquo;{state.query}&rdquo;
                </p>
                <div className="space-y-4">
                  {state.writers.map((w) => (
                    <WriterCard key={w.id} writer={w} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </ToolPageShell>
      </main>
      <Footer />
    </>
  )
}

function WriterCard({ writer }: { writer: Writer }) {
  return (
    <div className="bg-white border border-plug-border rounded-card p-7">

      {/* Name + affiliation */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h3 className="heading-display text-[22px] font-normal text-plug-text-primary mb-1">
            {writer.name}
          </h3>
          {writer.email && (
            <p className="text-[13px] text-plug-text-muted">{writer.email}</p>
          )}
        </div>
        <span className="label-mono text-[9.5px] text-mint bg-mint-pale border border-mint-mid rounded px-2 py-1 flex-shrink-0">
          {writer.affiliation}
        </span>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-5 border-t border-plug-border">
        {[
          { label: 'Writer IPI',     value: writer.ipi },
          { label: 'Works',          value: String(writer.worksCount) },
          ...(writer.publisher ? [
            { label: 'Publisher',    value: writer.publisher },
            { label: 'Publisher IPI',value: writer.publisherIpi ?? '—' },
          ] : []),
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-[11px] text-plug-text-muted uppercase tracking-wider mb-1">{label}</p>
            <p className="text-[13.5px] font-medium text-plug-text-primary font-mono">{value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
