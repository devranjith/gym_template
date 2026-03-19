import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const variantClass: Record<Variant, string> = {
  primary:
    'bg-accent-gold text-black hover:shadow-glowGold active:translate-y-[1px]',
  secondary:
    'bg-white/10 text-text hover:bg-white/14 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.18)] active:translate-y-[1px]',
  ghost: 'bg-transparent text-text hover:bg-white/6',
}

const sizeClass: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full',
        'font-semibold tracking-wide transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60 focus-visible:ring-offset-0',
        'disabled:pointer-events-none disabled:opacity-60',
        sizeClass[size],
        variantClass[variant],
        className ?? '',
      ].join(' ')}
      {...props}
    />
  )
}

