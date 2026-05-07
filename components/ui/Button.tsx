import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'ghost' | 'dark' | 'login'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  arrow?: boolean
}

const base = 'inline-flex items-center gap-2 font-body font-normal rounded-lg transition-all duration-200 cursor-pointer border'

const variants: Record<Variant, string> = {
  primary: 'bg-coral text-white border-coral hover:bg-coral-dark hover:-translate-y-px',
  outline: 'bg-transparent text-plug-text-primary border-plug-border hover:bg-plug-warm-gray hover:border-plug-text-muted',
  ghost:   'bg-transparent text-plug-text-primary border-plug-border hover:bg-plug-warm-gray hover:border-plug-text-muted',
  dark:    'bg-coral text-white border-coral hover:bg-coral-dark',
  login:   'bg-transparent text-coral border-coral hover:bg-coral-pale hover:-translate-y-px',
}

const sizes: Record<Size, string> = {
  sm:  'px-4 py-[7px] text-[13px]',
  md:  'px-6 py-3 text-[14px] font-medium',
  lg:  'px-7 py-3.5 text-[14px] font-medium',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow && <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
      {arrow && <span>→</span>}
    </button>
  )
}
