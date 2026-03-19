import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.18em] text-muted">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  )
}

function inputClassName() {
  return [
    'h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-text',
    'outline-none transition-all',
    'placeholder:text-muted/60',
    'focus:border-accent-gold/40 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]',
  ].join(' ')
}

export function Contact() {
  return (
    <SectionWrapper id="contact" className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted">CONTACT</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text">
            Book a tour. Start your transformation.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Tell us your goals and we’ll recommend the right plan and coach match.
          </p>

          <div className="mt-8 space-y-4 text-sm text-muted">
            <div className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur">
              <div className="text-xs tracking-[0.18em] text-muted">LOCATION</div>
              <div className="mt-2 text-text">Downtown District, Premium Tower</div>
              <div className="mt-1">Open 24/7 for members</div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur">
              <div className="px-5 py-4 text-xs tracking-[0.18em] text-muted">
                MAP (OPTIONAL)
              </div>
              <div className="aspect-[16/10] w-full bg-white/5">
                <iframe
                  title="Gym location map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=New%20York&output=embed"
                />
              </div>
            </div>
          </div>
        </div>

        <Card className="p-7">
          <form className="space-y-5">
            <Field label="NAME">
              <input className={inputClassName()} placeholder="Your full name" />
            </Field>
            <Field label="EMAIL">
              <input
                className={inputClassName()}
                placeholder="you@example.com"
                type="email"
              />
            </Field>
            <Field label="MESSAGE">
              <textarea
                className={[
                  inputClassName(),
                  'h-32 resize-none py-3',
                ].join(' ')}
                placeholder="Tell us your goals..."
              />
            </Field>
            <div className="pt-2">
              <Button size="lg" className="w-full">
                Send Message
              </Button>
              <p className="mt-3 text-xs text-muted">
                {/*This is a UI-only form for now (hook it to email/API later).*/}
              </p>
            </div>
          </form>
        </Card>
      </div>
    </SectionWrapper>
  )
}

