import Reveal from './Reveal'
import { services } from '../data/content'
import {
  Bot,
  Workflow,
  MessagesSquare,
  LineChart,
  ArrowUpRight,
} from 'lucide-react'

const ICONS = {
  Bot,
  Workflow,
  MessagesSquare,
  LineChart,
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
          What I do
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Services that <span className="text-gradient">compound</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/55">
          Every engagement is built around one goal: measurable time and money
          saved through intelligent automation.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = ICONS[s.icon] || Bot
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="glass card-hover group h-full rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-violet/30 to-neon-fuchsia/20 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-neon-fuchsia" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/25 transition group-hover:text-neon-cyan" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {s.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
