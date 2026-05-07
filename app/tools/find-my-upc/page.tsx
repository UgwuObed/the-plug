'use client'
// app/tools/find-my-upc/page.tsx

import { useState } from 'react'
import { ToolPageShell } from '@/components/tools/ToolPageShell'

type ResultState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | {
      status: 'success'
      upc: string
      album: string
      artist: string
      label: string
      releaseDate: string
      trackCount: number
    }

function extractTidalAlbumId(url: string): string | null {
  const match = url.match(/album\/(\d+)/)
  return match ? match[1] : null
}

export default function FindMyUPCPage() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<ResultState>({ status: 'idle' })

  async function handleSearch() {
    const albumId = extractTidalAlbumId(url.trim())
    if (!albumId) {
      setResult({
        status: 'error',
        message: "That doesn't look like a TIDAL album link. Make sure you're using an Album link — Track and Artist links won't work.",
      })
      return
    }

    setResult({ status: 'loading' })

    try {
      // TODO: replace with your real API call
      // const res = await fetch(`/api/tools/upc?id=${albumId}`)
      // const data = await res.json()
      // setResult({ status: 'success', upc: data.upc, ... })

      await new Promise((r) => setTimeout(r, 900))
      setResult({
        status: 'success',
        upc: '196589123456',
        album: 'Album Title (from TIDAL)',
        artist: 'Artist Name',
        label: 'Label Name',
        releaseDate: '2024-01-15',
        trackCount: 12,
      })
    } catch {
      setResult({ status: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <ToolPageShell
      label="Free Tool"
      title="Find My UPC"
      description="Paste any TIDAL album link below to instantly retrieve the UPC barcode. Essential when moving your catalog to a new distributor."
      note="You must use the Album link. UPCs are connected to albums, so Track and Artist links will not work."
    >
      <div className="max-w-2xl">
        <div className="flex gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="https://tidal.com/browse/album/..."
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

        {result.status === 'loading' && (
          <div className="mt-6 flex items-center gap-3 text-[13.5px] text-plug-text-muted">
            <span className="inline-block w-4 h-4 border-2 border-mint/40 border-t-mint rounded-full animate-spin" />
            Looking up UPC via TIDAL...
          </div>
        )}

        {result.status === 'error' && (
          <div className="mt-5 p-4 bg-coral-pale border border-coral/20 rounded-lg">
            <p className="text-[13.5px] text-coral">{result.message}</p>
          </div>
        )}

        {result.status === 'success' && (
          <div className="mt-6">
            <p className="label-mono text-mint mb-4">Result</p>

            <div className="bg-white border border-plug-border rounded-card p-7 mb-4">
              <p className="label-mono text-plug-text-muted mb-2">UPC Barcode</p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="font-mono text-[28px] font-medium tracking-widest text-plug-text-primary">
                  {result.upc}
                </span>
                <button
                  onClick={() => navigator.clipboard.writeText(result.upc)}
                  className="px-4 py-2 text-[12px] font-medium font-body text-mint bg-mint-pale border border-mint-mid rounded-lg hover:bg-mint/10 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="bg-white border border-plug-border rounded-card p-7">
              <p className="label-mono text-plug-text-muted mb-4">Album Details</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { label: 'Album',        value: result.album },
                  { label: 'Artist',       value: result.artist },
                  { label: 'Label',        value: result.label },
                  { label: 'Release Date', value: result.releaseDate },
                  { label: 'Tracks',       value: String(result.trackCount) },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[11px] text-plug-text-muted uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-[14px] text-plug-text-primary font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setUrl(''); setResult({ status: 'idle' }) }}
              className="mt-5 text-[13px] text-plug-text-muted hover:text-plug-text-secondary transition-colors"
            >
              ← Search another album
            </button>
          </div>
        )}
      </div>
    </ToolPageShell>
  )
}
