import { SectionLabel } from '@/components/ui/SectionLabel'
import { COMPARISON_ROWS } from '@/lib/constants'

const COMPETITORS = [
  'TuneCore Publishing',
  'CD Baby Pro',
  'Songtrust',
  'Major Publishers',
] as const

export function ComparisonTable() {
  return (
    <section id="compare" className="bg-navy px-[5%] py-24">
      <div className="max-w-container mx-auto">

        <SectionLabel color="coral-mid">The Numbers</SectionLabel>
        <h2
          className="heading-display text-white mb-3.5"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          Why the numbers<br />
          don&apos;t <em className="italic text-coral-mid">lie</em>
        </h2>
        <p className="text-[15px] text-white/35 max-w-[540px] leading-[1.72] mb-14">
          A straight-up comparison. No spin.
        </p>

        {/* Overflow wrapper for mobile */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr>
                {/* Empty first cell */}
                <th className="text-left pb-3 text-white/0 w-[180px]" />

                {/* Our column header */}
                <th
                  className="label-mono text-white text-left px-[18px] pb-3"
                  style={{ background: 'rgba(200,87,74,0.22)', borderRadius: '8px 8px 0 0', borderBottom: '1px solid rgba(200,87,74,0.4)' }}
                >
                  The Plug (Us)
                </th>

                {/* Competitor headers */}
                {COMPETITORS.map((name) => (
                  <th
                    key={name}
                    className="label-mono text-white/30 text-left px-[18px] pb-3 border-b border-white/[0.08]"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={row.label}>
                  {/* Row label */}
                  <td className="text-[12.5px] text-white/35 py-[15px] pr-4 border-b border-white/[0.05]">
                    {row.label}
                  </td>

                  {/* Our value */}
                  <td
                    className={`
                      px-[18px] py-[15px] border-b border-white/[0.05] font-medium
                      ${'highlight' in row && row.highlight
                        ? 'text-coral-mid num-display text-[26px] font-light'
                        : 'bold' in row && row.bold
                        ? 'text-white font-medium text-[13.5px]'
                        : 'text-white text-[13.5px]'
                      }
                    `}
                    style={{ background: 'rgba(200,87,74,0.12)' }}
                  >
                    {row.us}
                  </td>

                  {/* Competitor values */}
                  {([row.tunecore, row.cdbaby, row.songtrust, row.major] as string[]).map((val, j) => (
                    <td
                      key={j}
                      className={`
                        px-[18px] py-[15px] text-[13.5px] border-b border-white/[0.05]
                        ${i === COMPARISON_ROWS.length - 1 ? 'border-b-0' : ''}
                        text-white/45
                      `}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[12.5px] text-white/20 italic mt-5 leading-relaxed max-w-3xl">
          *We collect as a Co-Publisher at 5%, handle your registrations, then step out of
          the way. Competitors collect your royalties first, wait 90 days, then pay you
          minus 15% or more.
        </p>

      </div>
    </section>
  )
}
