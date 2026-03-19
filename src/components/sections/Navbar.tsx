import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#trainers', label: 'Trainers' },
  { href: '#pricing', label: 'Plans' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent-gold shadow-glowGold" />
          <span className="font-heading text-sm font-semibold tracking-[0.22em] text-text">
            AURUM
          </span>
          <span className="hidden text-xs tracking-wide text-muted sm:inline">
            LUXURY GYM
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex">
            <Button variant="secondary" size="md">
              View Plans
            </Button>
          </a>
          <a href="#contact" className="inline-flex">
            <Button variant="primary" size="md">
              Join Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}

