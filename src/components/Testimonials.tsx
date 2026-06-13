import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { fadeIn, fadeUp } from '../lib/animations'

const testimonials = [
  {
    quote:
      'securify cut our security audit prep time from 3 weeks to 2 days. the compliance dashboard alone is worth every penny.',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Nexvault',
    initials: 'SC',
  },
  {
    quote:
      "we passed our SOC 2 Type II audit on the first attempt. securify's automated evidence collection is a game changer.",
    name: 'James Okafor',
    role: 'Head of Engineering',
    company: 'Orbitly',
    initials: 'JO',
  },
  {
    quote:
      'the real-time threat alerts caught a credential stuffing attack before any damage was done. literally saved us.',
    name: 'Priya Mehta',
    role: 'VP of Infrastructure',
    company: 'Stackr',
    initials: 'PM',
  },
  {
    quote:
      'switching from our old security stack took less than a day. the zero-trust setup was surprisingly painless.',
    name: 'Lucas Ferreira',
    role: 'Lead DevOps Engineer',
    company: 'Pulsehq',
    initials: 'LF',
  },
  {
    quote:
      'our enterprise clients now ask for our securify compliance report instead of running their own audits. huge trust signal.',
    name: 'Emma Wilson',
    role: 'CEO',
    company: 'Dataform',
    initials: 'EW',
  },
  {
    quote:
      "best security tooling we've adopted as a team. the audit logs give us full visibility with zero extra overhead.",
    name: 'Alex Kim',
    role: 'Staff Engineer',
    company: 'Gridlane',
    initials: 'AK',
  },
] as const

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-3 flex w-11/12 sm:w-[340px] flex-shrink-0 cursor-default flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.05] p-7 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]">
      <div className="mb-1 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-xs text-white/30">
            ★
          </span>
        ))}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-white/70">
        <span className="text-white/20">&ldquo;</span>
        {testimonial.quote}
        <span className="text-white/20">&rdquo;</span>
      </p>

      <div className="mt-2 flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.08]">
          <span className="text-[11px] font-medium text-white/50">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-xs font-medium text-white/70">{testimonial.name}</p>
          <p className="text-[11px] text-white/30">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly Testimonial[]
  direction: 'left' | 'right'
}) {
  const duplicated = [...items, ...items]

  return (
    <div className="testimonials-marquee overflow-hidden">
      <div
        className={`flex w-max ${
          direction === 'left'
            ? 'testimonials-row-left'
            : 'testimonials-row-right'
        }`}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const resumeTimerRef = useRef<number | null>(null)

  const row1 = testimonials.slice(0, 3)
  const row2 = testimonials.slice(3, 6)

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [paused])

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const handleDotClick = (index: number) => {
    setActive(index)
    setPaused(true)

    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false)
      resumeTimerRef.current = null
    }, 8000)
  }

  const maskStyle = {
    maskImage:
      'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    WebkitMaskImage:
      'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  } as const

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
          Testimonials
        </p>
        <h2 className="text-center text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Loved By Security-Conscious Teams
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          don&apos;t take our word for it.
        </p>
      </ScrollReveal>

      <div style={maskStyle} className="flex flex-col gap-4">
        <ScrollReveal variants={fadeIn} delay={0.1}>
          <MarqueeRow items={row1} direction="left" />
        </ScrollReveal>
        <ScrollReveal variants={fadeIn} delay={0.25}>
          <MarqueeRow items={row2} direction="right" />
        </ScrollReveal>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`go to testimonial ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all duration-300 ${
              active === index
                ? 'h-1.5 w-6 bg-white/60'
                : 'h-1.5 w-1.5 cursor-pointer bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
