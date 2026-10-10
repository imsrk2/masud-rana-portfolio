import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:mx-4 sm:px-6 ${
          scrolled ? 'glass-strong glow-ring' : 'bg-transparent'
        }`}
      >
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-violet via-neon-fuchsia to-neon-cyan">
            <Sparkles className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Masud<span className="text-gradient">Rana</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                active === l.id ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => go('contact')}
          className="hidden rounded-full bg-gradient-to-r from-neon-violet to-neon-fuchsia px-5 py-2 text-sm font-medium text-white shadow-lg shadow-neon-violet/30 transition hover:brightness-110 md:inline-block"
        >
          Let's talk
        </button>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass-strong mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-xl px-4 py-3 text-left text-base text-white/80 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
