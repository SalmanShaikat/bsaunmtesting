/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'unm-green': '#006A4E',
        'unm-red': '#C1272D',
        'bangladesh-green': '#006A4E',
        'bangladesh-red': '#F42A41',
      },
    },
  },
  plugins: [],
}
