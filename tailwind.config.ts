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
        neon: {
          DEFAULT: '#005c35',
          dim: '#004d2c',
          dark: '#003d23',
          glow: 'rgba(0, 92, 53, 0.15)',
        },
        gold: {
          DEFAULT: '#005c35',
          bright: '#007a47',
          dim: '#004d2c',
        },
        dark: {
          DEFAULT: '#ffffff',
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a0a0a0',
          500: '#666666',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 92, 53, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 92, 53, 0.4)',
        gold: '0 0 20px rgba(0, 92, 53, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
