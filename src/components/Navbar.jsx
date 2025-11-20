import { useState } from 'react'
import { Menu, X, ShieldCheck, Bitcoin, PhoneCall } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border border-white/10 px-4 mt-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 grid place-items-center">
              <Bitcoin className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white tracking-tight">Valuete</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#security">Security</NavLink>
            <NavLink href="#features">Features</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white">
              <PhoneCall className="h-4 w-4" /> Contact
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
              <ShieldCheck className="h-4 w-4" /> Get Started
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="mt-2 rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4 flex flex-col gap-3">
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#security">Security</NavLink>
            <NavLink href="#features">Features</NavLink>
            <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white">
              <ShieldCheck className="h-4 w-4" /> Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
