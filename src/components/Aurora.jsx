/**
 * Ambient aurora + grid background that sits behind the whole page.
 */
export default function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-glow" />
      <div className="grain absolute inset-0 opacity-60" />
      <div className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full bg-neon-violet/25 blur-[150px] animate-gradient-pan" />
      <div className="absolute right-[-15%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-neon-fuchsia/20 blur-[150px]" />
      <div className="absolute bottom-[-15%] left-[20%] h-[38rem] w-[38rem] rounded-full bg-neon-cyan/15 blur-[160px]" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, black, transparent 75%)',
        }}
      />
    </div>
  )
}
