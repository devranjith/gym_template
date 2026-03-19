import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg-black/30 via-bg-black/70 to-bg-black" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-30" />

      <SectionWrapper className="py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-orange shadow-glowOrange" />
            HIGH-END FITNESS BRAND
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Transform Your Body. <span className="text-accent-gold">Elevate</span>{' '}
            Your Life.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Elite training. World-class equipment.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">
                Join Now
              </Button>
            </a>
            <a href="#pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full">
                View Plans
              </Button>
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              { k: '5-Star', v: 'Coaches & support' },
              { k: '24/7', v: 'Elite access' },
              { k: 'Premium', v: 'Equipment & recovery' },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-card/60 px-6 py-5 backdrop-blur"
              >
                <div className="font-heading text-lg font-semibold text-text">
                  {s.k}
                </div>
                <div className="mt-1 text-sm text-muted">{s.v}</div>
              </div>
            ))}
          </div>

          {/*<p className="mt-8 text-xs text-muted">*/}
          {/*  Tip: add a dark gym photo at <span className="text-text">`public/hero.jpg`</span>*/}
          {/*  for the full premium vibe.*/}
          {/*</p>*/}
        </div>
      </SectionWrapper>
    </section>
  )
}

