import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

type Plan = {
  name: string
  price: string
  highlight?: boolean
  features: string[]
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$49',
    features: ['Gym access', 'Modern equipment', 'Locker room'],
  },
  {
    name: 'Pro',
    price: '$89',
    highlight: true,
    features: [
      'Everything in Basic',
      '2x personal training / month',
      'Diet plan guidance',
      'Priority support',
    ],
  },
  {
    name: 'Elite ⭐',
    price: '$149',
    features: [
      'Everything in Pro',
      'Weekly personal training',
      'Recovery & mobility zone',
      'VIP access + guest passes',
    ],
  },
]

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-gold/15 text-accent-gold">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 7 10 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted">PRICING</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text">
            Choose your level
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Gold = premium. Orange = energy. We keep it minimal and powerful.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <Card
            key={p.name}
            className={[
              'relative',
              p.highlight
                ? 'border-accent-gold/30 shadow-glowGold hover:-translate-y-1'
                : 'hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
            ].join(' ')}
          >
            {p.highlight ? (
              <div className="absolute -top-3 left-6 rounded-full border border-accent-gold/30 bg-bg-black px-3 py-1 text-xs tracking-[0.18em] text-accent-gold">
                MOST POPULAR
              </div>
            ) : null}

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-heading text-xl font-semibold text-text">{p.name}</div>
                <div className="mt-2 text-4xl font-bold tracking-tight text-text">
                  {p.price}
                  <span className="text-sm font-medium text-muted">/mo</span>
                </div>
              </div>
              {p.highlight ? (
                <span className="inline-flex h-10 items-center rounded-full bg-accent-orange/12 px-4 text-xs font-semibold tracking-[0.18em] text-accent-orange">
                  ENERGY
                </span>
              ) : null}
            </div>

            <ul className="mt-6 space-y-3 text-sm text-muted">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="#contact" className="block">
                <Button
                  size="lg"
                  variant={p.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  Choose {p.name}
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}

