import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to unlock liquidity?</h3>
              <p className="mt-2 text-white/80">Tell us about your collateral and desired terms. We’ll match you with vetted lenders in minutes.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white">
                Request access <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/40 px-5 py-3 text-sm font-medium text-white/90">
                Talk to us <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
