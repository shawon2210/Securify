import { useEffect, useRef } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { fadeUp, scaleIn } from '../lib/animations'

const stats = [
  { label: 'Threat Score', value: '94', sub: '↑ Excellent' },
  { label: 'Events Today', value: '1,284', sub: '↓ 12% vs Yesterday' },
  { label: 'Uptime', value: '99.99%', sub: '30-Day Avg' },
] as const

const alerts = [
  { severity: 'high', text: 'Unusual login — Singapore IP', time: '2m ago', dotClass: 'bg-white/60' },
  { severity: 'med', text: 'API Key Rotated Automatically', time: '14m ago', dotClass: 'bg-white/30' },
  { severity: 'low', text: 'Compliance Scan Completed', time: '1h ago', dotClass: 'bg-white/20' },
] as const

const complianceBadges = [
  { label: 'SOC 2', status: 'passed' as const },
  { label: 'ISO 27001', status: 'passed' as const },
  { label: 'GDPR', status: 'passed' as const },
  { label: 'HIPAA', status: 'pending' as const },
] as const

const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(min-width: 768px)')

    const onMove = (e: MouseEvent) => {
      if (!mq.matches) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.02)`
    }

    const onLeave = () => {
      el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}

function ThreatChart() {
  return (
    <svg viewBox="0 0 400 64" className="h-16 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={i}
          x1={(400 / 6) * i}
          y1="0"
          x2={(400 / 6) * i}
          y2="64"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}
      <path
        d="M 0 18 L 66 22 L 133 28 L 200 36 L 266 44 L 333 50 L 400 56 L 400 64 L 0 64 Z"
        fill="url(#chartFill)"
      />
      <polyline
        points="0,18 66,22 133,28 200,36 266,44 333,50 400,56"
        fill="none"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ComplianceRing() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[100px]">
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="8"
          strokeDasharray="226"
          strokeDashoffset="34"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-medium text-white">85%</span>
        <span className="text-[9px] text-white/30">Compliance</span>
      </div>
    </div>
  )
}

export default function DashboardPreview() {
  const tiltRef = useTilt()

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">The Dashboard</p>
        <h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Your Entire Security Posture, At a Glance
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          one screen. every threat, log, and compliance score — live.
        </p>
      </ScrollReveal>

      <ScrollReveal variants={scaleIn} delay={0.1} className="relative mx-auto max-w-5xl">
        <div
          ref={tiltRef}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_80px_rgba(255,255,255,0.04)] transition-transform duration-200 ease-out"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-white/20" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
            </div>
            <div className="w-48 rounded-full bg-white/[0.04] px-4 py-1 text-center text-xs text-white/20">
              app.securify.io/dashboard
            </div>
            <span className="text-xs text-white/20">● live</span>
          </div>

          <div className="grid min-h-[420px] grid-cols-12 gap-px bg-white/[0.04]">
            <aside className="col-span-12 flex flex-col gap-3 bg-[#0a0a0a] p-4 md:col-span-2">
              <div className="mb-4 h-6 w-6 rounded bg-white/90" />
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 w-full rounded-full ${i === 0 ? 'bg-white/25' : 'bg-white/10'}`}
                />
              ))}
            </aside>

            <main className="col-span-12 flex flex-col gap-5 bg-[#0a0a0a] p-6 md:col-span-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <p className="mb-2 text-[10px] uppercase tracking-widest text-white/30">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-medium tracking-tight text-white">{stat.value}</p>
                    <p className="mt-1 text-[10px] text-white/30">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="h-32 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-white/30">
                  Threats Blocked — Last 7 Days
                </p>
                <ThreatChart />
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="mb-3 text-[10px] uppercase tracking-widest text-white/30">
                  Recent Alerts
                </p>
                {alerts.map((alert) => (
                  <div
                    key={alert.text}
                    className="flex items-center gap-3 border-b border-white/[0.04] py-2 last:border-b-0"
                  >
                    <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${alert.dotClass}`} />
                    <span className="text-xs text-white/50">{alert.text}</span>
                    <span className="ml-auto text-[10px] text-white/20">{alert.time}</span>
                  </div>
                ))}
              </div>
            </main>

            <aside className="col-span-12 flex flex-col gap-4 border-t border-white/[0.04] bg-[#0a0a0a] p-4 md:col-span-3 md:border-l md:border-t-0">
              <ComplianceRing />
              <div className="flex flex-col gap-2">
                {complianceBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center justify-between">
                    <span className="text-[10px] text-white/40">{badge.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] ${
                        badge.status === 'passed'
                          ? 'bg-white/10 text-white/50'
                          : 'bg-white/[0.05] text-white/25'
                      }`}
                    >
                      {badge.status}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 -mt-16 h-32 w-2/3 -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />
      </ScrollReveal>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
