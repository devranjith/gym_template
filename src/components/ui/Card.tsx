import type { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: Props) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/10 bg-card/90 p-6 backdrop-blur',
        'transition-transform duration-300 will-change-transform',
        className ?? '',
      ].join(' ')}
    >
      {children}
    </div>
  )
}

