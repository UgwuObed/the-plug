// app/tools/layout.tsx
// Wraps all tool pages with the main Nav and a consistent page shell.
// Drop this into your app/tools/ directory.

import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-plug-off-white">
        {children}
      </main>
      <Footer />
    </>
  )
}
