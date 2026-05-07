'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/lib/constants'

const TOOLS_DROPDOWN = [
  { label: 'Promote Your Music', href: 'https://theplug.songtools.io/', external: true },
  { label: 'Find My ISRC',       href: '/tools/find-my-isrc' },
  { label: 'Find UPC',           href: '/tools/find-my-upc' },
  { label: 'Royalty Calculator', href: '/tools/royalty-calculator' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`
        sticky top-0 z-50 px-[5%]
        bg-plug-off-white/94 backdrop-blur-md
        border-b transition-colors duration-300
        ${scrolled ? 'border-plug-border' : 'border-transparent'}
      `}
    >
      <div className="flex items-center justify-between h-[58px] max-w-container mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[30px] h-[30px] bg-navy rounded-[7px] flex items-center justify-center flex-shrink-0">
            <LogoIcon />
          </div>
          <span className="label-mono text-[12px] text-plug-text-primary">
            The Plug
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => {
            if (link.label === 'Free Tools') {
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  <button className="text-[13px] font-normal text-plug-text-secondary hover:text-plug-text-primary transition-colors duration-150 flex items-center gap-1 cursor-pointer">
                    {link.label}
                    <ChevronIcon open={toolsOpen} />
                  </button>

                  {toolsOpen && (
                    /* pt-2 bridges the gap so mouseleave doesn't fire mid-hover */
                    <div className="absolute top-full left-0 pt-2 w-max z-50">
                      <div className="bg-white border border-plug-border rounded-xl shadow-lg py-1.5 min-w-[210px]">
                        {TOOLS_DROPDOWN.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setToolsOpen(false)}
                            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="block px-4 py-2.5 text-[11px] font-mono tracking-widest uppercase text-plug-text-primary hover:bg-plug-warm-gray transition-colors duration-100 no-underline"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              )
            }

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] font-normal text-plug-text-secondary hover:text-plug-text-primary transition-colors duration-150 no-underline"
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Auth actions */}
        <div className="flex items-center gap-2.5">
          <Button variant="login" size="sm" href="/login">
            Log In
          </Button>
          <Button variant="primary" size="sm" href="/signup">
            Sign Up Free
          </Button>
        </div>

      </div>
    </nav>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2 3.5L5 6.5L8 3.5" />
    </svg>
  )
}

function LogoIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="15"
      height="15"
      fill="none"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="2" width="2" height="4" rx="1" />
      <rect x="11" y="2" width="2" height="4" rx="1" />
      <path d="M5 6h10v4.5a5 5 0 01-10 0V6z" />
      <line x1="10" y1="15.5" x2="10" y2="19" />
      <line x1="7.5" y1="19" x2="12.5" y2="19" />
    </svg>
  )
}
