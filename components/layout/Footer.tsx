import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.06] px-[5%] py-9">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        <p className="label-mono text-[11px] text-white/25">
          The Plug Music Administration
        </p>

        <ul className="flex items-center gap-5 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[12px] text-white/25 hover:text-white/55 transition-colors no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="text-[12px] text-white/25 hover:text-white/55 transition-colors no-underline">
              Contact
            </Link>
          </li>
        </ul>

        <p className="text-[11.5px] text-white/18">
          © 2026 The Plug Music Administration LLC
        </p>

      </div>
    </footer>
  )
}
