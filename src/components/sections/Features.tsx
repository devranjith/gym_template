import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

function Icon({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-gold shadow-glowGold">
      {children}
    </div>
  )
}

const features = [
  {
    title: 'Personal Training',
    desc: 'Precision coaching tailored to your goals.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M20 21a8 8 0 1 0-16 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Modern Equipment',
    desc: 'World-class machines and strength zones.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 7v10M17 7v10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 9h3M4 15h3M17 9h3M17 15h3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 12h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Diet Plans',
    desc: 'Performance nutrition built for results.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 21V3M17 21V3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 8c0 3 2.2 5 5 5s5-2 5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: '24/7 Access',
    desc: 'Train when you want — no compromises.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <SectionWrapper id="features" className="py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted">FEATURES</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text">
            Luxury training — engineered for performance
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card
            key={f.title}
            className="group hover:-translate-y-1 hover:shadow-glowGold"
          >
            <Icon>{f.icon}</Icon>
            <div className="mt-5 font-heading text-lg font-semibold text-text">
              {f.title}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

