import { FadeUp } from '@/components/ui/FadeUp'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { STEPS } from '@/lib/constants'

const accentColors = {
  coral: 'var(--coral)',
  mint:  'var(--mint)',
  navy:  'var(--navy)',
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-[5%]">
      <div className="max-w-container mx-auto py-24">

        <SectionLabel>The Process</SectionLabel>
        <h2 className="heading-display text-plug-text-primary mb-3.5" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
          Publishing without<br />
          the <em className="italic text-mint">middlemen</em>
        </h2>
        <p className="text-[15px] text-plug-text-secondary max-w-[540px] leading-[1.72] mb-16">
          We act as your Co-Publisher — not an Admin Publisher. Royalties flow
          directly to you. We handle the paperwork.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, i) => (
            <FadeUp key={step.num} delay={i as 0 | 1 | 2}>
              <div>
                <p className="label-mono text-plug-text-muted mb-4">{step.num}</p>
                <div
                  className="w-8 h-px mb-4"
                  style={{ background: accentColors[step.accent] }}
                />
                <h3
                  className="heading-display text-[26px] text-plug-text-primary mb-3 font-normal"
                  style={{ lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-plug-text-secondary leading-[1.72]">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
