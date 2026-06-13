import { ScrollReveal } from './ScrollReveal'
import { fadeIn, fadeUp } from '../lib/animations'

const signals = [
  { icon: '🔐', text: 'End-to-End Encrypted' },
  { icon: '🛡️', text: 'SOC 2 certified' },
  { icon: '⚡', text: '200ms Response Time' },
  { icon: '🌐', text: '99.99% Uptime SLA' },
] as const

export default function FinalCTA() {
   return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-black px-6 pt-24 pb-48 md:px-16 md:pb-56 lg:pt-28 lg:pb-64">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 select-none"
        style={{ lineHeight: 0.85 }}
      >
        <p
          className="whitespace-nowrap text-center font-medium tracking-[-0.04em] text-white"
          style={{
            fontSize: 'clamp(80px, 18vw, 240px)',
            opacity: 0.025,
            transform: 'translateY(-40%)',
          }}
        >
          securify
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal variants={fadeIn}>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                No Credit Card Required
              </span>
            </div>
          </div>
        </ScrollReveal>

        <h2 className="hero-title mb-8 text-center">
          <ScrollReveal variants={fadeUp} delay={0.1}>
            <span className="block text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-white md:text-8xl">
              Your Data Deserves
            </span>
          </ScrollReveal>
          <ScrollReveal variants={fadeUp} delay={0.25}>
            <span
              className="block bg-clip-text text-6xl font-medium leading-[0.95] tracking-[-0.04em] text-transparent md:text-8xl"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                color: 'transparent',
              }}
            >
              Better Protection.
            </span>
          </ScrollReveal>
        </h2>

        <ScrollReveal variants={fadeIn} delay={0.4}>
          <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-white/40 md:text-lg">
            join 65,000+ startups that trust securify to protect their most
            sensitive data. set up in minutes. cancel anytime.
          </p>
        </ScrollReveal>

        <ScrollReveal variants={fadeUp} delay={0.5}>
          <div className="relative mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
            >
              <span
                className="absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)',
                }}
              />
              <span className="relative z-10">Start Free Trial</span>
            </button>

            <button
              type="button"
              className="rounded-full border border-white/10 px-8 py-4 text-sm text-white/60 transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              Book a Demo
            </button>

            <a
              href="#"
              className="text-sm text-white/25 underline decoration-white/10 underline-offset-4 transition-colors duration-300 hover:text-white/50"
            >
              read documentation →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal variants={fadeIn} delay={0.65}>
          <div className="mb-24 flex flex-wrap items-center justify-center gap-6">
            {signals.map((signal) => (
              <div key={signal.text} className="flex items-center gap-2">
                <span className="text-sm">{signal.icon}</span>
                <span className="text-xs tracking-wide text-white/25">
                  {signal.text}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
