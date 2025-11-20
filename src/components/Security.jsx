import { Shield, Fingerprint, Lock, KeyRound } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="relative py-20 bg-[linear-gradient(180deg,#050505,40%,#0b0b0f)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <Shield className="h-4 w-4" /> Security First
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">Multi‑signature custody, by design</h2>
            <p className="mt-3 text-white/80">Collateral is locked in a 2-of-3 multi‑sig vault. Borrower, lender, and Valuete guardian each hold a key. No single party can move funds, and every action is auditable on-chain.</p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-3"><Lock className="h-5 w-5 text-white/80" /> Non‑custodial architecture</li>
              <li className="flex items-center gap-3"><Fingerprint className="h-5 w-5 text-white/80" /> KYC/AML compliant onboarding</li>
              <li className="flex items-center gap-3"><KeyRound className="h-5 w-5 text-white/80" /> Emergency dispute resolution</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
            <div className="grid grid-cols-2 gap-4">
              <Metric label="Active loans" value="1,240"/>
              <Metric label="Avg. LTV" value="45%"/>
              <Metric label="Settlement time" value="< 10m"/>
              <Metric label="Loss events" value="0"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  )
}
