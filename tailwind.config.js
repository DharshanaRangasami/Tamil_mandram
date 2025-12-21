/** @type {import('tailwindcss').Config} */
export default {
  // LOOK AT THESE LINES CAREFULLY:
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // If your content array doesn't look like above, no styles will load.
  theme: {
    extend: {
      colors: {
        'gold': { DEFAULT: '#D4AF37', light: '#F4C430', dark: '#AA8C2C' },
        'accent-red': '#8B0000',
        'rich-black': '#050505', 
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}