import Reveal from './Reveal'
import { projects } from '../data/content'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
          Selected work
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Agents & automations <span className="text-gradient">in production</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1}>
            <a
              href={p.href}
              className="glass card-hover group block h-full rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-neon-violet/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neon-fuchsia ring-1 ring-neon-violet/30">
                  {p.category}
                </span>
                <ExternalLink className="h-5 w-5 text-white/25 transition group-hover:text-white" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold transition group-hover:text-gradient">
                {p.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
