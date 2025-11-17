import { useEffect, useState } from 'react'

export default function Hero() {
  const [SplineComp, setSplineComp] = useState(null)

  useEffect(() => {
    let mounted = true
    // Dynamically import Spline on client to avoid crashes in environments without WebGL
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default)
      })
      .catch(() => {
        // fail silently; we'll show gradient fallback
      })
    return () => {
      mounted = false
    }
  }, [])

  const Spline = SplineComp

  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        {Spline ? (
          <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        ) : (
          <div className="h-full w-full bg-gradient-to-b from-[#0c0c14] via-[#0a0a12] to-black" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Introducing</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">Cross Key Games</h1>
          <p className="mt-4 text-lg text-white/80">
            We craft playful worlds and expressive mechanics. Our debut blends cozy townbuilding with chaotic wizard dungeon crawling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#game" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-black backdrop-blur transition hover:bg-white">
              Discover the Game
            </a>
            <a href="#updates" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/40 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-black/60">
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
