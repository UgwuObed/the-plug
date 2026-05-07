import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TOOLS } from '@/lib/constants'

export function FreeTools() {
  return (
    <section id="tools" className="bg-mint-pale px-[5%]">
      <div className="max-w-container mx-auto py-24">

        <SectionLabel>Free Tools</SectionLabel>
        <h2
          className="heading-display text-plug-text-primary mb-3.5"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          Built for artists,<br />
          not <em className="italic text-mint">accountants</em>
        </h2>
        <p className="text-[15px] text-plug-text-secondary max-w-[540px] leading-[1.72] mb-14">
          Whether you use our services or not — these tools are free. You deserve
          to know your own catalog.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map((tool, i) => (
            <FadeUp key={tool.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <ToolCard tool={tool} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}

type Tool = (typeof TOOLS)[number]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-white border border-plug-border rounded-card p-7 flex flex-col hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(27,31,50,0.08)] transition-all duration-200">

      {/* Icon */}
      <div className="w-[42px] h-[42px] bg-mint-pale border border-mint-mid rounded-[10px] flex items-center justify-center mb-[18px] flex-shrink-0">
        <ToolIcon name={tool.icon} />
      </div>

      {/* Name */}
      <h3 className="heading-display text-[22px] font-normal text-plug-text-primary mb-2">
        {tool.name}
      </h3>

      {/* Desc */}
      <p className="text-[13px] text-plug-text-secondary leading-[1.65] mb-5 flex-1">
        {tool.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="label-mono text-[9.5px] text-mint bg-mint-pale border border-mint-mid rounded px-2 py-1">
          Free
        </span>
        <Link
          href={tool.href}
          className="text-[13px] font-medium text-mint no-underline border-b border-mint-mid pb-px hover:text-mint-dark hover:border-mint transition-colors flex items-center gap-1 group"
        >
          Use tool
          <span className="group-hover:translate-x-0.5 transition-transform duration-150 inline-block">→</span>
        </Link>
      </div>

    </div>
  )
}

function ToolIcon({ name }: { name: Tool['icon'] }) {
  const props = {
    width: 18,
    height: 18,
    fill: 'none' as const,
    stroke: 'var(--mint)',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
  }

  if (name === 'isrc') return (
    <svg {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12" />
    </svg>
  )
  if (name === 'upc') return (
    <svg {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
  if (name === 'calculator') return (
    <svg {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
  // search
  return (
    <svg {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
