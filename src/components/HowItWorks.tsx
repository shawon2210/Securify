import { ScrollReveal } from './ScrollReveal'
import { fadeUp, slideInLeft, slideInRight } from '../lib/animations'

const steps = [
  {
    number: '01',
    title: 'Connect Your Stack',
    desc: 'Integrate Securify with your existing tools in one click — AWS, GCP, Azure, GitHub, Vercel, and 200+ more.',
    tag: '5 Min Setup',
  },
  {
    number: '02',
    title: 'We Protect Everything',
    desc: 'Securify maps your data flows, applies encryption policies, and enforces zero-trust rules automatically.',
    tag: 'Zero Config',
  },
  {
    number: '03',
    title: 'Monitor in Real Time',
    desc: 'Your dashboard shows live threat feeds, audit logs, and compliance scores — all in one place.',
    tag: 'Always On',
  },
] as const

const stepVariants = [slideInLeft, fadeUp, slideInRight] as const

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mx-auto mb-20 max-w-xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">How It Works</p>
        <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Up and Running in Minutes
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          No complicated setup. No dedicated security team required.
        </p>
      </ScrollReveal>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-0 md:grid-cols-3">
        <div className="pointer-events-none absolute top-[52px] hidden h-px w-[34%] bg-gradient-to-r from-white/20 via-white/10 to-transparent md:block md:left-[33%]" />
        <div className="pointer-events-none absolute top-[52px] hidden h-px w-[34%] bg-gradient-to-r from-white/20 via-white/10 to-transparent md:block md:left-[66%]" />

        {steps.map((step, index) => (
          <ScrollReveal
            key={step.number}
            variants={stepVariants[index]}
            delay={index * 0.15}
            className={index > 0 ? 'md:border-l md:border-white/[0.06]' : ''}
          >
            <div className="group relative p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-5xl font-medium tracking-[-0.04em] text-white/10 transition-colors duration-500 group-hover:text-white/20">
                  {step.number}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                  {step.tag}
                </span>
              </div>

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <div className="h-2 w-2 rounded-full bg-white/60" />
              </div>

              <h3 className="mb-4 text-xl font-medium tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/45">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
