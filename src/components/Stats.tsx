import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeIn, fadeUp, staggerContainer, staggerItem } from '../lib/animations'

const stats = [
  {
    value: 99.99,
    suffix: '%',
    label: 'Uptime SLA',
    desc: 'Across all regions, 24/7/365',
    decimals: 2,
  },
  {
    value: 1.5,
    suffix: 'B+',
    label: 'GB Data Protected',
    desc: 'And growing every second',
    decimals: 1,
  },
  {
    value: 65,
    suffix: 'K+',
    label: 'Startups Trust Us',
    desc: 'From seed to Series C',
    decimals: 0,
  },
  {
    value: 200,
    suffix: 'ms',
    label: 'Avg Threat Response',
    desc: 'Detect, alert, and act',
    decimals: 0,
  },
  {
    value: 300,
    suffix: 'K+',
    label: 'Downloads',
    desc: 'Across all platforms',
    decimals: 0,
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    desc: 'From 12,000+ Reviews',
    decimals: 1,
  },
] as const

const ticks = [
  '99.99% Uptime',
  '1.5B+ GB Protected',
  '200ms Response Time',
  'SOC 2 Certified',
  'ISO 27001 Certified',
  'GDPR Compliant',
  '65K+ Customers',
  'Zero Data Breaches',
] as const

type Stat = (typeof stats)[number]

function useCountUp(
  target: number,
  decimals: number,
  duration: number = 2000,
  started: boolean,
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [started, target, decimals, duration])

  return count
}

function formatValue(value: number, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value))
}

function StatCard({ stat, started }: { stat: Stat; started: boolean }) {
  const count = useCountUp(stat.value, stat.decimals, 2000, started)

  return (
    <div className="group relative flex flex-col gap-3 overflow-hidden bg-black px-8 py-10 transition-all duration-500 hover:bg-white/[0.03]">
      <span className="pointer-events-none absolute -bottom-4 -right-2 select-none text-[80px] font-medium leading-none tracking-[-0.04em] text-white/[0.02]">
        {formatValue(stat.value, stat.decimals)}
      </span>

      <div className="flex items-end gap-1">
        <span className="text-5xl font-medium leading-none tracking-[-0.04em] text-white md:text-6xl">
          {formatValue(count, stat.decimals)}
        </span>
        <span className="mb-1 text-2xl font-medium text-white/40">{stat.suffix}</span>
      </div>

      <p className="text-sm font-medium tracking-tight text-white/70">
        {stat.label}
      </p>
      <p className="text-xs leading-relaxed text-white/30">{stat.desc}</p>

      <div className="absolute bottom-0 left-0 right-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const tickerItems = [...ticks, ...ticks]

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
          By The Numbers
        </p>
        <h2 className="text-center text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Numbers That Speak For Themselves
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          real metrics. updated daily.
        </p>
      </ScrollReveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        onViewportEnter={() => setStarted(true)}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.04] md:grid-cols-3"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={staggerItem}>
            <StatCard stat={stat} started={started} />
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal variants={fadeUp} delay={0.2}>
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white/60" />
          </span>
          <span className="text-xs text-white/25">
            metrics updated live — last refresh 3 seconds ago
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal variants={fadeIn} delay={0.3}>
        <div className="-mx-6 mt-16 overflow-hidden border-y border-white/[0.06] py-4 md:-mx-16">
          <div className="ticker-track flex w-max">
            {tickerItems.map((tick, index) => (
              <div
                key={`${tick}-${index}`}
                className="flex flex-shrink-0 items-center gap-8 px-8"
              >
                <span className="whitespace-nowrap text-xs uppercase tracking-[0.15em] text-white/25">
                  {tick}
                </span>
                <span className="h-1 w-1 flex-shrink-0 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
