import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

function Social({ label, d }: { label: string; d: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all hover:text-text hover:shadow-glowGold"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-bg-black">
      <SectionWrapper className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-gold shadow-glowGold" />
              <span className="font-heading text-sm font-semibold tracking-[0.22em] text-text">
                AURUM
              </span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Luxury training. Minimal design. Maximum results.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="text-xs tracking-[0.22em] text-muted">LINKS</div>
              <div className="mt-4 space-y-2 text-sm">
                {[
                  ['#features', 'Features'],
                  ['#trainers', 'Trainers'],
                  ['#pricing', 'Plans'],
                  ['#contact', 'Contact'],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="block text-muted transition-colors hover:text-text"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs tracking-[0.22em] text-muted">SOCIAL</div>
              <div className="mt-4 flex items-center gap-2">
                <Social label="Instagram" d="M7 7h10v10H7z" />
                <Social label="X" d="M7 17L17 7M7 7l10 10" />
                <Social label="YouTube" d="M10 9l6 3-6 3V9Z" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} AURUM. All rights reserved.</span>
          <span className="text-muted/80">Premium + powerful + minimal.</span>
        </div>
      </SectionWrapper>
    </footer>
  )
}

