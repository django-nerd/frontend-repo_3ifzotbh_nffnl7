import { ShieldCheck, KeyRound, Wallet, Handshake } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Pledge BTC',
    desc: 'Connect your wallet and deposit BTC into a secure multi‑sig escrow.'
  },
  {
    icon: Handshake,
    title: 'Match a lender',
    desc: 'Get market‑driven offers instantly. Choose terms that fit your needs.'
  },
  {
    icon: KeyRound,
    title: 'Multi‑sig protection',
    desc: 'Collateral keys distributed across parties to prevent single‑party custody.'
  },
  {
    icon: ShieldCheck,
    title: 'Borrow with confidence',
    desc: 'Access liquidity while keeping your Bitcoin safe and working for you.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,205,255,0.18),transparent)]"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">How Valuete Works</h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">A simple flow designed for safety and clarity at every step.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
