import { marquee } from '../data/content'

export default function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-lg font-medium uppercase tracking-widest text-white/35 transition hover:text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  )
}
