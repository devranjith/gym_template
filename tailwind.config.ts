import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-black': '#0B0B0B',
        card: '#111111',
        'accent-gold': '#D4AF37',
        'accent-orange': '#FF6B00',
        text: '#FFFFFF',
        muted: '#A1A1A1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-poppins)', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glowGold: '0 0 0 1px rgba(212,175,55,0.25), 0 0 24px rgba(212,175,55,0.18)',
        glowOrange:
          '0 0 0 1px rgba(255,107,0,0.18), 0 0 24px rgba(255,107,0,0.14)',
      },
    },
  },
  plugins: [],
}
export default config
