import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations'

const features = [
  {
    icon: '🔐',
    title: 'End-to-End Encryption',
    desc: 'AES-256 encryption at rest and in transit. Your data is unreadable to everyone — including us.',
    size: 'large',
  },
  {
    icon: '🛡️',
    title: 'Zero-Trust Architecture',
    desc: 'Every request is verified. No implicit trust, no open doors.',
    size: 'small',
  },
  {
    icon: '⚡',
    title: 'Real-Time Threat Alerts',
    desc: 'Detect and respond to anomalies in under 200ms.',
    size: 'small',
  },
  {
    icon: '📋',
    title: 'Compliance Ready',
    desc: 'SOC 2 Type II, ISO 27001, GDPR, and HIPAA out of the box.',
    size: 'large',
  },
  {
    icon: '🔍',
    title: 'Full Audit Logs',
    desc: 'Every action tracked, timestamped, and exportable.',
    size: 'small',
  },
  {
    icon: '🌐',
    title: 'Global Edge Network',
    desc: '99.99% uptime SLA with 35+ PoPs worldwide.',
    size: 'small',
  },
] as const

export default function FeaturesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section className="bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Why Securify</p>
        <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Security That Works as Hard as You Do
        </h2>
      </ScrollReveal>

      <motion.div
        ref={gridRef}
        variants={staggerContainer}
        initial="hidden"
        animate={gridInView ? 'visible' : 'hidden'}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={staggerItem}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] ${
              feature.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(400px at 50% 0%, rgba(255,255,255,0.04), transparent)',
              }}
            />
            <div className="relative">
              <div className="mb-6 text-3xl">{feature.icon}</div>
              <h3 className="mb-3 text-lg font-medium tracking-tight text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
