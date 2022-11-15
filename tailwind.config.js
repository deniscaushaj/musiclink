/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'star-command-blue': '#2274a5',
        'raisin-black': '#1C1D22',
        'lavender-blue': '#D1D4F0',
      },
    },
  },
  plugins: [],
}
