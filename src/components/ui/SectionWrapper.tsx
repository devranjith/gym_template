import type { ReactNode } from 'react'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function SectionWrapper({ id, className, children }: Props) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

