import { FadeUp } from '@/components/ui/FadeUp'
import { Button } from '@/components/ui/Button'
import { COMPARISON_BARS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="bg-plug-off-white px-[5%]">
      <div className="max-w-container mx-auto py-24 pb-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[72px] items-center">

        {/* Left — copy */}
        <div>
          <p className="label-mono text-coral mb-[22px]">
            Music Publishing Administration
          </p>

          <h1
            className="heading-display text-plug-text-primary mb-6"
            style={{ fontSize: 'clamp(52px, 5.5vw, 78px)' }}
          >
            Your Music.<br />
            <em className="not-italic italic text-coral">Your Rights.</em><br />
            Your Money.
          </h1>

          <p className="text-[15px] text-plug-text-secondary leading-[1.72] max-w-[420px] mb-9">
            We register your publishing so every royalty flows directly to you —
            not through us first. At just 5% commission, the lowest in the industry.
          </p>

          <div className="flex gap-2.5 flex-wrap">
            <Button variant="primary" size="lg" href="/signup" arrow>
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" href="#how-it-works">
              How It Works
            </Button>
          </div>
        </div>

        {/* Right — commission card */}
        <FadeUp delay={1}>
          <CommissionCard />
        </FadeUp>

      </div>
    </section>
  )
}

function CommissionCard() {
  return (
    <div className="bg-white border border-plug-border rounded-card-lg p-10 shadow-[0_2px_24px_rgba(27,31,50,0.05)]">

      <p className="label-mono text-plug-text-muted mb-3.5">
        Publisher&apos;s Commission
      </p>

      {/* The 5% number */}
      <div className="flex items-start gap-1 leading-none mb-2">
        <span
          className="num-display text-coral"
          style={{ fontSize: '92px', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          5
        </span>
        <span
          className="num-display text-coral/65 mt-3"
          style={{ fontSize: '44px', lineHeight: 1 }}
        >
          %
        </span>
      </div>

      <p className="text-[14px] text-plug-text-secondary mb-7">
        The lowest in the industry. Zero setup fee.
      </p>

      <hr className="border-plug-warm-gray mb-5" />

      <p className="label-mono text-plug-text-muted mb-3.5">
        vs. the competition
      </p>

      <div className="flex flex-col gap-2.5">
        {COMPARISON_BARS.map((bar) => (
          <div key={bar.name} className="flex items-center gap-2.5">
            <span className="text-[12px] text-plug-text-secondary w-[140px] flex-shrink-0">
              {bar.name}
            </span>
            <div className="flex-1 h-[5px] bg-plug-warm-gray rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${bar.barPct}%`,
                  background:
                    bar.color === 'coral' ? 'var(--coral)' :
                    bar.color === 'mint'  ? 'var(--mint-mid)' :
                    'var(--text-muted)',
                }}
              />
            </div>
            <span className="font-mono text-[12px] font-medium text-plug-text-primary w-9 text-right">
              {bar.pct}%
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
