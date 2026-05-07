import { SectionLabel } from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/constants'

export function Services() {
  return (
    <section id="services" className="bg-plug-off-white px-[5%]">
      <div className="max-w-container mx-auto py-24">

        <SectionLabel>Our Services</SectionLabel>
        <h2
          className="heading-display text-plug-text-primary mb-14"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          We Know<br />
          <em className="italic text-mint">Publishing</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          {/* Left — services list */}
          <div>
            <p className="text-[15px] text-plug-text-secondary leading-[1.72] mb-8">
              We help you register your publishing so you collect{' '}
              <strong className="font-medium text-plug-text-primary">all</strong> of your
              royalties — while you keep full ownership and control of your work.
            </p>

            <ul className="list-none">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3.5 py-[15px] border-b border-plug-border text-[13.5px] text-plug-text-secondary first:border-t first:border-plug-border hover:text-plug-text-primary transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — sticky CTA card */}
          <div className="md:sticky md:top-[88px]">
            <div className="bg-navy rounded-[16px] p-[38px]">
              <h3
                className="heading-display text-[30px] font-normal text-white mb-3.5"
                style={{ lineHeight: 1.2 }}
              >
                Ready to register<br />your publishing?
              </h3>
              <p className="text-[13.5px] text-white/45 leading-[1.72] mb-7">
                Other publishers collect your royalties and pay you months later after
                taking a cut. With The Plug, royalties flow directly to you. We just
                take 5% of what we help you collect.
              </p>
              <button
                className="
                  inline-flex items-center gap-2 text-[13px] font-medium
                  text-white bg-coral border-none rounded-lg
                  px-5 py-2.5 cursor-pointer
                  hover:bg-coral-dark transition-colors font-body
                "
              >
                Contact Us →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
