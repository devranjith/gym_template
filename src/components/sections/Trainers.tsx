import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type Trainer = {
  name: string
  specialty: string
  image: string
}

const trainers: Trainer[] = [
  { name: 'Ava Knight', specialty: 'Strength & Conditioning', image: '/gymfacegirl.jpg' },
  { name: 'Noah Steele', specialty: 'Hypertrophy Specialist', image: '/gymface1.jpg' },
  { name: 'Rio Voss', specialty: 'Performance Nutrition', image: '/gymface2.jpg' },
]

function SocialIcon({ d }: { d: string }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all hover:text-text hover:shadow-glowGold">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Trainers() {
  return (
    <SectionWrapper id="trainers" className="py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted">TRAINERS</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text">
            Coaches built for elite results
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {trainers.map((t) => (
          <Card
            key={t.name}
            className="group overflow-hidden p-0 hover:-translate-y-1 hover:shadow-glowGold"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-black via-bg-black/20 to-transparent" />
            </div>
            <div className="p-6">
              <div className="font-heading text-lg font-semibold text-text">{t.name}</div>
              <div className="mt-1 text-sm text-muted">{t.specialty}</div>

              <div className="mt-5 flex items-center gap-2">
                <a href="#" aria-label="Instagram">
                  <SocialIcon d="M7 7h10v10H7z" />
                </a>
                <a href="#" aria-label="X">
                  <SocialIcon d="M7 17L17 7M7 7l10 10" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <SocialIcon d="M8 10v8M8 7h.01M12 10v8m0-5c0-2 4-2 4 1v4" />
                </a>
              </div>

              {/*<p className="mt-4 text-xs text-muted">*/}
              {/*  Tip: add images in <span className="text-text">`public/trainer-1.jpg`</span>,{' '}*/}
              {/*  <span className="text-text">`trainer-2.jpg`</span>,{' '}*/}
              {/*  <span className="text-text">`trainer-3.jpg`</span>.*/}
              {/*</p>*/}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

