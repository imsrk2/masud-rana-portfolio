import Reveal from './Reveal'
import { process } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-cyan">
          How we work
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          From idea to <span className="text-gradient">autopilot</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.08}>
            <div className="glass card-hover relative h-full rounded-3xl p-7">
              <span className="text-gradient font-display text-5xl font-bold opacity-80">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-20 grid gap-5 md:grid-cols-3">
        {[
          'Masud turned a 3-person manual process into one reliable agent. We reclaimed 40 hours a week.',
          'The most pragmatic AI builder we have worked with. Shipped in two weeks, not two quarters.',
          'Clear thinking, real results. Our support copilot now handles the boring 70% automatically.',
        ].map((quote, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="glass card-hover h-full rounded-3xl p-7">
              <div className="text-gradient font-display text-4xl leading-none">
                “
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-white/70">
                {quote}
              </blockquote>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
