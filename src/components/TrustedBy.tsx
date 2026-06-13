import { ScrollReveal } from './ScrollReveal'
import { fadeIn, fadeUp } from '../lib/animations'

const logos = [
  'Nexvault',
  'Orbitly',
  'Stackr',
  'Pulsehq',
  'Dataform',
  'Gridlane',
  'Cloudpeak',
  'Syncra',
] as const

function LogoPill({ name }: { name: string }) {
  return (
    <div className="group mx-6 flex-shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-8 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/25">
      <span className="cursor-default whitespace-nowrap text-sm font-medium tracking-tight text-white/50 transition-all duration-300 group-hover:text-white/90">
        {name.toLowerCase()}
      </span>
    </div>
  )
}

export default function TrustedBy() {
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="marquee-section overflow-hidden bg-black px-6 py-16">
      <ScrollReveal variants={fadeUp}>
        <p className="mb-10 text-center text-xs uppercase tracking-[0.2em] text-white/40">
          Trusted By 65,000+ Startups Worldwide
        </p>
      </ScrollReveal>

      <ScrollReveal variants={fadeIn} delay={0.2}>
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max">
            {marqueeLogos.map((name, index) => (
              <LogoPill key={`${name}-${index}`} name={name} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-16 border-t border-white/[0.06]" />
    </section>
  )
}
