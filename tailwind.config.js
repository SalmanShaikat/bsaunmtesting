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
        'jungle-green': '#1a535c',
        'seafoam-green': '#4ecdc4',
        'unm-cherry': '#d90429',
        'light-bg': '#f7fff7',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-georgia)'],
      },
    },
  },
  plugins: [],
}
