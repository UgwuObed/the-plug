'use client'
// app/tools/find-my-isrc/page.tsx

import { useState } from 'react'
import { ToolPageShell } from '@/components/tools/ToolPageShell'

type ResultState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'success'
      isrc: string
      track: string
      artist: string
      album: string
      duration: string
      explicit: boolean
    }

// ── Helpers ───────────────────────────────────────────────────────────
function extractSpotifyTrackId(url: string): string | null {
  // Accepts full URLs and just the ID
  const match = url.match(/track\/([A-Za-z0-9]{22})/)
  return match ? match[1] : null
}

export default function FindMyISRCPage() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<ResultState>({ status: 'idle' })

  async function handleSearch() {
    const trackId = extractSpotifyTrackId(url.trim())
    if (!trackId) {
      setResult({ status: 'error', message: 'That doesn\'t look like a Spotify track link. Make sure you\'re using a Track link, not an Album or Artist link.' })
      return
    }

    setResult({ status: 'loading' })

    try {
      // TODO: replace with your real API call to /api/tools/isrc?id=trackId
      // The Bubble backend likely uses Spotify's API under the hood.
      // Example: const res = await fetch(`/api/tools/isrc?id=${trackId}`)
      // const data = await res.json()
      // setResult({ status: 'success', isrc: data.isrc, track: data.name, ... })

      // ── Mock response for UI development ──
      await new Promise((r) => setTimeout(r, 900))
      setResult({
        status: 'success',
        isrc: 'USUM72404567',
        track: 'Track Title (from Spotify)',
        artist: 'Artist Name',
        album: 'Album Title',
        duration: '3:24',
        explicit: false,
      })
    } catch {
      setResult({ status: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <ToolPageShell
      label="Free Tool"
      title="Find My ISRC"
      description="Paste any Spotify track link below to instantly retrieve the ISRC code. Useful for publishing registration and catalog transfers."
      note="You must use the Track link. ISRCs are connected to tracks, so Album and Artist links will not work."
    >
      {/* Search input */}
      <div className="max-w-2xl">
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="https://open.spotify.com/track/..."
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
            disabled={result.status === 'loading' || !url.trim()}
            className="
              px-6 py-3 text-[14px] font-medium font-body
              text-white bg-coral rounded-lg
              hover:bg-coral-dark disabled:opacity-40 disabled:cursor-not-allowed
              transition-all duration-200 flex-shrink-0
            "
          >
            {result.status === 'loading' ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Loading */}
        {result.status === 'loading' && (
          <div className="mt-6 flex items-center gap-3 text-[13.5px] text-plug-text-muted">
            <span className="inline-block w-4 h-4 border-2 border-mint/40 border-t-mint rounded-full animate-spin" />
            Looking up ISRC via Spotify...
          </div>
        )}

        {/* Error */}
        {result.status === 'error' && (
          <div className="mt-5 p-4 bg-coral-pale border border-coral/20 rounded-lg">
            <p className="text-[13.5px] text-coral">{result.message}</p>
          </div>
        )}

        {/* Success */}
        {result.status === 'success' && (
          <div className="mt-6">
            <p className="label-mono text-mint mb-4">Result</p>

            {/* ISRC — the star of the show */}
            <div className="bg-white border border-plug-border rounded-card p-7 mb-4">
              <p className="label-mono text-plug-text-muted mb-2">ISRC Code</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span
                  className="font-mono text-[28px] font-medium tracking-widest text-plug-text-primary"
                >
                  {result.isrc}
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(result.isrc)}
                  className="
                    px-4 py-2 text-[12px] font-medium font-body
                    text-mint bg-mint-pale border border-mint-mid rounded-lg
                    hover:bg-mint/10 transition-colors
                  "
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Track details */}
            <div className="bg-white border border-plug-border rounded-card p-7">
              <p className="label-mono text-plug-text-muted mb-4">Track Details</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: 'Track',    value: result.track },
                  { label: 'Artist',   value: result.artist },
                  { label: 'Album',    value: result.album },
                  { label: 'Duration', value: result.duration },
                  { label: 'Explicit', value: result.explicit ? 'Yes' : 'No' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] text-plug-text-muted uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-[14px] text-plug-text-primary font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button
              onClick={() => { setUrl(''); setResult({ status: 'idle' }) }}
              className="mt-5 text-[13px] text-plug-text-muted hover:text-plug-text-secondary transition-colors"
            >
              ← Search another track
            </button>
          </div>
        )}
      </div>

    </ToolPageShell>
  )
}
