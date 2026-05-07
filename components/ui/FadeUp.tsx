'use client'

import { useEffect, useRef } from 'react'

interface FadeUpProps {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3
  className?: string
}

const delayMap = { 0: '', 1: 'delay-1', 2: 'delay-2', 3: 'delay-3' }

export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-up ${delayMap[delay]} ${className}`}
    >
      {children}
    </div>
  )
}
