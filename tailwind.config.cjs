/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-deep': 'var(--color-bg-deep)',
        'bg-surface': 'var(--color-bg-surface)',
        'bg-alt': 'var(--color-bg-alt)',
        'text-main': 'var(--color-text-main)',
        'text-muted': 'var(--color-text-muted)',
        'accent-echo': 'var(--accent-echo)',
        'accent-warm': 'var(--accent-warm)',
        'accent-cyan': 'var(--accent-cyan)',
        'accent-pink': 'var(--accent-pink)',
        'accent-rose': 'var(--accent-rose)',
        'accent-red': 'var(--accent-red)',
        'tag-bg': 'var(--tag-bg)',
        'tag-text': 'var(--tag-text)',
        'tag-border': 'var(--tag-border)',
        'tag-bg-active': 'var(--tag-bg-active)',
        'tag-text-active': 'var(--tag-text-active)'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro', 'Roboto', 'sans-serif'],
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

