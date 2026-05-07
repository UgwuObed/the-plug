import type { Metadata } from 'next'
import { Cormorant_Garamond, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

// ── Fonts ──────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// ── Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'The Plug Music Administration — Publishing Simplified',
  description:
    'Music publishing administration at 5% commission — the lowest in the industry. Register your songs, collect all your royalties, stay in control.',
  openGraph: {
    title: 'The Plug Music Administration',
    description: 'Music Publishing. Simplified. 5% commission, $0 setup fee.',
    url: 'https://theplugmusic.com',
    siteName: 'The Plug Music Administration',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Plug Music Administration',
    description: 'Music Publishing. Simplified. 5% commission, $0 setup fee.',
  },
}

// ── Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jetbrains.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
