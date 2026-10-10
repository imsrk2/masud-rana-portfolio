import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Mail, MousePointer2 } from 'lucide-react'
import { profile } from '../data/content'

const Scene = lazy(() => import('./Scene'))

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* 3D layer */}
      <div className="absolute inset-0 -z-0 opacity-90">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
            {profile.location}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-white">Hi, I'm {profile.name.split(' ')[0]}</span>
            <span className="text-gradient block animate-gradient-pan">
              {profile.name.split(' ')[1]}
            </span>
          </h1>

          <p className="mt-5 font-display text-xl text-white/80 sm:text-2xl">
            {profile.role}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById('work')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-violet via-neon-fuchsia to-neon-cyan bg-[length:200%_auto] px-6 py-3 font-medium text-white shadow-xl shadow-neon-violet/30 transition-all hover:bg-[position:100%_center]"
            >
              View my work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-white/40">
            <MousePointer2 className="h-3.5 w-3.5" />
            Move your cursor — the scene reacts
          </div>
        </motion.div>
      </div>

      {/* fade to page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
    </section>
  )
}
