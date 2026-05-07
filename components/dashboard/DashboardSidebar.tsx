'use client'
// components/dashboard/DashboardSidebar.tsx

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Overview',         href: '/dashboard',                   icon: 'grid' },
  { label: 'Catalog',          href: '/dashboard/catalog',           icon: 'music' },
  { label: 'Registrations',    href: '/dashboard/registrations',     icon: 'shield' },
  { label: 'ISRC Searches',    href: '/tools/find-my-isrc',          icon: 'search' },
  { label: 'UPC Lookup',       href: '/tools/find-my-upc',           icon: 'barcode' },
  { label: 'Royalty Calc',     href: '/tools/royalty-calculator',    icon: 'calculator' },
] as const

const BOTTOM_ITEMS = [
  { label: 'Settings',         href: '/dashboard/settings',          icon: 'settings' },
  { label: 'Log Out',          href: '/login',                       icon: 'logout' },
] as const

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[220px] flex-shrink-0 bg-navy flex flex-col h-full">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/[0.07]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[28px] h-[28px] bg-coral rounded-[6px] flex items-center justify-center flex-shrink-0">
            <LogoMark />
          </div>
          <span className="label-mono text-[11px] text-white">The Plug</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px]
                no-underline transition-all duration-150
                ${active
                  ? 'bg-white/10 text-white font-medium'
                  : 'text-white/45 hover:text-white/75 hover:bg-white/[0.06]'
                }
              `}
            >
              <NavIcon name={item.icon} active={active} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/[0.07] space-y-0.5">
        {BOTTOM_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] text-white/35 hover:text-white/65 hover:bg-white/[0.06] no-underline transition-all duration-150"
          >
            <NavIcon name={item.icon} active={false} />
            {item.label}
          </Link>
        ))}
      </div>

    </aside>
  )
}

function LogoMark() {
  return (
    <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="2" height="4" rx="1" />
      <rect x="11" y="2" width="2" height="4" rx="1" />
      <path d="M5 6h10v4.5a5 5 0 01-10 0V6z" />
      <line x1="10" y1="15.5" x2="10" y2="19" />
    </svg>
  )
}

type IconName = 'grid' | 'music' | 'shield' | 'search' | 'barcode' | 'calculator' | 'settings' | 'logout'

function NavIcon({ name, active }: { name: IconName; active: boolean }) {
  const color = active ? 'white' : 'currentColor'
  const props = { width: 15, height: 15, fill: 'none' as const, stroke: color, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', className: 'flex-shrink-0' }

  const icons: Record<IconName, React.ReactNode> = {
    grid:       <svg {...props}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    music:      <svg {...props}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    shield:     <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    search:     <svg {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    barcode:    <svg {...props}><path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14"/></svg>,
    calculator: <svg {...props}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="16" y2="18"/><line x1="16" y1="14" x2="12" y2="18"/></svg>,
    settings:   <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    logout:     <svg {...props}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  }
  return <>{icons[name]}</>
}
