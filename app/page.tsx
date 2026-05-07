import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ComparisonTable } from '@/components/home/ComparisonTable'
import { FreeTools } from '@/components/home/FreeTools'
import { Services } from '@/components/home/Services'
import { About } from '@/components/home/About'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ComparisonTable />
        <FreeTools />
        <Services />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
