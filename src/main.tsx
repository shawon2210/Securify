import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>,
)
