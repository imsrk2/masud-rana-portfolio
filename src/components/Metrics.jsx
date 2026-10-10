import Reveal from './Reveal'
import { stats } from '../data/content'

export default function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass card-hover rounded-2xl p-6 text-center">
              <div className="text-gradient font-display text-4xl font-bold sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/55">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
