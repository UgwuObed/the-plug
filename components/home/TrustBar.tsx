import { TRUST_STATS } from '@/lib/constants'

export function TrustBar() {
  return (
    <div className="border-t border-b border-plug-border bg-white px-[5%] py-[18px]">
      <div className="max-w-container mx-auto flex items-center justify-between gap-8 flex-wrap">

        {TRUST_STATS.map((stat, i) => (
          <div key={stat.value} className="flex items-center gap-2.5">
            <span
              className="num-display text-[28px]"
              style={{ color: 'accent' in stat && stat.accent ? 'var(--mint)' : 'var(--coral)' }}
            >
              {stat.value}
            </span>
            <span className="text-[11.5px] text-plug-text-secondary leading-[1.35] whitespace-pre-line">
              {stat.label}
            </span>

            {/* Divider — hidden on last item and on mobile */}
            {i < TRUST_STATS.length - 1 && (
              <span className="hidden sm:block w-px h-7 bg-plug-border ml-6" aria-hidden="true" />
            )}
          </div>
        ))}

        {/* Callout quote */}
        <p className="hidden lg:block text-[12.5px] text-plug-text-muted italic max-w-[200px] leading-snug">
          &ldquo;They&apos;re middle men. We&apos;re not.&rdquo;
        </p>

      </div>
    </div>
  )
}
