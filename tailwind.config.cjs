const withOpacityValue = (variable) => ({ opacityValue }) =>
  opacityValue === undefined
    ? `rgb(var(${variable}) / 1)`
    : `rgb(var(${variable}) / ${opacityValue})`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-deep': withOpacityValue('--color-bg-deep-rgb'),
        'bg-surface': withOpacityValue('--color-bg-surface-rgb'),
        'bg-alt': withOpacityValue('--color-bg-alt-rgb'),
        'text-main': withOpacityValue('--color-text-main-rgb'),
        'text-muted': withOpacityValue('--color-text-muted-rgb'),
        'accent-echo': withOpacityValue('--accent-echo-rgb'),
        'accent-warm': withOpacityValue('--accent-warm-rgb'),
        'accent-cyan': withOpacityValue('--accent-cyan-rgb'),
        'accent-pink': withOpacityValue('--accent-pink-rgb'),
        'accent-rose': withOpacityValue('--accent-rose-rgb'),
        'accent-purple': withOpacityValue('--accent-purple-rgb'),
        'accent-amber': withOpacityValue('--accent-amber-rgb'),
        'accent-sage': withOpacityValue('--accent-sage-rgb'),
        'accent-red': withOpacityValue('--accent-red-rgb'),
        'tag-bg': 'var(--tag-bg)',
        'tag-text': 'var(--tag-text)',
        'tag-border': 'var(--tag-border)',
        'tag-bg-active': 'var(--tag-bg-active)',
        'tag-text-active': 'var(--tag-text-active)'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro', 'Roboto', 'sans-serif'],
        mono: ['IBM Plex Mono', 'SF Mono', 'JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'thought': '0 2px 12px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        'thought': '18px'
      },
      keyframes: {
        echoPulse: {
          '0%': { boxShadow: '0 0 0 rgba(255,62,142,0)' },
          '100%': { boxShadow: '0 0 22px rgba(255,62,142,0.45)' }
        }
      },
      animation: {
        'echo-pulse': 'echoPulse 1800ms ease-out forwards'
      }
    }
  },
  plugins: []
};
