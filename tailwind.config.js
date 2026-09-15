/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul-marino': {
          DEFAULT: '#0F2A4A',
          dark: '#091A2E',
          light: '#183C66',
          card: '#13355C',
          surface: '#1E4675',
        },
        'azul-daim': {
          DEFAULT: '#1C6DD0',
          hover: '#1557A6',
          light: '#3B82F6',
        },
        'celeste-energia': {
          DEFAULT: '#4FC3F0',
          light: '#72D4F7',
          dark: '#29B6F6',
        },
        'amarillo-seguridad': {
          DEFAULT: '#FFC72C',
          hover: '#E5B120',
          light: '#FFD55E',
        },
        'gris-pizarra': {
          DEFAULT: '#33404D',
          light: '#556677',
          muted: '#64748B',
        },
        'gris-industrial': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(15, 42, 74, 0.15)',
        'industrial-lg': '0 10px 30px -5px rgba(15, 42, 74, 0.25)',
        'glow-celeste': '0 0 25px rgba(79, 195, 240, 0.35)',
        'glow-amarillo': '0 0 25px rgba(255, 199, 44, 0.4)',
      },
      clipPath: {
        'diagonal-hero': 'polygon(0 0, 100% 0, 100% calc(100% - 60px), 0 100%)',
        'diagonal-accent': 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
      }
    },
  },
  plugins: [],
};
