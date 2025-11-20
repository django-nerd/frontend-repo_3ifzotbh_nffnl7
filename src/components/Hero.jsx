import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur px-3 py-1 text-xs text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Non-custodial, multi‑sig BTC loans
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Borrow cash without selling your Bitcoin
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            Valuete is a P2P lending marketplace where you pledge BTC as collateral. Funds are secured in multi‑signature escrow so your Bitcoin stays safe while you borrow.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium text-white/90 border border-white/15 bg-black/30 backdrop-blur">
              How it works
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InfoCard title="Multi‑sig Escrow" desc="Collateral keys distributed across borrower, lender, and Valuete guardian to remove single‑point risk."/>
          <InfoCard title="Transparent Rates" desc="Market‑driven loans with clear LTV and liquidation buffers."/>
          <InfoCard title="Instant Matching" desc="Smart matching pairs borrowers and lenders in minutes."/>
          <InfoCard title="24/7 Settlement" desc="Bitcoin-native rails with automated, on-chain releases."/>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
    </section>
  )
}

function InfoCard({ title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-4">
      <h3 className="text-white font-medium">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  )
}
