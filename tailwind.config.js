/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          900: '#164e63',
        },
        surface: '#f3f6f6',
      },
      scrollMargin: {
        28: '7rem',
      },
    },
  },
}
