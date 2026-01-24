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
        'chinese-red': '#c41e3a',
        'chinese-red-dark': '#8b0000',
        'chinese-gold': '#d4af37',
        'chinese-cream': '#fffaf0',
        'brand-red': '#c41e3a',
        'brand-gold': '#d4af37',
      },
      fontFamily: {
        'chinese': ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
