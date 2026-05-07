import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  return (
    <section className="bg-coral-pale px-[5%]">
      <div className="max-w-container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left — quote */}
          <FadeUp>
            <SectionLabel color="coral">About</SectionLabel>
            <blockquote
              className="heading-display text-plug-text-primary not-italic"
              style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
            >
              &ldquo;I learned the hard way —{' '}
              <em className="italic text-coral">2,000 songs</em>{' '}
              later, I built something better.&rdquo;
            </blockquote>
          </FadeUp>

          {/* Right — story */}
          <FadeUp delay={1}>
            <p className="label-mono text-coral mb-3">
              Davis &quot;Davey&quot; Warner Natzle — Founder
            </p>

            <div className="text-[14px] text-plug-text-secondary leading-[1.8] space-y-4">
              <p>
                I&apos;m a music creator and entrepreneur with a catalog of thousands
                of songs. After music companies repeatedly failed me, I decided to
                learn the business myself.
              </p>
              <p>
                I discovered that most publishing administrators would never confirm
                whether they even registered your songs — and definitely wouldn&apos;t
                prioritize your needs over their own accounting timelines.
              </p>
              <p>
                So I built the platform I wished had existed. Simple, transparent,
                and actually on your side.
              </p>
            </div>

            <Link
              href="#"
              className="
                inline-flex items-center gap-1.5 mt-5
                text-[13px] font-medium text-coral no-underline
                border-b border-coral-mid pb-0.5
                hover:opacity-70 transition-opacity
              "
            >
              Watch the full story →
            </Link>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
