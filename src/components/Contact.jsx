import Reveal from './Reveal'
import { profile } from '../data/content'
import { Mail, Github, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react'

const SOCIAL_ICONS = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  YouTube: Youtube,
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-24">
      <Reveal>
        <div className="glass-strong glow-ring relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-fuchsia/25 blur-[110px]" />

          <h2 className="relative font-display text-4xl font-bold sm:text-6xl">
            Let's build your <span className="text-gradient">unfair advantage</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/60">
            Have a process that eats your team's hours? Tell me about it — I'll
            show you how agents and automation can take it off your plate.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-violet via-neon-fuchsia to-neon-cyan bg-[length:200%_auto] px-8 py-4 font-medium text-white shadow-xl shadow-neon-violet/30 transition-all hover:bg-[position:100%_center]"
            >
              <Mail className="h-5 w-5" />
              {profile.email}
            </a>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-3">
            {profile.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.label] || ArrowUpRight
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass grid h-12 w-12 place-items-center rounded-2xl text-white/70 transition hover:scale-110 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with React,
          Three.js & Tailwind.
        </p>
        <p className="font-display tracking-wide">{profile.role}</p>
      </footer>
    </section>
  )
}
