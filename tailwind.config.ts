import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Brand Colors ──────────────────────────────
      colors: {
        coral: {
          DEFAULT: '#C8574A',
          dark:    '#B34A3D',
          mid:     '#E09088',
          pale:    '#FBF0EE',
        },
        mint: {
          DEFAULT: '#4D9E99',
          dark:    '#3A8783',
          mid:     '#8ECAC6',
          pale:    '#EAF4F3',
        },
        navy: {
          DEFAULT: '#1B1F32',
          soft:    '#2E3352',
        },
        plug: {
          'off-white':  '#F7F4EF',
          'warm-gray':  '#EAE7E1',
          border:       '#DDD9D1',
          'text-primary':   '#1B1F32',
          'text-secondary': '#6B6861',
          'text-muted':     '#A09D97',
        },
      },

      // ── Typography ────────────────────────────────
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains)', 'Courier New', 'monospace'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(52px, 5.5vw, 78px)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(40px, 4.5vw, 64px)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(36px, 4vw, 56px)',   { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(28px, 3.5vw, 46px)', { lineHeight: '1.2',  letterSpacing: '-0.025em' }],
        'label':      ['10.5px', { lineHeight: '1', letterSpacing: '0.16em' }],
        'commission': ['92px',   { lineHeight: '1', letterSpacing: '-0.04em' }],
      },

      // ── Spacing ───────────────────────────────────
      maxWidth: {
        container: '1160px',
      },
      borderRadius: {
        card: '14px',
        'card-lg': '18px',
      },
    },
  },
  plugins: [],
}

export default config
