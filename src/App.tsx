import { lazy, Suspense } from 'react'
import { SEOHead } from './components/SEOHead'
import Compliance from './components/Compliance'
import DashboardPreview from './components/DashboardPreview'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'

const FAQ = lazy(() => import('./components/FAQ'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))
const FeaturesGrid = lazy(() => import('./components/FeaturesGrid'))
const Pricing = lazy(() => import('./components/Pricing'))
const Stats = lazy(() => import('./components/Stats'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const TrustedBy = lazy(() => import('./components/TrustedBy'))

function App() {
  return (
    <>
      <SEOHead />
      <Hero />
      <Suspense fallback={null}>
        <TrustedBy />
        <FeaturesGrid />
        <HowItWorks />
        <DashboardPreview />
        <Testimonials />
        <Compliance />
        <Stats />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
