import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations'

const certs = [
  {
    name: 'SOC 2 Type II',
    desc: 'Audited Annually by a Big 4 Firm. Full Security, Availability, and Confidentiality Coverage.',
    badge: 'SOC2',
    status: 'certified',
    year: '2024',
  },
  {
    name: 'ISO 27001',
    desc: 'Internationally Recognized Information Security Management Standard.',
    badge: 'ISO',
    status: 'certified',
    year: '2024',
  },
  {
    name: 'GDPR',
    desc: 'Full Compliance with EU Data Protection Regulations. Data Residency Options Available.',
    badge: 'GDPR',
    status: 'compliant',
    year: '2024',
  },
  {
    name: 'HIPAA',
    desc: 'Healthcare Data Handled with Full HIPAA Safeguards and Signed BAA Available.',
    badge: 'HIPAA',
    status: 'compliant',
    year: '2024',
  },
  {
    name: 'PCI DSS',
    desc: 'Payment Card Data Protected to Level 1 PCI DSS Standards.',
    badge: 'PCI',
    status: 'certified',
    year: '2024',
  },
  {
    name: 'CCPA',
    desc: 'California Consumer Privacy Act Compliant. Full Data Subject Request Support.',
    badge: 'CCPA',
    status: 'compliant',
    year: '2024',
  },
] as const

type Cert = (typeof certs)[number]

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5 text-white/20"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CertCard({ cert }: { cert: Cert }) {
  const isCertified = cert.status === 'certified'

  return (
    <div className="group relative flex flex-col gap-5 bg-black p-8 transition-all duration-300 hover:bg-white/[0.03]">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-white/20">
          <span className="text-[11px] font-medium tracking-widest text-white/50">
            {cert.badge}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span
            className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.15em] ${
              isCertified
                ? 'border-white/15 bg-white/[0.04] text-white/50'
                : 'border-white/10 bg-white/[0.02] text-white/30'
            }`}
          >
            {cert.status}
          </span>
          <span className="text-[10px] text-white/20">{cert.year}</span>
        </div>
      </div>

      <h3 className="text-base font-medium tracking-tight text-white/80 lowercase">
        {cert.name}
      </h3>
      <p className="text-xs leading-relaxed text-white/35">{cert.desc}</p>

      <div className="mt-auto flex items-center gap-2 pt-4">
        <ShieldIcon />
        <span className="text-[10px] text-white/20">Independently Verified</span>
      </div>
    </div>
  )
}

export default function Compliance() {
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
          Compliance
        </p>
        <h2 className="text-center text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Built to Meet the World's&apos;s strictest standards
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          Independently Audited and Certified — Every Year.
        </p>
      </ScrollReveal>

      <motion.div
        ref={gridRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.04] md:grid-cols-3"
      >
        {certs.map((cert) => (
          <motion.div key={cert.badge} variants={staggerItem}>
            <CertCard cert={cert} />
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal variants={fadeUp} delay={0.2}>
        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 md:flex-row">
          <div>
            <p className="text-sm font-medium text-white/70">
              Need a Custom Compliance Report?
            </p>
            <p className="mt-1 text-xs text-white/30">
              download our full audit documentation or request a custom report for
              your enterprise.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Download Report
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-6 py-2.5 text-sm text-black transition-all duration-300 hover:bg-white/90"
            >
              Contact Compliance Team
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
